# 1. Landing page: ranked changes

**Put the property, price, event details and a short form together near the top.** For this budget and deadline, that is more useful than a major redesign or a landing-page split test.

I reviewed `approved-facts.md`, both event pages, the shared CSS and JavaScript, and both banner PNGs. Nothing was changed. Campaign settings below are assessed from your brief; I did not inspect Google Ads.

**Copy limitation:** the approved file confirms the event’s date, venue and free admission. It does not approve the presentation, consultations, refreshments, festive treats or sweet gift. Those need `[INSERT: …]` placeholders despite appearing on the current page.

Effort: **S** = roughly under an hour; **M** = a few hours; **L** = a day or more, depending on implementation.

| Rank | What to change | Why it should help cold mobile visitors | Effort |
|---|---|---|---|
| **1** | **Move the form directly below a compact introduction and event details.** Put the flyer and detailed project facts beneath it. | The current form follows several screens of content. Visitors should be able to register once they understand what is being sold and where the event happens. | M |
| **2** | **Show “2-bedroom villas with private pools · From RM860,000” before the first registration button.** Clearly distinguish the property in Port Dickson from the event in KL. | The current introduction feels more like an event invitation than a property purchase enquiry. Early price and product information should filter holiday enquiries and improve buyer relevance, even if clicks or raw registrations fall. | S |
| **3** | **Require only Name and WhatsApp number.** Replace first/last name with one field. Remove email from the initial form; ask party size and arrival preference after submission. | Last name, email and scheduling decisions add work before the visitor has committed. If arrival time must remain, make it optional and default to “Not sure yet.” | M |
| **4** | **Make form registration the dominant action everywhere.** Use a full-width “Register for Free” button; make WhatsApp a smaller “Questions? WhatsApp Joe Wong” link. Reverse the current sticky-bar emphasis. | The gold WhatsApp button currently receives greater prominence than the form button. That works against the stated goal. Keep WhatsApp available for questions without presenting two competing registration routes. | S |
| **5** | **Demote the coral rescheduling notice to a small expandable note below the form.** Remove “new date” emphasis from the title and social description. Preserve accurate rescheduling metadata. | It helps people who saw the original invitation. For a first-time visitor, the old date adds confusion and consumes valuable space. Default to the current details; retain an accessible correction for returning visitors. | S |
| **6** | **Place Joe Wong’s name, REN number and agency beside the form.** Use a small consultant photo if space allows. | Cold visitors need to know who receives their number. The existing credentials are largely buried in the footer. Avoid unsupported response-time promises. | S |
| **7** | **Reduce mobile bulk.** Remove the large top padding, avoid nested form padding, move the square flyer below the form and lazy-load it. Ensure the sticky bar cannot cover inputs or the submit button. | On a narrow phone, spacing and duplicated flyer information make the journey longer. Tailwind CDN and external fonts are also worth checking, but a build-system overhaul is a lower priority this week. | M |
| **8** | **Make the thank-you page useful for attendance:** calendar, directions, optional party size/arrival preference and sharing with a friend. Remove language links that lead to generic enquiry thank-you pages. | These changes mainly improve attendance after registration. They should come after the registration improvements above. | M |

### What currently sits above the fold

A 390px width alone does not determine the fold; screen height and browser controls also matter.

From the source, a typical **390 × 844** viewport will be dominated by the 64px header, 64px article padding, breadcrumb, wrapping H1, coral notice and vertically stacked event-details box. The inline registration buttons are likely near or below the usable fold; the form is much farther down. This is a source-based estimate, not a rendered mobile measurement.

Two useful corrections to the brief:

- The mobile sticky bar appears immediately on this page because there is no `.hero` element.
- The floating WhatsApp button is **hidden below 768px**. On mobile, the competing action is the sticky WhatsApp button.

### One buildable mobile mockup

Use 20px side padding, a compact header, 16px body text and input text, visible field labels, and buttons at least 48px tall. Aim to show the event essentials, registration action and start of the form within the first screen. Do not squeeze everything into tiny type.

The quoted text below is proposed visible copy. Bracketed items require approval before publication.

**1. Compact header**

> Lexis Hibiscus 2

Keep the landing page focused; place wider site navigation in the footer.

**2. Property and event introduction**

> **Property Open House**  
> Lexis Hibiscus 2 · Deepavali Edition  
>
> 2-bedroom villas with private pools in Port Dickson  
> **From RM860,000**

**3. Compact event card**

> **Friday 20 November 2026**  
> 1pm to 5pm · Free admission  
>
> **Imperial Lexis Kuala Lumpur, 7th floor**  
> 15 Jalan Kia Peng, 50450 Kuala Lumpur

