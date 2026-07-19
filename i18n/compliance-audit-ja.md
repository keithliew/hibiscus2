# i18n/compliance-audit-ja.md — Japanese (JA) Compliance Audit

Per `claude-code-prompt-multilingual.md` §6 and `i18n/TRANSLATION-TASK.md`.
Programmatic grep run against the `Japanese (JA)` column of every row in
`i18n/translation-workbook.csv` (333 rows) after the JA translation pass.

## Result: ZERO HITS across all banned terms.

**Correction applied 2026-07-19, before this workbook was built into
`hibiscus2-site/ja/`:** a QA pass beyond the banned-term grep (checking for
any JA cell containing zero Japanese characters, and any cell silently
matching the source English verbatim) found several defects:

- `villas.track2.body` / `rental.track3.body` — literal English copied
  into the JA column instead of being translated.
- `about.photo_alt`, `about.p1`, `about.p2` — the sentence "Summerfield
  Property (M) Sdn. Bhd." was mis-split on the period after "Sdn.",
  producing garbled Japanese with "Bhd." orphaned mid-paragraph.
- `privacy.s4.heading`, `s6.heading`, `s7.heading`, `s8.heading`, and
  `disclaimer.og.title` — left completely untranslated (English text
  copied verbatim) — 4 of the privacy policy's 8 section headings.

All fixed directly in `i18n/translation-workbook.csv` — see git history
for the exact diffs. None of this was caught by the banned-term grep alone
(the text wasn't non-compliant, just wrong or missing); it took a
zero-Japanese-characters scan and a manual read of the `/about/` and
`/privacy-policy/` rows to surface it. Worth re-running this kind of pass
on any future translation deliverable before treating it as final.

## Terms checked (JA banned list, §6)

| Term(s) | Meaning | Hits |
|---|---|---|
| 保証 (incl. 利回り保証 / 家賃保証) | guarantee | 0 |
| 利回り | yield/return rate | 0 |
| 投資 | investment | 0 |
| 頭金ゼロ / 頭金不要 | zero downpayment | 0 |
| キャッシュバック | cashback | 0 |
| 確実に儲かる / 必ず儲かる | sure profit | 0 |
| `%` (any occurrence) | percentage figures | 0 |
| `grrmalaysia` | link to the non-compliant domain | 0 |

## Note on "investment" / 投資

Same issue as the ZH and MS audits: the EN footer/disclaimer boilerplate
says "does not constitute financial or investment advice." A literal JA
translation would need 投資 (investment), which is itself banned. The JA
translation drops it from the enumerated advice types and pairs
"financial" with "legal" instead — verified in both flagged rows:

- `global.footer.legal2`: "...金融または法的助言を構成するものではありません..."
  (does not constitute financial or legal advice — investment omitted)
- `disclaimer.s5.body`: "...金融、法的または税務上の助言を構成するものでは
  ありません..." (financial, legal or tax advice — investment omitted)

Same deliberate deviation as the ZH and MS builds, applied consistently.
Flagged for Keith's confirmation this doesn't create a legal gap versus
the English source.

## Spot checks

- Locked CTA set matches the master doc's official JA drafts exactly
  (プライベート内覧のご予約 / 折り返しのご連絡を依頼 / 内覧のご案内を依頼).
- Register check: です/ます polite marketing tone maintained throughout,
  not over-formalized into stiff keigo — matches the guidance in
  `i18n/TRANSLATION-TASK.md` §1.
- Never-translate fields verified unchanged: RM774,000 and all other RM
  figures, both venue addresses, the phone number, REN block proper nouns/
  registration numbers, brand names (Lexis Hibiscus 2, Port Dickson,
  Summerfield Property).
- Duplicate rows (same string reused across pages) translated identically
  — no drift between repeated instances.
- EN and ZH columns confirmed byte-identical to the pre-translation
  workbook — only the MS and JA columns were touched, as instructed.

## Scope

All 333 rows of `i18n/translation-workbook.csv`, covering every page
(global shared strings + all 9 page-specific sections) and the FAQPage
JSON-LD-equivalent FAQ rows on `/villas/` and `/rental-programme/`.

**JA compliance audit: CLEAN.** Still pending: native-speaker review per
the STOP-gate items called out in `i18n/TRANSLATION-TASK.md` §8 (full
rental-programme content, both legal pages, the investment-wording
substitution) before this gets built into `hibiscus2-site/ja/` and
deployed. Note per the master doc §9: no JA ad traffic channel exists yet
— Keith may hold JA deployment even after review clears.
