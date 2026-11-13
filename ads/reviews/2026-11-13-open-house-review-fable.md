# Open house review: landing page, Display banners, targeting (Fable, 13 Nov 2026)

Review only. No file, website or Google Ads setting was changed. All proposed copy uses `approved-facts.md` only; anything else is marked `[INSERT: …]`.

## The short version

- The page makes a cold phone visitor work too hard: no picture, a "date has moved" warning first, and a six-field form four screens down. Fixing that is worth more than any banner or targeting change.
- Friday 1pm to 5pm is a working afternoon. The page should also catch people who want to come but can't on Friday ("contact me about another day"), using the approved by-appointment viewings at Imperial Lexis KL.
- RM296 will buy an estimated 300 to 700 clicks and, realistically, a single-digit number of form registrations. That is my estimate from typical Malaysian Display costs, not a measured figure. It can show which banner gets clicked more. It cannot prove which banner or setting produces cheaper registrations.

---

## 1. Landing page

### What a phone visitor sees now (390px wide, read from the source)

First screen, top to bottom: the 64px site header, 64px of empty space (`py-16`), the "Events · Upcoming" line, a three-line H1, the coral "New date and venue" box, and the top of the When/Where box. No image. The two page buttons are below the fold. The only visible action is the sticky bar, which is always shown on this page (there is no `.hero`, so `site.js` makes it visible at once). In that bar the gold, primary button is WhatsApp and "Register" is the outline one.

The form is the last thing on the page, after the intro, the list, a 1000x1000 flyer and the facts grid. The flyer itself says "ATTENTION! IMPORTANT. PLEASE NOTE: CHANGE OF DATE & VENUE" in red, so the change-of-date message is shown twice.

### Ranked changes

| # | Change | Why | Effort |
|---|---|---|---|
| 1 | **Move the form to directly under the hero and cut it to 2 required fields: Name, WhatsApp number.** Keep the country-code selector (defaults to +60). Keep the arrival slot as an optional third field, pre-set to "Not sure yet". Drop last name, email and number of people. | The form is the conversion. Cold Display visitors rarely scroll four screens, and each extra required field loses people. The consultant confirms by WhatsApp anyway, so head count and email can be asked there. To avoid breaking the Web3Forms email, keep the field name `first_name` and only relabel it "Name". `[INSERT: confirm nothing downstream needs last_name, email or number_of_people]` | S |
| 2 | **Add a "can't make Friday" route.** Add one option to the arrival field: "I can't come on Friday. Contact me about another day." Put the existing "Can't make it?" line right under the form button. | A weekday afternoon rules out many working buyers. Today they leave with nothing. Private viewings at Imperial Lexis Kuala Lumpur, Level 7, 10am to 4pm by appointment, are an approved fact, so this is a second way to win the same click. These leads count as `lead_form_submit` too, and the consultant can tell them apart from the field value. | S |
| 3 | **Remove the coral "New date and venue" box from the top, and replace the flyer.** Put one small line under the form instead: "Registered for 13 November? It's the same event, now on Friday 20 November at Imperial Lexis Kuala Lumpur." Replace the flyer with a villa picture (see mockup). Change the `<title>` and og text so they no longer lead with "New Date". | It hurts for ad visitors. They never saw the old date, so the first thing they read is that something went wrong, and they must work out which date is real. It helps only the 17 people who registered earlier, and the agent can message those directly. The small line under the form covers anyone else. | S |
| 4 | **Put a picture and the offer above the fold.** Hero image (villa with private pool, labelled "Artist's impression"), short H1, one line for date and one for place, then the Register button. Cut the top padding and the breadcrumb on mobile. | The banner promises a place; the page should confirm it within a second. Right now the first screen is text and a warning. | S to M |
| 5 | **Say plainly who it is for.** One line under the hero: "A property sales event for people thinking about buying a villa at Lexis Hibiscus 2. This is not a hotel booking or a holiday offer." Show "Villas for sale from RM860,000" next to it. | Keeps buyers and turns away freebie and hotel traffic before they fill the form. It also protects lead quality, which matters more than count here. | S |
| 6 | **Show who they will meet.** Small photo of Joe Wong beside the form with "Your host: Joe Wong, REN 51947, Summerfield Property (M) Sdn. Bhd." | The page says "our consultant" but never says who "we" are until the footer. A named, licensed person raises trust for a stranger from a banner. | S |
| 7 | **Swap the sticky bar priority.** Make "Register Free" the solid gold button and WhatsApp the outline one. Keep both. | The form is what Google Ads counts for this campaign and is now two fields. WhatsApp stays for people who prefer it. Read both when judging results: forms plus WhatsApp messages ending "Ref: OH20-EN-AD". | S |
| 8 | **Make the page load faster on mobile data.** It loads the Tailwind CDN script (compiles styles in the browser) and two web fonts before anything shows. Ship a compiled CSS file for this page, and load the hero image with `fetchpriority="high"`. | Display visitors leave in a couple of seconds if the screen is blank. This is real but is the largest job; do it only if 1 to 7 are done. | M |

