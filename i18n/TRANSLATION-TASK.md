# TRANSLATION-TASK.md — Fill in Malay (MS) and Japanese (JA)

## What this is

`i18n/translation-workbook.csv` is the full translatable-string inventory
for hibiscus2.com (Lexis Hibiscus 2, Port Dickson), a real-estate marketing
site. It has 331 rows and 10 columns:

| Column | Meaning |
|---|---|
| `English` | Source of truth. Never edit. |
| `Chinese (ZH)` | Already translated and live on the site at `/zh/`. Provided for reference/consistency — not yours to edit unless something is factually wrong (see "If you find a ZH problem" below). |
| `Malay (MS)` | **Your job.** Empty except for 3 pre-filled locked CTA rows (see §3). |
| `Japanese (JA)` | **Your job.** Empty except for 3 pre-filled locked CTA rows (see §3). |
| `ID` | Stable key, dot-namespaced (e.g. `villas.faq.q3`, `global.footer.legal2`). `global.*` rows are shared across all 9 pages; everything else is prefixed by page (`home.*`, `about.*`, `contact.*`, `villas.*`, `rental.*`, `privacy.*`, `disclaimer.*`, `thankyou.*`, `404.*`). |
| `Page` | Which URL the string appears on (`Global` = reused on multiple/all pages). |
| `Section` | Human-readable location (e.g. "FAQ answer 3", "og:description"). |
| `Never Translate` | `Y` = the whole cell must stay in English/verbatim in every language (brand names, REN block, prices). `Partial` = most of the string translates but specific words/numbers inside it don't — read the `Notes` column for which parts. Blank = translate freely. |
| `Review Flag` | `Y` = compliance-adjacent (rental-programme content, CTAs, footer/legal text). These need extra care with the banned-term lists in §2 below and get flagged for native-speaker sign-off before going live — same STOP-gate treatment the ZH build got. |
| `Notes` | Context, cross-references to duplicate strings, and specific instructions per row. **Read this column** — it carries load-bearing instructions, not just color. |

**Your task:** fill in the `Malay (MS)` and `Japanese (JA)` cells for every
row. Leave every other column exactly as-is (including the pre-filled CTA
rows in §3 — don't retranslate those, just copy them across if you're
regenerating the file). Save back to the same file path, same CSV format,
UTF-8 encoding, same column order. Don't add, remove, merge, or reorder
rows — the `ID` column is used to map rows back to real HTML files later,
so row identity must stay stable.

This CSV is derived from `hibiscus2-site/` (EN) and `hibiscus2-site/zh/`
(ZH, already built and live). Once MS/JA are filled and reviewed, the next
step (not yours to do) is a human or another agent builds
`hibiscus2-site/ms/` and `hibiscus2-site/ja/` mirroring the `zh/` folder
structure exactly — same slugs, same file layout, same architecture
(`hibiscus2-site/js/site-content.js`-style per-language CTA config, own
hreflang set, etc.) per `claude-code-prompt-multilingual.md`, which is the
full build spec for this project. Read that file for the complete
architecture rules if anything here is ambiguous.

---

## 1. Register and tone

- **Malay (MS):** standard Bahasa Malaysia. **Not Bahasa Indonesia.** Watch
  for Indonesian-leaning vocabulary/spelling creeping in (a common LLM
  failure mode) — e.g. use "tempahan" not "pemesanan", "hartanah" not
  "properti", "anda" not "kamu" for the polite register this site needs.
- **Japanese (JA):** polite marketing register, です/ます (keigo-adjacent
  but not the most formal 敬語 tier — this is consumer marketing copy, not
  a legal filing). Match the warmth of the English source; don't over-
  formalize it into stiff corporate JA.
- Both languages: this is upmarket resort-property marketing copy. Match
  the English source's register — confident, warm, not hard-sell. Keep
  sentences readable; don't force overly literal word-for-word translation
  if it reads awkwardly. The Chinese column is a useful register reference
  even though you're not translating from it.

## 2. Compliance — banned terms (absolute, every page)

This is the single most important constraint on this project. The English
site (root `CLAUDE.md`) already never uses percentage returns, "guaranteed",
"GRR", "investment", zero-downpayment/cashback language, or "yield"/"ROI".
Your MS and JA translations must preserve that — **never introduce any of
the following, even if it would be a "more natural" translation choice:**

**MS banned:** jaminan / dijamin / terjamin (guaranteed), pulangan
terjamin, kadar pulangan + any %, **pelaburan** (investment), tanpa bayaran
muka / deposit sifar / tanpa wang pendahuluan (zero downpayment), pulangan
tunai / rebat tunai (cashback), untung pasti (sure profit).

**JA banned:** 保証 (guarantee, incl. 利回り保証 / 家賃保証), 利回り + any
% figure, **投資** (investment), 頭金ゼロ / 頭金不要 (zero downpayment),
キャッシュバック, 確実に儲かる / 必ず儲かる (sure profit).

**Safe equivalents** (mirror the English euphemism level): "developer
rental programme" → *program sewaan pemaju* (MS) / *デベロッパー賃貸プロ
グラム* (JA); "ownership with resort management" → *pemilikan dengan
pengurusan resort* (MS) / *リゾート運営付き所有権* (JA).

