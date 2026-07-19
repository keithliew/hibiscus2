# i18n/compliance-audit-ms.md — Malay (MS) Compliance Audit

Per `claude-code-prompt-multilingual.md` §6 and `i18n/TRANSLATION-TASK.md`.
Programmatic grep run against the `Malay (MS)` column of every row in
`i18n/translation-workbook.csv` (333 rows) after the MS translation pass.

## Result: ZERO HITS across all banned terms.

**Correction applied 2026-07-19, before this workbook was built into
`hibiscus2-site/ms/`:** a QA pass beyond the banned-term grep (checking
for rows where a column was silently left untranslated, matching the
source English verbatim) found `villas.track2.body` and
`rental.track3.body` had literal English copied into both the MS and JA
columns instead of being translated. Also found `home.card1.heading`,
`villas.options.eyebrow`, and `rental.villas.eyebrow` (all "The Villas")
left untranslated in MS, and `privacy.eyebrow`/`disclaimer.eyebrow`
translated as the lowercase word "sah" (≈ "valid"), which doesn't match
the register of the site's other short eyebrow labels. All fixed directly
in `i18n/translation-workbook.csv` — see git history for the exact diffs.
This class of defect (non-empty cell, but literally untranslated or
low-quality) isn't caught by an "is it empty" check or a banned-term grep,
only by re-reading the actual translated text — worth re-running this kind
of pass on any future translation deliverable before treating it as final.

## Terms checked (MS banned list, §6)

| Term(s) | Meaning | Hits |
|---|---|---|
| jaminan / dijamin / terjamin | guaranteed | 0 |
| pulangan terjamin | guaranteed return | 0 |
| kadar pulangan | return rate | 0 |
| pelaburan | investment | 0 |
| tanpa bayaran muka / deposit sifar / tanpa wang pendahuluan | zero downpayment | 0 |
| pulangan tunai / rebat tunai | cashback | 0 |
| untung pasti | sure profit | 0 |
| `%` (any occurrence) | percentage figures | 0 |
| `grrmalaysia` | link to the non-compliant domain | 0 |

## Note on "investment" / pelaburan

Same issue as the ZH audit: the EN footer/disclaimer boilerplate says
"does not constitute financial or investment advice." A literal MS
translation would need *pelaburan* (investment), which is itself banned.
The MS translation drops it from the enumerated advice types and pairs
"financial" with "legal" instead — verified in both flagged rows:

- `global.footer.legal2`: "...bukan nasihat kewangan atau undang-undang..."
  (financial or legal advice — investment omitted)
- `disclaimer.s5.body`: "...bukan nasihat kewangan, undang-undang atau
  cukai..." (financial, legal or tax advice — investment omitted)

Same deliberate deviation as the ZH build, applied consistently. Flagged
for Keith's confirmation this doesn't create a legal gap versus the
English source (same open item already sitting in
`i18n/review-queue-zh.md` for the ZH equivalent).

## Spot checks

- Locked CTA set matches the master doc's official MS drafts exactly
  (`Tempah Lawatan Peribadi` / `Mohon Panggilan Semula` / `Mohon Panggilan
  untuk Lawatan`).
- Never-translate fields verified unchanged: RM774,000 and all other RM
  figures, both venue addresses, the phone number, REN block proper nouns/
  registration numbers, brand names (Lexis Hibiscus 2, Port Dickson,
  Summerfield Property).
- Duplicate rows (same string reused across pages, e.g.
  `villas.faq.a5` / `rental.faq.a5`) translated identically — no drift
  between repeated instances.
- EN and ZH columns confirmed byte-identical to the pre-translation
  workbook — only the MS and JA columns were touched, as instructed.

## Scope

All 333 rows of `i18n/translation-workbook.csv`, covering every page
(global shared strings + all 9 page-specific sections) and the FAQPage
JSON-LD-equivalent FAQ rows on `/villas/` and `/rental-programme/`.

**MS compliance audit: CLEAN.** Still pending: native-speaker review per
the STOP-gate items called out in `i18n/TRANSLATION-TASK.md` §8 (full
rental-programme content, both legal pages, the investment-wording
substitution) before this gets built into `hibiscus2-site/ms/` and
deployed.