Smaller notes:

- **Tracking gap worth checking.** `site.js` marks a visitor as "from an ad" only when the URL has `gclid` or `utm_medium` starting cpc/ppc/paid. Some iPhone clicks arrive with `gbraid`/`wbraid` instead of `gclid`, so their WhatsApp messages would end "OH20-EN-WEB" and be undercounted. Without changing code: add a final URL suffix in the campaign, `utm_source=google&utm_medium=cpc&utm_campaign=display-open-house-20nov`. `[INSERT: check whether the ad's final URL already carries UTM tags]`
- Friday 1pm to about 2.30pm is Friday prayers for Muslim visitors. The copy "Drop in any time between 1pm and 5pm" already handles this; keep it near the top.
- The thank-you page's og tags and hreflang links still describe the generic thank-you page. Harmless (noindex), fix when convenient.

### Thank-you page

Getting a registration is half the job; the other half is the person turning up. Add, in this order:

1. **Add to calendar** (S): two links, Google Calendar and an `.ics` file. Title "Lexis Hibiscus 2 Property Open House", 20 Nov 2026 13:00 to 17:00 Malaysia time (05:00 to 09:00 UTC), location "Imperial Lexis Kuala Lumpur, 7th floor, 15 Jalan Kia Peng, 50450 Kuala Lumpur".
2. **Directions** (S): a "Get directions" button to Google Maps for Imperial Lexis Kuala Lumpur, plus `[INSERT: parking and nearest station, confirmed by the agent]`.
3. **Bring someone** (S): "Coming with your spouse or a friend? Send them the details." with a WhatsApp share link pre-filled: "I'm going to the Lexis Hibiscus 2 Property Open House on Fri 20 Nov, 1pm to 5pm, Imperial Lexis Kuala Lumpur, 7th floor. Free admission. Details: hibiscus2.com/events/deepavali-open-house-2026/". Buying decisions are usually made by two people; this also brings free extra visitors.
4. **What happens next** (S): "Joe Wong will message you on WhatsApp from +60 12-297 0362 to confirm your time. Save the number so you recognise it."
5. Keep the WhatsApp button; relabel it "Message Joe on WhatsApp". Move the site links below everything.

For "can't make Friday" leads the same page works if the first line reads conditionally, or simply add: "Chose another day? We'll message you to arrange a private viewing."

### Mockup: improved mobile page, top to bottom

Built for a 390px-wide phone. Sections 1 to 3 fit the first screen.

**1. Header (56px).** "Lexis Hibiscus 2" on the left, menu icon on the right. No change otherwise.

**2. Hero image (full width, about 200px tall).** `images/render-type-a-2.jpg` (villa balcony with private pool). Small label bottom right: "Artist's impression".

**3. Offer block (white, 20px padding).**
- Eyebrow, gold caps: `DEEPAVALI EDITION · FREE ADMISSION`
- H1: `Lexis Hibiscus 2 Property Open House`
- Line with calendar icon, bold: `Friday 20 November 2026, 1pm to 5pm`
- Line with pin icon: `Imperial Lexis Kuala Lumpur, 7th floor, 15 Jalan Kia Peng`
- Full-width navy button: `Register Free` (scrolls to the form just below)
- Small text under the button: `Drop in any time between 1pm and 5pm.`

**4. Who it's for (sand background strip).**
- `Villas for sale from RM860,000`
- `A property sales event for people thinking about buying a 2-bedroom villa with a private pool in Port Dickson, whether you are ready now or just starting to look. This is not a hotel booking or a holiday offer.`

