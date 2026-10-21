#!/usr/bin/env python3
"""Scan hibiscus2.com pages for banned and watch terms.

Rules come from the "BANNED AND WATCH TERMS" section of approved-facts.md.
Checks what a visitor or Google can read: visible text, alt/title/aria-label
text, meta tag content and JSON-LD. Script code, CSS and URLs are ignored.
Also fails on any link to grrmalaysia.com.

Usage:
  python3 tools/compliance_scan.py                 # whole site
  python3 tools/compliance_scan.py events/foo/     # only these pages (paths under hibiscus2-site/)

Exit code 1 when a banned term or grrmalaysia link is found. Images are not
read: check photos and flyers for banner text by eye.
"""
import html
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
SITE = ROOT / "hibiscus2-site"
FACTS = ROOT / "approved-facts.md"


def load_rules(kind):
    text = FACTS.read_text(encoding="utf-8")
    block = re.search(rf"```{kind}\n(.*?)```", text, re.S)
    if not block:
        sys.exit(f"approved-facts.md has no ```{kind} block")
    return [re.compile(line.strip(), re.I) for line in block.group(1).splitlines() if line.strip()]


def readable_text(page):
    page = re.sub(r"<script(?![^>]*ld\+json)[^>]*>.*?</script>", " ", page, flags=re.S | re.I)
    page = re.sub(r"<style.*?</style>", " ", page, flags=re.S | re.I)
    page = re.sub(r'\b(?:alt|title|aria-label|content)="([^"]*)"', r" \1 ", page)
    page = re.sub(r"<[^>]+>", " ", page)
    return re.sub(r"\s+", " ", html.unescape(page))


def pages(args):
    if not args:
        yield from sorted(p for p in SITE.rglob("*.html") if not p.name.startswith("._"))
        return
    for arg in args:
        p = SITE / arg
        yield from ([p / "index.html"] if p.is_dir() else [p])


def main(args):
    banned, watch = load_rules("banned"), load_rules("watch")
    failed = False
    for path in pages(args):
        raw = path.read_text(encoding="utf-8")
        text = readable_text(raw)
        rel = path.relative_to(SITE)
        hits = []
        if re.search(r"""href=["'][^"']*grrmalaysia""", raw, re.I):
            hits.append(("BANNED", "link to grrmalaysia.com", ""))
        for level, rules in (("BANNED", banned), ("watch", watch)):
            for rule in rules:
                for m in rule.finditer(text):
                    hits.append((level, m.group(0), text[max(0, m.start() - 50):m.end() + 40]))
        for level, word, ctx in hits:
            failed |= level == "BANNED"
            print(f"{level:6} {rel}: [{word}] …{ctx}…")
    print("FAIL: banned terms found" if failed else "OK: no banned terms")
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
