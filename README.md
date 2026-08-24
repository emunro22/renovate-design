# Renovate Design

Marketing site for Renovate Design, built with [Next.js](https://nextjs.org) (App Router, TypeScript, Tailwind CSS).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Scripts

- `npm run dev` — start the development server
- `npm run build` — build for production (every route is statically prerendered)
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

## Notes

- `src/lib/business.ts` centralises the phone number, service areas and social links used across the header, footer and structured data.
- `src/app/layout.tsx` sets sitewide metadata and JSON-LD (`HomeAndConstructionBusiness`) structured data. Update `business.siteUrl` there before going live with a production domain.
