# i18n/review-queue-ms.md — Malay (MS) Native Review Queue

Per `claude-code-prompt-multilingual.md` §5 review protocol and
`i18n/TRANSLATION-TASK.md` §8. Every string below is compliance-adjacent
(CTA, rental-programme page, or footer/legal text) and carries a
`<!-- Native-speaker review pending -->` HTML comment at its source
location. Per Keith's instruction, this build is going live for review on
the production site rather than being held pre-merge — treat this queue as
the punch list for that live review, not a pre-deploy gate.

---

## 1. Locked CTA set (used site-wide, all 9 pages)

Source: master doc §5 table — official MS drafts, reproduced verbatim in
`hibiscus2-site/ms/js/site-content.js` and every page's static
`[data-text-target]` fallback span.

| Key | EN (locked) | MS (as shipped) |
|---|---|---|
| `whatsappPrimary` | Book a Private Viewing | Tempah Lawatan Peribadi |
| `requestCallback` | Request a Callback | Mohon Panggilan Semula |
| `formSubmit` | Request a Viewing Callback | Mohon Panggilan untuk Lawatan |

**Ask:** confirm these read as standard Bahasa Malaysia (not Indonesian-
leaning) and match the booking-intent register used elsewhere on the site.

---

## 2. `/ms/rental-programme/` — full page

Every string on this page is compliance-adjacent per §5. Full translation
in `hibiscus2-site/ms/rental-programme/index.html`, mirroring the EN/ZH
structure section-for-section. **Ask:** native read-through for tone and to
confirm no promotional "guaranteed return" framing crept in despite the
banned-term list being clean (`i18n/compliance-audit-ms.md` — zero hits).

---

## 3. `/ms/villas/` — "Pemilikan, Tanpa Pemeliharaan" section

The rental-programme description embedded on the villas page (navy band,
`id="programme"`) is compliance-adjacent for the same reason as the
rental-programme page itself.

---

## 4. Footer/legal boilerplate (repeated on all 9 pages)

EN: "does not constitute financial or investment advice."
MS (as shipped): "bukan nasihat kewangan atau undang-undang" (financial or
legal advice — investment omitted).

**Flagged deviation:** *pelaburan* (investment) is a banned MS compliance
term (§6), so a literal translation was never possible. The shipped MS
pairs "financial" with "legal" instead, matching how the ZH build resolved
the identical problem (see `i18n/compliance-audit-ms.md`). **Needs Keith's
confirmation this doesn't create a legal gap** versus the English source.
Same substitution in `/ms/disclaimer/` §5 "Bukan Nasihat Kewangan."

---

## 5. `/ms/privacy-policy/` and `/ms/disclaimer/` — full legal pages

Flagged in full per §5. Longest, most legally load-bearing pages on the
site. **Ask:** native-speaker read-through of both in full, ideally with
PDPA familiarity (privacy-policy §7 references the Malaysian Personal Data
Protection Act 2010).

---

## 6. QA note — translation defects found and fixed before build

The delivered translation workbook had a small number of defects caught
during a pre-build QA pass (not just the banned-term grep):
`villas.track2.body` / `rental.track3.body` were left completely
untranslated in both MS and JA (literal English copied into the cell) due
to a metadata error in the original workbook (mistakenly flagged
Never-Translate). Fixed before this build — see
`i18n/compliance-audit-ms.md` for detail. Flagging here so the native
reviewer double-checks `villas.track2.body` / `rental.track3.body`
specifically, since it was a late fix rather than part of the original
translation pass.

---

## Summary — what needs sign-off

- [ ] CTA set (§1) — tone check
- [ ] `/ms/rental-programme/` (§2) — full page
- [ ] `/ms/villas/` ownership section (§3)
- [ ] Footer/disclaimer "investment" → "financial or legal advice"
      substitution (§4) — confirm no legal gap
- [ ] `/ms/privacy-policy/` full page (§5)
- [ ] `/ms/disclaimer/` full page (§5)
- [ ] `villas.track2.body` / `rental.track3.body` late-fixed translation (§6)
