# Before/after page comparison

Used for the November 2026 speed work to prove pages look and behave the same. Standard library only; drives the installed Google Chrome headless with a throwaway profile.

- `snap.py SITE_DIR OUT_DIR PORT [--allow host,host] [--only page,page]`: serves a copy of the site locally, loads every page at 375, 800 and 1280 px with all outside hosts blocked except `--allow`, and saves every element's box and computed style plus full-page screenshots of 7 pages.
- `compare.py BEFORE AFTER [--verbose]`: lists every element whose box or style differs.
- `cssparity.py BEFORE_SNAPSHOT SITE_DIR`: checks the compiled CSS has every rule the Tailwind Play CDN used to generate.
- `track.py BASE OUT.json PORT allow path...`: loads pages with Google Tag Manager allowed but analytics and ads collection hosts blocked, clicks a WhatsApp link and touches a form field, and records the tracking calls attempted. Nothing reaches Google.
- `weight.py BASE OUT.json PORT allow path...`: bytes transferred per page at phone size, tracking hosts blocked.
- `slots.py SNAPSHOT tools/image-slots.json`: rebuilds the image slot sizes that `tools/optimise_images.py` reads.
