# Mogana.dev

The source for [mogana.dev](https://mogana.dev) — a full stack product engineering brand and portfolio site covering enterprise SaaS, AI-powered applications, marketplaces, e-commerce systems and business automation tools.

Built with Next.js (App Router), TypeScript, Tailwind CSS and Framer Motion. Fully bilingual (English/French), statically generated where possible, and optimized for search, social sharing and accessibility.

## Overview

The site is a recruiter-facing portfolio and case-study archive. It presents:

- A product portfolio of 16 real, production-shipped projects across enterprise SaaS, marketplaces, e-commerce and corporate websites
- In-depth case studies for each project (problem, solution, approach, features, challenges, outcome)
- A skills and technology overview mapped by domain
- A written article library on SaaS engineering and product thinking
- Country-specific availability pages for international opportunities, each with unique, non-duplicated content
- Recruiter-focused pages (Hire Me, Availability, Recruiter FAQ)

The brand is intentionally presented without a personal legal name — only the public brand identity, **Mogana.dev**, appears on the site.

## Features

- **Bilingual (EN/FR)** — every page has a fully translated French counterpart, served from parallel route groups (`app/(en)` and `app/(fr)`), with correct `hreflang` alternates throughout
- **15 project case studies** — each with a problem/solution narrative, technical approach, feature list and production outcome
- **12 country availability pages** — unique, non-templated content per country covering market fit, industries, languages, visa/relocation openness and why-hire-me positioning
- **Structured data** — Organization, WebSite, BreadcrumbList, Article, and FAQPage JSON-LD schemas
- **Full SEO coverage** — canonical URLs, hreflang alternates, Open Graph and Twitter Card previews on every page, XML sitemap, a human-readable HTML sitemap, and `robots.txt`
- **Contact form** — sends enquiries by email in real time via [Resend](https://resend.com); no backend data storage
- **Accessible by design** — skip-to-content link, semantic landmarks, visible focus states, `aria-label`s on icon-only controls, reduced-motion support throughout all animations

## Technology Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org) (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React, React Icons |
| Email delivery | Resend |
| Image optimization | Next.js Image (AVIF/WebP), `sharp` |
| Fonts | Poppins & JetBrains Mono, self-hosted via `next/font/google` |
| Hosting target | Any Node.js host or static-friendly platform (Vercel-compatible) |

## Folder Structure

```
app/
  (en)/                   English routes — about-me, my-profile, projects, skills,
                          case-studies, articles, countries, contact, hire-me,
                          availability, recruiter-faq, privacy, site-map
  (fr)/fr/                French routes, mirroring the English route tree
  api/contact/            Contact form submission endpoint (Resend)
  sitemap.ts              XML sitemap generator
  robots.ts               robots.txt generator
  globals.css             Design tokens and base styles

components/               Page bodies and shared UI (Navbar, Footer, ProjectCard,
                          CTASection, SEOJsonLd, etc.)

lib/                      Typed content and data: projects, countries, articles,
                          skills, timeline, tech icons, dictionary (i18n strings)

public/
  images/                 Project screenshots, country banners, profile assets, icons

scripts/                  One-off image generation utilities
```

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Quality Checks

```bash
npm run lint      # ESLint + React Compiler checks
npx tsc --noEmit  # TypeScript type checking
npm run build     # Production build, static generation
```

All three run clean with zero errors.

## Deployment

The project is a standard Next.js application and deploys to any Next.js-compatible host. No database or persistent storage is required — the only external dependency is the Resend API for the contact form.

## Environment Variables

Copy `.env.example` to `.env.local` and set:

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | Yes | API key from [resend.com](https://resend.com), used to send contact form submissions by email |
| `CONTACT_TO_EMAIL` | No | Destination email for contact form submissions. Defaults to `hello@mogana.dev` |

## Performance

- Fonts are self-hosted at build time via `next/font/google` (no external Google Fonts request, automatic fallback-metric matching to minimize layout shift)
- Images are served through Next.js Image with automatic AVIF/WebP negotiation, responsive `sizes`, and lazy loading below the fold
- Source images are pre-compressed WebP/PNG, kept close to their maximum display size
- Route-level code splitting is automatic via the App Router; heavier client components (`framer-motion`-driven sections) are scoped with `"use client"` only where interactivity is required

## SEO

- Per-page metadata: title, description, canonical URL, and `hreflang` alternates for every route in both locales
- Open Graph and Twitter Card previews configured per page, using page-relevant imagery (project screenshots on case studies, country banners on country pages)
- JSON-LD structured data: `Organization`, `WebSite`, `BreadcrumbList`, `Article` (on articles), and `FAQPage` (on the Recruiter FAQ)
- `app/sitemap.ts` generates a complete XML sitemap covering every static page, case study, country page and article, in both locales
- A human-readable `/site-map` page indexes the same set of links for visitors

## Accessibility

- Skip-to-content link on every page
- Semantic landmarks (`main`, `nav`, headings in a single, consistent hierarchy per page)
- Visible focus rings on every interactive element
- `aria-label`s on icon-only buttons and links
- `prefers-reduced-motion` respected throughout all Framer Motion animations

## Contact

- Email: [hello@mogana.dev](mailto:hello@mogana.dev)
- Site: [mogana.dev](https://mogana.dev)

## License

All content, branding and source code in this repository are proprietary to Mogana.dev. Not licensed for reuse or redistribution.
