# Harish Jaiswal Photography

**harishjaiswal.com** — Built with Next.js 15, Tailwind CSS, Resend.

## Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Resend (contact form emails)

## Setup

```bash
npm install
cp .env.local.example .env.local
# Add your RESEND_API_KEY to .env.local
npm run dev
```

## Portfolio Images

Place all 80 JPEG slides in `/public/portfolio/` following the naming convention `hjp_001.jpg` through `hjp_080.jpg`.

Update `/src/data/portfolio.ts` with the correct filenames, captions, and arc names.

## Deploy

Push to `main` branch → Vercel auto-deploys.

Environment variables required in Vercel:
- `RESEND_API_KEY`

## Structure

```
src/
├── app/
│   ├── page.tsx          # Home
│   ├── portfolio/        # Portfolio grid
│   ├── services/         # Pricing
│   ├── about/            # About
│   ├── contact/          # Contact form
│   └── api/contact/      # Resend API route
├── components/
│   ├── Nav.tsx
│   ├── Footer.tsx
│   ├── PortfolioGrid.tsx
│   └── ContactForm.tsx
└── data/
    └── portfolio.ts      # Slide manifest
```
