#!/usr/bin/env python3
"""Compile the site's Tailwind stylesheet and point every page at it (no Tailwind script in the browser).

    python3 -I tools/build_css.py            # compile css/tw.css, tw-zh.css, tw-ja.css and update the pages
    python3 -I tools/build_css.py --check    # exit 1 if a page uses a class the compiled CSS was not built with

Run it after adding or changing any Tailwind class in a page or in js/. The --check form needs
no tools and belongs in the pre-deploy checks next to compliance_scan.py.

Needs the Tailwind standalone CLI, pinned to the version the pages were written for (3.4.17, the
one cdn.tailwindcss.com served), at tools/.bin/ (git-ignored). The file's SHA-256 is checked before
every run. Register: website-projects/sitegen/TOOLS.md row 27. To fetch it (after Keith's yes):
    gh release download v3.4.17 -R tailwindlabs/tailwindcss -p tailwindcss-macos-arm64 -D tools/.bin
"""
import hashlib
import os
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITE = ROOT / "hibiscus2-site"
BIN = ROOT / "tools" / ".bin" / "tailwindcss-macos-arm64"
BIN_SHA256 = "a1d0c7985759accca0bf12e51ac1dcbf0f6cf2fffb62e6e0f62d091c477a10a3"  # v3.4.17, from the release's sha256sums.txt
LOCK = ROOT / "tools" / "tailwind" / "classes.lock"
GROUPS = {"": "tw.css", "zh": "tw-zh.css", "ja": "tw-ja.css"}

CDN_BLOCK = re.compile(r'<script src="https://cdn\.tailwindcss\.com"></script>\s*<script>\s*tailwind\.config\s*=.*?</script>\n?', re.S)
TW_LINK = re.compile(r'<link rel="stylesheet" href="/css/tw(?:-zh|-ja)?\.css\?v=[0-9a-f]+" />\n')


def group_of(page):
    return page.split("/")[0] if page.split("/")[0] in ("zh", "ja") else ""


def pages():
    return sorted(p for p in SITE.rglob("*.html") if not p.name.startswith("._"))


def class_tokens():
    """Every class name used, per language group: the lock that --check compares against."""
    out = {g: set() for g in GROUPS}
    js = " ".join(p.read_text(encoding="utf-8") for p in sorted((SITE / "js").glob("*.js")) if not p.name.startswith("._"))
    js_tokens = set(re.findall(r'[A-Za-z0-9_:/\[\]\.\-%#!]+', " ".join(re.findall(r'"([^"]*)"', js))))
    for p in pages():
        g = group_of(str(p.relative_to(SITE)))
        for attr in re.findall(r'\sclass="([^"]*)"', p.read_text(encoding="utf-8")):
            out[g].update(attr.split())
    return "\n".join(f"[{g or 'en-ms'}]\n" + "\n".join(sorted(out[g])) for g in GROUPS) + "\n[js]\n" + "\n".join(sorted(js_tokens)) + "\n"


def main():
    if "--check" in sys.argv:
        if not LOCK.exists() or LOCK.read_text(encoding="utf-8") != class_tokens():
            sys.exit("Compiled CSS is out of date: a page or script uses classes it was not built with. Run python3 -I tools/build_css.py")
        missing = [str(p.relative_to(SITE)) for p in pages() if "cdn.tailwindcss.com" in p.read_text(encoding="utf-8") or not TW_LINK.search(p.read_text(encoding="utf-8"))]
        sys.exit(f"Pages not using the compiled CSS: {missing}" if missing else 0)
    if not BIN.exists():
        sys.exit(f"Missing {BIN}. See the top of this file.")
    if hashlib.sha256(BIN.read_bytes()).hexdigest() != BIN_SHA256:
        sys.exit("STOP: the Tailwind binary does not match the pinned SHA-256. Do not run it.")
    BIN.chmod(0o755)
    version = {}
    for lang, name in GROUPS.items():
        dest = SITE / "css" / name
        subprocess.run([str(BIN), "-c", str(ROOT / "tools/tailwind/config.js"), "-i", str(ROOT / "tools/tailwind/input.css"),
                        "-o", str(dest), "--minify"], check=True, env={**os.environ, "H2_LANG": lang, "BROWSERSLIST_IGNORE_OLD_DATA": "1"})
        version[lang] = hashlib.sha256(dest.read_bytes()).hexdigest()[:10]
        print(name, dest.stat().st_size, "bytes")
    for p in pages():
        page = str(p.relative_to(SITE))
        html = p.read_text(encoding="utf-8")
        lang = group_of(page)
        link = f'<link rel="stylesheet" href="/css/{GROUPS[lang]}?v={version[lang]}" />\n'
        new = TW_LINK.sub("", CDN_BLOCK.sub("", html))
        # last in <head>, where the Play CDN used to add its <style>, so the cascade order is unchanged
        new = new.replace("</head>", link + "</head>", 1)
        if "cdn.tailwindcss.com" in new:
            sys.exit(f"Could not remove the CDN script from {page}")
        if new != html:
            p.write_text(new, encoding="utf-8")
    LOCK.write_text(class_tokens(), encoding="utf-8")
    print("pages updated; lock written")


if __name__ == "__main__":
    main()
