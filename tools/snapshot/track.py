"""Load pages with Google Tag Manager allowed but every analytics/ads collection host blocked at DNS,
so tags try to fire and nothing reaches Google. Records CSP report-only violations, the tracking
requests attempted and dataLayer events; optionally clicks the first WhatsApp link and focuses a form field.
    python3 track.py BASE OUT.json PORT extra_allow_host,... path path ...
"""
import json, sys, os, re, time
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import cdp
base, out, port, allow = sys.argv[1], sys.argv[2], int(sys.argv[3]), [h for h in sys.argv[4].split(",") if h]
proc, ws = cdp.launch(out + ".profile", port, ["www.googletagmanager.com"] + allow)
ws.call("Network.setCacheDisabled", cacheDisabled=True)
ws.call("Page.addScriptToEvaluateOnNewDocument", source="window.__csp=[];document.addEventListener('securitypolicyviolation',e=>window.__csp.push(e.effectiveDirective+' '+(e.blockedURI||'').split('?')[0].slice(0,80)+' '+e.disposition));window.open=function(u){window.__opened=(window.__opened||[]).concat(String(u));return null};")
res = {}
def tracking(events):
    hits = []
    for e in events:
        if e.get("method") != "Network.requestWillBeSent": continue
        u = e["params"]["request"]["url"]
        if re.search(r"google-analytics|analytics\.google|doubleclick|googleadservices|googlesyndication|google\.com/(pagead|ccm|gmp)|web3forms", u):
            host = u.split("/")[2]; q = dict(p.split("=", 1) for p in u.split("?", 1)[-1].split("&") if "=" in p)
            body = e["params"]["request"].get("postData", "") or ""
            ens = [q["en"]] if "en" in q else re.findall(r"(?:^|[&\n\r])en=([^&\n\r]+)", body)
            hits.append(host + u.split(host, 1)[1].split("?")[0] + " tid=" + q.get("tid", q.get("id", "")) + " en=" + ",".join(ens))
    return sorted(hits)
try:
    for path in sys.argv[5:]:
        ws.call("Emulation.setDeviceMetricsOverride", width=375, height=812, deviceScaleFactor=2, mobile=True)
        ws.events.clear()
        ws.call("Page.navigate", url=base + path)
        ws.wait_event("Page.loadEventFired", 60)
        ws.js("new Promise(r=>setTimeout(r,5000))")
        acts = ws.js("""(async()=>{const s=ms=>new Promise(r=>setTimeout(r,ms));const o=[];
          const wa=document.querySelector('a[data-wa]'); if(wa){o.push('wa href '+wa.getAttribute('href').replace(/text=.*/,'text=…')+' target='+wa.target);
            wa.addEventListener('click',e=>e.preventDefault()); wa.click(); await s(1500);}
          const f=document.querySelector('form.lead-form, form'); if(f){f.scrollIntoView(); await s(1200); const i=f.querySelector('input:not([type=hidden]):not([type=checkbox])'); if(i){i.focus(); i.value='Test'; i.dispatchEvent(new Event('input',{bubbles:true})); i.dispatchEvent(new Event('change',{bubbles:true})); i.blur(); o.push('form action '+f.getAttribute('action')+' fields '+[...f.elements].map(x=>x.name).filter(Boolean).join(','));} await s(2500);}
          return JSON.stringify({acts:o, csp:[...new Set(window.__csp)], dl:(window.dataLayer||[]).map(e=>e&&(e.event||e[0])).filter(x=>typeof x==='string')});})()""", 60)
        d = json.loads(acts); d["hits"] = tracking(ws.events)
        res[path] = d
        print(path, json.dumps(d, indent=1)[:2500], flush=True)
finally:
    proc.terminate()
json.dump(res, open(out, "w"), indent=1)
