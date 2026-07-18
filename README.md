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
listed EN commit; `stale` = EN has changed since; `pending-review` = built,
held at the Phase 1 STOP gate for native review; `—` = phase not started.

| Page | EN | ZH (`/zh/`) | MS (`/ms/`) | JA (`/ja/`) |
|---|---|---|---|---|
| `/` | current | — | — | — |
| `/about/` | current | — | — | — |
| `/contact/` | current | — | — | — |
| `/villas/` | current | — | — | — |
| `/rental-programme/` | current | — | — | — |
| `/privacy-policy/` | current | — | — | — |
| `/disclaimer/` | current | — | — | — |
| `/thank-you/` | current | — | — | — |
| `/404.html` | current | — | — | — |

EN source baseline for future translation phases: the Phase 0 commit on
`i18n-phase0` (hreflang plumbing + language-switcher scaffold added,
RM774,000 price correction applied repo-wide). Run `git log -1 --format=%H
-- hibiscus2-site/` to get the exact commit hash a given translation phase
should diff against.
