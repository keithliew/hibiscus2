# MASTER PROMPT — Build hibiscus2.com (Google Ads Domain) & Update grrmalaysia.com

## ROLE

You are acting as a senior web developer and conversion copywriter building a
Google Ads-compliant property marketing website for a registered Malaysian real
estate negotiator (REN) marketing **Lexis Hibiscus 2, Port Dickson** (LHPD2).

Two domains exist with strictly separated jobs:

| Domain | Purpose | Indexing |
|---|---|---|
| **hibiscus2.com** | Paid traffic only (Google Ads landing pages + minimal trust pages) | Landing pages `noindex`; trust pages indexable |
| **grrmalaysia.com** | Organic SEO / AI-SEO content hub (full figures, comparisons, GRR content) | Fully indexable |

**CRITICAL COMPLIANCE CONTEXT:** Google enforces Financial Services
Verification (FSV) in Malaysia (since 14 Apr 2026). The advertiser cannot pass
FSV, so hibiscus2.com must read as a REAL ESTATE site, never an INVESTMENT
site. Every word choice on hibiscus2.com follows the Hard Compliance Rules
below. grrmalaysia.com is not ad-served and may carry full programme figures.

---

## TASK 1 — Build hibiscus2.com

### 1.1 Tech stack

- Static site: HTML + Tailwind CSS (CDN or compiled), vanilla JS only.
  No frameworks unless the existing grrmalaysia.com codebase dictates otherwise.
- Mobile-first (majority of WhatsApp-driven property traffic is mobile).
- Target Lighthouse mobile: Performance ≥ 85, Accessibility ≥ 90.
- All images lazy-loaded, WebP with JPEG fallback, explicit width/height.
- One shared CSS/JS bundle; no render-blocking third-party scripts except GTM.

### 1.2 Site structure (8 pages)

```
/                     Home (brief brand page, routes users to the two LPs)
/villas               LANDING PAGE 1 — Lifestyle (primary Google Ads destination)
/rental-programme     LANDING PAGE 2 — Programme/ownership (secondary Ads destination)
/about                About the consultant (REN identity, experience, photo)
/contact              Contact details, WhatsApp, office/meeting location (Bukit Bintang Showroom + Port Dickson briefings)
/privacy-policy       Required — lead data collection + GTM/GA4 disclosure
/disclaimer           Terms of use + property marketing disclaimers
/thank-you            Form-submission success page (Google Ads conversion trigger)
404                   Custom 404 with WhatsApp CTA
```

### 1.3 Landing Page 1 — `/villas` (lifestyle emphasis)

Build from the approved "Variant B" outline with these sections in order:

1. **Hero** — Headline: "Own a Luxury Overwater or Sky Pool Villa at Lexis
   Hibiscus 2". Subheadline: private-pool villas at Malaysia's next landmark
   resort in Port Dickson, professionally managed by the award-winning Lexis
   Hotel Group, ownership from RM774,000. Trust badges: 2× Guinness World
   Records · Award-winning Lexis hospitality brand · Developer since 1996 ·
   From RM774,000. Primary CTA: WhatsApp Our Consultant. Secondary CTA: Book
   Private Consultation (form).
2. **Villa options** — Water Villa and Sky Pool Villa comparison cards,
   lifestyle-first copy (space, privacy, private pool, family suitability),
   price shown but not leading. Use `[INSERT: ...]` placeholders for sizes,
   bed configs, verified starting prices per type.
3. **Resort experience & location** — 80-acre 5-star development adjacent to
   the existing Lexis Hibiscus; every villa with private pool; drive times
   KLIA 55 km · KL 100 km · Malacca 80 km; 10 complimentary owner nights per
   year framed as "your family's annual retreat". Gallery of 4–6 renders,
   each visibly captioned "Artist impression".
4. **Developer track record** — proof grid: 2× Guinness World Records; KL
   Metro Group established 1996; 10.2 million tourists from 186 countries
   across Lexis resorts since 2006; 60+ international awards; rental paid to
   owners since 2006 across Lexis properties (listed fourth, not first);
   Phase 1 sales status `[INSERT: verified current figure]`.
5. **Ownership convenience** — the rental programme framed as convenience,
   NOT yield. Approved copy pattern: "Your villa is furnished, maintained and
   operated by Lexis Hotel Group under a structured 15-year rental programme —
   a fixed rental phase for the first three years, followed by a
   profit-sharing phase for the remaining twelve. You enjoy the resort and
   the rental income; the operator handles everything else."
   **Do NOT state any percentage.** CTA: "Request Full Programme Terms"
   (WhatsApp or form). Disclosure line directly beneath (see 1.6).
6. **FAQ** (with FAQPage JSON-LD): Can I use the villa myself? (10 nights) ·
   Who maintains and furnishes it? · Villa types and sizes? · Starting price
   and payment process? · Can foreigners buy? `[INSERT: verified foreign
   ownership guidance]` · How do I arrange a viewing/consultation?
   (private briefing at Bukit Bintang Showroom or Port Dickson).
7. **Final CTA** — "Your Villa at Lexis Hibiscus 2 Starts With a
   Conversation". Primary WhatsApp, secondary enquiry form.

