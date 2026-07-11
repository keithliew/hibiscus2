# PROMPT FOR CLAUDE CODE — Form Button Relabel & WhatsApp Icon

## CONTEXT

Two small, low-risk polish changes to hibiscus2.com, both on top of the
existing CTA structure (no new tracking events, no layout restructuring).

## PART A — Relabel the form submit button

Both `/villas` and `/rental-programme` (and any other page using the same
lead form component, e.g. `/contact`) currently have a form submit button
labeled **"Request Information"**. Change this label to:

**"Request a Viewing Callback"**

Rationale (for context, not to display anywhere): the WhatsApp CTA button
("Book a Private Viewing") is an instant-chat action; the form is a
callback-request action — the supporting microcopy above the form already
says "Prefer a callback? Use the form and our consultant will reach out on
WhatsApp with villa details, pricing and viewing times." The button label
should match that promise.

**Do not change:**
- The WhatsApp button label ("Book a Private Viewing") — already correct.
- The supporting microcopy above the form — already correct, keep as-is.
- Any tracking/GTM event names (`lead_form_submit` etc.) — label change only,
  no logic changes.

**Check for consistency:** search the codebase for any other instance of
"Request Information" as a button label (e.g. secondary CTA buttons
referenced earlier in the build, sitelink-adjacent copy, or duplicate form
instances on other pages) and update all instances to "Request a Viewing
Callback" for consistency, unless a specific instance has a good reason to
differ (flag any such case rather than silently changing it).

## PART B — Add WhatsApp icon to the WhatsApp CTA button(s)

Add the WhatsApp glyph icon to every "Book a Private Viewing" (and
equivalent WhatsApp-opening) button across the site — primary hero buttons,
the floating sticky WhatsApp button, and any other WhatsApp CTA instance.

**Icon specification:**
- Use the standard WhatsApp icon glyph: white speech-bubble/phone mark,
  typically on the brand green (`#25D366`) circular or rounded-square
  background — OR, if a monochrome/single-color version fits the button's
  existing style better (e.g. the dark navy or gold buttons already used on
  this site), use a simple line/glyph version of the WhatsApp mark in a
  color consistent with the button's existing text color, rather than
  forcing the brand-green badge onto a differently-colored button. Use
  judgment for visual consistency with the site's existing navy/gold/cream
  palette — the icon should look native to this design, not pasted in.
- Source from an already-available icon library in this project's stack
  (e.g. lucide-react's brand/logo icon set, or simple-icons via npm/CDN if
  lucide doesn't include it) — do not screenshot or hotlink Meta's own
  brand assets directly.
- Size: 16–20px, positioned to the left of the button text, with normal
  spacing (not oversized, not the dominant visual element of the button).
- Apply consistently across: hero WhatsApp buttons on all pages, the
  floating sticky WhatsApp button, and the /rental-programme CTA panel
  WhatsApp button.

**Do NOT add the icon to:**
- The form submit button ("Request a Viewing Callback") — that's not a
  WhatsApp action, no icon needed there.
- Any secondary/text-only WhatsApp links if they exist as inline text
  rather than buttons (icon is for buttons, not inline text links, unless
  it improves clarity without cluttering).

## OUTPUT

1. Updated files reflecting both changes across all relevant pages.
2. Confirm which icon source/library was used for the WhatsApp glyph, so
   licensing/consistency can be checked.
3. Re-run the banned-words grep check from the master prompt's QA checklist
   after these edits (should be unaffected, but confirm no regression).
4. Visually confirm (describe or screenshot if possible) that the icon
   renders correctly at the specified size and doesn't visually crowd the
   button text, especially on mobile widths (360–390px).