**5. Registration form (card, id `register`).**
- H2: `Register for the open house`
- Field 1 label: `Name`
- Field 2 label: `WhatsApp number` (country code selector, +60 default, placeholder `12 345 6789`)
- Field 3 label: `When will you arrive? (optional)` with options: `Not sure yet` (selected), `1pm to 2pm`, `2pm to 3pm`, `3pm to 4pm`, `4pm to 5pm`, `I can't come on Friday. Contact me about another day.`
- Button: `Register Free`
- Under the button: `Our consultant will confirm your time on WhatsApp.`
- Host row: round photo `images/joe-wong.png`, text `Your host: Joe Wong, REN 51947, Summerfield Property (M) Sdn. Bhd.`
- Small print: `Your details are used only for this event and to follow up on your enquiry. See our Privacy Policy.`
- Link: `Prefer WhatsApp? Register on WhatsApp`
- Small grey line: `Registered for 13 November? It's the same event, now on Friday 20 November at Imperial Lexis Kuala Lumpur.`

**6. What to expect (H2 `What to expect`).** Four rows with icons:
- `A presentation of the Lexis Hibiscus 2 project`
- `One-to-one consultations with our consultant`
- `Refreshments and festive treats`
- `A complimentary Deepavali sweet gift`

**7. The villas (H2 `The villas at a glance`).** One image, `images/showunit-bed-1.jpg`, caption `Show unit`. Then:
- `Type A Upper, 872 sq ft. Type A Lower, 858 sq ft.`
- `2 bedrooms, 2 bathrooms and a private pool in every villa`
- `From RM860,000, subject to availability and official pricing`
- `Port Dickson, Negeri Sembilan, next to the existing Lexis Hibiscus resort`
- `Developer: KL Metro Property Development Sdn. Bhd., a member of Kuala Lumpur Metro Group`
- `Operator: Lexis Hotel Group, under a 15-year rental programme`
- `Completion targeted 2029`

**8. Proof strip (one line, small).** `The existing Lexis Hibiscus resort next door holds two Guinness World Records: most swimming pools in a resort and most overwater villas at a single resort (verified 14 October 2016).`

**9. Getting there (H2 `Getting there`).** `Imperial Lexis Kuala Lumpur, 7th floor, 15 Jalan Kia Peng, 50450 Kuala Lumpur.` Button `Open in Google Maps`. `[INSERT: parking and nearest station]`

**10. Can't make Friday? (sand card).** `Private viewings are available at Imperial Lexis Kuala Lumpur, Level 7, 10am to 4pm, by appointment.` Button `Arrange a viewing on WhatsApp`.

**11. Second button.** `Register Free` (back up to the form).

**12. Footer.** Unchanged (credentials and disclaimers).

**Sticky bar (always visible).** Left, solid gold: `Register Free`. Right, outline: `WhatsApp`.

---

## Lessons from the Eventbrite listing

Read from the benchmark summary as data only. Its wording is not reused (it uses a banned phrase and carries the old venue).

Borrow these tactics:

1. **Near-zero friction.** Eventbrite takes a registration in about two taps. Our nearest equivalent is the two-field form at the top (change 1). This is the main lesson.
2. **Picture first.** It opens with images; ours opens with text and a warning (change 4).
3. **Map and directions.** A physical event feels real and easy when the visitor can see how to get there. Add the "Getting there" block and the directions button on the thank-you page. Parking and transport details need the agent's confirmation.
4. **A named organiser.** Its organiser card does the job our host row would do (change 6).
5. **A low bar to sign up, kept honest.** It welcomes both active buyers and the curious. Our version keeps the sales framing: "whether you are ready now or just starting to look", next to "villas for sale from RM860,000".

Do not borrow:

- **The change-of-date banner.** It serves people who booked the old date. Ad visitors never saw it.
- **Any urgency or extra detail** not in `approved-facts.md`.

One caution on the number itself: 17 registrations mostly reflects Eventbrite's own audience of people browsing free KL events, who are already signed in. It shows what low friction can do. It does not show that Display traffic will convert at a similar rate, and those registrants may be weaker buyers. I would not use 17 as a target for the RM300.

---

## 2. Banner variants

### What the current pair does and where it is weak

It leads with the event name. At full size it is clean and compliant. Shrunk to the sizes Display really uses it loses most of its content: in a 300x250 slot the square is scaled to roughly a quarter, so the 40px date line becomes about 10px, "Deepavali Edition" about 6px and "Artist's impression" under 4px. On the wide banner in a 300x157 slot the date and venue are about 7px. What survives is "Property Open House" and a gold pill. The pill says "FREE ADMISSION", which looks like a button but names no action. Nothing says what is being sold: the aerial shows a flower pattern in the sea, which reads as a resort, so it may draw holiday-makers.

