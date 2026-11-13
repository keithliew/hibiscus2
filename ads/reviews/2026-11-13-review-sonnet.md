# Review of the 5 hibiscus2 November Google Search ads (13 Nov 2026), Sonnet

Review only. No file or ad was changed. Sources read: the brief, `approved-facts.md`, `ads/2026-11-ad-copy.json`, `ads/2026-11-campaign-plan.md`. I could not open Google Ads, so anything about live settings (pins on ad 2, keyword status) is marked "check".

Character counts: headlines max 30, descriptions max 90. Chinese characters count as 2 each in Google Ads, so I counted them that way. `*` = changed from current copy. `P1` = pinned to headline position 1.

## Read this first

1. **Ad 2 reads strangely because it says the same thing three times and never says "for sale".** The shown ad is price, then pool, then (in the description) "own a villa with its own private pool, from RM860,000". The reader sees "From RM860,000" and "private pool" twice each. "Villas From RM860,000" has no "new" or "for sale", so it reads like a rental or hotel rate. "Lexis Hibiscus 2 Port Dickson" sounds like a hotel name. The second description ends "Ask for the terms.", which is vague and cut short, so the ad ends on nothing.
2. **Ads 2 and 3 have identical copy but different Ad Strength (Average vs Excellent).** That should not happen from copy alone. Check in Google Ads whether ad 2 has a leftover pin, a different final URL setting or a removed asset. If ad 2 has a pin on the first headline, that explains both the odd look and the lower score.
3. **Ad 1's 4 conversions may be mostly hotel guests.** On day 1 the exact keyword "lexis hibiscus port dickson" (ad group B) took 9 clicks and both conversions, and the plan itself says those searchers are mostly hotel guests. A conversion here is a WhatsApp click, not a qualified lead. Before treating ad 1 as the winner, match its 4 conversions against the lead sheet.
4. **Ad 5 has 0 impressions, probably because the keywords are blocked or too rare, not because of the copy.** One keyword, "hotel managed villa malaysia", contains "hotel", which is a campaign-wide negative keyword, so it can never match. Check the other four keywords for "low search volume" status.

---

## Ad 1: Group B, existing-resort searches, buyers only (POOR, 22 clicks, RM42.83, 4 conversions)

### 1. Diagnosis
The copy is good at its job. It tells hotel guests to go away ("Buying, Not Booking a Stay?", "Not hotel bookings"), and click cost is low (about RM1.95). Weak points:
- Only two headlines carry the words people typed ("lexis hibiscus ... for sale"). The other headlines are about the villa, not the search.
- "Same Group, New Resort" is vague and does not help a buyer decide.
- "WhatsApp Our Consultant" and "Get Villa Prices on WhatsApp" say the same thing.

### 2. Why Ad Strength is POOR
Main cause: **two headlines pinned to positions 1 and 2.** With positions 1 and 2 locked, Google can only vary position 3, so it has almost no combinations to test, and it scores that as poor. Second cause: the ad group's keywords ("lexis hibiscus for sale", "villa for sale", "port dickson for sale") appear in few headlines.

The fix that moves it most is to **loosen the pins, not remove them**: pin a small pool of buyer-filter headlines all to position 1 (Google picks one of them each time) and leave position 2 free. This is the biggest change available, and I would expect it to move the rating up at least one step, but I cannot promise a rating before it is tried.

**Trade-off, plainly:** today every showing has BOTH buyer lines ("For Sale" and "Buying, Not Booking a Stay?"). After this change every showing still has ONE buyer line in the first spot, but it will no longer always have two. The first-spot line is the one that turns hotel guests away, so I think the filter holds, but it is slightly weaker. If you want both lines every time, keep the current pins and accept POOR.

### 3. Proposed rewrite (pins: 3 headlines in position 1; no description pins)
| # | Headline | Chars | Pin |
|---|---|---|---|
| 1 | Lexis Hibiscus 2: For Sale | 26 | P1 |
| 2 | Buying, Not Booking a Stay? | 27 | P1 |
| 3 | Villas For Sale, Not a Hotel* | 28 | P1 |
| 4 | Own a Villa Next Door | 21 | - |
| 5 | Lexis Hibiscus Villas For Sale* | 30 | - |
| 6 | Port Dickson Villas For Sale* | 28 | - |
| 7 | Ownership From RM860,000 | 24 | - |
| 8 | Private Pool in Every Villa | 27 | - |
| 9 | Managed by Lexis Hotel Group | 28 | - |
| 10 | 15-Year Rental Programme | 24 | - |
| 11 | Book a Private Viewing | 22 | - |
| 12 | Overwater Villas for Sale | 25 | - |
| 13 | 10 Owner Nights Every Year | 26 | - |
| 14 | Viewings at Imperial Lexis KL | 29 | - |
| 15 | Get Villa Prices on WhatsApp | 28 | - |

