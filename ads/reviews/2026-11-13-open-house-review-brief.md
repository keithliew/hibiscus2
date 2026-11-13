# Brief: open house landing page, Display banners and targeting (13 Nov 2026)

You are an independent senior conversion-rate and Google Display specialist. This is a review only: **change no files, no website and nothing in Google Ads.** Write your answer as Markdown.

## The business
hibiscus2.com is a property agent's marketing site for new villas at **Lexis Hibiscus 2, Port Dickson, Malaysia**: 2-bedroom overwater villas (Type A Upper 872 sq ft, Type A Lower 858 sq ft), each with a private pool, from RM860,000, developed by KL Metro Property Development (Kuala Lumpur Metro Group) and run by Lexis Hotel Group under a 15-year rental programme. The agent is Joe Wong (REN 51947) of Summerfield Property. The existing Lexis Hibiscus resort next door holds two Guinness World Records (most swimming pools in a resort; most overwater villas at a single resort, verified 14 Oct 2016).

**Facts:** the only source of truth is `approved-facts.md` in the project root (`/Volumes/Ext Drive/website-projects/hibiscus2/`). Read it. Any claim that isn't in it must be written as `[INSERT: …]`. Track-record facts belong to the EXISTING resort, never to Lexis Hibiscus 2.

## The event
Lexis Hibiscus 2 Property Open House, Deepavali Edition. **Friday 20 November 2026, 1pm to 5pm, Imperial Lexis Kuala Lumpur, 7th floor, 15 Jalan Kia Peng, 50450 KL. Free admission.** What visitors get (as listed on the page): a project presentation, one-to-one consultations, refreshments and festive treats, a complimentary Deepavali sweet gift. It was first set for 13 Nov at another venue and was moved. The agent's own Eventbrite and Eventsize listings have 17 registrations so far.

## The goal
More **form registrations** for this one event from KL/Selangor people who might buy, in the **7 days left** (13 to 20 Nov) on a **RM300 total** Display budget. Any split test must be set up within a day or two to read anything at all. Be realistic about what RM300 and 7 days can prove.

## What exists now (read these files)
- Landing page (live since 13 Nov): `hibiscus2-site/events/deepavali-open-house-2026/index.html`, URL https://hibiscus2.com/events/deepavali-open-house-2026/ . Order of content: breadcrumb, H1, a coral "New date and venue" notice, When/Where/Admission box, two buttons (Register for Free → #register, Register on WhatsApp), intro paragraph, "What to expect" list, a 1000x1000 event flyer image, "at a glance" facts, then the registration form at the bottom (first name, last name, WhatsApp number with country code, optional email, number of people, arrival time slot). Mobile has a sticky bar (Register on WhatsApp / Register) and a floating WhatsApp button. Page uses Tailwind CDN and `css/site.css`.
- Thank-you page: `hibiscus2-site/events/deepavali-open-house-2026/registered/index.html`.
- Tracking: `hibiscus2-site/js/site.js`. Loading the thank-you page fires `lead_form_submit` with `lp_variant: open-house` (this is the Google Ads conversion). WhatsApp messages are pre-filled and end "Ref: OH20-EN-AD" (visitor came from an ad) or "Ref: OH20-EN-WEB".
- Current banners: `ads/creative/2026-11-open-house/` — `square.html` and `wide.html` (1200x1200 and 1200x628, rendered to the two PNGs there), styles in `common.css`, background `bg.jpg` = the Lexis Hibiscus 2 aerial render (hibiscus-flower-shaped water villas). They read: "LEXIS HIBISCUS 2 · PORT DICKSON / Deepavali Edition / Property Open House / Friday, 20 November 2026 · 1pm to 5pm / Imperial Lexis Kuala Lumpur, 7th floor / FREE ADMISSION / Artist's impression". Look at the PNGs.
- Other images available in `hibiscus2-site/images/` (renders `render-*.jpg`, show unit photos `showunit-*.jpg`, the existing resort aerial `lexis-hibiscus-pd-aerial.jpg` credited "Photo: Kuala Lumpur Metro Group", consultant photo `joe-wong.png`).

