# i18n/string-inventory.md — Phase 0 Pre-Flight

Full inventory of every `.html` page, every user-facing string in shared JS,
and every meta/OG/alt-text string in `hibiscus2-site/`, produced before any
translation work begins (per `claude-code-prompt-multilingual.md` §1.2).

EN commit this inventory was taken from: see `git log -1 --format=%H` on
branch `i18n-phase0` at the point of the Phase 0 commit.

---

## 1. PAGE INVENTORY

9 pages under `hibiscus2-site/`. Slugs stay in English in every language (§2).

| # | EN path | Robots | In sitemap.xml? | Notes |
|---|---|---|---|---|
| 1 | `/` (`index.html`) | index, follow | yes (1.0) | Home |
| 2 | `/about/` | index, follow | yes (0.6) | Consultant bio |
| 3 | `/contact/` | index, follow | yes (0.6) | Lead form |
| 4 | `/villas/` | **noindex, nofollow** | no | Ads landing page |
| 5 | `/rental-programme/` | **noindex, nofollow** | no | Ads landing page — STOP-GATE page (§5) |
| 6 | `/privacy-policy/` | index, follow | yes (0.2) | Legal |
| 7 | `/disclaimer/` | index, follow | yes (0.2) | Legal |
| 8 | `/thank-you/` | noindex, nofollow | no | Form redirect target |
| 9 | `/404.html` | noindex, nofollow | n/a (no canonical/hreflang — error page) | No canonical tag present |

`sitemap.xml` currently has 5 `<url>` entries (home, about, contact,
privacy-policy, disclaimer) — matches the indexable pages. `/villas/` and
`/rental-programme/` are intentionally excluded (noindex ad landing pages);
`/thank-you/` and `/404.html` are correctly excluded as non-canonical
destinations.

---

## 2. META / OG / TITLE PER PAGE (all require translation per §3.4)

| Page | `<title>` | meta description | og:title | og:description |
|---|---|---|---|---|
| `/` | Lexis Hibiscus 2, Port Dickson \| Private-Pool Resort Villas | Lexis Hibiscus 2 is a 5-star resort development in Port Dickson with private-pool villas, managed by the award-winning Lexis Hotel Group. Ownership from RM774,000. | Lexis Hibiscus 2, Port Dickson | A 5-star resort development in Port Dickson with private-pool villas, managed by Lexis Hotel Group. |
| `/about/` | About Your Consultant \| Lexis Hibiscus 2, Port Dickson | Meet the authorised real estate negotiator marketing Lexis Hibiscus 2 in Port Dickson — experience, credentials and how to arrange a private consultation. | About Your Consultant — Lexis Hibiscus 2 | Meet the authorised real estate negotiator marketing Lexis Hibiscus 2, Port Dickson. |
| `/contact/` | Contact \| Lexis Hibiscus 2, Port Dickson | Contact our consultant about Lexis Hibiscus 2, Port Dickson — WhatsApp, email or book a private briefing at Bukit Bintang Showroom. | Contact — Lexis Hibiscus 2 | WhatsApp, email or book a private briefing at Bukit Bintang Showroom about Lexis Hibiscus 2, Port Dickson. |
| `/villas/` | Own a Villa at Lexis Hibiscus 2, Port Dickson \| Private-Pool Living | Overwater villas with private pools at Lexis Hibiscus 2, Port Dickson — managed by the award-winning Lexis Hotel Group. From RM774,000. | Own a Villa at Lexis Hibiscus 2, Port Dickson | Overwater villas with private pools at Malaysia's next landmark resort. Managed by Lexis Hotel Group. From RM774,000. |
| `/rental-programme/` | 15-Year Rental Programme \| Lexis Hibiscus 2, Port Dickson | Own a private-pool villa at Lexis Hibiscus 2, Port Dickson, under a structured 15-year rental programme managed by Lexis Hotel Group. Rental paid to owners since 2006. From RM774,000. | A 15-Year Managed Rental Programme — Lexis Hibiscus 2 | Structured 15-year rental programme, operator track record since 2006. Villas from RM774,000. |
| `/privacy-policy/` | Privacy Policy \| Lexis Hibiscus 2, Port Dickson | How we collect, use and protect your data when you enquire about Lexis Hibiscus 2, Port Dickson. | Privacy Policy — Lexis Hibiscus 2 | How we collect, use and protect your data when you enquire about Lexis Hibiscus 2. |
| `/disclaimer/` | Disclaimer \| Lexis Hibiscus 2, Port Dickson | Terms of use and marketing disclaimers for hibiscus2.com, covering Lexis Hibiscus 2, Port Dickson. | Disclaimer — Lexis Hibiscus 2 | Terms of use and marketing disclaimers for hibiscus2.com. |
| `/thank-you/` | Thank You \| Lexis Hibiscus 2, Port Dickson | Thank you for your enquiry about Lexis Hibiscus 2. Our consultant will be in touch on WhatsApp shortly. | Thank You — Lexis Hibiscus 2 | Thank you for your enquiry. Our consultant will be in touch shortly. |
| `/404.html` | Page Not Found \| Lexis Hibiscus 2, Port Dickson | This page could not be found. Explore Lexis Hibiscus 2 villas and the rental programme, or WhatsApp us directly. | — (no OG tags on 404) | — |