| # | Description | Chars |
|---|---|---|
| 1 | For buyers: new private-pool villas at Lexis Hibiscus 2, next door. From RM860,000. | 83 |
| 2 | Not hotel bookings. We sell villas at Lexis Hibiscus 2, run by Lexis Hotel Group. | 81 |
| 3 | Own a 2-bedroom overwater villa with its own private pool, plus 10 owner nights a year. | 87 |
| 4 | Book a private viewing at Imperial Lexis Kuala Lumpur. Prices and layouts on WhatsApp. | 86 |

Changes: new headline 3 (a third filter line for position 1), new headlines 5 and 6 (match what people search), dropped "Same Group, New Resort", "2-Bedroom Pool Villas" and "WhatsApp Our Consultant". All four descriptions unchanged; description 2 already says "Not hotel bookings". Optional extra safety: pin description 2 to description position 1, at a small cost to Ad Strength.

### 4. Risk
- Changing pins means Google re-reviews the ad and the ad's learning starts again. It holds 4 of 5 conversions, so edit it only after you decide the "hotel guest" question in point 3 above.
- If hotel-guest clicks do rise after the pin change, the first sign is more junk WhatsApp leads on the 16 Nov check; revert the pins then.
- The existing-resort exact keyword is still the main cost driver. This ad can look good on clicks and conversions while buying hotel guests.

---

## Ad 2: Group A, project name, /villas/port-dickson (AVERAGE, 18 clicks, RM33.91, 1 conversion)
## Ad 3: same copy, /programme/port-dickson (Excellent, 10 clicks, RM21.12, 0 conversions)

Both ads share one version below. Both are rewritten together.

### 1. Diagnosis (why ad 2 looks very strange)
- **Repetition across headline and description.** Price and "private pool" show twice in one ad.
- **No "for sale" or "new" anywhere in the headlines.** "Villas From RM860,000" is ambiguous (to rent? to book?). For an ad whose main risk is holiday-stay seekers, that is the biggest gap.
- **"Lexis Hibiscus 2 Port Dickson" as the lead line reads like a hotel listing.**
- **"Ask for the terms."** is vague: ask whom, where?
- Headline 14, "Villas From 858 sq ft", is an odd phrase (the size is a floor area, not a price tier) and "Next to Lexis Hibiscus Resort" invites people looking for the hotel.
- Because Google picks any 3 of the 15 headlines, the three you see can pile up the same idea (price, pool, price).

### 2. Why Ad Strength is only AVERAGE (ad 2)
Main cause: **headlines repeat the same ideas** (price, pool and "villas" each appear in several lines) and **few headlines contain what people actually search**: "for sale", "price" and "2.0" are not in any headline, though several keywords use them. The fix that moves it most: add headlines that use the search words ("Hibiscus 2 Villas For Sale", "Lexis Hibiscus 2 Villa Prices") and delete near-duplicate ones.
Also check ad 2 for a leftover pin (see "Read this first", point 2), because ad 3 with the same copy rates Excellent.

### 3. Proposed shared rewrite (no pins)
| # | Headline | Chars | Pin |
|---|---|---|---|
| 1 | Lexis Hibiscus 2 Port Dickson | 29 | - |
| 2 | Hibiscus 2 Villas For Sale* | 26 | - |
| 3 | New Villas From RM860,000* | 25 | - |
| 4 | Private Pool in Every Villa | 27 | - |
| 5 | Lexis Hibiscus 2 Villa Prices* | 29 | - |
| 6 | Villas For Sale, Not a Hotel* | 28 | - |
| 7 | Book a Private Viewing | 22 | - |
| 8 | Managed by Lexis Hotel Group | 28 | - |
| 9 | 15-Year Rental Programme | 24 | - |
| 10 | Overwater Villas, Port Dickson | 30 | - |
| 11 | 2-Bedroom Pool Villas | 21 | - |
| 12 | Viewings at Imperial Lexis KL | 29 | - |
| 13 | Developed by KL Metro Group | 27 | - |
| 14 | 10 Owner Nights Every Year | 26 | - |
| 15 | Get Villa Prices on WhatsApp | 28 | - |

