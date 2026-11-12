# Ad copy changes ready to apply (13 Nov 2026)

CoS relayed Keith's yes, "Yes, all four", to the four recommendations in `2026-11-13-comparison.md`, using Fable's rewrites. Nothing has been changed in Google Ads yet. The Ads editor refused a live edit on a relayed yes, so Keith needs to confirm in the hibiscus2 chat.

Checks: every line was counted by script (Chinese characters count as 2) and scanned with the rules from `tools/compliance_scan.py`. Nothing is over the limit and nothing is banned. The only watch hit is "profit-sharing" (ad 5), which is approved wording.

## 1. Ads 2 and 3 (group A): one shared rewrite, no pins
Live check, 13 Nov: the two ads were already identical (same 15 headlines, 4 descriptions and sitelinks, no pins). Only the final URL and display path differ. The landing-page test restarts on the day this is applied.

Headlines: Lexis Hibiscus 2 Port Dickson / Villas for Sale From RM860,000 / Lexis Hibiscus 2: For Sale / Own a Private Pool Villa / Arrange a Private Viewing / Managed by Lexis Hotel Group / 15-Year Owner Rental Programme / Overwater Villas for Sale / 2-Bedroom Villas to Own / Lexis Hibiscus 2 Villa Prices / Viewings at Imperial Lexis KL / Private Pool in Every Villa / Developed by KL Metro Group / 10 Owner Nights Every Year / Get Villa Prices on WhatsApp

Descriptions:
1. For sale: 2-bedroom private-pool villas at Lexis Hibiscus 2, Port Dickson. From RM860,000.
2. For owners: a 15-year rental programme run by Lexis Hotel Group. Ask us how it works.
3. Buying a villa? Arrange a viewing at Imperial Lexis Kuala Lumpur or in Port Dickson.
4. Speak to Joe Wong (REN 51947), Summerfield Property. Villa prices and layouts on WhatsApp.

## 2. Ad 1 (group B): buyer filter kept and widened
Pinned to position 1: "Lexis Hibiscus 2: For Sale", "Lexis Hibiscus 2 Villa Sales".
Pinned to position 2: "Buying, Not Booking a Stay?", "Villas to Buy, Not Hotel Rooms", "For Buyers, Not Hotel Guests".
Not pinned: Own a Villa Next Door / Ownership From RM860,000 / Villas for Sale, Port Dickson / Overwater Villas for Sale / Lexis Hibiscus 2 Villa Prices / Private Pool in Every Villa / 2-Bedroom Villas to Own / Arrange a Private Viewing / Viewings at Imperial Lexis KL / Get Villa Prices on WhatsApp

Descriptions:
1. For buyers: new private-pool villas at Lexis Hibiscus 2, next door. From RM860,000.
2. Not hotel bookings. We sell villas at Lexis Hibiscus 2, run by Lexis Hotel Group.
3. Own a 2-bedroom overwater villa with its own private pool, plus 10 owner nights a year.
4. Buying? Arrange a viewing at Imperial Lexis Kuala Lumpur. Prices and layouts on WhatsApp.

Expected Ad Strength: Poor to Average (the pins keep it from going higher).

## 3. Ad 5 (group C): delivery fix and rewrite
- Keyword "hotel managed villa malaysia": **pause it**. A campaign-level negative can't be exempted for one ad group, and removing "hotel" from the negatives would let hotel searches back into every ad group. Pausing can be undone. Google already lists the keyword as "low search volume".
- "Furnished" is removed. Description 1 uses Fable's safer wording ("For villa owners: …"), because approved-facts.md doesn't say whether joining the programme is automatic.

Headlines: 15-Year Owner Rental Programme / Managed by Lexis Hotel Group / Own It. They Run It. / Private Pool Villas for Sale / Villas for Sale From RM860,000 / 10 Owner Nights Every Year / Exit With 3 Months' Notice / Get the Full Programme Terms / Lexis Hibiscus 2 Port Dickson / Port Dickson Villas for Sale / Resort Villas for Sale / Hotel-Managed Villas to Own / Arrange a Consultation / No Day-to-Day Management / Viewings at Imperial Lexis KL

Descriptions:
1. For villa owners: a 15-year programme with a fixed rental phase, then profit-sharing.
2. Lexis Hotel Group runs your villa day to day. You keep 10 owner nights a year.
3. Ask for the full programme terms on WhatsApp or at Imperial Lexis Kuala Lumpur.
4. Private-pool villas for sale at Lexis Hibiscus 2, Port Dickson. From RM860,000.

## 4. Ad 4 (Chinese): needs a native-speaker check before it goes live
New or changed lines (marked *), plus the replacement for "吉隆坡展厅参观" (it means the old "KL showroom"):

| Line | Text | Means |
|---|---|---|
| H3 * | 别墅售价RM860,000起 | Villa prices from RM860,000 |
| H6 * | 业主专享15年租赁计划 | 15-year rental programme for owners |
| H8 * | 波德申别墅出售 | Port Dickson villas for sale |
| H9 * (replaces 吉隆坡展厅参观) | Imperial Lexis吉隆坡参观 | Viewings at Imperial Lexis Kuala Lumpur |
| H13 * | 购置别墅，非酒店订房 | Buying a villa, not booking a hotel room |
| D1 * | 马来西亚大红花2.0波德申别墅出售，每栋两房别墅均设私人泳池，售价由RM860,000起。 | Lexis Hibiscus 2 Port Dickson villas for sale; every 2-bedroom villa has a private pool; from RM860,000. |
| D2 * | 业主专享15年租赁计划，由Lexis Hotel Group营运。WhatsApp索取完整条款。 | 15-year rental programme for owners, run by Lexis Hotel Group. WhatsApp for the full terms. |

Removed: RM860,000起, 15年租赁计划, WhatsApp联系顾问, 紧邻Lexis Hibiscus, 吉隆坡展厅参观.
Unchanged: 马来西亚大红花2.0 / 波德申私人泳池别墅 / 预约私人参观 / 每栋别墅设私人泳池 / 业主每年10晚免费入住 / 两房两浴水上别墅 / Lexis Hotel Group管理 / Lexis Hibiscus 2 / 索取价格与户型 / KL Metro Group发展, and descriptions D3 and D4.
