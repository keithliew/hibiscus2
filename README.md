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
| `/` | current | pending-review | — | — |
| `/about/` | current | pending-review | — | — |
| `/contact/` | current | pending-review | — | — |
| `/villas/` | current | pending-review | — | — |
| `/rental-programme/` | current | pending-review (STOP GATE) | — | — |
| `/privacy-policy/` | current | pending-review | — | — |
| `/disclaimer/` | current | pending-review | — | — |
| `/thank-you/` | current | pending-review | — | — |
| `/404.html` | current | pending-review | — | — |

ZH built from the `i18n-phase0` EN baseline on branch `i18n-zh`. Compliance
audit clean (`i18n/compliance-audit-zh.md`); native-speaker review queue at
`i18n/review-queue-zh.md`. **Not merged to `main` or deployed** — held at
the Phase 1 STOP gate (rental-programme page + full legal pages) until
Keith signs off. EN pages' hreflang/switcher intentionally still show
EN-only — the `zh-Hans` hreflang line and the switcher's 中文 link get
added site-wide only once this phase actually deploys, per §3/§9 of the
multilingual spec.

EN source baseline for future translation phases: the Phase 0 commit on
`i18n-phase0` (hreflang plumbing + language-switcher scaffold added,
RM774,000 price correction applied repo-wide). Run `git log -1 --format=%H
-- hibiscus2-site/` to get the exact commit hash a given translation phase
should diff against.