OG image is unchanged across all languages per §3.4 (only `render-hero-aerial.jpg` / `render-hero-tall.jpg` on rental-programme — no translation needed for these assets).

---

## 3. IMAGE ALT TEXT (translate per §5)

| Image | Page(s) | Alt text |
|---|---|---|
| render-hero-aerial.jpg | `/`, `/villas/` | Aerial artist impression of Lexis Hibiscus 2 resort, Port Dickson |
| render-type-a-1.jpg | `/`, `/villas/` (gallery) | Artist impression of villas at Lexis Hibiscus 2 |
| render-infinity-pool.jpg | `/`, `/villas/` | Artist impression of the resort pool at Lexis Hibiscus 2 / Artist impression of the infinity pool and feature pavilion at Lexis Hibiscus 2 (two different alt strings on the two pages) |
| joe-wong.png | `/about/` | Joe Wong (Wong See How), REN 51947, founder and director of Summerfield Property (M) Sdn. Bhd. |
| render-hero-tall.jpg | `/rental-programme/` | Artist impression of overwater villas at Lexis Hibiscus 2, Port Dickson, illuminated at night |
| floorplan-upper.jpg | `/rental-programme/`, `/villas/` | Type A Upper floor plan — 872 sq ft overwater villa with private pool, 2 bedrooms and 2 bathrooms |
| floorplan-lower.jpg | `/rental-programme/`, `/villas/` | Type A Lower floor plan — 858 sq ft overwater villa with private pool, 2 bedrooms and 2 bathrooms |
| showunit-exterior.jpg | `/villas/` | Type A show unit exterior at dusk |
| showunit-pool.jpg | `/villas/` | Private pool and deck of the Type A show unit |
| showunit-bed-1.jpg | `/villas/` | Bedroom of the Type A show unit |
| showunit-bed-2.jpg | `/villas/` | Second bedroom of the Type A show unit |
| showunit-bath-1.jpg | `/villas/` | Bathroom of the Type A show unit |
| render-pool-bar-night.jpg | `/villas/` | Artist impression of the floating pool bar at night, Lexis Hibiscus 2 |
| location-map.jpg | `/villas/` | Location map showing Lexis Hibiscus 2 in Port Dickson relative to Kuala Lumpur and KLIA |

All 20 inline WhatsApp SVG icons carry `aria-hidden="true"` — no alt/translation needed.

---

## 4. SHARED JS — USER-FACING STRINGS

### 4.1 `js/site-content.js` — CTA button-text config system: **CONFIRMED IMPLEMENTED**

Uses `data-text-key` on elements + `buttonText` object; on page load, matching
`[data-text-target]` span text is overwritten from the config:

```js
var buttonText = {
  whatsappPrimary: "Book a Private Viewing",
  requestCallback: "Request a Callback",
  formSubmit: "Request a Viewing Callback",
};
```