**The "investment" problem — apply this to every `Review Flag = Y` row
that mentions advice types:** rows `global.footer.legal2` and
`disclaimer.s5.body` describe what the site's marketing material does
*not* constitute — in English: "financial or investment advice" /
"financial, investment, legal or tax advice." A literal translation needs
the word "investment," which is itself banned in both MS and JA. The ZH
build resolved this by dropping "investment" from the list and substituting
"legal" instead (financial-or-legal, not financial-or-investment) — see
`i18n/compliance-audit-zh.md` for the full reasoning. **Do the same for MS
and JA**: translate the disclaimer as "does not constitute financial or
legal advice" (dropping investment, keeping the protective legal meaning
intact) rather than working around the ban with a paraphrase of
"investment" — paraphrasing risks reintroducing the concept the ban exists
to prevent.

**Before you're done:** grep your finished MS and JA text against both
lists above (character-by-character for JA, since compound words can hide
a banned root). If anything matches, rewrite that cell — don't just flag
it. Zero hits is the bar, same as the ZH audit
(`i18n/compliance-audit-zh.md`) — produce an equivalent
`i18n/compliance-audit-ms.md` and `i18n/compliance-audit-ja.md` when you're
done, following that file's format.

## 3. Never-translate list

Applies in every language, every row where it's present as a substring:

- Brand/proper names: **Lexis Hibiscus 2**, **Port Dickson**, **Summerfield
  Property** — always exactly this English text, never transliterated or
  localized.
- Company legal names in full: KL Metro Property Development Sdn. Bhd.,
  Kuala Lumpur Metro Group, Lexis Hotel Group, Lexis Hibiscus (the existing
  resort, distinct from "Lexis Hibiscus 2").
- The REN compliance block (`global.footer.ren_block`): "Wong See How",
  "REN 51947", "Summerfield Property (M) Sdn. Bhd., reg. 200401009891
  (648394-W)", "E (3) 1305", "KL Metro Property Development Sdn. Bhd., reg.
  201901040005 (1349335-X)" — verbatim, every language. Only the field
  labels around them ("Agency:", "Developer:") translate.
- "Bukit Bintang Showroom" (venue name).
- All RM currency figures — keep `RM774,000` etc. with the `RM` prefix and
  Western digit grouping (comma, not a locale-specific separator) in every
  language. Same for `sq ft` / `m²` figures, room counts, and distances
  (55 km / 100 km / 80 km) — the numbers don't change, only surrounding
  prose does.
- Phone number format placeholder `12 345 6789` — leave as literal digits.
- URL slugs — when this data eventually gets built into pages, paths stay
  in English (`/ms/villas/`, `/ja/villas/`, never a translated slug). Not
  directly relevant to filling this CSV, but relevant if you also handle
  the HTML build.

## 4. Locked CTA set (already filled in — verify, don't retranslate)

Three rows (`global.cta.whatsapp_primary`, `global.cta.request_callback`,
`global.cta.form_submit`) already have MS and JA filled in, taken directly
from the official draft table in `claude-code-prompt-multilingual.md` §5:

| EN | MS | JA |
|---|---|---|
| Book a Private Viewing | Tempah Lawatan Peribadi | プライベート内覧のご予約 |
| Request a Callback | Mohon Panggilan Semula | 折り返しのご連絡を依頼 |
| Request a Viewing Callback | Mohon Panggilan untuk Lawatan | 内覧のご案内を依頼 |

These are locked — don't change the wording. If you think they read
awkwardly, flag it in a note to Keith rather than silently changing them;
they're referenced by exact string in `js/site-content.js`-equivalent
config files once this ships.

## 5. FAQ / structured data normalization

`/villas/` and `/rental-programme/` each carry the same FAQ content twice:
once as visible on-page HTML, once inside a `<script type="application/
ld+json">` FAQPage block (for search engine rich results). The English
source has tiny wording differences between the two copies (e.g. "Starting
price and payment process?" on-page vs. "What is the starting price and
payment process?" in the JSON-LD). The ZH build normalized these to
identical wording in both places rather than preserving the EN's minor
inconsistency. **Do the same**: translate each FAQ row in this CSV once,
and that single MS/JA translation will be used for both the visible FAQ
and the JSON-LD when the pages get built. You don't need separate rows or
separate translations for the two copies.

## 6. Rows that duplicate other rows

A number of rows are word-for-word identical to another row elsewhere
(noted in `Notes`, e.g. "Same as villas.faq.a5"). Translate the *first*
occurrence with care, then copy that exact same MS/JA translation into the
duplicate row — don't retranslate independently, or you'll introduce
inconsistency between two spots on the site that are supposed to read
identically (this matters for the footer block and several shared
eyebrow/heading strings especially).

## 7. If you find a ZH problem

You're not tasked with fixing Chinese, but if you notice something clearly
wrong while cross-referencing the ZH column (a typo, a banned term that
slipped through, a mismatch with the Notes column), leave a note in the
`Notes` cell for that row flagging it rather than silently editing the ZH
column — someone still needs to apply that fix to the live
`hibiscus2-site/zh/` HTML files, not just this spreadsheet.

## 8. When you're done

Deliverables:
1. `i18n/translation-workbook.csv` — same file, MS and JA columns filled.
2. `i18n/compliance-audit-ms.md` and `i18n/compliance-audit-ja.md` —
   banned-term grep results, format matching `i18n/compliance-audit-zh.md`.
3. A short note on any row where you had to deviate from a literal
   translation for compliance reasons (like the "investment" substitution
   in §2) — these need Keith's sign-off before the MS/JA pages go live,
   same as the ZH review queue (`i18n/review-queue-zh.md`) did.

Everything on the rental-programme page (`Review Flag = Y` rows under
`Page = /rental-programme/`) and both full legal pages
(`privacy-policy`/`disclaimer`) should be called out explicitly as needing
native-speaker review before deploy — this project treats those as a STOP
gate, not a nice-to-have.
