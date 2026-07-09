# PENDING-ITEMS.md — hibiscus2.com (Task 1 build)

Every `[INSERT]` / `[VERIFY]` placeholder left in the hibiscus2-site/ build,
plus assumptions made where approved-facts.md was silent. Nothing here should
go live without being resolved first.

## 1. Business identity (blocks launch — appears in every footer + /about)

- REN name — `[INSERT REN NAME]`
- REN number — `[INSERT]`
- Agency/firm name — `[INSERT AGENCY/FIRM NAME]`
- Firm registration no. (LPPEH E-no.) — `[INSERT]`
- Developer advertising permit / licence number — `[INSERT — as provided by developer/Summerfield]`
- Business email (privacy-policy, contact) — `[INSERT]`
- Business WhatsApp number — currently reused `60122970362` from the
  grrmalaysia.com lp build as a **placeholder only**; confirm the correct
  number in `js/site.js` line ~11 before launch
- Consultant photo + short bio — `/about/` currently has an empty photo
  placeholder and bracketed bio copy
- Consultation venue exact approved wording ("private briefing at Pavilion
  KL") — used verbatim from approved-facts.md but flagged `[VERIFY]` there

## 2. Technical values (blocks launch)

- Web3Forms access key — `[WEB3FORM_ACCESS_KEY]` in all three forms
  (`/villas/`, `/rental-programme/`, `/contact/`)
- GTM container ID — commented placeholder in every page `<head>`/`<body>`
  (currently commented out entirely; uncomment + insert `[GTM_ID]` once issued)
- GA4 measurement ID — not wired up; depends on GTM container
- Google Ads conversion ID / label — commented placeholder on `/thank-you/`
- Deploy target (Cloudflare Pages / Netlify / other) — unset; site assumes a
  static host that serves `<dir>/index.html` for pretty URLs

## 3. Facts marked `[VERIFY]` in approved-facts.md, carried through as placeholders

- Total units split (1,710 = 910 water homes + 800 sky pool suites) — shown
  on `/rental-programme/` with inline `[VERIFY]` tag
- Site size (80 acres) — shown on `/villas/` with inline `[VERIFY]` tag
- GDV (RM1.6 billion) — shown on `/rental-programme/` with inline `[VERIFY]` tag
- Completion target (mid-2029) — shown on `/rental-programme/` with inline `[VERIFY]` tag
- Phase 1 sales status (~60% sold) — left as `[INSERT: verified current figure]`
  on both LPs' track-record grids (did not publish the unverified "~60%"
  figure from draft copy)
- Distances (KLIA 55 km / KL 100 km / Malacca 80 km) — shown on `/villas/`
  with inline `[VERIFY]` tag
- Rental-paid-since-2006 exact wording — shown with `[VERIFY exact wording]` tag
- Tourism figure (10.2M guests / 186 countries) — shown with `[VERIFY]` tag
- Developer heritage (est. 1996) — shown with `[VERIFY]` tag
- Sky Pool Villa (and full Water Villa) specs — only Type A sizes are
  `[OK]` in approved-facts.md; both villa cards on `/villas/` and
  `/rental-programme/` use `[INSERT: confirmed sq ft / bed & bath count]`
  rather than publishing Type A specs under a generic villa name
- Starting price RM720,000 — approved-facts.md flags this `[VERIFY]`; used
  throughout with a `*Pricing subject to availability and official price
  list` qualifier
- Foreign buyer eligibility — every instance uses
  `[INSERT: verified foreign ownership guidance]`
- Booking fee terms, panel banks — `[INSERT]` on `/rental-programme/`
  purchase-process section (deliberately did NOT publish the zero-down/
  cashback/rebate mechanics from approved-facts.md §5 — those are GRR-only
  per the master prompt's hard compliance rules)

## 4. Assumptions made (no explicit instruction — flag for review)

- **Image classification.** Files named `Hibiscus2 av*`, `LHPD2 - Lanscape
  *`, `H2 Type A new ID *`, `View 9`, `_TA View11/12` were treated as CGI
  renders and captioned "Artist impression." Files named `A - Bath *` /
  `A - Bed *` (from `hibiscus2/images/`) were treated as real Type A show-unit
  photography, parallel to the existing `showunit-*.jpg` set reused from
  `grr/lp/images/`. This inference was not confirmed by the developer —
  verify before launch, since mislabeling a render as real photography (or
  vice versa) is a compliance/accuracy risk.
- **URL structure.** Built as folder-per-page (`/villas/index.html` etc.)
  for clean pretty URLs on static hosts that auto-serve directory
  `index.html` (Netlify/Cloudflare Pages/Vercel). Confirm the actual deploy
  target supports this before shipping; if not, pages may need flattening to
  `villas.html` etc. with matching internal links updated.
- **Tech stack.** Tailwind CSS via CDN script (`cdn.tailwindcss.com`) plus a
  small shared `css/site.css` and `js/site.js`, per spec §1.1. The CDN
  script recompiles Tailwind client-side on every page load — fine for a
  low-traffic lead-gen site, but not ideal for Lighthouse performance;
  swapping to a compiled/purged Tailwind build is a reasonable follow-up if
  the ≥85 mobile performance target isn't met (not yet measured — see §5).
- **Sky Pool Villa naming.** Master prompt calls the two types "Water
  Villa" and "Sky Pool Villa" (§1.3–1.4); approved-facts.md only has
  confirmed specs for "Type A Upper/Lower." Copy uses the Water/Sky Pool
  naming per the master prompt but gates the actual dimensions as
  `[INSERT]` rather than assuming Type A = Water Villa.

## 5. Not yet done (explicitly out of scope for "Task 1 only," or requires tooling/human review)

- No Lighthouse run performed — mobile Performance ≥85 / Accessibility ≥90
  targets are unverified. Local preview was checked in-browser only.
- Images are the original JPGs (with explicit width/height + lazy loading)
  — no WebP conversion was done (no image-conversion tool available in this
  environment). Revisit before the Lighthouse pass.
- Task 2 (grrmalaysia.com updates: removing the old LP pages, adding the
  organic `/projects/lexis-hibiscus-2-grr/` page, 301 redirects) was not
  started per instruction to execute Task 1 only.
- Task 3's full QA/acceptance checklist was not formally run item-by-item
  (a compliance grep for banned strings was run — see below — but GTM
  preview verification, cross-device Lighthouse, and redirect testing all
  require Task 2 completion and/or live deploy).

## 6. Compliance self-check performed

Grepped rendered copy across `hibiscus2-site/**/*.html` for the banned-term
list in master-prompt §1.5 (percentage return figures, "guarantee"/
"guaranteed", "GRR", "zero downpayment", "cashback", "rebate", "investment",
"investor", "yield", "passive income", "ROI", "break even", "capital
appreciation"). Zero matches in visible copy. See terminal output in the
build session for the exact grep command used.
