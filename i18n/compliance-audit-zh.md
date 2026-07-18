# i18n/compliance-audit-zh.md — Phase 1 (ZH) Compliance Audit

Per `claude-code-prompt-multilingual.md` §6. Grep run against every file under
`hibiscus2-site/zh/` (9 HTML pages + `zh/js/site-content.js`) immediately
after translation, before this phase is considered complete.

## Result: ZERO HITS across all banned terms.

## Terms checked (ZH banned list, §6)

| Term(s) | Meaning | Hits |
|---|---|---|
| 保证 / 保底 / 担保 | guarantee | 0 |
| 包租 | guaranteed leaseback | 0 |
| 回报率 / 回酬率 / 回酬 | return rate | 0 |
| 租金回报 | rental return (with figures) | 0 |
| 投资 / 投資 | investment | 0 |
| 零首付 / 免首付 | zero downpayment | 0 |
| 现金回赠 / 现金回扣 | cashback | 0 |
| 稳赚 / 必赚 | sure profit | 0 |
| `%` (any occurrence) | percentage figures | 0 |

Also checked, since hibiscus2.com's root `CLAUDE.md` bans these in English
and the ZH pages mix in English brand/company names throughout: `guaranteed`,
`GRR`, `cashback`, `zero down(payment)`, `investment`, `yield`, `ROI` — **0
hits**. And a link check for `grrmalaysia` — **0 hits** (hibiscus2.com must
never link to grrmalaysia.com; confirmed clean).

## Note on "investment" / 投资

The EN source footer/disclaimer boilerplate uses the English word
"investment" in a *protective, negating* sense — "does not constitute
financial or investment advice." A literal Chinese translation would need
投资建议 (investment advice), which collides with the banned-term list.

Since §6 defines phase completion as zero hits with no contextual carve-out,
the ZH translation drops "investment" from this enumerated list rather than
translating it literally:

- Footer legal line: "does not constitute financial or investment advice"
  → ZH: 不构成财务或法律建议 (financial or legal advice — investment
  omitted, financial/legal advice already covers the intent)
  → Also **legal advice was added into the pairing (was not in the EN
  source) to keep the same protective scope after dropping "investment."**
- Disclaimer §5 "Not Financial Advice": "financial, investment, legal or
  tax advice" → ZH: 财务、法律或税务建议 (investment dropped, financial/
  legal/tax retained)

This is a deliberate, spec-driven deviation from literal EN wording, flagged
in `i18n/review-queue-zh.md` for Keith's confirmation that dropping
"investment" from the Chinese disclaimer doesn't create a legal gap.

## Scope

Files audited: `hibiscus2-site/zh/index.html`, `zh/about/index.html`,
`zh/contact/index.html`, `zh/villas/index.html`,
`zh/rental-programme/index.html`, `zh/privacy-policy/index.html`,
`zh/disclaimer/index.html`, `zh/thank-you/index.html`, `zh/404.html`,
`zh/js/site-content.js`. Includes visible HTML, inline FAQPage JSON-LD, and
the CTA button-text config.

**Phase 1 (ZH) compliance audit: CLEAN.**
