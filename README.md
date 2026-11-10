# hibiscus2.com

**Status (20 Oct 2026):** live. Footer "investment" wording removed, Malay pages link to Japanese, contact descriptions no longer offer email; starting price updated to RM860,000; internal PENDING-ITEMS.md moved out of the public site folder; new Events section at /events/ (October Fest showroom day and MAPEX 2026 Melaka posts, English only), Events in the top menu and a Latest News row on the home page (all deployed 20 Oct). Deepavali Property Open House post (13 Nov 2026) live 21 Oct. "The Lexis Track Record" series: index at /lexis-track-record/ and Part 1 on Lexis Hibiscus Port Dickson live 22 Oct (research in research/lexis-series/). Header menu now collapses below 1024 px. Menu item 'Events' is now 'News' (/news/ lists events and the Track Record series), live 22 Oct. Also live 22 Oct: hibiscus2.pages.dev noindex (_headers), RealEstateAgent/WebSite structured data, llms.txt, lead-form funnel events (h2_form_view/start/field/error/submit/abandon; GTM tag published 22 Oct as v4/v5, GA4 custom dimensions added; "Lead form funnel" report saved in GA4 Explore 25 Oct), optional 'When are you planning to buy?' on EN forms, and 'Who stays at Lexis resorts' in Track Record Part 1. Ads tracking (21 Oct): WhatsApp clicks and form submissions import from GA4 as Primary conversions (see PENDING-ITEMS §8). Homepage FAQ (6 answers, FAQ markup, EN + ZH) and new titles (ZH leads with 马来西亚大红花2.0) live 9 Nov (marketing-loop test h2-T01). Ads landing pages updated 10 Nov: WhatsApp messages end with a ref code (PAGE-LANG-AD/WEB, e.g. "Ref: VIL-EN-AD"), unconfirmed claims (1,734 rooms, largest ballroom, GDV, 80 acres, rental since 2006, 10.2m guests) removed in 4 languages, villas quick facts and a Deepavali strip that hides after 13 Nov. Ads plan for 11–30 Nov in ads/; new campaign "Search - Nov 2026 (RM1,000 total)" enabled 10 Nov, runs 11–30 Nov with a hard RM1,000 total (Search-1 and the PMax campaign paused). Track Record Part 1 live 10 Nov with an animated guest-ratings panel (Google 4.7 from 33,243 reviews, Agoda 8.4, Booking.com 8.7; read 10 Nov 2026, re-check quarterly) and a guest-numbers timeline; site.js has a count-up helper ([data-count]). /villas/ ratings card drafted for ~18 Nov (research/lexis-series/review-ratings-2026-11.md). Deepavali Open House moved to Fri 20 Nov, 1pm to 5pm, Imperial Lexis Kuala Lumpur 7F: event page (EventRescheduled schema, new poster), home, news, events and the EN/ZH landing-page strips (hide after 20 Nov) live 10 Nov; Ads sitelink updated to "Open House 20 Nov" with end date 20 Nov. Open: Search Console sitemap submission; unverified claims on the landing pages; mobile speed (~68). Full audit and plan: side-session notes `hibiscus2-audit-and-plan.md`.

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