Per master doc §1.4: since this system **is** implemented, per-language
translations of these three strings go into a per-language copy of this
config file (e.g. `zh/js/site-content.js`), **not** inline JS text-swapping
of page content. The file's own header comment flags an invariant that must
be preserved per language: *"Keep in sync with the static fallback text
inside each `[data-text-target]` span — that fallback is what renders if
this script fails to load."* This means for every language, BOTH the
translated `buttonText` values in that language's `site-content.js` AND the
static fallback `<span data-text-target>` text baked into that language's
HTML must match, in that language.

These three strings are also the locked CTA set with official ZH/MS/JA
drafts in master doc §5 (all tagged `[REVIEW]`):
- `whatsappPrimary` → "Book a Private Viewing"
- `requestCallback` → "Request a Callback"
- `formSubmit` → "Request a Viewing Callback"

Note: the contact-page form submit button ("Send Enquiry") does **not** use
`data-text-key` / `formSubmit` — it's a plain hardcoded string, inconsistent
with villas/rental-programme forms which do use `data-text-key="formSubmit"`
on their submit buttons. Flagged as a pre-existing inconsistency, not a
Phase-0 fix (out of scope — EN content must not change beyond head tags,
switcher and optional banner per acceptance criteria §10).

### 4.2 `js/site.js` — hardcoded user-facing strings

| Location | String | Notes |
|---|---|---|
| Phone validation | `Enter a valid WhatsApp number so our consultant can reach you.` | `setCustomValidity` message — needs translation per language |
| — | WhatsApp number `60122970362` | Not translated — same number all languages |

