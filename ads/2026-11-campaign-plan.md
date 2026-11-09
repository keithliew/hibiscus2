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

Sitelinks: The Villas · Rental Programme · Book a Viewing · Open House 13 Nov (until 13 Nov) · Lexis Track Record · 中文.
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
