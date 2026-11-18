"""Page weight over the network (bytes transferred) at a 375 px phone viewport, tracking hosts blocked.
    python3 weight.py BASE_URL OUT.json PORT allow_host,allow_host  path path ...
"""
import json, sys, os, time
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import cdp
base, out, port, allow = sys.argv[1], sys.argv[2], int(sys.argv[3]), sys.argv[4].split(",")
proc, ws = cdp.launch(out + ".profile", port, allow)
ws.call("Network.setCacheDisabled", cacheDisabled=True)
res = {}
try:
    for path in sys.argv[5:]:
        ws.call("Emulation.setDeviceMetricsOverride", width=375, height=812, deviceScaleFactor=2, mobile=True)
        ws.events.clear()
        ws.call("Page.navigate", url=base + path)
        ws.wait_event("Page.loadEventFired", 60)
        ws.js("new Promise(r=>setTimeout(r,3000))")
        ws.js("(async()=>{for(let y=0;y<document.documentElement.scrollHeight;y+=500){scrollTo(0,y);await new Promise(r=>setTimeout(r,120));}await new Promise(r=>setTimeout(r,2500));})()", 90)
        urls, types, sizes = {}, {}, {}
        for e in ws.events:
            m, p = e.get("method"), e.get("params", {})
            if m == "Network.responseReceived":
                urls[p["requestId"]] = p["response"]["url"]; types[p["requestId"]] = p["type"]
            elif m == "Network.loadingFinished":
                sizes[p["requestId"]] = p["encodedDataLength"]
        by = {}
        for rid, n in sizes.items():
            by[types.get(rid, "Other")] = by.get(types.get(rid, "Other"), 0) + n
        res[path] = {"total": sum(sizes.values()), "requests": len(sizes), "by_type": by,
                     "top": sorted(((n, urls.get(r, "?")[:110]) for r, n in sizes.items()), reverse=True)[:6]}
        print(path, round(res[path]["total"] / 1024), "KB", len(sizes), "requests", {k: round(v / 1024) for k, v in by.items()}, flush=True)
finally:
    proc.terminate()
json.dump(res, open(out, "w"), indent=1)