WhatsApp prefill message is NOT in `site.js` — it's read per-page from
`data-wa-text` on `<body>` (see §5 below), then URL-encoded into the
`wa.me` link. This is the mechanism referenced in master doc §8.2
("WhatsApp href builder in shared JS: parameterize the prefill message per
language; keep the same number").

---

## 5. WHATSAPP PREFILL TEXT PER PAGE (`data-wa-text` on `<body>`)

| Page | `data-wa-text` |
|---|---|
| `/` | Hi, I'd like to book a private viewing for Lexis Hibiscus 2. |
| `/about/` | Hi, I'd like to book a viewing with Wong See How for Lexis Hibiscus 2. |
| `/contact/` | Hi, I'd like to book a private viewing for Lexis Hibiscus 2. |
| `/villas/` | Hi, I'd like to book a viewing and get villa pricing for Lexis Hibiscus 2. |
| `/rental-programme/` | Hi, I'd like to book a consultation for the full 15-year rental programme terms for Lexis Hibiscus 2. |
| `/privacy-policy/` | Hi, I'd like to book a private viewing for Lexis Hibiscus 2. |
| `/disclaimer/` | Hi, I'd like to book a private viewing for Lexis Hibiscus 2. |
| `/thank-you/` | Hi, I'd like to book a viewing — following up on my enquiry about Lexis Hibiscus 2. |
| `/404.html` | Hi, I couldn't find what I was looking for on the Lexis Hibiscus 2 website. |

Each must produce a native-language WhatsApp message per language (§5: "a
Chinese reader must open WhatsApp with a Chinese message ready").

---

## 6. NAVIGATION / HEADER (identical on all pages except `/thank-you/` and `/404.html`, which drop the full nav)

| Element | EN string |
|---|---|
| Logo link text | Lexis Hibiscus 2 |
| Nav link | Villas |
| Nav link | Rental Programme |
| Nav link | About |
| Nav link | Contact |
| Mobile toggle `aria-label` | Toggle menu |
| Nav CTA | (uses `data-text-key="whatsappPrimary"`) |
| Skip link | Skip to content |

---

## 7. FOOTER (identical on all 9 pages, incl. abbreviated version on 404)

| Block | EN string |
|---|---|
| Footer heading | Lexis Hibiscus 2 |
| Footer intro | Port Dickson, Negeri Sembilan — a 5-star resort development by KL Metro Property Development Sdn. Bhd. (Kuala Lumpur Metro Group), operated by Lexis Hotel Group. |
| Column heading | Explore |
| Footer links | Villas / Rental Programme / About the Consultant / Contact / Privacy Policy / Disclaimer |
| Column heading | Marketing Credentials |
| REN block (**verbatim, never translate** — §5) | REN: Wong See How · REN No. 51947 / Agency: Summerfield Property (M) Sdn. Bhd., reg. 200401009891 (648394-W) / Firm registration (LPPEH E-no.): E (3) 1305 / Developer: KL Metro Property Development Sdn. Bhd., reg. 201901040005 (1349335-X) |
| Venue line | Visit Us: Bukit Bintang Showroom (venue details to be confirmed) · Open daily, 10am – 4pm |
| Legal line 1 | Marketing by an authorised real estate negotiator. This is not the developer's official website. |
| Legal line 2 | Renders shown are artist impressions; final development may vary. This website is marketing material and does not constitute financial or investment advice — buyers should seek independent legal and financial counsel. Information correct at time of publication and subject to change. |
| Copyright | © 2026 Lexis Hibiscus 2. All rights reserved. |

404 footer uses only the two "Legal line" strings + copyright (shortened footer).

---

## 8. STICKY BAR & FLOAT BUTTON (all pages except thank-you/404, which omit both)

| Page | Sticky bar 2nd link | Type |
|---|---|---|
| `/`, `/about/`, `/disclaimer/`, `/privacy-policy/` | "Enquire" → `/contact/` | plain hardcoded link text |
| `/contact/`, `/rental-programme/`, `/villas/` | "Request a Callback" | `data-text-key="requestCallback"` |

Float WhatsApp button (`.float-wa`): same `data-text-key="whatsappPrimary"` CTA on every page (visually icon-only, but carries the same `data-text-target` fallback text for screen readers via the SVG being `aria-hidden` — actual accessible name comes from the visible span text).

`role="complementary" aria-label="Quick contact"` on the sticky bar — translate the aria-label.

---

## 9. FORMS (`/contact/`, `/rental-programme/`, `/villas/`)

Web3Forms-backed lead form. Field `name` attributes must NOT change (§8.3 — keeps GTM triggers intact); only visible labels/placeholders/options translate.

| Element | EN string | Translate? |
|---|---|---|
| `<label for="name">` | Name | yes |
| `<label for="phone">` | WhatsApp Number | yes |
| Country-code `aria-label` | Country code | yes |
| Country-code option | Other | yes |
| Phone `placeholder` | 12 345 6789 | no (format same all languages, keep Western digits) |
| `<label for="buyer">` | Buyer Type | yes |
| Buyer-type placeholder option | Select one | yes |
| Buyer-type option | Malaysia Buyer | yes |
| Buyer-type option | Singapore Buyer | yes |
| Buyer-type option | Overseas Buyer | yes |
| Buyer-type option | MM2H Participant | yes (keep "MM2H" acronym, translate "Participant") |
| Buyer-type option | Others | yes |
| Submit button (contact page) | Send Enquiry | yes |
| Submit button (villas/rental-programme, `data-text-key="formSubmit"`) | Request a Viewing Callback | yes — via `buttonText` config (§4.1) |
| Botcheck `<label>` (visually hidden) | Leave empty | yes |
| Privacy note | Your details are used only to respond to this enquiry. See our Privacy Policy. | yes (keep link pointing at that language's `/privacy-policy/`) |
| Validation message (`js/site.js`) | Enter a valid WhatsApp number so our consultant can reach you. | yes |

Hidden fields (`access_key`, `subject`, `lp_variant`, `redirect`, UTM fields, `gclid`, `botcheck`) — **not translated**; `subject` value ("LH2 Enquiry — Contact page" etc.) is an internal email-routing string sent to the consultant, EN is fine to keep as-is unless Keith wants per-language routing subjects (flagged, not decided).

---

## 10. FAQ CONTENT (`/villas/`, `/rental-programme/` — both inline `.faq-item` markup AND duplicate `FAQPage` JSON-LD)

Both pages carry a **duplicate copy** of each FAQ Q&A: once in the visible `.faq-item` HTML, once in the `<script type="application/ld+json">` FAQPage block. Both must be translated and kept in sync per language — the JSON-LD is what search engines read for rich results, so it needs a valid non-English `mainEntity` per language too (schema.org `FAQPage` accepts any language; page `lang` attribute governs it).

### `/villas/` FAQ (6 Q&A)
1. Can I use the villa myself?
2. Who maintains and furnishes it?
3. What villa types and sizes are available?
4. Starting price and payment process? (JSON-LD name differs slightly: "What is the starting price and payment process?")
5. Can foreigners buy?
6. How do I arrange a viewing or consultation?

### `/rental-programme/` FAQ (6 Q&A)
1. What happens after the first 3 years? (JSON-LD: "...of the rental programme?")
2. Can I stay in my own villa?
3. Who manages the unit?
4. Can I exit the programme?
5. Can foreigners buy?
6. How do I verify the developer's track record?

(Full question/answer text — see source HTML/JSON-LD directly; both are lengthy and compliance-adjacent, so every FAQ answer on `/rental-programme/` is REVIEW-gated per §5.)

---

## 11. RENTAL-PROGRAMME 6-CARD GRID (§5 explicit translate target)

"How the Programme Works" grid on `/rental-programme/` (6 cards, icon + heading + body):
1. Structured 15-Year Rental Programme — A long-term programme with clear phases, set out in the official tenancy agreement.
2. Operator Covers Upkeep & Outgoings — Furnishing, maintenance and daily operations are fully handled for you.
3. Rental Track Record Since 2006 — Backed by an operator with a rental payment history across Lexis properties.
4. 10 Complimentary Owner Nights a Year — Your villa is also your family's annual resort retreat.
5. Flexible Exit With Written Notice — Owners may end the tenancy with advance written notice.
6. Managed by Lexis Hotel Group — An award-winning operator overseeing daily resort operations.

---

## 12. BODY COPY / HEADINGS / CTAs — PER PAGE

Full page-by-page body copy (H1/H2/H3, paragraphs, trust-badge grids, proof
grids) is translatable per §5 in its entirety; not reproduced string-by-
string here since it is simply "everything visible in `<main>`" on each of
the 9 pages, already captured page-by-page in the source HTML read during
this inventory pass. Highlights requiring special handling:

- **Legal notices repeated verbatim across pages** (§5 "footer text" +
  inline `border-l-4 border-gold` disclosure boxes on `/about/`,
  `/contact/`, `/rental-programme/` ×2, `/villas/` ×1) — same EN string,
  translate once, reuse.
- **Disclaimer (`/disclaimer/`) and Privacy Policy (`/privacy-policy/`)**
  are the longest pages (8 numbered sections each) — full legal-register
  translation required, both flagged `[REVIEW]` per §5 (compliance-adjacent
  = footer/legal text).
- **"Last updated: 10 July 2026"** on both legal pages — translate the date
  format per language convention but keep the same date (this is an EN
  source-of-truth date, not something to relocalize to translation date).

---

## 13. PRICE FIGURE STATUS (§1.3)

RM774,000 confirmed as the sole permitted starting-price figure in all four
languages. Grep of the full repo (excluding `grr/` and AppleDouble `._*`
files) found:
- **Live site** (`hibiscus2-site/`): already 100% on RM774,000 — no changes
  needed.
- **`approved-facts.md`**: 1 stale row (`Starting price | from RM720,000`)
  → fixed to RM774,000, `[VERIFY]` flag removed, status set to `[OK]`.
- **`hibiscus2-master-prompt.md`**: 5 stale instances of RM720,000 across
  §1.3 (Landing Page 1) and §1.4 (Landing Page 2) → all fixed to
  RM774,000.

No other file in the repo (outside `grr/`, which is out of scope per §0)
referenced the stale figure.

---

## 14. OPEN ITEMS FOR TRANSLATION PHASES (not blocking Phase 0)

- Per-language `site-content.js` copies needed once JS text-config
  translation begins (§4.1).
- Contact-page submit button should probably adopt `data-text-key="formSubmit"`
  for consistency before/during translation, so all three languages don't
  have to special-case one hardcoded EN string — flag for Keith, not
  auto-fixed in Phase 0 (EN content freeze per acceptance criteria §10).
- `/404.html` has no canonical/hreflang tags at all (it's an error page,
  not a real content page) — Phase 0 hreflang plumbing (§3) is being
  applied to the 9 indexable/functional pages; 404 is intentionally left
  without hreflang/canonical since it isn't a real URL.