Rules for every variant:

- At most three text elements. Anything that must be read is at least 44px tall on the 1200px canvas (about 11px at 300 wide). Headline at least 90px on the square, 64px on the wide.
- Date and place as one short line: "Fri 20 Nov · Imperial Lexis KL". The time and floor go in the Google headline text, which the ad shows as real text anyway.
- "Artist's impression" on every render, raised to 24px with a dark backing so it stays legible when shrunk.
- Keep important content in the centre 80 percent of each image; responsive ads crop the edges.
- The Google call-to-action for each ad: **Sign up**. Avoid "Book now" (reads as a hotel booking).

### Variant A: the villa and its private pool

**Hypothesis:** people respond to the thing they would own, not to an event name. A close-up villa with a pool gets more clicks from property shoppers than an aerial, and the word "villa" plus "for sale" keeps out hotel traffic.

**Background:** `images/render-type-a-2.jpg` (balcony pool, sea beyond). Label "Artist's impression".

**Square 1200x1200.** Image fills the top 620px. Dark purple panel below (same colours as now).
- Line 1, small gold caps: `LEXIS HIBISCUS 2 · PORT DICKSON`
- Headline: `Villas With a Private Pool, For Sale`
- Line: `Property Open House · Fri 20 Nov · Imperial Lexis KL`
- Gold pill: `Register Free`

**Wide 1200x628.** Image full bleed, purple gradient on the left 55 percent, text left.
- `LEXIS HIBISCUS 2 · PORT DICKSON`
- Headline, two lines: `Private-Pool Villas` / `For Sale`
- `Open House · Fri 20 Nov · Imperial Lexis KL`
- Pill: `Register Free`

**Must still read at 300x250:** "Villas With a Private Pool, For Sale" and "Fri 20 Nov". The pool must be recognisable as a pool.

### Variant B: price first

**Hypothesis:** showing "from RM860,000" lowers the click rate but raises the share of clickers who register and who are real buyers, so cost per useful registration falls. It is the cleanest test because the picture stays the same as the current banner and only the message changes.

**Background:** the same aerial as now (`bg.jpg`, the Lexis Hibiscus 2 aerial render). Label "Artist's impression".

**Square 1200x1200.** Same layout as the current square.
- Small gold caps: `LEXIS HIBISCUS 2 · PORT DICKSON`
- Headline: `Villas From RM860,000`
- Line: `2 bedrooms · private pool`
- Line: `Property Open House · Fri 20 Nov · Imperial Lexis KL`
- Pill: `Register Free`

**Wide 1200x628.** Same layout as the current wide.
- `LEXIS HIBISCUS 2 · PORT DICKSON`
- Headline, two lines: `Villas From` / `RM860,000`
- `2 bedrooms · private pool`
- `Open House · Fri 20 Nov · Imperial Lexis KL`
- Pill: `Register Free`

**Must still read at 300x250:** "RM860,000" and "Fri 20 Nov". The price is a plain statement of the starting price, with no reference to the viewer's means, so it is within the personalised-ads rule.

### Variant C: meet the consultant (optional third)

**Hypothesis:** a real person and a real room make it obvious this is a sales consultation in KL, not a resort stay, and a face draws the eye in a small slot.

**Background:** `images/event-octoberfest-2026-consultation.jpg` (a consultation in progress), or `images/joe-wong.png` cut out on the purple panel. Real photo, so no "Artist's impression". `[INSERT: confirm the people shown in the consultation photo agree to appear in ads; if not, use the Joe Wong portrait only]`

**Square 1200x1200.** Photo top 600px, panel below.
- `LEXIS HIBISCUS 2 · PROPERTY OPEN HOUSE`
- Headline: `Talk to the Villa Consultant, One to One`
- Line: `Fri 20 Nov · 1pm to 5pm · Imperial Lexis KL`
- Small line: `Joe Wong, REN 51947`
- Pill: `Register Free`

**Wide 1200x628.** Photo on the right, purple panel on the left.
- `PROPERTY OPEN HOUSE`
- Headline, two lines: `One-to-One` / `Villa Consultation`
- `Fri 20 Nov · Imperial Lexis KL`
- Pill: `Register Free`

**Must still read at 300x250:** "Villa Consultation" and "Fri 20 Nov".

I would run A and B and hold C back. Three new arms on this budget would leave each with too little data.

### How to run the test in this campaign

