# Rishikesh Adventures

A premium marketing + booking site for a Rishikesh-based adventure tourism
business (scooter/bike rental, river rafting, camping, adventure activities),
built with Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion,
Lucide Icons and shadcn-style UI primitives.

## Design direction

- **Palette:** Ink `#10231E`, Forest `#1B4332`, River `#0B4F6C`, Sand
  `#F2EFE9`, Current (accent) `#E8873B` — a deliberately more saturated
  marigold than the typical dusty "AI terracotta," on a dark river-gradient
  hero rather than a cream background.
- **Type:** Clash Display for headlines, Inter for body, JetBrains Mono for
  data/field-note details (prices, ratings).
- **Signature element:** a hand-drawn river current (`components/ui/river-line.tsx`)
  that draws itself in as you scroll past the first sections — a visual nod
  to the Ganga, which everything on this site orbits around. Section
  dividers use topographic contour lines rather than generic wave/blob
  shapes.

## Project structure

```
rishikesh-adventures/
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata, JSON-LD schema
│   ├── page.tsx          # Home page — composes all sections
│   ├── globals.css       # Design tokens, base styles, reduced-motion handling
│   ├── sitemap.ts        # Dynamic sitemap.xml
│   └── robots.ts         # Dynamic robots.txt
├── components/
│   ├── layout/
│   │   ├── navbar.tsx    # Sticky glassmorphism nav with mobile menu
│   │   └── footer.tsx    # Footer with quick links, services, address
│   ├── sections/
│   │   ├── hero.tsx           # Full-screen video hero
│   │   ├── why-choose-us.tsx  # 6 premium animated cards
│   │   ├── services.tsx       # Service cards w/ pricing + hover states
│   │   ├── packages.tsx       # Package cards w/ discount badges, ratings
│   │   ├── gallery.tsx        # Masonry gallery w/ filter + lightbox
│   │   ├── reviews.tsx        # Testimonial slider
│   │   ├── booking.tsx        # Booking form
│   │   ├── faq.tsx            # Animated accordion
│   │   └── contact.tsx        # Map + contact channels
│   └── ui/
│       ├── button.tsx           # shadcn-style button (cva variants)
│       ├── river-line.tsx       # Signature scroll-drawn river SVG
│       └── contour-divider.tsx  # Topographic section divider
├── data/                # Content as typed data (services, packages, etc.)
├── lib/utils.ts         # `cn()` class-merging helper
├── public/
│   ├── images/          # Add og-cover.jpg, grain.png here (see README inside)
│   └── videos/          # Add hero-river.mp4 here
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Before you launch

This ships with hotlinked Unsplash placeholder photography so it runs
immediately. Replace with your own photography/video before going live —
see `public/images/README.md` for the exact asset list and specs. Also
update:

- Phone numbers, email, and social links in `components/sections/contact.tsx`
  and `components/layout/footer.tsx`
- The Google Maps embed query in `contact.tsx`
- The JSON-LD business schema (address, geo coordinates) in `app/layout.tsx`
- The booking form's `onSubmit` handler in `booking.tsx` — currently just
  flips to a confirmation state; wire it to your booking API, CRM, or a
  serverless route (e.g. `app/api/book/route.ts`) that emails/WhatsApps you

## Commands to run (local development)

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Commands to build

```bash
npm run build
npm run start
```

## Deploying to Vercel

```bash
npm install -g vercel
vercel login
vercel            # first deploy, follow prompts
vercel --prod     # subsequent production deploys
```

Or connect the GitHub repo directly at vercel.com/new — Vercel auto-detects
Next.js and needs no extra config for this project.

## Performance & SEO checklist

- Images use `next/image` with `sizes` set for responsive loading
- Fonts loaded with `display: swap`
- `sitemap.ts` / `robots.ts` generate `/sitemap.xml` and `/robots.txt` automatically
- Open Graph + Twitter Card metadata and TravelAgency JSON-LD schema are in `app/layout.tsx`
- `prefers-reduced-motion` is respected globally in `globals.css`
- Run `npx next build && npx lighthouse http://localhost:3000 --view` after
  adding real assets to verify your Lighthouse score before launch