### 1.4 Landing Page 2 — `/rental-programme` (programme emphasis, COMPLIANT version)

This is NOT a copy of the grrmalaysia.com investment page. It is a rewritten,
figure-gated version:

1. **Hero** — Headline: "A 15-Year Managed Rental Programme — Own a Private
   Pool Villa at Lexis Hibiscus 2". Subheadline: hospitality-managed resort
   property in Port Dickson with a structured 15-year rental programme;
   operator track record since 2006; villas from RM774,000. Trust badges:
   15-Year Rental Programme · Rental paid to owners since 2006 · 2× Guinness
   World Records · From RM774,000.
2. **How the programme works** — structural description only, no percentages:
   - Years 1–3: fixed rental phase, paid quarterly; developer covers
     maintenance charges and sinking fund.
   - Years 4–15: profit-sharing phase, paid monthly, apportioned among
     participating owners.
   - 10 complimentary nights per year; fully managed by the operator; owner
     may exit with 3 months' written notice.
   - Gate the numbers: card reading "Request the full programme terms,
     current pricing and the 15-year projection — sent via WhatsApp with the
     official documentation." CTA button: WhatsApp.
3. **Operator track record** — same proof grid as /villas but with
   "rental paid since 2006" listed first.
4. **Villa options & pricing** — same two cards as /villas section 2, plus
   project scale line: 1,710 units — 910 water homes, 800 sky pool suites;
   completion targeted mid-2029; RM1.6 billion GDV.
5. **Purchase process** — From RM774,000; bank end-financing available
   `[INSERT: panel banks if approved]`; booking fee `[INSERT: verified current
   terms]`; foreign buyers welcome `[INSERT: verified guidance]`.
   **Do NOT mention zero downpayment, cashback, or rebates.**
6. **FAQ** (FAQPage JSON-LD): What happens after the first 3 years?
   (structural answer, no %) · Can I stay in my own villa? · Who manages the
   unit? · Can I exit the programme? (3 months' notice) · Can foreigners
   buy? · How do I verify the developer's track record? (private briefing at
   Bukit Bintang Showroom with full documentation).
7. **Final CTA** — "Review the Full Programme Terms Before You Decide" —
   request official brochure, current pricing, private consultation at
   Bukit Bintang Showroom, no obligation.

### 1.5 HARD COMPLIANCE RULES — hibiscus2.com (non-negotiable)

Words/claims that must NOT appear anywhere on hibiscus2.com:

- Any percentage return figure: "8%", "6.5%", "11.5%", "24% return",
  "10.2% net", or any p.a./yield number