**Setup: separate responsive display ads in the same ad group, one per concept.**

- Keep the current ad as the control. Add RDA "A" with only A's square and wide, and RDA "B" with only B's. Give all three the same headlines, long headline, descriptions, business name, logo and call-to-action, so the image is the only difference.
- Set ad rotation to "Do not optimise: rotate ads indefinitely" (campaign settings, additional settings). Otherwise Google picks a favourite within a day and the others get almost no impressions.
- Give each ad its own tag in the final URL (`utm_content=control`, `utm_content=villa`, `utm_content=price`) so GA4 can show what each banner's visitors did.

Why not the alternatives:

- **More images in the same RDA:** Google mixes them and reports only a Low/Good/Best label per image, and only after far more volume than this campaign will have. No clean comparison.
- **Uploaded image ads:** they serve only in exact slot sizes, so each concept would need five or six separate renders (300x250, 336x280, 320x100, 728x90, 300x600 and so on), and reach drops. Too much work for seven days.

**What to compare, in this order:**

1. **Click-through rate per ad.** The only number that will have enough data.
2. **What clickers did, per `utm_content`, in GA4:** engaged sessions and the form funnel events (`h2_form_view`, `h2_form_start`). These happen far more often than registrations, so they show quality differences earlier. `[INSERT: confirm the h2_form_* events reach GA4, not only the dataLayer]`
3. **Registrations and cost per registration per ad**, plus WhatsApp messages ending "OH20-EN-AD" for the campaign as a whole. Read these as a sanity check, not a verdict.

**How much data RM300 buys (my estimates, not measurements):**

- Clicks: about 40 to 90 a day, 300 to 700 in total, if the cost per click lands between RM0.40 and RM1.00.
- New ads need Google review, which can take a day and runs slower over a weekend. If they go in on 14 Nov, expect four to six days of test, so roughly 80 to 200 clicks per ad across three ads.
- Registrations: at a one to three percent rate from cold Display, somewhere between 3 and 20 in total, most likely under 10. Per ad that is 1 to 5. A result of 2 against 4 is chance.

So: this test can tell you which banner earns more clicks, if one is clearly ahead (say half as many clicks again as another, with 80 or more clicks each). It cannot tell you which banner gives cheaper registrations. Decision rule: on Monday 16 Nov evening, pause any ad whose click rate is clearly worst and whose visitors start the form least often; let the rest run to the end. Use the click result as a lead for the next campaign, not as proof.

---

## 3. Targeting plan

### Assessment

The setup is sound for a small first campaign: presence-only locations, in-market property audiences, optimised targeting off, apps excluded. Those four choices already remove most Display waste. The gaps are an uncapped click bid, no content exclusions beyond apps, a geography wider than the people who can reach Kia Peng on a Friday afternoon, and ads that will keep running after the doors close.

### Changes for the remaining days, ranked

