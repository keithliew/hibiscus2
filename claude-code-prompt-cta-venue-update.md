# PROMPT FOR CLAUDE CODE — CTA Relabeling & Venue Details

## CONTEXT

Every primary CTA on hibiscus2.com currently reads "WhatsApp Our Consultant"
or similar — a chat-intent label. Feedback: the primary conversion goal
should read as booking a viewing/consultation, not just starting a chat.
Reframe the CTA labels to booking-intent while keeping WhatsApp as the
underlying mechanism (no new booking tool/calendar integration — WhatsApp
remains the single delivery channel). Also add a proper venue-details block
(address, hours, phone) which is currently missing/vague ("arranged by
appointment" with no specifics).

## PART A — CTA RELABELING (site-wide)

Replace CTA button labels per the mapping below. In every case, the button
still opens the existing WhatsApp deep link — only the button label and
pre-filled message text change. Do not add any calendar/booking widget.

| Current label | New label |
|---|---|
| "WhatsApp Our Consultant" (primary, all pages) | "Book a Private Viewing" |
| "WhatsApp Now" (/contact) | "Book a Private Viewing" |
| "WhatsApp Your Consultant" (/about) | "Book a Viewing With Wong See How" |
| "WhatsApp for Full Programme Terms" (/rental-programme CTA panel) | "Book a Consultation for Full Terms" |
| "Request Price List on Whatsapp" (/villas) | "Book a Viewing & Request Pricing" |
| "Chat With Consultant" (floating sticky button) | "Book a Viewing" |
| Secondary button "Book Private Consultation" (/villas hero) | Keep as-is — already correct |
| Secondary button "Request Programme Details & Pricing" / "Request Information" (forms) | Keep as-is — form path stays lower-friction, unchanged |

**Update the WhatsApp pre-filled message text to match booking intent.**
Replace existing pre-fill strings with:

- Home / general pages: "Hi, I'd like to book a private viewing for Lexis
  Hibiscus 2."
- /villas: "Hi, I'd like to book a viewing and get villa pricing for Lexis
  Hibiscus 2."
- /rental-programme: "Hi, I'd like to book a consultation for the full
  15-year rental programme terms for Lexis Hibiscus 2."
- /about: "Hi, I'd like to book a viewing with Wong See How for Lexis
  Hibiscus 2."

Keep whatever UTM/lead-source tagging logic already exists on these
pre-fill strings; only change the human-readable text portion.

## PART B — VENUE DETAILS SECTION

Add a venue-details block with the fields below. Use `[INSERT]` for any
value not supplied — do not invent an address, phone number, or hours.

**Fields (source: approved-facts.md Section 8 — update that file once
Summerfield confirms remaining items):**
- Venue name: **Bukit Bintang Showroom**
- Full street address: `[INSERT — exact address of the Bukit Bintang
  Showroom, confirm with Summerfield]`
- Showroom / briefing hours: **10am – 4pm, daily (every day)**
- Phone number: `[INSERT — Summerfield office or consultant line, confirm
  which]`
- WhatsApp number: already in approved-facts.md, reuse existing value

Note: earlier drafts referenced "Pavilion KL" as the briefing venue — this
is now corrected to **Bukit Bintang Showroom**. Replace every existing
mention of "Pavilion KL" site-wide (hero subheadlines, FAQ answers, /about,
/contact, footer, CTA panel copy) with "Bukit Bintang Showroom" for
consistency. Search the whole codebase for "Pavilion KL" and "Pavilion" to
catch all instances.

**Where to add it:**

1. **/contact page** — replace the vague "Private Briefing Venue" card
   (currently: "Private briefings held at Pavilion KL. Arranged by
   appointment — message us on WhatsApp to book a time.") with a fuller
   card:

   ```
   Private Briefing Venue
   Bukit Bintang Showroom
   [INSERT address]
   Open daily, 10am – 4pm
   [INSERT phone] · or book directly via WhatsApp below
   ```

2. **/about page** — add the same venue fields as a small block near the
   existing "Private Briefings" card ("Full documentation reviewed together
   at Bukit Bintang Showroom"), so the consultant's bio page also carries
   concrete venue details rather than relying on /contact alone.

3. **Footer (site-wide)** — add one line under the existing "Marketing
   Credentials" column or as a new small "Visit Us" column:
   ```
   Visit Us: [INSERT address] · [INSERT hours]
   ```
   Keep all existing footer compliance content unchanged — this is an
   addition, not a replacement.

## RULES

- Do not add any third-party booking/calendar tool or new tracking event
  beyond what already exists (`whatsapp_click`, `lead_form_submit`,
  `programme_details_request`) — relabeling only.
- Do not change button colors, positions, or the overall page structure —
  label text and the new venue block only.
- Every new fact added must come from approved-facts.md; if a value is
  still `[INSERT]` there, render the UI with a placeholder string like
  "[Venue details to be confirmed]" rather than a fabricated address, and
  list it in PENDING-ITEMS.md.
- Keep the existing "Direct WhatsApp Access — no call centre" messaging on
  /about as-is; the venue/phone addition supplements it, it does not
  contradict it (phone number is for booking/venue enquiries, not framed as
  a call-centre alternative to WhatsApp).

## OUTPUT

1. Updated files with CTA labels and pre-fill text changed per the mapping.
2. New venue-details block added to /contact, /about, and footer.
3. Updated approved-facts.md Section 8 row for venue address/hours/phone
   marked [INSERT] if not yet supplied, or filled in if provided alongside
   this prompt.
4. List any remaining `[INSERT]` items in PENDING-ITEMS.md.
