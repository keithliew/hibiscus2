# Open house review: comparison and one recommendation (13 Nov 2026)

Proposals only. Nothing on the website or in Google Ads was changed.

**Files in this folder**
- Brief (same for both models): `2026-11-13-open-house-review-brief.md`
- Fable: `2026-11-13-open-house-review-fable.md`
- ChatGPT (Codex, with web search): `2026-11-13-open-house-review-chatgpt.md`
- Eventbrite benchmark (Keith's reference, 17 registrations): `2026-11-13-open-house-eventbrite-benchmark.md`
- Landing page mockup: `2026-11-13-open-house-mockup.html`, phone screenshot `2026-11-13-open-house-mockup-mobile.png`
- Banner variants: `../creative/2026-11-open-house-variants/` (HTML source and PNGs, square 1200x1200 and wide 1200x628 for each)

Compliance: all variant banners and the mockup pass the banned-term check from `tools/compliance_scan.py` (no banned or watch terms, no banned links), and every render carries "Artist's impression". The two model reviews contain no banned terms either.

## Where the two models agree

1. **The landing page is the biggest lever.** On a phone the first screen is text plus a "new date" warning. There's no picture, and the form is four screens down with seven fields. Both say: picture, price and event details first, then a **two-field form (name + WhatsApp)** right under it.
2. **Demote the "New date and venue" box.** Ad visitors never saw the old date. Keep a small note under the form for people who did.
3. **Make the form the main button.** Today the sticky bar's solid gold button is WhatsApp. Swap it so "Register Free" is the main button and WhatsApp is the outline one.
4. **Put Joe Wong's name, REN number and agency beside the form.** Today he only appears in the footer.
5. **Thank-you page:** add to calendar, get directions, share with a friend.
6. **Banners:** the current pair loses its date and venue when Google shrinks it to 300x250, nothing in it says what is for sale, and "FREE ADMISSION" names no action. Both want a **price-led** and a **villa-with-pool** concept and a "Register Free" call to action. Both say test them as a **separate responsive display ad**, not by adding images to the current ad.
7. **Bidding:** keep Maximise clicks, add a **RM1.00 maximum cost per click**, and don't switch to Maximise conversions (there's no conversion history and too little time).
8. **Placements:** exclude below-the-fold placements, game sites and children's sites, and check where the ads showed after two days. Keep apps excluded and optimised targeting off.
9. **Stop ads on the event day before the doors close.** Frequency cap of 3 a day.
10. **Expectation:** RM300 buys a few hundred clicks and probably **fewer than 10 form registrations**. The test can show which banner gets more clicks. It cannot prove which gives cheaper registrations.

## Where they differ, and my call

| Topic | Fable | ChatGPT | My call |
|---|---|---|---|
| How many new banners | Two (villa, price) | One (price only) | **One**, combining both: the villa with its pool **and** "From RM860,000". With 5 days of data a single challenger at least gets enough clicks to read. Villa-only and price-only are built as spares. |
| Location | Narrow to 20 km around Imperial Lexis | Keep KL + Selangor | **Keep KL + Selangor.** RM37 a day can't use up that area anyway, and where someone browses isn't where they'd travel from. |
| Move money to Search | No, keep RM300 on Display; add a free "Open House, Fri 20 Nov" sitelink to Search | Maybe RM200 to Search if its search terms show buyers | **Keep the RM300 on Display and add the free sitelink.** Moving money needs a search-term check first, and the Search campaign has its own RM1,000. |
| Event-day stop time | 3pm | Noon | **2pm.** It's a drop-in until 5pm, so someone who sees an ad over lunch can still come. |
| Audiences | Keep; add a custom segment | Drop the two apartment segments | **No change** this week. Each edit restarts learning, and neither change is backed by data. |
| Event extras (presentation, consultation, refreshments, sweet gift) | Uses them | Says they are **not in approved-facts.md** | **ChatGPT is right.** The facts file only lists date, venue and free admission. The live page already lists the four extras, so Keith should confirm them from the 20 Nov poster and add them to the facts file. |

