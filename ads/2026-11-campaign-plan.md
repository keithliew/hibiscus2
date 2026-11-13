# hibiscus2.com Google Ads plan: Wed 11 Nov to Mon 30 Nov 2026

Prepared 9 Nov 2026 by the hibiscus2 chat for Keith. Nothing has been changed in Google Ads, on the website or in any budget. Ad copy: `2026-11-ad-copy.json` (checked for length and banned words).

## The main point

Last time, the ads mostly reached people booking a hotel stay, not villa buyers. Search-1 ran 11 to 31 Jul and spent RM1,037 on 304 clicks. About 70% of that money (roughly RM720) went on searches for the **existing** Lexis Hibiscus hotel ("lexis hibiscus port dickson", "lexis hibiscus", "hibiscus pd", "hotel lexis hibiscus"…). Searches for **Lexis Hibiscus 2** itself got only about 24 clicks (RM92). The "generic" ad group mostly reached people looking for Port Dickson homestays. Google also recorded no conversions, because tracking wasn't connected in July, so its automatic bidding was working blind.

For this run: aim at buyers, filter out hotel guests, and make every WhatsApp lead traceable to the ad that brought it.

## 1. Fix the existing campaign before Wednesday (must do)

| # | Change | Why |
|---|---|---|
| 1 | **Replace "Villas from RM774,000" with "From RM860,000"** in all 4 ads | Price is out of date; a wrong price in an ad is a policy and trust problem |
| 2 | **Remove "Rental paid to owners since 2006"** and **"A new landmark resort"** from the ads | Both are unconfirmed in approved-facts.md; the first reads as an income claim under Google's financial-services rules |
| 3 | **Start 11 Nov, end 30 Nov** (the campaign still has the old 31 Jul end date) | It won't serve otherwise |
| 4 | **Bidding: switch from "Maximise conversions" to "Maximise clicks" with a RM4 max CPC** | Only about 15 to 30 conversions are likely in 20 days, too few for Google to learn from. Last summer's average click cost RM3.41 |
| 5 | **Locations: add Selangor, Negeri Sembilan and Melaka** to KL, Johor Bahru and Penang. Set "Presence: people in or regularly in". Singapore is your call | KL city alone leaves out Petaling Jaya, Shah Alam, Subang and Seremban, where many buyers live |
| 6 | **Languages: English and Chinese** (and Malay if you want) | Needed for the Chinese ad group below |
| 7 | **Leave the Performance Max draft ("Campaign #1", RM115/day) switched off** | With no conversion history it would spend mostly on display and YouTube placements that don't bring buyers |
| 8 | Ad schedule 9am to 10pm daily (now 9am to 9pm) | People browse property in the evening |

**Budget suggestion: RM50 a day, about RM1,000 for the 20 days**, the same rate as July. The new ad groups are narrower, so the campaign may not spend all of it. That's fine: unspent budget isn't charged.

## 2. Keywords: four ad groups instead of the old mix

| Ad group | Keywords (phrase and exact) | Landing page | Max CPC |
|---|---|---|---|
| **A. Lexis Hibiscus 2** | lexis hibiscus 2 · lexis hibiscus 2 port dickson · lexis hibiscus 2 price · lexis hibiscus 2 for sale · lexis hibiscus 2.0 · hibiscus 2 port dickson · lexis hibiscus 2 showroom · lexis hibiscus 2 villa | /villas/ and /rental-programme/ (the split test) | RM5 |
| **B. Existing-resort searches, buyers only** | lexis hibiscus for sale · lexis hibiscus price · lexis hibiscus port dickson for sale · lexis villa for sale · lexis hibiscus property · [lexis hibiscus port dickson] (exact only) | /villas/ | RM2.50 |
| **C. Rental programme** | lexis hibiscus rental programme · lexis leaseback · hotel managed villa malaysia · resort villa for sale malaysia · port dickson villa for sale | /rental-programme/ | RM4 |
| **D. Chinese** | 大红花2.0 · 马来西亚大红花 · 波德申大红花 · lexis hibiscus 2 价格 · 波德申 别墅 出售 | /zh/villas/ | RM4 |

Remove the old "Generic - Property Location" keywords (they mostly matched homestay searches), and keep "Foreign Buyer Intent" paused.