## The campaign (published 13 Nov 2026, account 421-009-0766)
"Display - Open House 20 Nov (RM300 total)", ID 24461928203, objective Leads.
- 13 to 20 Nov, RM37 a day (about RM296 max). Bidding: Maximise clicks (no conversion history yet).
- Locations: Federal Territory of Kuala Lumpur and Selangor, people located in (presence) only. Languages: English, Malay, Chinese (simplified).
- Audiences: in-market Residential Properties (For Sale), Houses, Apartments, New Apartments (For Sale). Optimised targeting OFF.
- Excluded: All Apps (mobile app category 69500). Not otherwise limited.
- One responsive display ad (RDA) using the two banners. Headlines: "Property Open House, 20 Nov" / "Lexis Hibiscus 2 Open House" / "Free Entry, Imperial Lexis KL" / "Villas for Sale From RM860,000" / "Fri 20 Nov, 1pm to 5pm". Long headline: "Lexis Hibiscus 2 Property Open House: Fri 20 Nov, 1pm to 5pm at Imperial Lexis KL". Status: Eligible (Learning); the ad is still under Google review.

## Hard rules
- Banned on hibiscus2.com and in these ads (case-insensitive): any percentage or return figure, "guaranteed", "GRR", "cashback", "rebate", "zero downpayment", "investment"/"invest", "yield", "ROI", "passive income", "break even", "capital appreciation". Never link to or mention grrmalaysia.com. Watch words to avoid: profit, income, returns, landmark, largest.
- Do not borrow wording from the agent's Eventbrite page (it says "investment information" and has the old venue).
- Any banner using a render must carry "Artist's impression".
- Keep buyers, filter out holiday-makers: make clear this is a property sales event, not a hotel stay or a free holiday giveaway.
- No facts beyond approved-facts.md: no scarcity claims ("only X left", "selling fast") unless approved; no invented gifts, lucky draws or prizes.
- Google personalised-ads policy: no targeting or copy that implies knowledge of the viewer's personal finances.

## What to deliver (three parts, then a summary)

### 1. Landing page: ranked changes to get more form registrations
Read the source. Give up to 8 changes ranked by expected effect on registrations for **cold Display traffic on a phone**, each with: what to change, why, and effort (S/M/L). Include whether the "New date and venue" notice helps or hurts for people who never saw the old date, form length (which fields to keep), what sits above the fold on a 390px-wide phone, and the thank-you page (e.g. add-to-calendar, directions, ask to bring a friend). Then describe one **mockup** of the improved mobile page top to bottom (section by section with exact copy), so it can be built as HTML. All copy from approved facts.

### 2. Banner variants to A/B test against the current pair
Propose **2 or 3 alternative concepts**, each a single clear hypothesis different from the current one (for example: lead with the villa and private pool instead of the event; lead with the free festive visit and a Register CTA; a people/consultant angle; price-led "from RM860,000"). For each: hypothesis, which background image, exact text on the square (1200x1200) and the wide (1200x628) versions, CTA text, layout notes. Remember Display banners appear small: say what must still read at 300x250. Then say exactly **how to run the test inside this campaign** on RM37 a day: same RDA with more images vs a second RDA vs uploaded image ads; what you'd compare (CTR, cost per registration), and how much data RM300 can realistically produce.

### 3. Targeting plan
Assess the current settings and say what you would change today for the remaining days, ranked. Consider: Maximise clicks on Display (junk/accidental clicks), switching to Maximise conversions or a CPC cap, the in-market audiences (keep, add custom segments e.g. people searching "Lexis Hibiscus", "Port Dickson villa for sale", or visiting competitor property sites), remarketing to hibiscus2.com visitors if a list exists (`[INSERT]` if unknown), content/placement exclusions (games, kids, parked domains, below-the-fold), frequency cap, ad schedule (the event is a Friday afternoon), location radius around Imperial Lexis vs all of KL+Selangor, languages, device bids. Also say whether to move some of the RM300 to the running Search campaign instead. State any risk.

### Summary
End with the **top 3 changes across all three parts, in priority order**, in plain English for a business owner who is not a marketer, each with what it costs in time and money.
