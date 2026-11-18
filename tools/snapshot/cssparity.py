"""Every selector the Play CDN generated for a page must exist in the compiled stylesheet for that page's language."""
import json, glob, os, re, sys
snap, site = sys.argv[1], sys.argv[2]
def selectors(css):
    css = re.sub(r"/\*.*?\*/", "", css, flags=re.S)
    out = set()
    for m in re.finditer(r"([^{}]+)\{", css):
        sel = m.group(1).strip()
        if sel.startswith("@") or re.match(r"^(from|to|\d+%)", sel): continue
        for s in re.split(r",(?![^(]*\))", sel):
            out.add(re.sub(r"\s*([>+~])\s*", r"\1", re.sub(r"\s+", " ", s.strip())))
    return out
def media(css): return set(re.sub(r"\s+", "", m) for m in re.findall(r"@media[^{]+", css))
comp = {g: open(os.path.join(site, "css", f)).read() for g, f in {"": "tw.css", "zh": "tw-zh.css", "ja": "tw-ja.css"}.items()}
cs = {g: selectors(c) for g, c in comp.items()}; cm = {g: media(c) for g, c in comp.items()}
missing = {}; n = 0
for f in sorted(glob.glob(snap + "/styles/*@1280.json")):
    page = os.path.basename(f).split("@")[0]; g = page.split("__")[0] if page.split("__")[0] in ("zh", "ja") else ""
    tw = json.load(open(f))["tw"]; n += 1
    for s in selectors(tw) - cs[g]: missing.setdefault(s, []).append(page)
    for m in media(tw) - cm[g]: missing.setdefault(m, []).append(page)
print(n, "pages checked; selectors/media missing from compiled CSS:", len(missing))
for s, p in list(missing.items())[:25]: print("  ", s[:110], "|", len(p), p[0])
