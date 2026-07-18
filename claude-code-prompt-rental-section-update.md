# PROMPT FOR CLAUDE CODE — Replace "How the 15-Year Rental Programme Works" Section

## CONTEXT

On hibiscus2.com, the page `/rental-programme` currently has a section titled
"How the 15-Year Rental Programme Works" with a two-column Years 1–3 /
Years 4–15 explainer plus three detail cards. Property agents fielding leads
gave feedback that this is TOO DETAILED for a cold-traffic ad landing page —
that level of mechanics should be shared in the private/in-person
consultation, not published on the page. Replace it with a condensed,
icon-led benefit grid instead.

Reference for VISUAL STYLE ONLY (icon + short line, card grid, asymmetric
layout): https://lexis-hibiscus-2-klmetropolitan.com/
**Do NOT copy any wording from that site.** It uses phrases like "Guaranteed
Rental Return (GRR) of 8% per annum" and "Lucrative Investment" — these are
exactly the banned phrases in our compliance rules and must never appear on
hibiscus2.com. Style reference only, never a copy source.

## TASK

Find the current section on `/rental-programme` titled "How the 15-Year
Rental Programme Works" (contains a Years 1–3 / Years 4–15 two-column layout
and three supporting detail cards). Replace it entirely with the new section
below. Keep everything else on the page unchanged, including the disclosure
line and the CTA block that currently follow this section.

## NEW SECTION SPEC

**Eyebrow label:** THE PROGRAMME (unchanged from current)

**Headline:** Own It. They Run It. You Benefit.
(Alternative if preferred: "A Rental Programme, Fully Managed For You")

**Intro sentence (single line, sits above the grid):**
"A professionally managed rental programme structured over 15 years — the
full mechanics are explained in your private consultation."

**Icon grid — 6 cards, asymmetric layout (3 top row + 3 second row, or 3 top
+ 2 centered if the grid component only supports that pattern). Each card:
one icon + one bold short line + optional one-line supporting text. NO
numbers, NO percentages, NO "years 1-3 / years 4-15" labels, NO payment
frequency details.**

1. **Icon:** contract/handshake
   **Line:** Structured 15-Year Rental Programme
   **Support (optional, keep terse):** A long-term programme with clear
   phases, set out in the official tenancy agreement.

2. **Icon:** shield/tools
   **Line:** Operator Covers Upkeep & Outgoings
   **Support:** Furnishing, maintenance and daily operations are fully
   handled for you.

3. **Icon:** award/history or trophy
   **Line:** Rental Track Record Since 2006
   **Support:** Backed by an operator with a rental payment history across
   Lexis properties.

4. **Icon:** palm tree / moon / calendar-star
   **Line:** 10 Complimentary Owner Nights a Year
   **Support:** Your villa is also your family's annual resort retreat.

5. **Icon:** document/exit-door
   **Line:** Flexible Exit With Written Notice
   **Support:** Owners may end the tenancy with advance written notice.

6. **Icon:** hotel-building/badge
   **Line:** Managed by Lexis Hotel Group
   **Support:** An award-winning operator overseeing daily resort operations.

Use lucide-react (or the icon set already in use on the site) — pick the
closest available icons to the above concepts; exact icon choice is
flexible, meaning is not.

**Disclosure line — KEEP EXACTLY AS-IS, unchanged, directly below the grid:**

> "Programme details are subject to the official sale and tenancy/leaseback
> agreements. Rental programme terms, availability and conditions may
> change according to official agreements and project requirements.
> Interested buyers should review the complete terms with the authorised
> sales representative before making any decision."

**CTA block — KEEP the existing dark CTA panel below the disclosure, but
update its supporting copy to make WhatsApp the clear next step for anyone
who wants the detail this section no longer shows:**

Headline (unchanged or close): "Request the Full Programme Terms"
Supporting line: "See the complete 15-year structure, current pricing and
full documentation — sent to you directly via WhatsApp."
Button (unchanged): "WhatsApp for Full Programme Terms"

## HARD RULES (apply to this section specifically, on top of the
site-wide banned-words list already in CLAUDE.md / the master prompt)

- No percentages or yield figures of any kind.
- No "guaranteed," "GRR," "investment," "lucrative," "passive income,"
  "ROI," "returns."
- No "Years 1–3" / "Years 4–15" labels or any payment-frequency detail
  (quarterly/monthly) — that mechanic-level detail is reserved for the
  WhatsApp/in-person conversation per agent feedback.
- No projection tables, working examples, or comparison to "other
  developers."
- Every claim in the six cards must trace to `approved-facts.md` section 3
  (Rental Programme — Structure). If wording drifts from a fact listed
  there, flag it rather than inventing new claims.

## OUTPUT

1. Updated `/rental-programme` page file with the section replaced as
   specified.
2. Confirm in your response which icon library/components were used, so
   consistency can be checked against the rest of the site.
3. Re-run the banned-words grep check from the master prompt's QA checklist
   on this page after the edit, and report the result.
