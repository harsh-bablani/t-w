# Tripex World — Website

A frontend-only, statically exported website for Tripex World.
Next.js 14 (App Router) · TypeScript · Tailwind CSS · GSAP + ScrollTrigger · Framer Motion · Lenis · Lucide.

No backend, database, authentication, CMS or payment code. `npm run build` outputs plain HTML/CSS/JS to `/out`, which can be hosted on any static host (Vercel, Netlify, Cloudflare Pages, S3, cPanel).

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to /out
npm start          # serve /out locally
```

## Before going live — fill these in

| What | Where |
|---|---|
| Phone, email, address, business hours | `src/data/site.ts` → `contact` (all blank by design; blank fields render as dashed placeholders site-wide) |
| Social profile URLs | `src/data/site.ts` → `socials` (blank entries render as inactive icons) |
| Enquiry form delivery | `src/components/sections/EnquiryForm.tsx` — currently a demonstration that validates and confirms in the browser only. Connect a form service (e.g. Formspree, Web3Forms, Netlify Forms) in `onSubmit`. |
| Map | `src/app/contact/page.tsx` — replace the location placeholder with an embed once the address is confirmed. |
| About Us copy | `src/app/about/page.tsx` — mission, vision and commitments are written as brand positioning; review them so they reflect the company accurately. |

## Content (all local data)

```
src/data/
  site.ts          brand, navigation, contact (blank), socials (blank)
  destinations.ts  12 destinations (8 international, 4 India) — powers listing + detail pages
  services.ts      9 services — powers listing + detail pages
  packages.ts      12 SAMPLE itineraries (no prices; labelled illustrative everywhere)
  faqs.ts          20 FAQs across 8 topics
  images.ts        every photo URL in one place
```

Add a destination or service by adding an object to the array — its page, cards, menus, footer links and sitemap entry are generated automatically.

## Imagery

Photos are hotlinked from Unsplash (free under the Unsplash License) and resized by Unsplash's CDN through the custom loader in `src/lib/image-loader.ts`. Check each image suits the brand before launch; swap IDs in `src/data/images.ts` and `destinations.ts`/`packages.ts`. If any photo fails to load, `SmartImage` shows a branded mosaic panel instead of a broken image.

## Structure

```
src/app/                 routes: /, /about, /destinations, /destinations/[slug],
                         /services, /services/[slug], /packages, /contact, /faq, 404
src/app/template.tsx     page transition (tile curtain from the logo's globe)
src/components/layout    Header (mega-menus, mobile menu), Footer, Logo, ContactDetails, SocialLinks
src/components/motion    IntroLoader, SmoothScroll, SplitReveal, ScrollWords, Reveal, Parallax
src/components/ui        Button, SmartImage, Accordion, Breadcrumbs, ServiceIcon
src/components/cards     DestinationCard, PackageCard
src/components/sections  page sections + explorers (filters, dialog, FAQ search, enquiry form)
tailwind.config.ts       design tokens
```

## Design system

Colours come from the logo: **lagoon** `#04A9B9` (TRIPEX), **atlas** `#1C5A8B` (WORLD), **slate** `#3A4356` (tagline), deepened to **abyss** `#0A2338` for dark sections, on cool **frost/mist** backgrounds. Type: Instrument Serif (display) and Manrope (text), loaded from Google Fonts.

The recurring motif is the logo's tile globe: the intro reveals the logo tile by tile, route changes fold away as a curtain of tiles, and the mosaic texture fills image fallbacks and the map placeholder.

## Motion & accessibility

All motion respects `prefers-reduced-motion` (Lenis, GSAP and Framer Motion are disabled or made instant). The hero slideshow has a pause control. Menus, filters, accordions and the itinerary dialog are keyboard accessible with visible focus, and there is a skip link.

The logo file in `public/brand/tripex-logo.png` is the supplied logo with only its white background removed; the original is kept alongside it.
