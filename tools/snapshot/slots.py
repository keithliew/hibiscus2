"""Turn a snapshot into tools/image-slots.json: per page, per <img> in document order, slot width per viewport and top offset."""
import json, sys, glob, os, collections
snap, out = sys.argv[1], sys.argv[2]
res = collections.defaultdict(dict)
for f in sorted(glob.glob(snap + "/styles/*.json")):
    page, w = os.path.basename(f)[:-5].split("@")
    page = page.replace("__", "/")
    d = json.load(open(f))
    imgs = [e for e in d["els"] if e["p"].rsplit(">", 1)[-1].startswith("img[")]
    res[page][w] = imgs
final = {}
for page, by in res.items():
    n = {len(v) for v in by.values()}
    assert len(n) == 1, (page, n)
    final[page] = [{"src": by["375"][i]["cur"].split("?")[0], "w": {w: by[w][i]["r"][2] for w in ("375", "800", "1280")},
                    "y": {w: by[w][i]["r"][1] for w in ("375", "800", "1280")}, "h375": by["375"][i]["r"][3]} for i in range(n.pop())]
json.dump(final, open(out, "w"), indent=1, sort_keys=True)
print(len(final), "pages", sum(len(v) for v in final.values()), "imgs")
