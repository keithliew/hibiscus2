#!/usr/bin/env python3
"""Wait for a static-site deploy, then confirm the live site matches the repo.

Compares every git-tracked page (*.html, sitemap.xml, robots.txt, llms.txt)
in the output folder with the live copy, byte for byte. Pretty URLs follow
Cloudflare Pages: about/index.html -> /about/, page.html -> /page. 404.html is
checked by requesting a page that does not exist. macOS "._" files are
skipped, and they are reported if the host serves them.

Usage:
  python3 tools/deploy_check.py --site https://hibiscus2.com --dir hibiscus2-site
  python3 tools/deploy_check.py --site ... --dir ... --wait 300   # poll up to 5 min

Exit code 0 when everything matches, 1 otherwise.
"""
import argparse
import pathlib
import re
import subprocess
import sys
import time
import urllib.error
import urllib.request
import uuid

PAGE_SUFFIXES = (".html", ".xml", ".txt")


def tracked_pages(out_dir):
    files = subprocess.run(["git", "ls-files", "-z", "."], cwd=out_dir,
                           capture_output=True, text=True, check=True).stdout.split("\0")
    return sorted(f for f in files if f.endswith(PAGE_SUFFIXES)
                  and not pathlib.PurePath(f).name.startswith("._"))


def live_path(rel):
    if rel == "404.html" or rel.endswith("/404.html"):
        return None
    if rel.endswith("index.html"):
        return "/" + rel[: -len("index.html")]
    if rel.endswith(".html"):
        return "/" + rel[: -len(".html")]
    return "/" + rel


def fetch(url):
    req = urllib.request.Request(url, headers={"Cache-Control": "no-cache", "User-Agent": "deploy-check"})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            return r.status, r.read()
    except urllib.error.HTTPError as e:
        return e.code, e.read()


CF_BEACON = re.compile(rb'\n?<script[^>]*static\.cloudflareinsights\.com/beacon[^>]*></script>')


def same(local, live):
    # Cloudflare Web Analytics injects its beacon script into some responses.
    return local == CF_BEACON.sub(b"", live)


def check(site, out_dir, rels):
    bad = []
    for rel in rels:
        local = (out_dir / rel).read_bytes()
        path = live_path(rel)
        if path is None:
            prefix = rel[: -len("404.html")]
            status, body = fetch(f"{site}/{prefix}deploy-check-{uuid.uuid4().hex[:8]}")
            if status != 404 or not same(local, body):
                bad.append(f"{rel}: missing page gave {status}, body {'matches' if same(local, body) else 'differs'}")
            continue
        status, body = fetch(f"{site}{path}?cb={uuid.uuid4().hex[:8]}")
        if status != 200 or not same(local, body):
            bad.append(f"{path}: HTTP {status}, {'matches' if same(local, body) else 'differs from repo'}")
    return bad


def main():
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument("--site", required=True, help="live base URL, e.g. https://hibiscus2.com")
    ap.add_argument("--dir", required=True, help="the deployed output folder in the repo")
    ap.add_argument("--wait", type=int, default=0, help="seconds to keep polling until it matches")
    args = ap.parse_args()
    site, out_dir = args.site.rstrip("/"), pathlib.Path(args.dir).resolve()
    rels = tracked_pages(out_dir)
    deadline = time.time() + args.wait
    while True:
        bad = check(site, out_dir, rels)
        if not bad or time.time() >= deadline:
            break
        time.sleep(15)
    status, _ = fetch(f"{site}/._index.html")
    if status == 200:
        bad.append("/._index.html is served: macOS junk files are being deployed")
    for line in bad:
        print("DIFF", line)
    print(f"{'OK' if not bad else 'FAIL'}: {len(rels) - len(bad)} of {len(rels)} files match the live site")
    return 0 if not bad else 1


if __name__ == "__main__":
    sys.exit(main())
