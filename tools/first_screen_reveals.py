#!/usr/bin/env python3
"""Show first-screen content straight away instead of waiting for site.js to fade it in.

    python3 -I tools/first_screen_reveals.py SNAPSHOT_DIR      # e.g. a tools/snapshot/snap.py output folder

Every ".reveal" element starts invisible and site.js fades it in when it scrolls into view. For
elements already on the first screen that only delays the page's largest paint. This marks those
elements class="reveal in" in the HTML (their finished state), so they are visible on first paint.
Elements further down keep their fade. "First screen" = the element starts inside the first phone
screen (375x812), or in the top half of the first screen at 800 or 1280 px wide, in the snapshot.
Something that only peeks into the bottom of a desktop screen keeps its fade. Safe to re-run;
changes no wording.
"""
import glob
import json
import os
import re
import sys
from pathlib import Path

SITE = Path(__file__).resolve().parent.parent / "hibiscus2-site"
VIEW = {"375": 812, "800": 500, "1280": 450}
CLASS = re.compile(r'\sclass="([^"]*)"')


def main():
    snap = sys.argv[1]
    first = {}  # page -> set of indexes (among .reveal elements, document order) on the first screen
    count = {}
    for f in sorted(glob.glob(snap + "/styles/*.json")):
        page, w = os.path.basename(f)[:-5].split("@")
        page = page.replace("__", "/")
        reveals = [e for e in json.load(open(f))["els"] if "reveal" in e["c"].split()]
        count.setdefault(page, set()).add(len(reveals))
        first.setdefault(page, set()).update(i for i, e in enumerate(reveals) if e["r"][1] < VIEW[w] and e["r"][3] > 0)
    changed = marked = 0
    for page, idx in sorted(first.items()):
        p = SITE / page
        html = p.read_text(encoding="utf-8")
        n = -1

        def repl(m):
            nonlocal n, marked
            tokens = m.group(1).split()
            if "reveal" not in tokens:
                return m.group(0)
            n += 1
            if n in idx and "in" not in tokens:
                marked += 1
                tokens.insert(tokens.index("reveal") + 1, "in")
                return f' class="{" ".join(tokens)}"' if " ".join(m.group(1).split()) != m.group(1) else m.group(0).replace("reveal", "reveal in", 1)
            return m.group(0)

        new = CLASS.sub(repl, html)
        if count[page] != {n + 1}:
            sys.exit(f"{page}: {n + 1} .reveal in the HTML but {count[page]} in the snapshot; not touched")
        if new != html:
            p.write_text(new, encoding="utf-8")
            changed += 1
    print(f"marked {marked} first-screen elements on {changed} pages")


if __name__ == "__main__":
    main()
