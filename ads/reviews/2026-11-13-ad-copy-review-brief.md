# Brief: review the 5 hibiscus2 November Google Search ads (13 Nov 2026)

You are an independent senior Google Ads copywriter reviewing a live Search campaign. This is a review only: change no files and no ads.

## The business
hibiscus2.com sells new villas at **Lexis Hibiscus 2, Port Dickson, Malaysia**: 2-bedroom overwater villas, each with a private pool, priced from RM860,000 and developed by KL Metro Group. The villas run in a 15-year rental programme operated by Lexis Hotel Group, with a fixed rental phase followed by profit-sharing and 10 owner nights a year. The agent is Joe Wong (REN 51947) of Summerfield Property. Viewings are at Imperial Lexis Kuala Lumpur (Level 7, by appointment) or at the Port Dickson sales gallery.

**Facts:** the only source of truth is `approved-facts.md` in the repo root, so read it. Any claim that isn't in it must be written as `[INSERT: …]`.

## The campaign
"Search - Nov 2026 (RM1,000 total)" runs from 11 to 30 Nov. It has four ad groups, each a responsive search ad with 15 headlines (max 30 characters each) and 4 descriptions (max 90 characters each). The full current assets are in `ads/2026-11-ad-copy.json`. Its showroom lines already read Imperial Lexis, which matches the live ads. Keywords and the change log are in `ads/2026-11-campaign-plan.md`.

Performance from 6 to 12 Nov, in the order the owner sees the ads:

| # | Ad | Landing page | Ad Strength | Clicks | Cost | Conversions | Note |
|---|---|---|---|---|---|---|---|
| 1 | B, existing-resort searches, buyers only | /villas/for-sale | POOR | 22 | RM42.83 | 4 | Headlines 1 "Lexis Hibiscus 2: For Sale" and 2 "Buying, Not Booking a Stay?" are pinned on purpose to filter out hotel-guest searches. |
| 2 | A, project name | /villas/port-dickson | AVERAGE | 18 | RM33.91 | 1 | **The owner says it looks very strange.** Shown as: "Lexis Hibiscus 2 Port Dickson \| Villas From RM860,000 \| Private Pool in Every Villa", with the description "Own a 2-bedroom overwater villa with its own private pool. From RM860,000. Run day to day by Lexis Hotel Group under a 15-year rental programme. Ask for the terms." |
| 3 | A, same copy as #2 | /programme/port-dickson | Excellent | 10 | RM21.12 | 0 | Landing-page A/B test against #2 |
| 4 | D, Chinese | /zh/villas | Excellent | 2 | RM2.96 | 0 | |
| 5 | C, rental programme | /programme/port-dickson | Good | 0 impressions | | | |

## Rules (hard)
- **Banned words and claims:** percentages or returns, "guaranteed", "GRR", "cashback", "zero downpayment", "investment", "yield", "ROI". Never point to grrmalaysia.com.
- **Keep buyers, filter out holiday-makers.** The first WhatsApp lead was a holiday-stay seeker. Every ad must make clear that these are villas for sale, not hotel stays.
- **Ads 2 and 3 are a landing-page test.** Keep their copy identical. If you think the copy must change, propose one shared version and say that the test restarts.
- **Ad 1 (group B):** raising Ad Strength must not quietly remove the pinned buyer filter, because this ad has 4 of the 5 conversions. If you suggest changing the pins, state the trade-off plainly.
- Respect the character limits: headlines up to 30, descriptions up to 90. Show the count for every line.

## What to deliver, per ad (1 to 5)
1. **Diagnosis:** what is weak or strange, and why. For ad 2, say specifically what makes it read strangely.
2. **Why Ad Strength is low:** for example, repetitive headlines, too few unique keywords, or pinning. Say which fix moves it most.
3. **One proposed rewrite:** the full 15 headlines and 4 descriptions with character counts. Mark which are pinned and where. Mark lines changed from the current copy with `*`.
4. **Risk:** anything the owner should know before approving it.

End with the **top 3 changes in priority order**, written for a business owner who isn't a marketer. Keep it in plain English.
