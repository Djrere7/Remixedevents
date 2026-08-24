# First Spin DJ Bootcamp — Landing Page

A self-contained, mobile-first landing page for **firstspindjbootcamp.org**.
A nonprofit initiative of The MixHer, a 501(c)(3).

Everything is plain HTML/CSS/JS with **no build step** — open `index.html` in a
browser to preview, and drop the folder on any static host (Cloudflare Pages,
Netlify, GitHub Pages, etc.) to deploy.

## Files
| File | Purpose |
|------|---------|
| `index.html` | The entire page (content + styles + scripts, single file). |
| `img/` | Real First Spin photos used across the page. |
| `favicon.svg` | Browser tab icon (temporary sunset badge — replace with real logo). |
| `site.webmanifest`, `robots.txt`, `sitemap.xml` | PWA + SEO basics. |

## How staff edit the site
- **Text:** search for a phrase in `index.html` and edit it in place.
- **Dates / locations:** search `TO BE ANNOUNCED` and `COMING SOON`.
- **Impact numbers:** the *Impact* section — items are marked `data-editable`.
- **Links (donate, forms, analytics):** set once in the `FIRST_SPIN_CONFIG`
  block near the bottom of `index.html`:
  - `donateUrl` — paste your live donation link (Givebutter/Donorbox/PayPal).
    Until set, the Donate button routes to the Sponsor form.
  - `formEndpoint` — paste a Formspree (or similar) endpoint so the three
    interest forms submit + send a confirmation. Until set, forms show a
    success message and open a pre-filled email to `FirstSpinDJBootcamp@gmail.com`.
  - `ga4MeasurementId` — paste a GA4 ID (`G-XXXX`) to turn on analytics.
    Events also push to `dataLayer` for Google Tag Manager.

## ⚠️ Needs First Spin approval before launch — search `[NEEDS FIRST SPIN APPROVAL]`
1. **Official logo** — currently a placeholder SVG badge. Drop a transparent
   PNG/SVG into `img/` and swap it into the header, footer, and favicon.
2. **Partners** — Serato, Chauvet DJ, Carnival Studios are labeled
   *“developing relationship.”* Confirm wording / add official logos only when
   approved. Do not label anyone a confirmed sponsor without sign-off.
3. **Donation link** — set `donateUrl`.
4. **Form backend** — set `formEndpoint` so submissions are received.
5. **Testimonials** — a reserved slot exists in the Parent section; only publish
   reviewed & approved quotes.
6. **Dates & locations** — kept as placeholders per content rules (no old 2025
   dates, no unconfirmed 2026 dates).

## Analytics events tracked
`register_click`, `donate_click`, `sponsor_click`, `equipment_click`,
`partner_click`, `volunteer_click`, `email_click`, `social_click`,
`form_submit` (with `form` = parent/sponsor/equipment).

## SEO
- Title: *First Spin DJ Bootcamp | No-Cost DJ Education in South Florida*
- Open Graph / Twitter card, Organization + nonprofit JSON-LD schema, canonical
  URL, sitemap, and robots are all in place.
- Social-share image is a dedicated 1200×630 branded card at `img/og-card.png`
  (regenerate with the Pillow snippet in git history if branding changes).

## Accessibility
Skip link, semantic landmarks, labeled form fields, visible focus states,
descriptive alt text and button text, keyboard-operable nav/FAQ, and
`prefers-reduced-motion` support. Content is fully visible without JavaScript.
