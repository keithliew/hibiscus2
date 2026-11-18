"""Minimal Chrome DevTools client (standard library only) for before/after snapshots.

Launches the installed Chrome headless with a throwaway profile and every outside host
blocked except the ones named in ALLOW, so tracking tags never reach Google from tests.
"""
import base64
import json
import os
import socket
import struct
import subprocess
import time
import urllib.request

CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"


class WS:
    def __init__(self, url):
        assert url.startswith("ws://")
        hostport, path = url[5:].split("/", 1)
        host, port = hostport.split(":")
        self.s = socket.create_connection((host, int(port)))
        key = base64.b64encode(os.urandom(16)).decode()
        self.s.sendall((f"GET /{path} HTTP/1.1\r\nHost: {hostport}\r\nUpgrade: websocket\r\nConnection: Upgrade\r\n"
                        f"Sec-WebSocket-Key: {key}\r\nSec-WebSocket-Version: 13\r\n\r\n").encode())
        buf = b""
        while b"\r\n\r\n" not in buf:
            buf += self.s.recv(4096)
        assert b" 101 " in buf.split(b"\r\n")[0], buf[:200]
        self.buf = buf.split(b"\r\n\r\n", 1)[1]
        self.n = 0
        self.events = []

    def _read(self, n):
        while len(self.buf) < n:
            chunk = self.s.recv(1 << 20)
            if not chunk:
                raise ConnectionError("closed")
            self.buf += chunk
        out, self.buf = self.buf[:n], self.buf[n:]
        return out

    def recv(self):
        data = b""
        while True:
            b1, b2 = self._read(2)
            ln = b2 & 0x7F
            if ln == 126:
                ln = struct.unpack(">H", self._read(2))[0]
            elif ln == 127:
                ln = struct.unpack(">Q", self._read(8))[0]
            payload = self._read(ln)
            op = b1 & 0x0F
            if op == 9:  # ping
                continue
            if op == 8:
                raise ConnectionError("closed by peer")
            data += payload
            if b1 & 0x80:
                return json.loads(data.decode())

    def send_raw(self, obj):
        p = json.dumps(obj).encode()
        mask = os.urandom(4)
        hdr = b"\x81"
        if len(p) < 126:
            hdr += bytes([0x80 | len(p)])
        elif len(p) < 65536:
            hdr += bytes([0x80 | 126]) + struct.pack(">H", len(p))
        else:
            hdr += bytes([0x80 | 127]) + struct.pack(">Q", len(p))
        self.s.sendall(hdr + mask + bytes(b ^ mask[i % 4] for i, b in enumerate(p)))

    def call(self, method, **params):
        self.n += 1
        mid = self.n
        self.send_raw({"id": mid, "method": method, "params": params})
        while True:
            m = self.recv()
            if m.get("id") == mid:
                if "error" in m:
                    raise RuntimeError(f"{method}: {m['error']}")
                return m["result"]
            self.events.append(m)

    def wait_event(self, name, timeout=30):
        end = time.time() + timeout
        while time.time() < end:
            for i, e in enumerate(self.events):
                if e.get("method") == name:
                    return self.events.pop(i)
            self.s.settimeout(max(0.1, end - time.time()))
            try:
                self.events.append(self.recv())
            except (socket.timeout, TimeoutError):
                break
            finally:
                self.s.settimeout(None)
        raise TimeoutError(name)

    def js(self, expr, timeout=60):
        r = self.call("Runtime.evaluate", expression=expr, awaitPromise=True, returnByValue=True, timeout=timeout * 1000)
        if "exceptionDetails" in r:
            raise RuntimeError(json.dumps(r["exceptionDetails"])[:800])
        return r["result"].get("value")


def launch(profile_dir, port, allow=()):
    rules = "MAP * ~NOTFOUND, EXCLUDE localhost, EXCLUDE 127.0.0.1" + "".join(f", EXCLUDE {h}" for h in allow)
    proc = subprocess.Popen([CHROME, "--headless=new", f"--remote-debugging-port={port}", f"--user-data-dir={profile_dir}",
                             "--no-first-run", "--no-default-browser-check", "--disable-extensions", "--hide-scrollbars",
                             "--disable-background-networking", "--disable-component-update", "--disable-sync",
                             f"--host-resolver-rules={rules}", "about:blank"],
                            stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    for _ in range(100):
        try:
            tabs = json.load(urllib.request.urlopen(f"http://127.0.0.1:{port}/json"))
            page = [t for t in tabs if t["type"] == "page"][0]
            ws = WS(page["webSocketDebuggerUrl"])
            ws.call("Page.enable")
            ws.call("Network.enable")
            ws.call("Network.setCacheDisabled", cacheDisabled=False)
            return proc, ws
        except Exception:  # noqa: BLE001
            time.sleep(0.2)
    proc.kill()
    raise RuntimeError("Chrome did not start")