1. **Keep Maximise clicks, add a maximum CPC bid limit of about RM1.00.** Do not switch to Maximise conversions. That strategy needs conversion history to learn from (dozens of conversions); this campaign has none and will end before it could learn, so it would spend erratically or barely at all. A cap stops the odd expensive click. If the average cost per click is already well under RM1.00 after two days, leave the cap where it is.
2. **Tighten the location to a 20 km radius around Imperial Lexis Kuala Lumpur, presence only.** That covers central KL, Petaling Jaya, Ampang, Cheras, Subang and Puchong, and drops far Selangor districts an hour or more away. The event is a drop-in on a working afternoon, so nearness matters more than for a normal property lead. RM37 a day cannot exhaust this area, so nothing is lost. Risk: a slightly higher cost per click.
3. **Add content exclusions.** Exclude parked domains, below-the-fold placements, content not yet labelled, sensitive content categories, and the Games topic. Then on 15 Nov open "Where ads showed" and exclude any site or YouTube channel with many clicks and no engaged visits (children's content and game sites are the usual offenders). Keep the All Apps exclusion.
4. **Stop the ads once it is too late to come.** Add an ad schedule so that on Friday 20 Nov ads run only until 3pm. Other days: 7am to 11pm. (This also stops today's ads at 3pm, which is harmless.) Without it, part of the last day's RM37 goes on people who see the ad after the event.
5. **Add remarketing if a list exists.** `[INSERT: is there a Google Ads audience of hibiscus2.com visitors, and is it large enough to serve on Display (100 or more active users in 30 days)?]` If yes, add it to the same ad group. These people already know the project and are the most likely to register. If the list is too small it simply won't serve; no harm done.
6. **Add one custom segment to the same ad group**, built from purchase-intent searches: "lexis hibiscus 2 for sale", "lexis hibiscus 2 price", "port dickson villa for sale", "port dickson property for sale", "water villa for sale malaysia", "seaside property for sale malaysia", "holiday home for sale malaysia", "new property launch kuala lumpur", "property open house kuala lumpur". Optionally people who browse sites like propertyguru.com.my, iproperty.com.my and edgeprop.my. Leave out plain "lexis hibiscus" and "port dickson resort": those are hotel guests. Keep it in the existing ad group; a second ad group would split an already thin budget.
7. **Exclude ages 18 to 24; keep "Unknown".** Few buyers at this price, many idle clicks. This is an age setting, not a statement about anyone's money, and nothing in the copy refers to the viewer's means.
8. **Frequency cap: 3 impressions per person per day.** Low priority. The audience is large against this budget, so few people will see it often, but the cap costs nothing.
9. **Devices: no change now.** Look at the device report on 15 Nov. If tablets show clicks with no engaged visits, set tablets to minus 100 percent. Keep phones and computers.
10. **Languages: no change.** The ads and page are in English and the three language settings reach people who read English in Malaysia. Chinese and Malay banners would be a separate job and not worth it for seven days.
11. **Keep optimised targeting off.** With it on, Google would widen beyond property shoppers to find cheap clicks.

Make these edits in one sitting. Each change to bidding or targeting restarts the learning period, so one batch today is better than a change a day.

### Should some of the RM300 move to Search?

No. Keep the RM300 on Display, and do one free thing on Search instead.

- Very few people search for a property open house this week, so the Search campaign has no extra event demand to buy. Display is the only way to tell property shoppers in KL that the event exists.
- **Free and worth doing today:** the Search campaign had an "Open House 13 Nov" sitelink due for removal. Replace it with "Open House, Fri 20 Nov" pointing at the open house page, descriptions "Imperial Lexis Kuala Lumpur" and "1pm to 5pm, free admission". People already searching for these villas are the best possible guests, and it costs nothing extra.
- **A stop rule protects the money.** If by Monday 16 Nov evening Display has 150 or more clicks, no form registrations and no WhatsApp messages ending "OH20-EN-AD", pause it. The unspent balance (about RM150) stays unspent or goes to Search, where it buys general enquiries rather than event guests.

### Risks

- **Small numbers.** Everything here is judged on a handful of registrations. Good luck and bad luck will look like results.
- **Freebie hunters.** "Free" and a festive gift attract people with no interest in buying. The "villas for sale from RM860,000" line on banner and page is the filter.
- **Review delays.** New ads and the sitelink need Google approval; a weekend submission may not serve until Monday.
- **No-shows.** A form registration is not a visitor. The WhatsApp confirmation and the calendar link are what turn one into the other.
- **Undercounting.** WhatsApp registrations from iPhones may be labelled WEB (see the tracking note in part 1) unless the URL suffix is added.
- **Policy.** Keep every asset free of the banned terms, of any hint about the viewer's finances, and of scarcity claims. Nothing proposed here uses them.

---

## Summary: top 3 changes, in priority order

1. **Rebuild the top of the open house page: picture, date and place, then a two-field form (name and WhatsApp number), with an option for people who can't come on Friday. Take the "new date" warning off the top.** Every ringgit of ad spend lands on this page, so this lifts everything else. Cost: about 2 to 3 hours of build and checking on the staging copy, no money.
2. **Tidy the campaign in one sitting: cap the click price at about RM1.00, narrow the area to 20 km around the venue, exclude junk placements, stop the ads at 3pm on the event day, and add the "Open House, Fri 20 Nov" link to the Search ads.** This steers the same RM300 towards people who could actually turn up. Cost: about 30 to 45 minutes in Google Ads, no extra money.
3. **Add two new banners beside the current one (villa with private pool; "Villas From RM860,000"), each ending in a "Register Free" button, and let Google rotate them evenly.** You will learn which message gets property shoppers to click. You will not learn which gives cheaper registrations; the budget is too small for that. Cost: about 2 hours to make and upload four images, no extra money, and up to a day's wait for Google's approval.

An honest expectation for the RM300: a few hundred visits and probably fewer than ten form registrations, plus some WhatsApp messages. If Monday evening shows 150 clicks and nothing at all, stop and keep the rest.
