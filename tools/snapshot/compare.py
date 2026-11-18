"""Compare two snapshots element by element.  python3 compare.py BEFORE AFTER [--verbose]"""
import json, sys, glob, os, collections
a_dir, b_dir = sys.argv[1], sys.argv[2]
verbose = "--verbose" in sys.argv
TOL = 0.6
import re
def parse(s):
    return dict(x.split(":", 1) for x in re.sub(r"localhost:\d+", "localhost", s).split(";") if ":" in x)
NUM = re.compile(r"-?\d+(?:\.\d+)?")
def close(u, v):
    if u == v: return True
    if u is None or v is None: return False
    if NUM.sub("#", u) != NUM.sub("#", v): return False
    return all(abs(float(a) - float(b)) <= 0.6 for a, b in zip(NUM.findall(u), NUM.findall(v)))
tot = collections.Counter(); propc = collections.Counter(); examples = {}; pages_bad = collections.Counter()
for fb in sorted(glob.glob(b_dir + "/styles/*.json")):
    name = os.path.basename(fb); fa = os.path.join(a_dir, "styles", name)
    A, B = json.load(open(fa)), json.load(open(fb))
    tot["snapshots"] += 1
    ea = {e["p"]: e for e in A["els"]}; eb = {e["p"]: e for e in B["els"]}
    if set(ea) != set(eb):
        tot["structure"] += 1; pages_bad[name] += 1
        print("STRUCTURE", name, "only before:", sorted(set(ea) - set(eb))[:3], "only after:", sorted(set(eb) - set(ea))[:3])
    if A["fonts"] != B["fonts"]: print("FONTS", name, A["fonts"], B["fonts"]); tot["fonts"] += 1
    if A["dataLayer"] != B["dataLayer"]: print("DATALAYER", name, A["dataLayer"], B["dataLayer"]); tot["datalayer"] += 1
    if abs(A["height"] - B["height"]) > 1: print("HEIGHT", name, A["height"], B["height"]); tot["height"] += 1
    if A["scrollW"] != B["scrollW"]: print("SCROLLW", name, A["scrollW"], B["scrollW"])
    if B.get("http_errors"): print("HTTP", name, B["http_errors"])
    sa_cache = {}; sb_cache = {}
    for p in ea.keys() & eb.keys():
        x, y = ea[p], eb[p]; tot["elements"] += 1
        if any(abs(u - v) > TOL for u, v in zip(x["r"], y["r"])):
            tot["rect"] += 1; pages_bad[name] += 1
            examples.setdefault("rect", []).append((name, p[-70:], x["r"], y["r"]))
        for k in ("href", "action"):
            if x.get(k) != y.get(k): tot[k] += 1; print(k.upper(), name, p[-50:], x.get(k), y.get(k))
        if "ok" in y and not y["ok"]: tot["img_broken"] += 1; print("IMG NOT LOADED", name, p[-50:], y.get("cur"))
        for k in ("s", "::before", "::after"):
            if (k in x) != (k in y): tot["pseudo_presence"] += 1; continue
            if k not in x: continue
            sa, sb = A["styles"][str(x[k])], B["styles"][str(y[k])]
            if sa == sb: continue
            da, db = parse(sa), parse(sb)
            diffs = [q for q in da.keys() | db.keys() if not close(da.get(q), db.get(q))]
            if diffs:
                tot["style_els"] += 1; pages_bad[name] += 1
                for q in diffs:
                    propc[q] += 1
                    examples.setdefault(q, [])
                    if len(examples[q]) < 4: examples[q].append((name, p[-60:], k, da.get(q, "")[:90], db.get(q, "")[:90]))
print(dict(tot))
print("props differing:", propc.most_common(40))
for q, ex in list(examples.items())[: (200 if verbose else 12)]:
    print("--", q)
    for e in ex[:4 if q != "rect" else (60 if verbose else 8)]: print("   ", e)
print("pages with differences:", len(pages_bad), list(pages_bad.most_common(8)))