Primary anchor button:

> **Register for Free**

Do not put a large image between these details and the form.

**4. Registration form**

> **Register for the open house**

Fields:

- **Name** — required; one field.
- **WhatsApp number** — required; +60 selected, with another-country option. Accept common Malaysian formats without making visitors solve formatting errors.
- Submit: **Register for Free**

Under the fields:

> Joe Wong · REN 51947  
> Summerfield Property (M) Sdn. Bhd.

Privacy link:

> Privacy Policy

If explanatory privacy text is wanted:

> [INSERT: approved wording describing how registration details will be used]

Secondary link:

> Questions? WhatsApp Joe Wong

Do not promise WhatsApp confirmation or a reserved appointment until that operating process is approved.

**5. Small expandable correction**

Collapsed label:

> Saw the earlier invitation?

Expanded copy:

> The open house has moved from 13 November to Friday 20 November 2026, 1pm to 5pm, at Imperial Lexis Kuala Lumpur, 7th floor.

**6. One property image**

Use `render-type-a-2.jpg`, showing the private pool and villa exterior.

Visible caption:

> Artist's impression

**7. Property details**

> **About the villas**
>
> Type A Upper: 872 sq ft  
> Type A Lower: 858 sq ft  
> Each with 2 bedrooms, 2 bathrooms and a private pool  
>
> **Developer**  
> KL Metro Property Development Sdn. Bhd., a member of Kuala Lumpur Metro Group  
>
> **Operator**  
> Lexis Hotel Group

Keep any existing-resort proof separate and explicitly labelled. It is unnecessary above the form.

**8. Optional event-experience section**

Until the facts file is updated, use these as editorial placeholders only:

> **What to expect**
>
> [INSERT: approved project presentation details]  
> [INSERT: approved one-to-one consultation details]  
> [INSERT: approved refreshments and festive treats]  
> [INSERT: approved complimentary Deepavali sweet gift]

Do not make the gift the main reason to register.

**9. Closing action and footer**

> **Lexis Hibiscus 2 Property Open House**  
> Friday 20 November 2026 · 1pm to 5pm  
> Imperial Lexis Kuala Lumpur, 7th floor  
>
> **Register for Free**

Retain accurate business credentials, privacy and disclaimer links. Avoid repeating the usual consultation hours on this event page: the footer’s **10am–4pm** hours could confuse visitors attending the **1pm–5pm** event.

**Mobile sticky action:** one dominant **Register for Free** button, linking to the form. Hide it while the form is visible or the keyboard is open.

### Thank-you page

Use:

> **You're registered for the Property Open House**
>
> Friday 20 November 2026 · 1pm to 5pm  
> Imperial Lexis Kuala Lumpur, 7th floor  
> 15 Jalan Kia Peng, 50450 Kuala Lumpur
>
> **Add to calendar**  
> **Get directions**
>
> Bringing a friend? Share the event details.
>
> **Share event details**

The calendar should use **Asia/Kuala_Lumpur**, with the approved event title, address and 1pm–5pm duration. Directions should point to the KL venue, not the Port Dickson property. Share the landing-page URL, never the thank-you URL.

Ask optional arrival preference and party size here only if they can be saved without creating another registration.

**Measurement prerequisite:** `site.js` pushes `lead_form_submit` on every thank-you-page load. The variant comes from session storage; a direct visit can report `unknown`, and a reload can push another event. Recommend tying the conversion to confirmed form success, preventing repeat counting and checking Google Ads uses **One** for lead counting. Keep WhatsApp clicks secondary. Verify the GTM action is restricted to this event; its configuration is `[INSERT: GTM conversion trigger and Google Ads conversion settings]`.

# 2. Banner alternatives and test

The current pair has a clear event title and recognisable aerial render. Its weaknesses are **no visible price, no registration instruction inside the image, and small logistics text**.

For scale: the square’s 40px date text becomes approximately 10px when displayed 300px wide; the wide banner’s 28px details become approximately 7px. The render disclaimer also needs more legible treatment.

I would propose two alternatives but **run only one against the control this week**.

## Concept A — Price first: recommended challenger

**Hypothesis:** making the starting price unmistakable will attract fewer casual resort visitors and more relevant property enquiries.

**Background:** the existing `bg.jpg` aerial render. Keeping the same image helps isolate the effect of the price message.

**Square, 1200 × 1200 — exact master copy**

