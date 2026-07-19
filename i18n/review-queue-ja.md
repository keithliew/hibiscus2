# i18n/review-queue-ja.md — Japanese (JA) Native Review Queue

Per `claude-code-prompt-multilingual.md` §5 review protocol and
`i18n/TRANSLATION-TASK.md` §8. Every string below is compliance-adjacent
(CTA, rental-programme page, or footer/legal text) and carries a
`<!-- Native-speaker review pending -->` HTML comment at its source
location. Per Keith's instruction, this build is going live for review on
the production site rather than being held pre-merge — treat this queue as
the punch list for that live review, not a pre-deploy gate.

Note per master doc §9: no JA ad traffic channel exists yet — Keith may
hold JA specifically even after review clears, independent of MS/ZH status.

---

## 1. Locked CTA set (used site-wide, all 9 pages)

Source: master doc §5 table — official JA drafts, reproduced verbatim in
`hibiscus2-site/ja/js/site-content.js` and every page's static
`[data-text-target]` fallback span.

| Key | EN (locked) | JA (as shipped) |
|---|---|---|
| `whatsappPrimary` | Book a Private Viewing | プライベート内覧のご予約 |
| `requestCallback` | Request a Callback | 折り返しのご連絡を依頼 |
| `formSubmit` | Request a Viewing Callback | 内覧のご案内を依頼 |

**Ask:** confirm register — polite です/ます marketing tone throughout, not
over-formalized into stiff keigo, matching `i18n/TRANSLATION-TASK.md` §1.

---

## 2. `/ja/rental-programme/` — full page

Every string on this page is compliance-adjacent per §5. Full translation
in `hibiscus2-site/ja/rental-programme/index.html`, mirroring the EN/ZH/MS
structure section-for-section. **Ask:** native read-through for tone and to
confirm no promotional "guaranteed yield" framing crept in despite the
banned-term list being clean (`i18n/compliance-audit-ja.md` — zero hits).

---

## 3. `/ja/villas/` — "維持費なしの所有権" section

The rental-programme description embedded on the villas page (navy band,
`id="programme"`) is compliance-adjacent for the same reason as the
rental-programme page itself.

---

## 4. Footer/legal boilerplate (repeated on all 9 pages)

EN: "does not constitute financial or investment advice."
JA (as shipped): "金融または法的助言を構成するものではありません" (financial
or legal advice — investment omitted).

**Flagged deviation:** 投資 (investment) is a banned JA compliance term
(§6), so a literal translation was never possible. The shipped JA pairs
"financial" (金融) with "legal" (法的) instead, matching how the ZH and MS
builds resolved the identical problem (see `i18n/compliance-audit-ja.md`).
**Needs Keith's confirmation this doesn't create a legal gap** versus the
English source. Same substitution in `/ja/disclaimer/` §5 "財務上のアドバ
イスではない."

---

## 5. `/ja/privacy-policy/` and `/ja/disclaimer/` — full legal pages

Flagged in full per §5. Longest, most legally load-bearing pages on the
site.

---

## 6. QA notes — translation defects found and fixed before build

The delivered translation workbook had defects caught during a pre-build
QA pass (not just the banned-term grep), all specific to JA:

- `about.photo_alt`, `about.p1`, `about.p2` — the company name
  "Summerfield Property (M) Sdn. Bhd." was mis-split on the period after
  "Sdn.", producing garbled Japanese with "Bhd." orphaned mid-sentence.
  Rewritten before this build.
- `villas.track2.body` / `rental.track3.body` — left completely
  untranslated (literal English copied into the cell) due to a metadata
  error in the original workbook. Fixed before this build.
- `privacy.s4.heading`, `s6.heading`, `s7.heading`, `s8.heading`, and
  `disclaimer.og.title` — left completely untranslated (English text
  verbatim) — 4 of the privacy policy's 8 section headings. Fixed before
  this build.

See `i18n/compliance-audit-ja.md` for full detail. Flagging here so the
native reviewer pays particular attention to the `/ja/about/` page and the
privacy-policy section headings, since these were late fixes rather than
part of the original translation pass.

---

## Summary — what needs sign-off

- [ ] CTA set (§1) — register check
- [ ] `/ja/rental-programme/` (§2) — full page
- [ ] `/ja/villas/` ownership section (§3)
- [ ] Footer/disclaimer "investment" → "financial or legal advice"
      substitution (§4) — confirm no legal gap
- [ ] `/ja/privacy-policy/` full page (§5)
- [ ] `/ja/disclaimer/` full page (§5)
- [ ] `/ja/about/` bio paragraphs + `villas.track2.body` /
      `rental.track3.body` / privacy-policy headings — late-fixed
      translations (§6)
