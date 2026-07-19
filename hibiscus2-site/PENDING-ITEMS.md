# PENDING-ITEMS.md — hibiscus2.com (Task 1 build)

**Policy as of 2026-07-10:** facts sourced from approved-facts.md / the
grrmalaysia.com reference site are treated as correct by default and
published without a visible `[VERIFY]` marker — corrections happen only if
the developer contradicts something later. Items with **no value at all**
(nothing to publish, not even a provisional figure) are hidden from the live
site entirely rather than shown as bracketed placeholder text. This file is
the only remaining record of what's outstanding — the site itself no longer
shows any `[INSERT]`/`[VERIFY]` markers.

## 1. Business identity — RESOLVED 2026-07-10

Filled from the Summerfield official receipt letterhead, live in every
footer (8 pages) and the `/about/` bio:

- ✅ REN name — Wong See How
- ✅ REN number — REN 51947
- ✅ Agency/firm name — Summerfield Property (M) Sdn. Bhd., reg. 200401009891 (648394-W)
- ✅ Firm registration no. (LPPEH E-no.) — E (3) 1305
- ✅ Business WhatsApp number — confirmed correct as-is (`60122970362` in `js/site.js`)
- ✅ Consultant bio — live on `/about/`: "Joe Wong (Joe See How Wong) is the
  founder and director of Summerfield Property (M) Sdn. Bhd. ... operates
  primarily across the Klang Valley, Negeri Sembilan, Pahang, Penang and
  Johor, with services ranging from residential sales to MM2H consultation."
- ✅ Consultant photo — `hibiscus2-site/images/joe-wong.png` (820×912),
  live on `/about/` in the rounded photo frame, `object-cover` cropped,
  explicit width/height set, verified rendering correctly in-browser.

Still open:
- Developer advertising permit / licence number — not on the Summerfield
  receipt (this is a separate developer-issued number, not the agency's
  LPPEH licence). **Hidden from the footer** (the line was removed rather
  than shown empty) until this exists.
- Business email — deferred per instruction. **Hidden** from `/contact/`
  (Email card removed) and `/privacy-policy/` (rewritten to point to
  WhatsApp only). Receipt has two candidates on file if needed later:
  `summerfield21@gmail.com` and `info@summerfield.com.my`.

## 1a. CTA relabeling & venue details — RESOLVED 2026-07-10