| # | Description | Chars |
|---|---|---|
| 1 | New 2-bedroom overwater villas for sale, each with its own private pool.* | 72 |
| 2 | Run by Lexis Hotel Group under a 15-year rental programme. Message us for the terms.* | 84 |
| 3 | Book a private viewing at Imperial Lexis Kuala Lumpur or the Port Dickson sales gallery. | 88 |
| 4 | Talk to Joe Wong (REN 51947), Summerfield Property. Prices and layouts on WhatsApp. | 83 |

Changes: new price line "New Villas From RM860,000" (adds "New"), three new search-word lines, one buyer-filter line ("Villas For Sale, Not a Hotel"), description 1 rewritten so it no longer repeats the price, description 2 shortened and the dangling "Ask for the terms" replaced. Dropped: "Villas From 858 sq ft", "Next to Lexis Hibiscus Resort", "WhatsApp Our Consultant", "Villas From RM860,000".

### 4. Risk
- **Editing the copy restarts the test.** Ads 2 and 3 are a landing-page test. Changing the text creates new ads with no history, so the 28 clicks and 1 conversion so far are lost for comparison. The test is weak anyway at this volume (1 conversion vs 0), so I think restarting is worth it. If you prefer to keep the test running, change nothing and keep copy identical.
- Apply the same version to BOTH ads at the same time, so the comparison stays fair.
- "Overwater" is used in the live ads and the brief; `approved-facts.md` itself says "water homes". Worth a one-line check with Summerfield.
- New policy review: the "Not a Hotel" line contains the word "Hotel". It describes the product correctly, but if it is disapproved, replace it with "Villas For Sale, Not Stays".

---

## Ad 4: Group D, Chinese, /zh/villas (Excellent, 2 clicks, RM2.96, 0 conversions)

### 1. Diagnosis
Already rated Excellent, so the rewrite is small. Weaknesses: nothing in the headlines says "for sale" (出售), though the keyword "波德申 别墅 出售" does; headline 9 "吉隆坡展厅参观" still refers to the showroom, which no longer exists as that venue (only the English ads were updated on 11 Nov); "Lexis Hibiscus 2" repeats headline 1's idea.

### 2. Why Ad Strength is not an issue
Excellent already. Low click count (2) is a search-volume problem, not a copy problem; Chinese searches for this are rare. The most useful fix for volume is not copy but checking that Chinese is targeted and the keywords are not too narrow.

### 3. Proposed rewrite (no pins). Counts: Chinese characters count as 2
| # | Headline | Chars | Pin |
|---|---|---|---|
| 1 | 马来西亚大红花2.0 | 17 | - |
| 2 | 波德申私人泳池别墅 | 18 | - |
| 3 | RM860,000起 | 11 | - |
| 4 | 预约私人参观 | 12 | - |
| 5 | 每栋别墅设私人泳池 | 18 | - |
| 6 | 15年租赁计划 | 12 | - |
| 7 | 业主每年10晚免费入住 | 20 | - |
| 8 | WhatsApp联系顾问 | 16 | - |
| 9 | 吉隆坡Imperial Lexis参观* | 24 | - |
| 10 | 两房两浴水上别墅 | 16 | - |
| 11 | Lexis Hotel Group管理 | 21 | - |
| 12 | 波德申别墅出售* | 14 | - |
| 13 | 新别墅出售，非酒店订房* | 22 | - |
| 14 | 索取价格与户型 | 14 | - |
| 15 | KL Metro Group发展 | 18 | - |

| # | Description | Chars |
|---|---|---|
| 1 | 马来西亚大红花2.0波德申新别墅出售，两房设私人泳池，价格由RM860,000起。* | 70 |
| 2 | 由Lexis Hotel Group营运的15年租赁计划，WhatsApp索取完整条款。 | 61 |
| 3 | 预约吉隆坡Imperial Lexis或波德申销售展厅私人参观。 | 50 |
| 4 | 联系Summerfield顾问Joe Wong（REN 51947），WhatsApp索取价格与户型。 | 66 |

Changes: headline 9 now names Imperial Lexis; headlines 12 and 13 add "for sale" and a buyer filter ("not hotel booking"); description 1 adds "新别墅出售". Dropped "Lexis Hibiscus 2" and "紧邻Lexis Hibiscus". Please have a Chinese reader check the wording before it goes in; I am confident in the meaning but not in the marketing tone.

### 4. Risk
- Very little data (2 clicks), so nothing here is evidence; this ad is low priority.
- "业主每年10晚免费入住" says the nights are free; that matches the approved facts ("complimentary") but might attract holiday-minded readers. I left it as is.

