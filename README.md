# Seed Cafe Sri Lanka Website

Production-ready single-page website for Seed Cafe, built with Next.js App Router, TypeScript, Tailwind CSS, shadcn-style UI primitives, Framer Motion, Lucide React, and `next/image`.

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this project to a Git repository.
2. Import the repository in Vercel.
3. Use the default Next.js settings.
4. Deploy.

## Replace Brand Images

Seed Cafe must approve all brand images, food photos, space photos, and social media assets before they are used on the website. Do not scrape, hotlink, or directly fetch images from Instagram or Facebook.

Place approved local files in:

```text
public/images/seed/logo-placeholder.png
public/images/seed/hero.jpg
public/images/seed/space-1.jpg
public/images/seed/space-2.jpg
public/images/seed/food-1.jpg
public/images/seed/food-2.jpg
public/images/seed/food-3.jpg
public/images/seed/coffee-1.jpg
public/images/seed/gallery-1.jpg
public/images/seed/gallery-2.jpg
public/images/seed/gallery-3.jpg
public/images/seed/gallery-4.jpg
public/images/seed/gallery-5.jpg
public/images/seed/gallery-6.jpg
```

If an image file is missing, the website renders a neutral Seed-style placeholder card. Replace each slot with an approved image using the same filename and extension, then rebuild or redeploy.

## Edit Business Data

All repeatable business content lives in:

```text
src/lib/seed-data.ts
```

Use this file to update:

- Business details
- Instagram, Facebook, Google Maps, and phone links
- Navigation labels
- CTA labels
- Menu highlights
- Gallery captions and alt text
- Contact section details

The phone number is intentionally left configurable in `src/lib/seed-data.ts`.

## Future Upgrade Path

1. Add a CMS for menu and gallery updates.
2. Add online ordering.
3. Add a payment gateway.
4. Add a PostgreSQL database.
5. Add an admin dashboard.