## Things only one model caught (worth acting on)

- **ChatGPT: counting.** `lead_form_submit` fires every time the thank-you page loads, so a reload counts twice. Check that the Google Ads conversion is set to count **"One"** per click (a setting in Ads; changing it needs Keith's yes).
- **ChatGPT: budget.** RM37 is an *average* daily budget, and Google may spend up to twice that on a given day. RM296 isn't a hard cap, so check total spend on Mon 16 and Thu 19 Nov.
- **ChatGPT: text on images.** Google's own guidance for responsive display ads prefers images without overlaid text or buttons. The current pair already has text and a pill, and is still under review. **If the current ad comes back approved, the new banner (same style) is very likely fine too.** If it comes back "limited", use the plain render with the text in Google's headline fields instead.
- **Fable: iPhone tracking gap.** `site.js` only treats a visitor as "from an ad" when the link has `gclid` or a cpc `utm_medium`. iPhone clicks often arrive with `gbraid`/`wbraid` instead, so their WhatsApp messages say "OH20-EN-WEB". The fix needs no code: add a final URL suffix `utm_source=google&utm_medium=cpc&utm_campaign=display-open-house-20nov` in the campaign.
- **Fable: "Can't make Friday?"** A weekday afternoon rules out many working buyers. Add an arrival option "I can't come on Friday. Contact me about another day.", backed by the approved by-appointment viewings at Imperial Lexis.
- **Fable: stop rule.** If by Mon 16 Nov evening there are 150+ clicks, no registrations and no "OH20-EN-AD" WhatsApp messages, pause and keep the rest of the money.

## Recommendation: one combined proposal

### 1. Rebuild the top of the open house page (staging first)
Build `2026-11-13-open-house-mockup.html` on the staging copy: villa picture, "2-bedroom villas with a private pool, for sale from RM860,000", date and place, a "Register Free" button, then a form with just **name + WhatsApp** (plus an optional arrival time that includes "can't come Friday"). Joe Wong's name and REN number go beside the form, the "new date" note becomes a small fold-out, the sticky bar's main button becomes "Register Free", and the thank-you page gets calendar, directions and share links. Keep the field name `first_name` so the Web3Forms email and tracking don't break.
*Time:* 2 to 3 hours, then Keith checks staging. *Money:* none.

### 2. Tidy the campaign in one sitting (needs Keith's yes in chat)
- Max CPC RM1.00 (keep Maximise clicks).
- Exclude below-the-fold placements, the Games topic and children's content; on Sun 15 Nov, exclude sites with many clicks and no visits.
- Ad schedule: stop at **2pm on Fri 20 Nov**.
- Frequency cap: 3 a day.
- Final URL suffix with UTM tags (the iPhone tracking fix).
- Check the conversion counts "One".
- Search campaign: replace the old 13 Nov sitelink with "Open House, Fri 20 Nov" (free).
- Spend checks Mon 16 and Thu 19 Nov, plus the Monday stop rule.

*Time:* about 45 minutes in Google Ads. *Money:* none extra; stays within the RM300.

### 3. Add one challenger banner as a second ad
Use `villaprice-1200x1200.png` and `villaprice-1200x628.png` ("Private-Pool Villas From RM860,000", villa with pool, "Register Free"). Create it as a **second responsive display ad** in the same ad group with the same headlines and descriptions. Set rotation to "do not optimise" and tag the final URLs `utm_content=control` and `utm_content=villa-price`. Compare click rate first, then form starts and registrations. Treat the result as a pointer for the next campaign, not proof.
*Time:* about 1 hour plus up to a day for Google review. *Money:* none extra.

**Order matters:** do 1 before 3 if you can. A better banner sending people to the same hard-to-use page wastes the gain.

**Still open (needs Keith):** confirm the four event extras for approved-facts.md; parking and nearest station at Imperial Lexis; whether a hibiscus2.com remarketing list exists in Google Ads.
