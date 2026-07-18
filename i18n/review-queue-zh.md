# i18n/review-queue-zh.md — Phase 1 (ZH) Native Review Queue

Per `claude-code-prompt-multilingual.md` §5 review protocol. Every string
below is compliance-adjacent (CTA, rental-programme page, or footer/legal
text) and carries an `<!-- [REVIEW] native check pending -->` HTML comment
(or `// [REVIEW]` in JS) at its source location. **STOP GATE: the
`/zh/rental-programme/` page must not be pushed to the production branch
until Keith confirms native review of the items below is done.**

---

## 1. Locked CTA set (used site-wide, all 9 pages)

Source: master doc §5 table — these are the *official* ZH drafts already
provided, reproduced verbatim in `hibiscus2-site/zh/js/site-content.js` and
in every page's static `[data-text-target]` fallback span.

| Key | EN (locked) | ZH (as shipped) |
|---|---|---|
| `whatsappPrimary` | Book a Private Viewing | 预约私人参观 |
| `requestCallback` | Request a Callback | 预约回电 |
| `formSubmit` | Request a Viewing Callback | 预约参观回电 |

**Ask:** confirm these three read naturally to a Malaysian Chinese reader
and aren't mainland-idiom.

---

## 2. `/zh/rental-programme/` — full page (STOP GATE)

Every string on this page is compliance-adjacent per §5 ("anything on the
rental-programme page"). Full Simplified Chinese translation is in
`hibiscus2-site/zh/rental-programme/index.html`, mirroring
`hibiscus2-site/rental-programme/index.html` section-for-section: hero,
"How the Programme Works" 6-card grid, disclosure box, operator track
record, villa pricing, purchase process, 6-item FAQ (+ duplicate FAQPage
JSON-LD), and the final CTA/form section.

Compliance audit (`i18n/compliance-audit-zh.md`) is clean — zero banned-term
hits. **Ask:** native read-through of the whole page for tone/register and
to confirm no promotional "investment/return" framing crept in despite the
banned-term list being clean (i.e. a semantic check, not just a lexical
one).

---

## 3. `/zh/villas/` — "Ownership, Without the Upkeep" section

The rental-programme description embedded on the villas page (§ "OWNERSHIP
CONVENIENCE", navy band, `id="programme"`) is compliance-adjacent for the
same reason as the rental-programme page itself.

EN: "Your villa is furnished, maintained and operated by Lexis Hotel Group
under a structured 15-year rental programme — a fixed rental phase for the
first three years, followed by a profit-sharing phase for the remaining
twelve. You enjoy the resort and the rental income; the operator handles
everything else."

ZH: "在为期15年的结构化租赁计划下，您的别墅将由 Lexis Hotel Group 负责装修、
维护与营运——首三年为固定租金阶段，其余十二年则为利润分享阶段。您可尽享度假
村生活与租金收入，其余事务全交由营运商处理。"

---

## 4. Footer/legal boilerplate (repeated on all 9 pages)

EN: "This website is marketing material and does not constitute financial
or investment advice — buyers should seek independent legal and financial
counsel."

ZH (as shipped): "本网站为营销资料，不构成财务或法律建议——买家应寻求独立的
法律与财务咨询。"

**Flagged deviation:** the ZH version drops "investment" from the
enumerated advice types and adds "legal" in its place, because a literal
translation would require 投资 (investment), which is a banned compliance
term site-wide (see `i18n/compliance-audit-zh.md` for the full reasoning).
"Financial or legal advice" is used instead of "financial or investment
advice." This preserves the disclaimer's protective intent (buyers are told
to seek independent counsel) without using a banned term, but it is a
wording change from the EN source, not a literal translation — **needs
Keith's confirmation this doesn't create a legal gap** versus the English
version.

Same substitution appears in `/zh/disclaimer/` §5 "非财务建议" (Not
Financial Advice): EN lists "financial, investment, legal or tax advice";
ZH lists 财务、法律或税务建议 (investment dropped).

---

## 5. `/zh/privacy-policy/` and `/zh/disclaimer/` — full legal pages

Both are flagged in full per §5 ("any footer/legal text"). These are the
two longest, most legally load-bearing pages on the site (8 and 7 numbered
sections respectively). **Ask:** a qualified native-speaker (ideally with
PDPA familiarity, since privacy-policy §7 references the Malaysian Personal
Data Protection Act 2010) read-through of both pages in full before they go
live, not just the investment-term substitution noted above.

---

## Summary — what needs sign-off before merge & deploy

- [ ] CTA set (§1) — tone check
- [ ] `/zh/rental-programme/` (§2) — STOP GATE, full page
- [ ] `/zh/villas/` ownership section (§3)
- [ ] Footer/disclaimer "investment" → "financial or legal advice"
      substitution (§4) — confirm no legal gap
- [ ] `/zh/privacy-policy/` full page (§5)
- [ ] `/zh/disclaimer/` full page (§5)

Once all boxes are ticked, merge `i18n-zh` → `main`, deploy, then add the
`zh-Hans` hreflang line to all EN pages site-wide (currently withheld per
§3 — see `hibiscus2-site/*.html` head blocks, which still show EN-only
hreflang from Phase 0) and flip the EN header switcher to show the 中文
link.