> LEXIS HIBISCUS 2 · PORT DICKSON  
> **Villas for sale**  
> **From RM860,000**  
> Property Open House · Deepavali Edition  
> Fri 20 Nov 2026 · 1pm to 5pm  
> Imperial Lexis Kuala Lumpur · 7th floor  
> Free admission  
> **Register for Free**  
> Artist's impression

**Wide, 1200 × 628 — exact master copy**

> LEXIS HIBISCUS 2 · PORT DICKSON  
> **Villas from RM860,000**  
> Property Open House  
> Fri 20 Nov 2026 · 1pm to 5pm  
> Imperial Lexis Kuala Lumpur · 7th floor  
> Free admission · Deepavali Edition  
> **Register for Free**  
> Artist's impression

**Layout:** retain the aerial, but give the price a solid navy panel and the greatest emphasis. Reduce decorative tracking and festive ornamentation. The CTA should be visually distinct.

**At 300 × 250:** “Villas for sale,” “From RM860,000,” “20 Nov,” the KL venue and registration action must remain readable. Keep the disclaimer readable, too. Do not simply shrink the wide master into this shape.

## Concept B — Show the private pool

**Hypothesis:** a close view of the villa and its pool makes the property easier to understand than the aerial layout.

**Background:** `render-type-a-2.jpg`. It shows the pool clearly; `render-type-a-1.jpg` gives more visual attention to the bedroom.

**Square, 1200 × 1200 — exact master copy**

> LEXIS HIBISCUS 2 · PORT DICKSON  
> **2-bedroom villas**  
> **With private pools**  
> From RM860,000  
> Property Open House · Deepavali Edition  
> Fri 20 Nov 2026 · 1pm to 5pm  
> Imperial Lexis Kuala Lumpur · 7th floor  
> Free admission  
> **Register for Free**  
> Artist's impression

**Wide, 1200 × 628 — exact master copy**

> LEXIS HIBISCUS 2 · PORT DICKSON  
> **2-bedroom villas with private pools**  
> From RM860,000  
> Property Open House · Fri 20 Nov 2026  
> 1pm to 5pm · Imperial Lexis Kuala Lumpur, 7th floor  
> Free admission · Deepavali Edition  
> **Register for Free**  
> Artist's impression

**Layout:** show one uninterrupted image, with the pool still recognisable. Use a solid text panel rather than text scattered across water, windows and furniture.

**At 300 × 250:** preserve “Villas,” “Private pools,” price, event date, KL venue and action. Avoid framing it like accommodation advertising.

I would defer a gift-led concept because it could attract visitors primarily interested in the free item. A consultant-led concept is reasonable later, but the product and price are stronger first-week tests.

## Exactly how I would test

**For this deadline, use a second RDA in the existing ad group, testing Concept A only.** Keep the current RDA intact while the challenger is reviewed.

There is an important production distinction:

