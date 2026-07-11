# PROMPT FOR CLAUDE CODE — CTA Label Consolidation & Microcopy Accuracy Fix

## CONTEXT

An audit of `/villas` and `/rental-programme` found the site currently uses
5+ different labels for what is actually the same underlying action
(opening WhatsApp to book a viewing), plus several instances of supporting
microcopy that overpromise specific documentation (e.g. "complete 15-year
structure," "full documentation," "payment scheme details") when the actual
deliverable shared via WhatsApp is a simple flyer/overview, not a document
pack. This creates both a UX inconsistency and an expectation mismatch for
the visitor. Fix both in this pass.

## PART A — Consolidate every CTA button to one of 3 labels

**Every WhatsApp-opening button, across the entire site (not just /villas
and /rental-programme — check /about, /contact, home, and the sticky
floating button too), must read exactly:**

> **Book a Private Viewing**

Find and replace ALL of the following variant labels with the above,
wherever they appear as WhatsApp button text:
- "Book a Viewing & Request Pricing"
- "Book a Show Unit Viewing"
- "Book a Consultation for Full Terms"
- "WhatsApp Our Consultant" (if any instance of this older label remains)
- "WhatsApp for Full Programme Terms" (if remaining)
- Any other WhatsApp-button label variant not listed here — search broadly
  for all `data-wa` or WhatsApp-linked buttons/anchors and normalize every
  one found, even if its exact current text isn't listed above.

**Every anchor-link button that scrolls to the on-page lead form (NOT
WhatsApp, NOT the form's own submit button) must read exactly:**

> **Request a Callback**

Find and replace ALL of the following:
- "Request Full Programme Terms" (when used as an anchor-to-form link)
- "Request Payment Scheme Details"
- "Book Private Consultation" (hero section anchor link to the form —
  standardize this too, per instruction, even though it was closer to
  acceptable than the others)

**The lead form's own submit button — DO NOT CHANGE:**
- "Request a Viewing Callback" stays exactly as-is. This is a different
  element from the anchor-link buttons above (this is the actual `<button
  type="submit">` inside the form itself, not a link that scrolls to it) —
  do not accidentally rename this one to "Request a Callback" and lose the
  distinction between the two.

## PART B — Rewrite overpromising supporting microcopy

Search both `/villas` and `/rental-programme` (and any other page) for
sentences that promise specific documentation not actually being sent.
Banned phrases in this supporting/microcopy context (replace, don't just
soften):
- "complete 15-year structure"
- "full documentation"
- "current pricing and full documentation"
- "payment scheme details" (as a document/pack implication)
- "full terms" (when implying a formal document, as opposed to a
  conversation)
- Any other phrasing implying a document pack, spec sheet, or formal
  agreement gets sent automatically via WhatsApp

**Replace with accurate, deliverable-matching language**, e.g.:

- Current (screenshot example): "See the complete 15-year structure,
  current pricing and full documentation — sent to you directly via
  WhatsApp."
- Replacement: "Get villa pricing and a project overview, sent to you
  directly via WhatsApp."

Apply the same accuracy standard to every instance found — the actual
deliverable via WhatsApp is a simple flyer/overview and a conversation, not
a document pack, formal terms sheet, or payment scheme breakdown. Use
words like "overview," "pricing," "flyer," "project information," or
"details" (general) rather than "full documentation," "complete
structure," or "full terms" (specific/formal-sounding).

## PART C — Build the shared text-config system (new, do this alongside Parts A & B)

No shared text-config system exists yet on this site. Since this prompt
already touches every CTA button across every page, build the config
system now in the same pass, rather than hardcoding the 3 consolidated
labels directly and requiring a second full pass later to retrofit it.

**1. Create one shared file** (naming/location to match the site's existing
structure — e.g. `site-content.js` or equivalent if the site uses a
different templating approach; use your judgment for what fits a static
HTML site cleanly, and explain the choice in your output):

```js
const buttonText = {
  whatsappPrimary: "Book a Private Viewing",
  requestCallback: "Request a Callback",
  formSubmit: "Request a Viewing Callback",
};
```

**2. On every page, mark each CTA button with a `data-text-key` attribute**
matching the correct key above, and wrap the visible label text in
`<span data-text-target>...</span>` so the script can update just the text
without disturbing any icon (e.g. the WhatsApp SVG) sitting inside the same
button. Example (WhatsApp button):

```html
<a class="[existing classes unchanged]" data-wa="hero" data-text-key="whatsappPrimary" href="#">
  <svg>...</svg>
  <span data-text-target>Book a Private Viewing</span>
</a>
```

Anchor-to-form buttons get `data-text-key="requestCallback"`. The form's
own submit button gets `data-text-key="formSubmit"`.

**3. Add one small script**, included site-wide (in whatever shared
layout/footer/head include already exists across pages — do not duplicate
it inline on every single page if a shared include mechanism exists):

```js
document.querySelectorAll('[data-text-key]').forEach(el => {
  const key = el.dataset.textKey;
  const target = el.querySelector('[data-text-target]') || el;
  if (buttonText[key]) target.textContent = buttonText[key];
});
```

**4. Do not remove the hardcoded text from the HTML `<span>` tags** — keep
the correct label as static fallback text inside each `<span
data-text-target>`, with the JS overwriting it on page load. This means the
site still displays correct text even if JavaScript fails to load for any
reason (progressive enhancement, not a hard dependency).

**5. Confirm existing attributes are preserved.** `data-wa` (or any other
existing tracking attribute) must remain untouched and separate from the
new `data-text-key` attribute — do not merge their values into one
attribute (this was a mistake caught and corrected by hand earlier; do not
reintroduce it).

**Going forward, this means:** any future button-text change site-wide only
requires editing the one `buttonText` object in the config file — no more
hand-editing individual HTML files per button.

## RULES (updated)

- Do not change any tracking/GTM event names, `data-wa` attribute values,
  hrefs, or `data-text-key` attributes (if already implemented from a
  prior prompt) — text/label content changes only.
- Do not change button styling, color, position, or icon.
- If a `data-text-key`/shared-config text system already exists on the
  site (from an earlier prompt), update the config values there instead of
  hardcoding the new label into individual HTML files — check for this
  first before editing.
- Every claim in the rewritten microcopy must still trace to
  approved-facts.md — don't introduce new claims while fixing the
  overpromising language, just remove/soften what overpromises.

## OUTPUT

1. List every file and line changed, grouped by Part A (CTA labels), Part B
   (microcopy), and Part C (config system).
2. Confirm the lead form's own submit button ("Request a Viewing
   Callback") was left unchanged and is still distinguishable from the new
   "Request a Callback" anchor-link buttons.
3. Confirm the new `buttonText` config file location, and list every page
   that now includes the shared script.
4. Re-run the banned-words grep check from the master prompt's QA checklist
   to confirm no regressions.
5. Flag any instance where you were uncertain whether a button was a
   WhatsApp link, a form-anchor link, or the form's own submit button,
   rather than guessing.
