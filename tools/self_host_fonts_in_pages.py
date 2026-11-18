#!/usr/bin/env python3
"""One-off: swap the Google Fonts links in every page for the self-hosted fonts (see build_fonts.py).

    python3 -I tools/self_host_fonts_in_pages.py

Preloads the headline font only (Playfair Display); Inter loads through css/fonts.css. Safe to re-run.
"""
import re
from pathlib import Path

SITE = Path(__file__).resolve().parent.parent / "hibiscus2-site"
OLD = re.compile(r'<link rel="preconnect" href="https://fonts\.googleapis\.com" />\n<link rel="preconnect" href="https://fonts\.gstatic\.com" crossorigin />\n<link href="https://fonts\.googleapis\.com/css2\?[^"]+" rel="stylesheet" />\n')
NEW = ('<link rel="preload" href="/fonts/playfair-display-latin.woff2" as="font" type="font/woff2" crossorigin />\n'
       '<link rel="stylesheet" href="/css/fonts.css" />\n')
n = 0
for p in sorted(SITE.rglob("*.html")):
    if p.name.startswith("._"):
        continue
    html = p.read_text(encoding="utf-8")
    new, k = OLD.subn(NEW, html)
    if k:
        p.write_text(new, encoding="utf-8")
        n += 1
    elif "fonts.googleapis.com" in html:
        raise SystemExit(f"Unexpected Google Fonts markup in {p}")
print(n, "pages updated")