- "Guaranteed", "guarantee", "GRR", "guaranteed rental return"
- "Zero downpayment", "cashback", "rebate", "no money down"
- "Investment", "investor", "yield", "passive income", "ROI",
  "break even", "capital appreciation" (use "ownership", "rental
  programme", "rental income", "leaseback" instead)
- Projection tables, working examples, loan-repayment tables
- Comparative testimonials referencing returns or other developers
- Fake urgency: countdown timers, "only X units left" (the only urgency
  permitted is the verified factual Phase 1 sales status)

Required on every page of hibiscus2.com:

- Footer compliance block: agency/firm name, firm registration number,
  REN name + REN number `[INSERT]`; developer name and advertising
  permit/licence details `[INSERT: as provided by developer/Summerfield]`;
  "Marketing by an authorised real estate negotiator. This is not the
  developer's official website."
- "Artist impression" caption on every render
- Programme disclosure line (see 1.6) wherever the rental programme is
  described
- No links from /villas or /rental-programme to grrmalaysia.com

### 1.6 Standard disclosure line (verbatim, styled visibly, never below-fold-hidden)

> "Programme details are subject to the official sale and tenancy/leaseback
> agreements. Rental programme terms, availability and conditions may change
> according to official agreements and project requirements. Interested
> buyers should review the complete terms with the authorised sales
> representative before making any decision."

### 1.7 Shared components

**Lead form** (both landing pages):
- Fields: Name · WhatsApp number (intl country-code selector, default +60,
  include +65 / +852 / +86 prominently) · Buyer type dropdown: Malaysia
  Buyer / Singapore Buyer / Overseas Buyer / MM2H Participant / Others
- Submit → redirect to `/thank-you`
- Web3Forms endpoint, access key placeholder `[WEB3FORM_ACCESS_KEY]`
- Honeypot field + basic client-side validation

**Sticky CTA:**
- Mobile: bottom bar — WhatsApp (primary) + Enquire (scrolls to form)
- Desktop: floating WhatsApp button
- WhatsApp deep links `https://wa.me/[WHATSAPP_NUMBER]?text=` with pre-filled
  text per page (doubles as lead-source tag):
  - /villas: "Hi, I'd like more information on Lexis Hibiscus 2 villas."
  - /rental-programme: "Hi, I'd like the Lexis Hibiscus 2 rental programme
    details."
  - Home/other pages: "Hi, I'd like to know more about Lexis Hibiscus 2."

**Tracking (GTM container on all pages):**
- Events: `whatsapp_click` (primary Ads conversion) ·
  `lead_form_submit` (fires on /thank-you) ·
  `programme_details_request` (programme CTA clicks)
- Placeholders: `[GTM_ID]` `[GA4_MEASUREMENT_ID]`
  `[GOOGLE_ADS_CONVERSION_ID]` `[GOOGLE_ADS_CONVERSION_LABEL]`
- Add UTM parameter pass-through into the Web3Forms payload (hidden fields:
  utm_source, utm_medium, utm_campaign, utm_term, gclid).

### 1.8 SEO/indexing rules for hibiscus2.com

- `/villas`, `/rental-programme`, `/thank-you`: `<meta name="robots"
  content="noindex, nofollow">` — permanently, not just during testing.
- Home, /about, /contact, /privacy-policy, /disclaimer: indexable, with
  clean titles/descriptions mentioning "Lexis Hibiscus 2" and "Port Dickson".
- robots.txt allowing all (noindex handled at meta level so Googlebot ads
  crawler can still fetch the landing pages).
- sitemap.xml containing only the indexable pages.
- OpenGraph tags on all pages (for WhatsApp link previews — important since
  leads share links in chats).

### 1.9 Content-uniqueness requirement

All copy on hibiscus2.com must be REWRITTEN — same verified facts, different
sentences, headings and structure from grrmalaysia.com. Target: no copied
paragraph of more than one sentence. Images/renders may be reused (label as
artist impressions). Rationale: avoid duplicate-content dilution and avoid
the ads domain being an obvious mirror of the GRR-branded site.

---

## TASK 2 — Update grrmalaysia.com

1. **Remove** the two ad landing pages (Variant A `/rental-programme` and
   Variant B `/villas`) from grrmalaysia.com AFTER hibiscus2.com equivalents
   are built and verified working.
2. **Preserve the investment content:** convert the Variant A material
   (8% p.a. figures, 24%/3-year maths, 11.5% average projection, working
   examples, occupancy/ADR history, loan-repayment illustrations) into an
   ORGANIC content page, e.g. `/projects/lexis-hibiscus-2-grr/`, structured
   for SEO/AI-SEO: proper H1–H3 hierarchy, HTML tables (not images) for all
   figures, FAQPage + Article JSON-LD, date-stamped "figures as provided in
   developer sales kit dated [DATE]", full disclaimer block adjacent to every
   figures table. Testimonial included ONLY if written permission is on file
   (`[VERIFY]`), with a "past performance does not guarantee future results"
   line adjacent.
3. **301 redirects:** old grrmalaysia.com landing-page URLs →
   `/projects/lexis-hibiscus-2-grr/` (NOT to hibiscus2.com — keep domains
   one-way separated).
4. grrmalaysia.com MAY link out to hibiscus2.com (e.g. "enquire about this
   project"), but hibiscus2.com must never link back to grrmalaysia.com.
5. Do not remove or alter any other grrmalaysia.com content.

---

## TASK 3 — QA & Acceptance checklist (run before declaring done)

- [ ] Grep hibiscus2.com build output for banned strings: `%`-adjacent
      return figures, "guarantee", "GRR", "cashback", "zero down",
      "investment", "yield", "ROI", "passive income" — zero matches in
      rendered copy (attribute/asset filenames excluded).
- [ ] Disclosure line present adjacent to every programme description.
- [ ] Footer compliance block on all 8 pages.
- [ ] Every render captioned "Artist impression".
- [ ] noindex verified on /villas, /rental-programme, /thank-you.
- [ ] No `<a href>` to grrmalaysia.com anywhere on hibiscus2.com.
- [ ] Forms submit → /thank-you fires `lead_form_submit`; WhatsApp buttons
      fire `whatsapp_click`; verify in GTM preview.
- [ ] UTM/gclid hidden fields populate into form payload.
- [ ] Mobile layout verified at 360px and 390px widths; sticky bar does not
      cover form fields or footer disclosures.
- [ ] Lighthouse mobile: Performance ≥ 85, Accessibility ≥ 90.
- [ ] All `[INSERT]` / `[VERIFY]` placeholders either filled from the
      approved-facts file or left clearly marked and listed in a final
      "PENDING ITEMS" report.
- [ ] 301 redirects on grrmalaysia.com tested; old URLs return 301 →
      correct destination.
- [ ] WhatsApp link previews (OG tags) render correctly.

## OUTPUT EXPECTED FROM CLAUDE CODE

1. Complete hibiscus2.com static site in a deployable folder/repo.
2. Patch/diff or updated files for grrmalaysia.com (landing-page removal,
   new organic project page, redirect rules for the relevant server:
   `[INSERT: hosting type — cPanel .htaccess / Netlify _redirects /
   Cloudflare Pages]`).
3. `PENDING-ITEMS.md` listing every unfilled placeholder and every claim
   still awaiting developer verification.
4. `DEPLOY.md` with deployment steps for the specified hosting.

## APPROVED FACTS FILE

All factual claims must come from `approved-facts.md` (provided alongside
this prompt). If a fact is not in that file, use an `[INSERT]` placeholder —
never improvise figures, dates, prices, bank names or legal details.
