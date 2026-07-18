# claude-code-prompt-multilingual.md
## MASTER EXECUTION DOCUMENT — hibiscus2.com Multilingual Build (EN → ZH / MS / JA)
### For Claude Code. Read fully before executing. Work phase by phase; stop at every STOP gate.

---

## 0. OBJECTIVE & SCOPE

Convert **hibiscus2-site/** (static HTML + Tailwind, Cloudflare Pages via GitHub) into a four-language site:

| Lang | Code | Path | Role |
|---|---|---|---|
| English | `en` | `/` (root) | DEFAULT + SOURCE OF TRUTH + `x-default` |
| Chinese (Simplified) | `zh-Hans` | `/zh/` | Phase 1 |
| Bahasa Malaysia | `ms` | `/ms/` | Phase 2 |
| Japanese | `ja` | `/ja/` | Phase 3 |

Out of scope: `grrmalaysia-site/` (different compliance regime — do NOT copy any of its language there), Google Ads changes, GTM changes.

**Prime directive:** hibiscus2.com is the PAID-TRAFFIC compliance-clean domain. Every rule in the root `CLAUDE.md` and §6 of this document applies to ALL languages equally. A compliant English page with a non-compliant Chinese translation is a failed build.

---

## 1. PRE-FLIGHT (do these before writing any file)

1. Read root `CLAUDE.md` and `approved-facts.md`. Treat them as law.
2. Inventory: list every `.html` file in `hibiscus2-site/`, every user-facing string in shared JS (form validation, FAQ labels, sticky bar, WhatsApp href builder), and every meta title/description/OG tag/alt text. Output this inventory as `i18n/string-inventory.md` before translating anything.
3. **Price — RESOLVED:** the confirmed starting price is **RM774,000**. During inventory, grep ALL files (site pages, `approved-facts.md`, any prompt/docs files) for `720,000` / `RM720` — replace every instance with RM774,000 and remove any associated `[VERIFY]` flag. The live site and ads already use RM774,000; the main correction target is `approved-facts.md`. Report every file changed. RM774,000 is now the only permitted starting-price figure in all four languages.
4. Confirm the `buttonText` / `data-text-key` JS text-config system status. If implemented, translations for those strings go into per-language config objects; if not, translate inline and note it. Do NOT use JS text-swapping as the translation mechanism for page content (see §2).

---

## 2. ARCHITECTURE RULES

- **Subdirectories, real files.** Each language is a full mirrored copy: `/zh/rental-programme.html` mirrors `/rental-programme.html`. No JS-swap i18n, no auto-generated pages.
- **Slugs stay in English** in all languages. Never translate file names or paths.
- **No IP or browser-language auto-redirect.** Optional: a small dismissible banner on EN pages ("查看中文版？ / Lihat versi BM? / 日本語版はこちら") linking to the equivalent page. Banner must be dismiss-persistent (localStorage) and must not shift layout (no CLS).
- **English is source of truth:** never edit `/zh/`, `/ms/`, `/ja/` content independently of English. All future edits: EN first → git diff defines the re-translation queue.
- Cloudflare Pages needs no config changes; folders deploy as-is.

---

## 3. PER-PAGE HEAD REQUIREMENTS (every page, every language)

1. `<html lang="en">` / `"zh-Hans"` / `"ms"` / `"ja"` accordingly.
2. Self-referencing canonical (each language canonicals to ITSELF — never cross-language).
3. Full hreflang set on every version of every page:
```html
<link rel="alternate" hreflang="en" href="https://hibiscus2.com/PAGE.html">
<link rel="alternate" hreflang="zh-Hans" href="https://hibiscus2.com/zh/PAGE.html">
<link rel="alternate" hreflang="ms" href="https://hibiscus2.com/ms/PAGE.html">
<link rel="alternate" hreflang="ja" href="https://hibiscus2.com/ja/PAGE.html">
<link rel="alternate" hreflang="x-default" href="https://hibiscus2.com/PAGE.html">
```
   Until a phase ships, omit that language's hreflang line everywhere (never link to pages that don't exist yet); add it site-wide when the phase deploys.
4. Translated `<title>`, meta description, OG title/description. OG image unchanged.

---

## 4. LANGUAGE SWITCHER

- Header component on every page: `EN | 中文 | BM | 日本語` (only show shipped languages).
- Links go to the EQUIVALENT page in the target language, never the homepage.
- Current language visually marked; switcher is plain `<a>` links (crawlable), not a JS dropdown requiring interaction to render.
- Mobile: fits the existing sticky bar without wrapping; test at 360px width.

---

## 5. TRANSLATION RULES

**Translate:** all body copy, headings, CTAs, meta/OG, image alt text, aria-labels, form labels + placeholder text + validation messages, FAQ questions/answers, sticky-bar text, footer text, the WhatsApp prefill message (a Chinese reader must open WhatsApp with a Chinese message ready), and the 6-card rental-programme grid labels.

**Never translate:** brand/proper names (Lexis Hibiscus 2, Port Dickson, Summerfield Property), the REN compliance block (Wong See How, REN 51947 — keep verbatim in every language's footer), URLs/slugs, RM currency amounts (keep `RM` prefix and Western digit grouping in all languages), phone numbers.

**Register/tone:** ZH = simplified characters, polished marketing register for Malaysian Chinese readers (not mainland-idiom); MS = standard Bahasa Malaysia (not Indonesian); JA = polite 敬語 marketing register (です/ます).

**CTA set — translate these three exactly once, reuse everywhere, tag `[REVIEW]`:**
| EN (locked) | ZH draft | MS draft | JA draft |
|---|---|---|---|
| Book a Private Viewing | 预约私人参观 [REVIEW] | Tempah Lawatan Peribadi [REVIEW] | プライベート内覧のご予約 [REVIEW] |
| Request a Callback | 预约回电 [REVIEW] | Mohon Panggilan Semula [REVIEW] | 折り返しのご連絡を依頼 [REVIEW] |
| Request a Viewing Callback | 预约参观回电 [REVIEW] | Mohon Panggilan untuk Lawatan [REVIEW] | 内覧のご案内を依頼 [REVIEW] |

**Review protocol:** every compliance-adjacent translated string (anything on the rental-programme page, any CTA, any footer/legal text) carries an HTML comment `<!-- [REVIEW] native check pending -->`. Produce a consolidated `i18n/review-queue-<lang>.md` per language listing every flagged string with its EN source. **STOP GATE:** the rental-programme page in each language may be built but must NOT be pushed to the production branch until Keith confirms native review is done.

---

## 6. COMPLIANCE — BANNED TERMS PER LANGUAGE (absolute, all pages)

The English rules (per root `CLAUDE.md`): no percentage return figures, no "guaranteed", no "GRR", no "investment", no zero-downpayment/cashback language, no projection tables. These map to banned lists below. **Do not use the developer's bilingual sales kit as a translation reference** — its Chinese text freely uses 保证 language that is permitted on grrmalaysia.com but banned here.

**ZH banned:** 保证 / 保底 / 担保 (guarantee), 包租 (guaranteed leaseback), 回报率 / 回酬率 + any %, 租金回报 with figures, 投资 / 投資 (investment), 零首付 / 免首付 (zero downpayment), 现金回赠 / 现金回扣 (cashback), 稳赚 / 必赚 (sure profit).
**MS banned:** jaminan / dijamin / terjamin (guaranteed), pulangan terjamin, kadar pulangan + any %, pelaburan (investment), tanpa bayaran muka / deposit sifar / tanpa wang pendahuluan (zero downpayment), pulangan tunai / rebat tunai (cashback), untung pasti (sure profit).
**JA banned:** 保証 (guarantee, incl. 利回り保証 / 家賃保証), 利回り + any % figure, 投資 (investment), 頭金ゼロ / 頭金不要 (zero downpayment), キャッシュバック, 確実に儲かる / 必ず儲かる (sure profit).

**Safe equivalents (mirror the English euphemism level, tag [REVIEW]):** "developer rental programme" → 发展商租赁计划 / program sewaan pemaju / デベロッパー賃貸プログラム; "ownership with resort management" → 度假村管理式业权 / pemilikan dengan pengurusan resort / リゾート運営付き所有権.

**Mandatory audit before completion of each phase:** grep every file in that language folder for every banned term (plus `%` adjacent to rental/return vocabulary) and output `i18n/compliance-audit-<lang>.md` showing zero hits, or list the hits and fix them. A phase is not complete until its audit is clean.

---

## 7. TYPOGRAPHY & LAYOUT

- **No custom CJK font files** (multi-MB). Extend the Tailwind font stack per language:
  - ZH: `"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif` appended after the Latin stack.
  - JA: `"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Yu Gothic", Meiryo, sans-serif`.
  - MS: existing Latin fonts unchanged.
- CJK line-height: bump to ~1.8 for body text; avoid `letter-spacing` on CJK.
- Malay runs ~15–20% longer than English: after building `/ms/`, check buttons, the sticky bar, and the 6-card grid for overflow at 360px and 768px; fix with wrapping/size, never by abbreviating compliance text.
- Japanese: prevent awkward breaks in key phrases with `word-break: keep-all` on headings where needed.

---

## 8. TECHNICAL TASKS

1. `sitemap.xml`: one `<url>` per EN page with `<xhtml:link rel="alternate" hreflang="...">` entries for all shipped languages (namespace `xmlns:xhtml="http://www.w3.org/1999/xhtml"`).
2. WhatsApp href builder in shared JS: parameterize the prefill message per language; keep the same number.
3. Forms: translated validation messages; form field `name` attributes unchanged (keeps existing GTM triggers working). No GTM/GA4 changes needed — `/zh/` path segmentation is automatic.
4. Any hard-coded EN strings found in JS during inventory (§1.2) go into a per-language strings object.

---

## 9. EXECUTION ORDER & GIT WORKFLOW

- Branch per phase: `i18n-zh`, `i18n-ms`, `i18n-ja`. Never work on `main` directly.
- **Phase 0:** Pre-flight (§1) + add switcher scaffold & hreflang plumbing to EN pages (EN-only hreflang until phases ship). Commit.
- **Phase 1 — `/zh/`:** build all pages → run §6 audit → produce review queue → STOP for Keith's native review of flagged strings → merge & deploy → add zh-Hans hreflang lines site-wide.
- **Phase 2 — `/ms/`:** same cycle, plus §7 overflow checks.
- **Phase 3 — `/ja/`:** same cycle. (Note: no JA traffic channel exists yet — build it, but Keith may hold deployment.)
- Commit messages: `i18n(zh): <page>` etc. After each phase, update a **Translation Status table** in the repo README: page × language × status (current / stale / pending-review), with the EN commit hash each translation was made from.

## 10. ACCEPTANCE CRITERIA (per phase)
- [ ] Every EN page has a mirrored file at the language path; no missing pages, no extra pages
- [ ] hreflang sets valid and reciprocal on every page; canonicals self-referencing
- [ ] Compliance audit file shows zero banned-term hits
- [ ] Review queue produced; rental-programme page held at STOP gate until confirmed
- [ ] Switcher links to equivalent pages in both directions; works at 360px
- [ ] WhatsApp prefill, form validation, meta/OG, alt text all translated
- [ ] REN block verbatim in footer; prices/phone numbers unchanged
- [ ] No edits to EN content beyond head tags, switcher, and optional banner