- The exact masters above describe **finished banner compositions**.
- For the **RDA challenger**, use the aerial image with its required disclaimer, put the message into Google’s text fields, and select the native registration CTA where available.
- Do not bake the full poster and a simulated button into the RDA image. Google recommends avoiding overlaid text and buttons because assets resize and combine with separate text. [Google’s RDA guidance](https://support.google.com/google-ads/answer/9823397?hl=en)

Suggested challenger fields:

- Headline: **Villas From RM860,000**
- Long headline: **Lexis Hibiscus 2 villas from RM860,000. Property Open House, 20 Nov at Imperial Lexis KL.**
- Description: **Fri 20 Nov 2026, 1pm to 5pm. Imperial Lexis Kuala Lumpur, 7th floor. Free admission.**
- CTA: **Sign up**, if available.

This tests the **price-led ad treatment**, rather than just one image.

| Option | Decision for this week |
|---|---|
| More images in the existing RDA | **Avoid for testing.** Google mixes assets; concept-level registration comparisons become difficult. |
| Second RDA | **Recommended.** Fast to prepare, separately reportable, and retains responsive inventory. |
| Uploaded image ads | Best for preserving exact typography and layout, but requires native-size artwork and a matched uploaded control for a fair comparison. Too much extra production for this budget. |

The 1200px masters are RDA asset dimensions, not standard uploaded-banner sizes. Uploaded static ads need supported sizes such as **300 × 250**, and files no larger than **150KB**. The existing PNGs are roughly 749KB and 839KB. [Uploaded-ad specifications](https://support.google.com/google-ads/answer/1722096?hl=en)

**Operating plan**

1. Prepare the improved page and challenger by **14 November**, ideally; submit the challenger for review immediately.
2. Run only control and challenger, with identical targeting, destination page, schedule and bidding.
3. Use distinct `utm_content` values and retain Google’s ad-ID tracking. Keep `lp_variant: open-house` for the event conversion.
4. Check approval, delivery and placement quality daily. Do not keep editing the ads.
5. Compare **cost per valid form registration** first, then registrations per click, CTR and form starts. Check actual submissions for duplicates and obvious junk.
6. Recognise that Google can allocate delivery unevenly. Two RDAs are a directional comparison, **not a randomised equal-split experiment**.

### What RM300 can establish

These are arithmetic scenarios, not Malaysian market forecasts:

| Average CPC | Clicks from RM300 | Registrations if one in 100 clicks registers | If three in 100 register |
|---|---:|---:|---:|
| RM0.50 | 600 | 6 | 18 |
| RM1.00 | 300 | 3 | 9 |
| RM2.00 | 150 | about 1–2 | about 4–5 |

Actual results could include **zero registrations**. Review delays and uneven delivery reduce the sample further.

RM300 can expose poor placements, broken tracking, weak form engagement or a large creative difference. It is unlikely to prove a modest improvement in cost per registration. One registration versus none is not a reliable winner.

# 3. Targeting plan for the remaining days

**Keep presence-only KL/Selangor targeting and optimised targeting off.** The main priorities are trustworthy measurement, budget control and filtering irrelevant traffic.

The following actions are ranked; they are recommendations, not changes made.

### 1. Verify the conversion and enforce the RM300 ceiling

Resolve the thank-you measurement issue before using conversions to steer bidding or choose an ad.

Also correct the budget assumption: **RM37 is an average daily budget, not a hard daily cap.** Google can spend up to twice the average daily budget on a given day for most campaigns. Multiplying RM37 by campaign dates does not establish a RM296 lifetime ceiling. [Google budget guidance](https://support.google.com/google-ads/answer/2375454?hl=en)

Further, **13–20 November covers eight calendar dates**, although it is a seven-day interval.

Use:

> Remaining allowance = RM300 minus spend already incurred.

Check spend morning and evening; use a budget alert and a campaign pause rule with a buffer for reporting delay. Do not describe such a rule as an exact hard cap.

**Risk:** leaving budget monitoring until the final day could exhaust the allowance early.

### 2. Decide whether Search deserves part of the remaining allowance

**Yes—if the running Search campaign has relevant buyer queries and room to spend.**

Check `[INSERT: Search search-term report, actual form registrations, cost per registration and budget limitation]`.

My conditional allocation would be **RM200 Search / RM100 Display**, counting spend already incurred within the RM300 total. Use the event landing page for event-specific Search traffic.

Choose this only if Search reaches property buyers, rather than predominantly hotel-booking queries. Keep irrelevant accommodation queries out of the event Search activity.

**Risk:** brand searches for the resort can attract holiday traffic; relevant search volume may also be small.

If that evidence is unavailable or Search is already capturing its useful demand, retain the Display allowance. The RM37/day creative-test plan above assumes Display retains the full budget; with only RM100, treat the challenger as a delivery check, not an A/B result.

### 3. Retain Maximise clicks temporarily, with a CPC limit

For this short, new campaign, I would **keep Maximise clicks and start with an RM1 maximum CPC limit**, provided this remains a standard Display campaign and the setting is available.

That is a proposed spending control, not a market benchmark. Review delivery after a full day; a cap that prevents useful delivery is too low. A cap also does not cure low-quality clicks. [Maximise clicks and bid limits](https://support.google.com/google-ads/answer/6268626?hl=en)

**Do not switch automatically to Maximise conversions merely because the objective is Leads.** It is not universally necessary to have prior conversions, but this campaign has little time to learn and an unverified conversion signal. Consider it only if `[INSERT: reliable recent comparable form-conversion history elsewhere in the account]` supports the change.

Avoid switching strategies repeatedly or inventing a target cost per registration.

**Risk:** Maximise clicks can favour cheap, accidental traffic; Maximise conversions can spend aggressively against a poor or sparse signal.

### 4. Tighten placement quality before adding audiences

Keep All Apps excluded and verify that it is effective in the placement report.

Then:

- Exclude browser-game and child-focused placements where available; app exclusion alone does not remove gaming websites.
- Review actual placements daily and block clearly irrelevant or suspicious sites.
- Exclude below-the-fold inventory initially if available, given the short response window.
- Use appropriate content-suitability exclusions without stacking so many restrictions that delivery disappears.

Google documents below-the-fold exclusion for Display. Its current guidance also says the parked-domain inclusion control was removed following the February 2026 change; do not promise a parked-domain checkbox that may no longer exist. Check the actual inventory and controls. [Content suitability guidance](https://support.google.com/google-ads/answer/12764663?hl=en)

**Risk:** above-the-fold inventory is not automatically good quality, and excluding inventory can raise CPC or limit delivery.

### 5. Simplify the prospecting audience; use remarketing only if ready

**Prospecting:** keep **Residential Properties (For Sale)** and **Houses** as the initial core. Drop the apartment-specific segments unless existing evidence supports them.

This is a relevance judgement, not proof that apartment buyers cannot buy villas. Confirm audiences use **Targeting**, rather than merely Observation.

**Custom segments:** do not add a third prospecting experiment this week unless the retained audiences cannot deliver. If needed, substitute a focused segment using:

- “Lexis Hibiscus 2”
- “Lexis Hibiscus 2 villa for sale”
- “Port Dickson villa for sale”

“Lexis Hibiscus” alone has greater holiday ambiguity. Competitor inputs should be `[INSERT: approved relevant property-sales URLs]`, not resort booking sites.

On Display, these terms are interest or purchase-intent signals; they do not exclusively reach people who typed those exact searches. URL inputs reach people browsing **similar websites**, not the actual visitors of those competitors. [Custom-segment documentation](https://support.google.com/google-ads/answer/9805516?hl=en)

**Remarketing:** `[INSERT: existing hibiscus2.com visitor-list availability, consent setup and eligible size]`. If an eligible list already exists, prioritise recent villa, contact and event-page visitors, excluding completed registrants. Do not depend on building a new list within this week. Google lists a Display minimum of **100 active users in the previous 30 days**. [Data-segment requirements](https://support.google.com/google-ads/answer/2472738?hl=en)

Avoid targeting or messages based on inferred personal finances. Let the published property price qualify interest.

### 6. Set a campaign frequency cap

Start with **three viewable impressions per person per day**, at campaign level, so two ads do not each get their own allowance.

This is a practical starting point, not a proven optimum. Display frequency measurement is approximate; Google counts viewable impressions toward its cap. [Frequency-cap guidance](https://support.google.com/google-ads/answer/6034106?hl=en-1-2)

**Risk:** an overly low cap can suppress useful repetition, especially for a small remarketing list.

### 7. Use a practical schedule and an explicit event-day stop

Suggested serving hours:

- **13–19 November:** 8am–11pm.
- **20 November:** 8am–noon, then stop new-registration advertising.

Use Malaysian time, checking `[INSERT: Google Ads account time zone]`. Noon is a proposed travel-and-planning buffer, not an approved registration deadline. Do not advertise it as one.

Keep evening and weekend reach: people may need to arrange a Friday-afternoon visit ahead of time. Do not rely on the campaign’s end date to stop ads before the event finishes.

**Risk:** scheduling can exclude useful late-night prospects; the noon stop also forgoes some same-day registrations.

### 8. Keep broad enough geography, languages and devices

- **Location:** keep KL and Selangor, presence only. Do not replace them with a small radius around Imperial Lexis: people who can attend are not necessarily near the hotel when browsing. A larger radius is an alternative only if placement/location evidence shows material waste.
- **Languages:** retain English, Malay and simplified Chinese for now. Language settings do not translate the English page. Do not send visitors through the current language links to unrelated homepages; localised event pages need `[INSERT: approved translations]`.
- **Devices:** retain phones, computers and tablets initially, with no speculative bid adjustments. Phone usability matters most, but a cheap mobile click is not automatically useful. Review completed forms by device before cutting one.
- If later using Maximise conversions, ordinary device bid adjustments are generally ignored; device exclusion remains a separate decision. [Google’s bidding guidance](https://support.google.com/google-ads/answer/7381968?hl=en)

# Summary: top three changes

1. **Make registration easy on a phone.** Put the villa price, correct event details and a two-field form near the top; give the form the main button. **Time:** roughly 3–5 hours. **Money:** no extra media spend; implementation fee depends on who does it.

2. **Make sure every counted registration is real and protect the RM300 limit.** Verify successful submissions, prevent repeat counting, review placements and monitor total spend. **Time:** roughly 1–2 hours initially, then 10–15 minutes daily. **Money:** no additional advertising allowance.

3. **Run one price-led challenger and favour Search if its results justify it.** Make “Villas from RM860,000” clear, rather than spreading the budget across several new concepts. **Time:** roughly 2–3 hours for production and setup. **Money:** use the existing RM300; conditionally allocate RM200 to Search and RM100 to Display.