---

## Ad 5: Group C, rental programme, /programme/port-dickson (Good, 0 impressions)

### 1. Diagnosis
- **No impressions means the ad was never shown, so the copy has not been tested at all.** Likely reasons, in order: (a) the keyword "hotel managed villa malaysia" is blocked by the campaign-wide negative "hotel"; (b) the other keywords ("lexis leaseback", "lexis hibiscus rental programme") are rare searches; (c) in a RM1,000 total budget the budget goes first to ad groups with more traffic. Check each keyword's status in Google Ads ("low search volume", "negative keyword conflict") before changing anything.
- Copy: not one headline says "for sale". A person searching "rental programme" may be looking to rent a holiday home, which is the very mistake this campaign wants to avoid.
- Description 2 says the villa is "furnished, maintained". "Furnished" is not in `approved-facts.md`, so it must not be claimed as written.

### 2. Why Ad Strength is Good, not higher
No pins. It lacks the search-word variety (nothing with "for sale"); also headlines 11-14 ("Hotel-Run Resort Villas", "Fully Managed by the Hotel", "No Day-to-Day Management", "Own It. They Run It.") say the same thing four ways. Dropping the repeated ones and adding search-word lines moves it most.

### 3. Proposed rewrite (no pins)
| # | Headline | Chars | Pin |
|---|---|---|---|
| 1 | 15-Year Rental Programme | 24 | - |
| 2 | Managed by Lexis Hotel Group | 28 | - |
| 3 | Own It. They Run It. | 20 | - |
| 4 | Private Pool Villas, PD | 23 | - |
| 5 | Villas From RM860,000 | 21 | - |
| 6 | 10 Owner Nights Every Year | 26 | - |
| 7 | Exit With 3 Months' Notice | 26 | - |
| 8 | Get the Full Programme Terms | 28 | - |
| 9 | Lexis Hibiscus 2 Port Dickson | 29 | - |
| 10 | Port Dickson Villas For Sale* | 28 | - |
| 11 | Villas For Sale, Not a Hotel* | 28 | - |
| 12 | WhatsApp Our Consultant | 23 | - |
| 13 | Fully Managed by the Hotel | 26 | - |
| 14 | Resort Villas For Sale* | 22 | - |
| 15 | Viewings at Imperial Lexis KL | 29 | - |

| # | Description | Chars |
|---|---|---|
| 1 | A 15-year programme run by Lexis Hotel Group: a fixed rental phase, then profit-sharing. | 88 |
| 2 | Lexis Hotel Group runs your villa day to day. You are not involved in daily operations.* | 87 |
| 3 | Ask for the full programme terms on WhatsApp or at Imperial Lexis Kuala Lumpur. | 79 |
| 4 | Private-pool villas for sale at Lexis Hibiscus 2, Port Dickson. From RM860,000.* | 79 |

Changes: three "for sale" headlines in place of "Hotel-Run Resort Villas", "Book a Consultation" and "No Day-to-Day Management"; description 2 no longer says "furnished, maintained" (not in approved facts); description 4 now says "for sale".

### 4. Risk
- The copy fix will not help if the keywords are blocked. First decision: should "hotel managed villa malaysia" stay? It cannot match while "hotel" is a negative, so either drop the keyword or accept it as dead.
- "profit-sharing" in description 1 is approved wording (structure only, no numbers) but sits on the watch list; keep it exactly as written.
- With about 17 days left, a group with no impressions may never get enough data. Consider whether its RM4 max CPC and keywords are worth keeping at all.

---

## Top 3 changes, in order

1. **Make every ad say "villas for sale" in its headlines (ads 2, 3, 5 especially).** The one lead so far was a holiday-stay seeker, and ads 2, 3 and 5 never say "for sale" in a headline. This is the cheapest protection against paying for the wrong people.
2. **Rewrite ads 2 and 3 as one shared version, accepting that the landing-page test restarts.** It fixes the strange look, removes the repeated price and pool, and ends the "Ask for the terms" dangling. The test only has 1 conversion so far, so little is lost.
3. **Loosen ad 1's pins (three buyer-filter headlines all in position 1, nothing in position 2), but only after checking that its 4 conversions were really buyers.** This is the biggest Ad Strength gain, but ad 1 holds 4 of the 5 conversions and the filter is its whole purpose, so look at the lead sheet first.

Also worth doing, not in the top 3: find out why ad 5 never shows (the negative "hotel" blocks one of its keywords) and update the Chinese ad's out-of-date "展厅" headline.