**Negative keywords for the whole campaign** (add on day 1): hotel, booking, book, room, room rate, stay, staycation, promo, promotion, voucher, package, rm380, buffet, breakfast, check in, wedding, activities, things to do, homestay, chalet, airbnb, agoda, booking.com, trip.com, traveloka, for rent, sewa, job, jobs, career, vacancy, grand lexis, avillion, tasik villa, suntai, five palms, bohejiwa, the shorea, millennia, oe resort, guaranteed, guarantee, return, returns, roi, yield, investment, invest, grr, cashback, rebate, 保证, 回报, 投资.

Ad group B only also blocks: review, reviews, photos, map, contact, phone number, email, address. (These are kept off the campaign-wide list so a "lexis hibiscus 2 contact" search still shows ad A.)

Ad group B also gets ad copy that turns hotel guests away ("Buying, not booking a stay?"). People wanting a room won't click, so we don't pay for them.

## 3. New ad copy (ready to paste)

All of it is in `2026-11-ad-copy.json`: 15 headlines and 4 descriptions for each ad group, plus sitelinks and callouts. Every line is within Google's length limits. The banned-word check is clean; the only flag is "profit-sharing" in ad group C, which is approved wording for how the programme is structured.

Examples (ad group A):
- **Lexis Hibiscus 2 Port Dickson | Villas From RM860,000 | Private Pool in Every Villa**
- Own a 2-bedroom overwater villa with its own private pool. From RM860,000.
- Run day to day by Lexis Hotel Group under a 15-year rental programme. Ask for the terms.

Ad group B pins "Lexis Hibiscus 2: For Sale" in position 1 and "Buying, Not Booking a Stay?" in position 2, so every version of the ad says it.

Sitelinks: The Villas · Rental Programme · Book a Viewing · Open House 20 Nov (ends 20 Nov) · Lexis Track Record · 中文.
Callouts: Private Pool Every Villa · Run by Lexis Hotel Group · 15-Year Rental Programme · 10 Owner Nights a Year · Showroom Open 10am-4pm · Agent REN 51947.
Also add a price asset ("From RM860,000") and a call asset (+60 12-297 0362, 10am to 4pm).

No percentages, returns, "guaranteed" or "investment" anywhere, in the ads or the keywords.

## 4. Split testing: one test, kept simple

20 days at about RM50 a day buys roughly 250 to 300 clicks. That's enough for **one** test to point a direction, not to prove a winner. Copy tests (headline A vs B) need thousands of impressions per version, so let Google rotate the 15 headlines.

**The test: which landing page brings more buyers who message?**
- Ad group A gets two identical ads. Ad 1 goes to /villas/, Ad 2 to /rental-programme/.
- Set ad rotation to "Do not optimise: rotate ads indefinitely" so each gets half the traffic.
- Judge on WhatsApp messages actually received and their quality in the lead sheet, not clicks or click rate.
- Why this test: the one closed deal so far came from the rental-programme page (lesson L1). If the programme page wins again, that's the second sign, and it decides the next campaign's landing page.

The second comparison comes free: **cost per WhatsApp message by ad group** (A Lexis Hibiscus 2, B existing-resort buyers, D Chinese). It tells us whether the existing-resort traffic is worth paying for at all.

## 5. Landing page changes (staging first, your yes before live)

In order of value, all small:

1. **A reference code in each WhatsApp pre-fill message** (test h2-T04), for example "Hi, I'd like villa pricing for Lexis Hibiscus 2. (Ref: V-AD)". The code shows the page and whether the visitor came from an ad. Today a WhatsApp click is all we see; with the code, every message in your phone says where it came from. This is the most useful change for judging lead quality. About an hour of work, done before Wednesday.
2. **Remove the unconfirmed claims on /villas/ and /rental-programme/**: "1,734 rooms", "largest ballroom in Negeri Sembilan", "GDV RM1.6 billion", "80 acres", "rental paid since 2006". Google's ad review checks landing pages too, and approved-facts.md marks all of these as unconfirmed. Alternatively, confirm them and I'll keep them.
3. **Add the six-answer FAQ** (built today for the homepage) near the top of /villas/, with the price, the developer and the pool. Buyers from ads get the basics without scrolling.
4. **Deepavali Open House strip** on both landing pages until 13 Nov ("Visit us Friday 13 Nov, 1 to 4pm, Bukit Bintang Showroom"). It gives ad visitors a date to act on.
5. Optional, bigger: page speed. Mobile scores are about 67 because the styles load as a script. Fixing it takes 1 to 2 days, so leave it until after this run.

## 6. Measuring lead quality

- Google Ads counts "hibiscus2 (web) whatsapp_click" and "lead_form_submit" as conversions (set up 21 Oct). A WhatsApp click isn't a message, so the real measure is your lead sheet.
- 13 Nov (GA4 programme chat, Keith's yes): GTM-P35VKVXV version 6 adds one GA4 tag, `form_submit`, on the existing lead_form_submit trigger, for the common monthly report only. It is not imported into Ads. The Ads conversions, triggers and the h2_form_* funnel are unchanged. GA4 Enhanced measurement "Form interactions" was turned off on property 544930042, so Google's automatic form_start/form_submit no longer fire on submit clicks. No key event or Ads import used them. Removing GTM altogether: not before about 27 Nov (landing-page test), and only with identical event names.
- For every WhatsApp or form lead from 11 to 30 Nov, add a row with the Ref code and the stage it reached (Replied → Viewing booked → Booked).
- I check the search terms on Thu 12 Nov, Mon 16 Nov and Mon 23 Nov and add negatives. The Monday marketing-loop report covers the rest.
- Judge the run over 4 to 8 weeks (lesson L2): viewings booked by mid-January matter more than leads in November.

## 7. Who does what

| Step | Who |
|---|---|
| Approve this plan (or tell me what to change) | Keith |
| WhatsApp ref codes and the landing page fixes on staging; you approve, then live | hibiscus2 chat |
| Paste the new ads, keywords, negatives and assets into Search-1, left **paused** | hibiscus2 chat, if you say yes (or you do it from the JSON) |
| Set budget, dates and bidding, then switch the campaign on | Keith (budget and spend stay your decision) |
| Search-term checks 12, 16 and 23 Nov | hibiscus2 chat |

## Status, 10 Nov 2026 (loaded into Google Ads, campaign still paused)

Done in Search-1 by the hibiscus2 chat, with Keith's yes ("Yes, load paused"):
- 54 campaign-wide negative keywords (section 2), plus 8 on ad group B (review, reviews, photos, map, contact, phone number, email, address).
- New ad groups A (9 keywords; two ads: /villas/ and /rental-programme/ for the landing-page test), B (6 keywords; headlines 1 and 2 pinned), C (5 keywords), D (5 Chinese keywords; /zh/villas/). All copy as in `2026-11-ad-copy.json`. Google's AI-suggested headlines and sitelinks were replaced or removed.
- Old ad groups (Brand, Generic, Ownership, Foreign Buyer Intent) paused; their old ads with "RM774,000" no longer serve.
- 6 sitelinks and 6 callouts at campaign level. All new ads and assets were "under review" at the time of loading.

Still Keith's (not changed): start/end dates (old 11–31 Jul), budget (RM50/day), bidding (still "Maximise conversions"), locations (KL, JB, Penang, Kuching, Bintulu only), language (English only, so ad group D will not show to Chinese-language users until Chinese is added), ad rotation, ad schedule, campaign goal ("No goal selected"), and switching the campaign on.
Remove the "Open House 13 Nov" sitelink after 13 Nov (hibiscus2 chat, at the 16 Nov check).

## Status, 10 Nov 2026 (later): new campaign with a fixed RM1,000 total budget

Keith chose a campaign total budget (Google: "you will never be charged more than your total budget") instead of a daily budget, which can overshoot (up to 2x a day; monthly cap 30.4x daily). Total budgets only work on new campaigns, so a new campaign was built:

- **"Search - Nov 2026 (RM1,000 total)"** (campaign ID 24444757086): Search network only (no search partners, no Display), Maximise clicks with a RM4 max CPC, campaign total budget RM1,000, 11 to 30 Nov 2026, 9am to 10pm daily, ads rotate evenly, AI Max and its text/URL options off, conversion goal Contacts only (WhatsApp click + form), languages all.
- Locations: Kuala Lumpur, Selangor, Negeri Sembilan, Melaka, Johor, Penang (states), presence only.
- Ad groups A (two ads: /villas/ and /rental-programme/), B, C, D with the same keywords and copy as in Search-1; 54 campaign negatives plus B's 8; the 6 new sitelinks and 6 callouts. The old sitelinks (with RM774,000) were not attached.
- **Status: paused.** Search-1 and the Performance Max "Campaign #1" are also paused and should stay paused.

To start: Keith switches "Search - Nov 2026 (RM1,000 total)" on (campaign status: Enable). Remove the "Open House 13 Nov" sitelink after 13 Nov.

**Switched on 10 Nov 2026 with Keith's yes ("Yes, switch it on").** "Search - Nov 2026 (RM1,000 total)" is Enabled and starts serving 11 Nov; Search-1 and Campaign #1 remain paused. Checks: 12, 16 and 23 Nov search terms; remove the Open House sitelink after 13 Nov.


## Open House moved (10 Nov 2026)

The Deepavali Open House moved to Friday 20 Nov, 1pm to 5pm, Imperial Lexis Kuala Lumpur, 7th floor. With Keith's yes ("Yes, both"), the sitelink asset was edited for both campaigns: "Open House 20 Nov" / "Deepavali property open house" / "Fri 1pm-5pm, Imperial Lexis KL", same URL, with an asset end date of 20 Nov 2026, so it stops by itself and no longer needs removing at the 16 Nov check. Status after save: under review. The website strips on /villas/ and /rental-programme/ (EN and ZH) now hide after 20 Nov.

## Showroom moved (11 Nov 2026)

The Bukit Bintang Showroom is no longer available; the KL viewing venue is now Imperial Lexis Kuala Lumpur, Level 7, by appointment (hours not yet confirmed). With Keith's yes ("Yes, both"), in "Search - Nov 2026 (RM1,000 total)": the headline "Bukit Bintang Showroom Visit" became "Viewings at Imperial Lexis KL" in ads A (both), B and C; the showroom descriptions in A, B, C and D now name Imperial Lexis Kuala Lumpur; all 5 ads saved with "no policy issues". Sitelink "Book a Viewing" now reads "Imperial Lexis Kuala Lumpur" / "Level 7, by appointment"; callout "Showroom Open 10am-4pm" became "Viewings by Appointment" (both under review). Left as is: the "Contact Us" sitelink on the paused Performance Max campaign (Campaign #1), which still says Bukit Bintang; fix it before that campaign is ever re-enabled.

Update 11 Nov (Keith: no need to mention Level 7 in ads): the "Book a Viewing" sitelink line 2 is now "10am to 4pm, by appointment" (was "Level 7, by appointment"). No other ad text mentions Level 7.

## First lead check and draft negatives (11 Nov 2026)

**Lead:** first WhatsApp lead "Ref: VIL-EN-AD" (5:47pm, 11 Nov) was not qualified (Keith). The person used the /villas/ "book a viewing and get villa pricing" pre-fill but wanted a holiday stay; declined once told it is a villa for sale with a showroom viewing. Logged in the hibiscus2 lead-quality sheet (row 4): Google Ads, Junk, "Wrong project", note says holiday-stay seeker.

**Search terms, day 1 (11 Nov, campaign total):** 21 clicks, RM45.32, 2 conversions. 34 terms shown, 2 clicks hidden by Google.
- Biggest spender: "lexis hibiscus port dickson" (exact, ad group B): 9 clicks, RM21.30, both conversions. This is the existing hotel's name, so most of these searchers are hotel guests; the lead above probably came from here. Negatives cannot fix that; it is what the B ad copy ("Buying, Not Booking a Stay?") is for.
- Clearly hotel-guest terms that got clicks: "大 紅花 飯店" (Hibiscus hotel/restaurant, D, RM1.69), "lexis hibiscus port dickson restaurant" (A, RM1.55), the resort's street address (A, RM2.14).
- Hotel-guest terms with impressions only: room-type names ("executive pool villa", "water chalets", "tower block"), "facilities", "大红花酒店", "port dickson 大红花酒店".
- Already blocked and working: hotel, booking, room, stay, staycation, homestay, agoda and the rest of the 54 (none of them appear in the report).

**Draft negatives, campaign-wide, broad match (NOT added; waiting for Keith's yes):**
- English: restaurant, restaurants, dinner, lunch, food, holiday, vacation, getaway, honeymoon, family trip, per night, night, rooms, rates, chalets, water chalet, executive pool villa, tower block, facilities, kids, theme park, jalan pantai
- Malay: cuti, percutian, bercuti, bilik, menginap, penginapan, harga bilik, makan, kolam renang awam
- Chinese: 酒店, 饭店, 飯店, 住宿, 订房, 訂房, 房价, 餐厅, 度假, 自助餐

Not proposed: "price"/"prices" (buyers ask for villa prices too) and "resort" (part of the brand searches). Why "rooms", "chalets": Google negatives do not match plurals, so "room" and "chalet" already in the list miss them.

**Watch at the 16 Nov check:** if more ad-group-B leads turn out to be holiday seekers, consider pausing B (it took 47% of day-1 spend).

**Added 11 Nov 2026 with Keith's yes ("Yes, add them"):** all 41 draft negatives above, campaign level, broad match, on "Search - Nov 2026 (RM1,000 total)". Negative list now 103 (95 campaign + 8 on ad group B). Google confirmed "Your negative keywords were created."

## Ad copy rewrite (13 Nov 2026)

A four-reviewer review (CoS: ChatGPT, Fable, Sonnet, Haiku) is in `ads/reviews/`. The rewrites are Fable's, and the exact lines are in `ads/reviews/2026-11-13-change-sheet.md`. Keith approved "Yes, all four" in the CoS chat, then "Yes, apply them" in this chat. Every line was length-checked and scanned for banned words before saving. Google reviewed each saved ad and found "no policy issues".

- **Ads 2 and 3 (group A):** before the edit, they were already identical (same 15 headlines, 4 descriptions and sitelinks, no pins). Only the final URL and display path differed. Both now carry the same new "for sale" copy, with no pins. **The landing-page test restarts on 13 Nov 2026**; compare /villas/ and /rental-programme/ from this date only.
- **Ad 1 (group B):** rewritten. Pinned to position 1: "Lexis Hibiscus 2: For Sale" and "Lexis Hibiscus 2 Villa Sales". Pinned to position 2: "Buying, Not Booking a Stay?", "Villas to Buy, Not Hotel Rooms" and "For Buyers, Not Hotel Guests". "Book" became "Arrange". The operator and programme headlines were removed. The editor's Ad Strength estimate moved from Poor to Average.
- **Ad 5 (group C):** the keyword "hotel managed villa malaysia" was **paused**, not removed. The campaign-wide negative "hotel" blocked it, and a campaign negative can't be exempted for one ad group. Copy rewritten with "for sale" lines; "furnished" removed (not in approved-facts.md); description 1 uses "For villa owners: …" because the facts don't say whether joining the programme is automatic.
- **Ad 4 (Chinese):** not changed. The new lines wait for a native-speaker check (see the change sheet).
- Ad Strength in the list shows "Pending" for all four edited ads straight after saving; re-read it on the next check.
- Keith, 13 Nov, after this was applied: the word "booking" can draw hotel guests. With his yes ("Yes, apply both"), ad 1 headline "Buying, Not Booking a Stay?" became "For Villa Buyers Only" (still pinned to position 2), and description "Not hotel bookings. We sell villas at Lexis Hibiscus 2, run by Lexis Hotel Group." became "For villa buyers only. We sell new villas at Lexis Hibiscus 2, run by Lexis Hotel Group." Saved with no policy issues. No line in ad 1 now contains "book".

## Open house Display campaign (13 Nov 2026)

Keith, 13 Nov: the agent's Eventbrite and Eventsize listings got 17 registrations, so promote the open house with Display banners too. Keith approved **RM300 in total** ("Yes, RM300 total"), with the campaign ending 20 Nov.
- Banners: `ads/creative/2026-11-open-house/` (1200x1200 and 1200x628, built from the Lexis Hibiscus 2 render, labelled "Artist's impression", without the "change of date" notice).
- Landing page: /events/deepavali-open-house-2026/, live 13 Nov with Keith's yes. It has a registration form, and a registration counts as lead_form_submit with lp_variant open-house. WhatsApp messages carry Ref OH20-EN-AD/WEB.
- Eventbrite listing (agent's): it still says Pavilion Tower, Bukit Bintang, drop-in until 4pm, and "investment information". Flagged to Keith; the agent should fix it there.