Per `claude-code-prompt-cta-venue-update.md`. All WhatsApp CTA buttons
site-wide reframed to booking-intent (mapping table applied exactly, plus 4
additional buttons not in the table that the user confirmed should also
change: nav "WhatsApp Us", mobile sticky bar "WhatsApp", thank-you page
"WhatsApp Us Now", villas gallery "Arrange a Show Unit Viewing" — now all
read "Book a Viewing" / "Book a Viewing Now" / "Book a Show Unit Viewing").
WhatsApp pre-fill message text updated per page to match booking intent
(404 page intentionally left unchanged — its existing "couldn't find what I
was looking for" message is still contextually correct and wasn't covered
by the prompt's spec).

**Venue correction:** every "Pavilion KL" reference site-wide (11 instances
across hero copy, FAQ answers, `/about`, `/contact`, footer, CTA panels) is
now "Bukit Bintang Showroom." `approved-facts.md` §8 updated to match and
flag the correction.

**RESOLVED 2026-07-19:**
- ✅ Bukit Bintang Showroom address — L12, Pavilion Tower, 75 Jalan Raja
  Chulan, 50200 Kuala Lumpur — user-confirmed, live on `/contact/`,
  `/about/` and the footer.
- ✅ Phone number — `+60122970362`, same number as the business WhatsApp
  line (user confirmed this is intentional, single point of contact) —
  live wherever the venue phone is shown.
- ✅ **Second venue added** — Lexis Hibiscus Port Dickson Sales Gallery,
  Ground Floor, Lexis Hibiscus Port Dickson, Batu 12, Jalan Pantai, Pasir
  Panjang, 71250 Port Dickson. Not in scope of the original CTA/venue
  update prompt — added per direct user instruction 2026-07-19. "Sales
  Gallery" is Claude's descriptive label, not a confirmed official venue
  name — flag if the developer/Summerfield has a different preferred name.

Still open:
- Opening hours for the Port Dickson venue — not provided. Per the hidden-
  rather-than-placeholder policy above, hours are shown for Bukit Bintang
  Showroom only; the Port Dickson venue's hours line is simply omitted
  until confirmed (not shown as a bracketed placeholder).

## 2. Technical values — RESOLVED 2026-07-10

- ✅ Web3Forms access key — live (`94ad1e91-a32c-4338-b45d-9bc58ef6d385`) in
  all three forms (`/villas/`, `/rental-programme/`, `/contact/`)
- ✅ GTM container ID `GTM-P35VKVXV` — head script + body noscript on all 9 pages
- ✅ GA4 (`G-H1TQ1QRLTH`) and Google Ads conversion tracking — configured as
  tags inside the GTM container, triggered off the `whatsapp_click` /
  `lead_form_submit` / `programme_details_request` dataLayer events already
  pushed by `js/site.js`. Nothing further needed in the codebase.
- ✅ Deploy target — Cloudflare Pages, Build output directory `hibiscus2-site`

## 3. Facts from approved-facts.md — RESOLVED 2026-07-10 (published under default-trust policy)

All of the following are now stated plainly on the live site with no visible
`[VERIFY]` marker:

- Villa specs, unit count & completion (sourced from confirmed
  grrmalaysia.com/lp/villas copy): **Type A — Upper** (872 sq ft / 81.14 m²,
  elevated water outlook) and **Type A — Lower** (858 sq ft / 79.75 m²,
  direct water access level), each 2 bed/2 bath with balcony. Resort scale:
  **1,734 rooms total — 910 overwater villas offered for ownership, 800
  tower rooms, 24 aquarium rooms**, sunken aquarium restaurant, largest
  ballroom in Negeri Sembilan. **Completion targeted 2029.** This supersedes
  the earlier "1,710 units / 910 water homes + 800 sky pool suites" draft
  figure — flag if 1,734 turns out to be wrong, since the two don't reconcile.
- Site size — "80-acre 5-star resort development" (`/villas/`)
- Project GDV — "RM1.6 billion" (`/rental-programme/`)
- Distances — "KLIA 55 km · Kuala Lumpur 100 km · Malacca 80 km" (`/villas/`)
- Rental track record — "Rental honoured to owners across Lexis properties
  since 2006" (multiple pages)
- Tourism figure — "10.2 million guests... tourists from 186 countries...
  since 2006"
- Developer heritage — "Developer since 1996"
- Starting price — RM774,000 (confirmed by you)
- Foreign buyer eligibility — your exact wording, live on both LPs

Still open (genuinely no value to publish — **hidden from the live site**,
not shown as placeholder text):
- **Phase 1 sales status** — card removed entirely from both LPs' track-record
  grids (no verified current figure exists, and the unverified "~60% sold"
  draft number was deliberately not published)
- **Booking fee terms** — card removed from `/rental-programme/`
  purchase-process section
- **Panel bank list** — card removed from the same section (also
  deliberately excludes the zero-down/cashback/rebate mechanics from
  approved-facts.md §5, which are GRR-only per the master prompt's hard
  compliance rules — that restriction is unaffected by the default-trust
  policy change, since those are compliance-banned, not merely unverified)

## 4. Assumptions made (no explicit instruction — flag for review)

- **Image classification.** Files named `Hibiscus2 av*`, `LHPD2 - Lanscape
  *`, `H2 Type A new ID *`, `View 9`, `_TA View11/12` were treated as CGI
  renders and captioned "Artist impression." Files named `A - Bath *` /
  `A - Bed *` were treated as real Type A show-unit photography, parallel to
  the `showunit-*.jpg` set reused from `grr/lp/images/`. Not confirmed by
  the developer.
- **URL structure.** Folder-per-page (`/villas/index.html` etc.) for pretty
  URLs — confirmed working on Cloudflare Pages.
- **Tech stack.** Tailwind CSS via CDN script, not a compiled/purged build —
  fine functionally, worth revisiting only if the Lighthouse performance
  target isn't met (not yet measured).
- **Sky Pool Villa naming — superseded.** The master prompt (§1.3–1.4)
  described two distinct villa products, "Water Villa" and "Sky Pool Villa."
  Confirmed data from grrmalaysia.com/lp/villas shows only one product
  ("Type A") in two floor variants. All copy now follows Type A Upper/Lower.
  Flag if a second, genuinely distinct villa type actually exists.

## 5. Not yet done (out of scope for "Task 1 only," or requires tooling/human review)

- No Lighthouse run performed — mobile Performance ≥85 / Accessibility ≥90
  targets unverified.
- No WebP conversion (JPGs used with explicit width/height + lazy loading
  instead — no image-conversion tool available in this environment).
- Task 2 (grrmalaysia.com cleanup: removing old LP pages, adding the organic
  `/projects/lexis-hibiscus-2-grr/` page, 301 redirects) not started.
- Task 3's full QA/acceptance checklist not formally run item-by-item beyond
  the banned-words grep (below) — GTM preview verification, cross-device
  Lighthouse, and redirect testing all require Task 2 completion and/or
  live deploy.

## 6. Compliance self-check performed

Grepped rendered copy across `hibiscus2-site/**/*.html` for the banned-term
list in master-prompt §1.5 (percentage return figures, "guarantee"/
"guaranteed", "GRR", "zero downpayment", "cashback", "rebate", "investment",
"investor", "yield", "passive income", "ROI", "break even", "capital
appreciation"). Zero matches in visible copy — re-run 2026-07-10 after the
placeholder cleanup, still clean.
