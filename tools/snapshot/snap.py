"""Snapshot a local copy of the site: computed styles + boxes for every element, and screenshots.

    python3 snap.py SITE_DIR OUT_DIR PORT [--shots-only-for page,page] [--allow host,host]

Serves SITE_DIR on localhost:PORT, visits every page at 3 widths in headless Chrome with all
outside hosts blocked except --allow, and writes OUT_DIR/styles/<page>@<width>.json and
OUT_DIR/shots/<page>@<width>.png.
"""
import base64
import functools
import http.server
import json
import os
import sys
import threading
import time
from pathlib import Path

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import cdp  # noqa: E402

WIDTHS = [(375, 812), (800, 1000), (1280, 900)]
SHOT_PAGES = ["index.html", "villas/index.html", "events/deepavali-open-house-2026/index.html",
              "zh/index.html", "ms/rental-programme/index.html", "ja/contact/index.html",
              "lexis-track-record/lexis-hibiscus-port-dickson/index.html"]

COLLECT = r"""
(async () => {
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  // wait for the Play CDN (if this copy uses it) to finish generating CSS
  if (window.tailwind) { for (let i = 0; i < 100; i++) { if ([...document.querySelectorAll('style')].some(s => s.textContent.includes('--tw-'))) break; await sleep(100); } }
  await document.fonts.ready;
  // scroll through so lazy images load and reveal-on-scroll runs, then return to the top
  const H = () => document.documentElement.scrollHeight;
  for (let y = 0; y < H(); y += 400) { window.scrollTo(0, y); await sleep(60); }
  window.scrollTo(0, H()); await sleep(150);
  await Promise.all([...document.images].map(i => i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; setTimeout(r, 4000); })));
  window.scrollTo(0, 0); await sleep(2600);
  await document.fonts.ready;
  const styles = {}, ids = new Map(); let nid = 0;
  const key = cs => { let s = ''; for (let i = 0; i < cs.length; i++) { const p = cs[i]; s += p + ':' + cs.getPropertyValue(p) + ';'; } return s; };
  const intern = s => { if (!ids.has(s)) { ids.set(s, nid); styles[nid] = s; nid++; } return ids.get(s); };
  const els = [];
  const walk = (el, path) => {
    const tag = el.tagName.toLowerCase();
    if (['script', 'noscript', 'style', 'link', 'meta', 'title', 'head', 'source'].includes(tag)) return;
    if (tag === 'picture') { let i = 0; for (const c of el.children) walk(c, path); return; }
    const r = el.getBoundingClientRect();
    const rec = { p: path, c: el.getAttribute('class') || '', r: [r.x, r.y + window.scrollY, r.width, r.height].map(v => Math.round(v * 10) / 10), s: intern(key(getComputedStyle(el))) };
    for (const ps of ['::before', '::after']) { const cs = getComputedStyle(el, ps); if (cs.content !== 'none' && cs.content !== 'normal') rec[ps] = intern(key(cs)); }
    if (tag === 'a') rec.href = el.getAttribute('href');
    if (tag === 'form') rec.action = el.getAttribute('action');
    if (tag === 'img') { rec.cur = el.currentSrc.replace(location.origin, ''); rec.nat = [el.naturalWidth, el.naturalHeight]; rec.ok = el.complete && el.naturalWidth > 0; }
    els.push(rec);
    let i = 0;
    for (const c of el.children) {
      const ct = c.tagName.toLowerCase();
      if (ct === 'picture') { walk(c, path + '>' + 'img' + '[' + (i++) + ']'); continue; }
      walk(c, path + '>' + ct + '[' + (i++) + ']');
    }
  };
  walk(document.body, 'body');
  const fonts = [...document.fonts].filter(f => f.status === 'loaded').map(f => f.family + ' ' + f.weight + ' ' + f.style).sort();
  const tw = [...document.querySelectorAll('style')].filter(s => s.textContent.includes('--tw-')).map(s => s.textContent).join('\n');
  return JSON.stringify({ els, styles, fonts, tw, height: H(), dataLayer: (window.dataLayer || []).map(e => e && e.event).filter(Boolean),
    scrollW: document.documentElement.scrollWidth });
})()
"""


class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a):
        pass

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()


def main():
    site, out, port = Path(sys.argv[1]), Path(sys.argv[2]), int(sys.argv[3])
    allow = sys.argv[sys.argv.index("--allow") + 1].split(",") if "--allow" in sys.argv else []
    only = sys.argv[sys.argv.index("--only") + 1].split(",") if "--only" in sys.argv else None
    (out / "styles").mkdir(parents=True, exist_ok=True)
    (out / "shots").mkdir(parents=True, exist_ok=True)
    srv = http.server.ThreadingHTTPServer(("127.0.0.1", port), functools.partial(Quiet, directory=str(site)))
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    pages = sorted(str(p.relative_to(site)) for p in site.rglob("*.html") if not p.name.startswith("._"))
    if only:
        pages = [p for p in pages if p in only]
    proc, ws = cdp.launch(str(out / "chrome-profile"), port + 1000, allow)
    failed = []
    ws.call("Network.enable")
    try:
        for page in pages:
            url = f"http://localhost:{port}/" + (page[:-10] if page.endswith("index.html") else page)
            for w, h in WIDTHS:
                name = page.replace("/", "__") + f"@{w}"
                ws.call("Emulation.setDeviceMetricsOverride", width=w, height=h, deviceScaleFactor=1, mobile=w < 500)
                ws.events.clear()
                ws.call("Page.navigate", url=url)
                ws.wait_event("Page.loadEventFired", 40)
                data = json.loads(ws.js(COLLECT, 90))
                bad = [e["params"]["response"]["url"] for e in ws.events if e.get("method") == "Network.responseReceived"
                       and e["params"]["response"]["status"] >= 400 and "localhost" in e["params"]["response"]["url"]]
                data["http_errors"] = bad
                if bad:
                    failed.append((name, bad))
                (out / "styles" / (name + ".json")).write_text(json.dumps(data))
                if page in SHOT_PAGES and w != 800:
                    shot = ws.call("Page.captureScreenshot", format="png", captureBeyondViewport=True,
                                   clip={"x": 0, "y": 0, "width": w, "height": min(data["height"], 16000), "scale": 1})
                    (out / "shots" / (name + ".png")).write_bytes(base64.b64decode(shot["data"]))
            print("ok", page, flush=True)
    finally:
        proc.terminate()
        srv.shutdown()
    print("local 4xx/5xx:", failed or "none")


if __name__ == "__main__":
    t = time.time()
    main()
    print(f"done in {time.time() - t:.0f}s")
