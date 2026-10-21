# hibiscus2.com

**Status (20 Oct 2026):** live. Footer "investment" wording removed, Malay pages link to Japanese, contact descriptions no longer offer email; starting price updated to RM860,000; internal PENDING-ITEMS.md moved out of the public site folder; new Events section at /events/ (October Fest showroom day and MAPEX 2026 Melaka posts, English only), Events in the top menu and a Latest News row on the home page (all deployed 20 Oct). Deepavali Property Open House post (13 Nov 2026) live 21 Oct. Ads tracking (21 Oct): WhatsApp clicks and form submissions import from GA4 as Primary conversions (see PENDING-ITEMS §8). Open: Search Console sitemap submission; unverified claims on the landing pages; mobile speed (~68). Full audit and plan: side-session notes `hibiscus2-audit-and-plan.md`.

Static HTML + Tailwind marketing site for Lexis Hibiscus 2 (Port Dickson),
deployed via Cloudflare Pages from `hibiscus2-site/`. See
`claude-code-prompt-multilingual.md` for the multilingual build spec and
`CLAUDE.md` / `approved-facts.md` for the compliance rules that govern all
copy on this domain.

## Checks to run

- `python3 tools/compliance_scan.py [page …]`: banned and watch terms in all 4 languages, read from the "BANNED AND WATCH TERMS" section of `approved-facts.md`. Run before every deploy. Photos and flyers still need checking by eye for banner text.
- `python3 tools/deploy_check.py --site https://hibiscus2.com --dir hibiscus2-site --wait 300`: after pushing `main`, waits for Cloudflare Pages, then confirms every live page matches the repo.

Out of scope for this repo's `hibiscus2-site/`: `grr/` (grrmalaysia.com —
different compliance regime, never link between the two).

## Translation Status

Tracks each EN page's mirror status per language. Updated after every i18n
phase per `claude-code-prompt-multilingual.md` §9. `current` = matches the
listed EN commit; `stale` = EN has changed since; `live-review-pending` =
deployed, native-speaker review happening in production; `—` = phase not
started.

| Page | EN | ZH (`/zh/`) | MS (`/ms/`) | JA (`/ja/`) |
|---|---|---|---|---|
| `/` | current | live-review-pending | live-review-pending | live-review-pending |
| `/about/` | current | live-review-pending | live-review-pending | live-review-pending |
| `/contact/` | current | live-review-pending | live-review-pending | live-review-pending |
| `/villas/` | current | live-review-pending | live-review-pending | live-review-pending |
| `/rental-programme/` | current | live-review-pending | live-review-pending | live-review-pending |
| `/privacy-policy/` | current | live-review-pending | live-review-pending | live-review-pending |
| `/disclaimer/` | current | live-review-pending | live-review-pending | live-review-pending |
| `/thank-you/` | current | live-review-pending | live-review-pending | live-review-pending |
| `/404.html` | current | live-review-pending | live-review-pending | live-review-pending |

ZH built from the `i18n-phase0` EN baseline, merged `i18n-zh` → `main` and
deployed. MS and JA built together from `i18n/translation-workbook.csv`
(the full EN/ZH/MS/JA string inventory) and merged `i18n-ms-ja` → `main`.
Compliance audits clean for all three languages
(`i18n/compliance-audit-zh.md`, `-ms.md`, `-ja.md`). Per Keith's
instruction, native-speaker review for all three languages is happening on
the live site rather than pre-merge — see `i18n/review-queue-zh.md`,
`-ms.md`, `-ja.md` for the specific items still needing sign-off
(rental-programme page, the two full legal pages, and the "investment" →
"financial or legal advice" wording substitution in the disclaimer
boilerplate, consistent across all three languages since 投资/pelaburan/投資
are each independently banned compliance terms). EN and ZH pages now carry
the full `en`/`zh-Hans`/`ms`/`ja`/`x-default` hreflang set and the
switcher's 中文/BM/日本語 links site-wide. Note per master doc §9: no JA ad
traffic channel exists yet — Keith may hold JA deployment specifically even
after review clears, independent of ZH/MS status.

EN source baseline for future translation phases: the Phase 0 commit on
`i18n-phase0` (hreflang plumbing + language-switcher scaffold added,
RM774,000 price correction applied repo-wide). Run `git log -1 --format=%H
-- hibiscus2-site/` to get the exact commit hash a given translation phase
should diff against.
