# hibiscus2.com

Static HTML + Tailwind marketing site for Lexis Hibiscus 2 (Port Dickson),
deployed via Cloudflare Pages from `hibiscus2-site/`. See
`claude-code-prompt-multilingual.md` for the multilingual build spec and
`CLAUDE.md` / `approved-facts.md` for the compliance rules that govern all
copy on this domain.

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
| `/` | current | live-review-pending | — | — |
| `/about/` | current | live-review-pending | — | — |
| `/contact/` | current | live-review-pending | — | — |
| `/villas/` | current | live-review-pending | — | — |
| `/rental-programme/` | current | live-review-pending | — | — |
| `/privacy-policy/` | current | live-review-pending | — | — |
| `/disclaimer/` | current | live-review-pending | — | — |
| `/thank-you/` | current | live-review-pending | — | — |
| `/404.html` | current | live-review-pending | — | — |

ZH built from the `i18n-phase0` EN baseline, merged `i18n-zh` → `main` and
deployed. Compliance audit clean (`i18n/compliance-audit-zh.md`). Per
Keith's instruction, native-speaker review is happening on the live site
rather than pre-merge — see `i18n/review-queue-zh.md` for the specific
items still needing sign-off (rental-programme page, the two full legal
pages, and the "investment" → "financial or legal advice" wording
substitution in the disclaimer boilerplate). EN pages now carry the
`zh-Hans` hreflang line and the switcher's 中文 link site-wide.

EN source baseline for future translation phases: the Phase 0 commit on
`i18n-phase0` (hreflang plumbing + language-switcher scaffold added,
RM774,000 price correction applied repo-wide). Run `git log -1 --format=%H
-- hibiscus2-site/` to get the exact commit hash a given translation phase
should diff against.
