#!/usr/bin/env python3
"""Give every <img> on the site smaller AVIF and WebP versions, sized for the slot it sits in.

    python3 tools/optimise_images.py            # rewrite the pages and build missing variants
    python3 tools/optimise_images.py --check    # exit 1 if any page would change

Needs Pillow with WebP and AVIF support (so run it with plain `python3`, not `python3 -I`).

For each <img> it reads the measured slot width from tools/image-slots.json (how wide the image
is drawn at 375, 800 and 1280 px viewports, and how far down the page it starts), then:
  - builds resized AVIF + WebP files in hibiscus2-site/images/r/ (originals are kept and stay
    as the <img src> fallback),
  - wraps the <img> in <picture class="contents"> with srcset/sizes (or refreshes the <source>
    lines when a <picture> is already there). "contents" makes the wrapper invisible to layout
    and "hidden" on each <source> stops it counting as a flex or grid item, so nothing moves,
  - sets loading/fetchpriority: images in the first screen load eagerly and the biggest of them
    gets fetchpriority="high"; images well below the first screen load lazily.
It never touches alt text, classes, width/height or any wording. Safe to re-run.

A new or moved image needs a new entry in image-slots.json (see README, "Speed build").
"""
import io
import json
import math
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITE = ROOT / "hibiscus2-site"
OUT = SITE / "images" / "r"
SLOTS = json.loads((ROOT / "tools" / "image-slots.json").read_text())
LADDER = [96, 128, 192, 256, 400, 640, 800, 1000, 1200, 1600]
FOLD = 700        # px from the top that counts as "first screen"
LAZY_FROM = 1000  # images starting below this on every viewport are lazy-loaded
SKIP = re.compile(r"\.(svg|gif|ico)$|/icon-\d+\.png$")

_cache = {}


def source_image(src):
    from PIL import Image, ImageCms
    if src not in _cache:
        im = Image.open(SITE / src.lstrip("/"))
        icc = im.info.get("icc_profile")
        if icc and im.mode in ("RGB", "CMYK"):
            im = ImageCms.profileToProfile(im, ImageCms.ImageCmsProfile(io.BytesIO(icc)), ImageCms.createProfile("sRGB"), outputMode="RGB")
        elif im.mode not in ("RGB", "RGBA"):
            im = im.convert("RGBA" if "A" in im.mode or "transparency" in im.info else "RGB")
        _cache[src] = im
    return _cache[src]


def variant(src, width, fmt):
    """Path (site-absolute) of the resized file, building it when missing."""
    from PIL import Image
    stem = Path(src).stem
    rel = f"/images/r/{stem}-{width}.{fmt}"
    dest = SITE / rel.lstrip("/")
    if not dest.exists():
        im = source_image(src)
        if width != im.width:
            im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
        OUT.mkdir(parents=True, exist_ok=True)
        if fmt == "webp":
            im.save(dest, "WEBP", quality=80, method=6)
        else:
            im.save(dest, "AVIF", quality=62, speed=3)
    return rel


def widths_for(orig_w, slot):
    lo = min([v for v in slot["w"].values() if v > 0] or [0])
    hi = max(3 * slot["w"]["375"], 2 * slot["w"]["800"], 2 * slot["w"]["1280"])
    ws = [w for w in LADDER if lo * 0.9 <= w < orig_w and w <= hi * 1.05]
    if orig_w <= hi * 1.05 or not ws:
        ws.append(orig_w)
    elif ws[-1] < hi and ws[-1] < orig_w:  # make sure the sharpest screen is covered
        nxt = next((w for w in LADDER if w >= hi), orig_w)
        ws.append(min(nxt, orig_w))
    return sorted(set(ws))


def sizes_for(slot):
    w = slot["w"]
    if max(w.values()) - min(w.values()) <= 1:
        return f'{math.ceil(w["375"])}px'
    return (f'(min-width: 1152px) {math.ceil(w["1280"])}px, '
            f'(min-width: 800px) {math.ceil(w["800"] / 8)}vw, {min(100, math.ceil(w["375"] / 3.75))}vw')


def set_attr(tag, name, value):
    """Set or remove (value=None) one attribute on an <img ...> tag string."""
    tag = re.sub(rf'\s{name}="[^"]*"', "", tag)
    if value is None:
        return tag
    return re.sub(r"\s*/?>$", lambda m: f' {name}="{value}"' + (" />" if "/" in m.group(0) else ">"), tag)


def rewrite(page, html):
    slots = SLOTS.get(page)
    imgs = list(re.finditer(r"<img\b[^>]*>", html))
    if slots is None or len(slots) != len(imgs):
        if imgs:
            print(f"SKIPPED {page}: {len(imgs)} <img> but {0 if slots is None else len(slots)} measured slots", file=sys.stderr)
        return html
    first_screen = [i for i, s in enumerate(slots) if min(s["y"].values()) < FOLD and s["w"]["375"] * s["h375"] > 0]
    hero = max(first_screen, key=lambda i: slots[i]["w"]["375"] * slots[i]["h375"], default=None)
    out, pos = [], 0
    for i, m in enumerate(imgs):
        tag, slot = m.group(0), slots[i]
        src = re.search(r'\ssrc="([^"]+)"', tag).group(1)
        start, end = m.start(), m.end()
        if i in first_screen:
            tag = set_attr(tag, "loading", "eager")
            tag = set_attr(tag, "fetchpriority", "high" if i == hero else None)
        elif min(slot["y"].values()) >= LAZY_FROM:
            tag = set_attr(set_attr(tag, "fetchpriority", None), "loading", "lazy")
        if SKIP.search(src) or not src.startswith("/images/"):
            out.append(html[pos:start] + tag)
            pos = end
            continue
        ws = widths_for(source_image(src).width, slot)
        sizes = sizes_for(slot)
        sources = "".join(
            f'<source class="hidden" type="image/{fmt}" srcset="{", ".join(f"{variant(src, w, fmt)} {w}w" for w in ws)}" sizes="{sizes}" />'
            for fmt in ("avif", "webp"))
        before = html[pos:start]
        open_at = before.rfind("<picture")
        if open_at != -1 and "</picture>" not in before[open_at:]:  # already inside a <picture>: refresh its sources
            head = before[:open_at] + re.match(r"<picture[^>]*>", before[open_at:]).group(0)
            out.append(head + sources + tag)
        else:
            out.append(before + '<picture class="contents">' + sources + tag + "</picture>")
        pos = end
    out.append(html[pos:])
    return "".join(out)


def main():
    check = "--check" in sys.argv
    changed = []
    for p in sorted(SITE.rglob("*.html")):
        if p.name.startswith("._"):
            continue
        page = str(p.relative_to(SITE))
        old = p.read_text(encoding="utf-8")
        new = rewrite(page, old)
        if new != old:
            changed.append(page)
            if not check:
                p.write_text(new, encoding="utf-8")
    print(("would change" if check else "rewrote"), len(changed), "pages;", len(list(OUT.glob("*.*"))) if OUT.exists() else 0, "variant files")
    sys.exit(1 if check and changed else 0)


if __name__ == "__main__":
    main()
