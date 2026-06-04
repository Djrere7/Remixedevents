# REmixed Events — Website

South Florida's premier events company. Marketing site for **REmixed Events** and **DJ ReRe** — built with [Astro](https://astro.build).

> Anything But Ordinary.

## Stack

- **Astro 4** — static site generation, zero JS by default
- Hand-authored CSS design system (no UI framework) — `src/styles/global.css`
- Fonts: Clash Display + General Sans (Fontshare), Fraunces (Google)
- Lead capture via the existing **DJ Event Planner** form (ID `25716`)

## Local development

This machine has Node installed at `~/.local/node`. If `node` isn't on your PATH, run:

```bash
export PATH="$HOME/.local/node/bin:$PATH"
```

Then:

```bash
npm install      # first time only
npm run dev      # http://localhost:4321
npm run build    # production build → ./dist
npm run preview  # preview the production build
```

## Project structure

```
src/
  data/site.ts          # ← single source of truth: copy, services, testimonials, links
  layouts/Base.astro    # head/SEO, nav, footer, scroll-reveal engine
  components/            # Logo, Nav, Footer, ServiceCard, TestimonialCard, Marquee, PageHeader
  pages/                # index, experiences, corporate, weddings, about, contact
  styles/global.css     # design tokens + global styles
public/
  quote-form.html       # branded DJ Event Planner lead form (loaded in an iframe)
  favicon.svg
```

## Editing content

Most copy lives in **`src/data/site.ts`** — services, testimonials, awards, stats, social
links and the email address. Edit there and every page updates.

### Swapping in real photography

The About page shows a placeholder for DJ ReRe's portrait. Drop a photo at
`public/djrere.jpg` and wire it into `src/pages/about.astro`. Hero/section background
imagery can be added the same way.

### Using the real logo art

The header renders a typographic wordmark. To use the logo image instead, add
`public/logo.svg` (or `.png`) and update `src/components/Logo.astro`.

## Deployment

Deploy the `dist/` folder to any static host. Recommended: **Netlify** or **Vercel** —
connect this repo and they'll build on every push (build command `npm run build`,
publish directory `dist`).

Remember to set the production domain in `astro.config.mjs` (`site`).
