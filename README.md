# Mogana.dev — Full Stack Product Engineer

Next.js 16 (App Router, Turbopack) + TypeScript + Tailwind CSS + Framer Motion.

Public brand: **Mogana.dev**. No real legal name appears anywhere on this site.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Quality checks

```bash
npm run lint
npm run build
npm audit
```

All three currently pass clean (0 errors/warnings, 0 vulnerabilities, 31 pages statically generated).

## Structure

- `app/layout.tsx` — root layout: Poppins font, Organization/WebSite JSON-LD, skip-to-content link
- `app/page.tsx` — homepage (Hero, Stats, Featured Projects, Why Mogana.dev, final CTA)
- `app/about-me/` — career story (mission, vision, journey, future objectives) — no real name
- `app/my-profile/` — LinkedIn-style profile: header, summary, experience timeline, education, skills
- `app/projects/` — full project catalog grouped by category (18 projects, 5 categories)
- `app/skills/` — bento grid of skills by domain
- `app/case-studies/`, `app/case-studies/[slug]/` — deep-dive case studies for the 5 flagship projects
- `app/countries/`, `app/countries/[country]/` — 12 country-targeted SEO landing pages
- `app/contact/` — enhanced contact form (interview/call/job/project/partnership request types)
- `app/privacy/`, `app/recruiter-faq/` — footer utility pages
- `app/sitemap.ts`, `app/robots.ts` — full sitemap (all pages, case studies, country pages) + robots
- `app/globals.css` — design tokens (navy/saffron/orange/violet), CSS-only 3D illusion utilities

## `lib/` data files

- `projects.ts` — all 18 projects, categorized, with the 5 flagship projects carrying full case-study fields (problem/solution/approach/outcome/lessons/next version)
- `skills.ts` — skill groups (Frontend, Backend, SaaS, AI, E-Commerce, SEO, Business)
- `credentials.ts` — education & certifications (used on My Profile)
- `timeline.ts` — career timeline (broad chapters — hospitality → logistics → software)
- `countries.ts` — the 12 target countries
- `contact.ts` — email/WhatsApp constants + link builders
- `social.ts` — LinkedIn/Facebook/YouTube links

## `components/` — reusable library

`SectionHeader`, `PageHero`, `ProjectCard`, `TechBadge`, `StatsGrid`, `BentoGrid`, `Timeline`, `CountryCard`, `ContactForm`, `CTASection`, `SEOJsonLd`, `AnimatedBackground`, `DownloadCVButton`, plus `Navbar`, `Footer`, `Hero`, `WhyMogana`, `FeaturedProjects`, `CaseStudyDetail`, `ContactBody`, `MagneticButton`, `SectionDivider`, `FloatingObjects`, `WhatsAppFloat`, `SocialRail`, `GlobalWidgets`.

## Design system

- Background: deep navy (`#0A0E27`) — Tailwind token `ink`
- Text: white / near-white (`mist`)
- Primary buttons: saffron → orange gradient (`.btn-primary` utility class in `globals.css`)
- Accent/animation color: violet (`#8B5CF6`)
- Font: Poppins everywhere (display + body), JetBrains Mono for technical/code accents
- Note: internal Tailwind tokens `cyan` and `amber` are intentionally mapped to the violet/saffron hex values (rather than removed) so every existing `text-cyan`/`bg-amber` class across the codebase renders in the new palette automatically — this was a deliberate shortcut to avoid a full file-by-file class rename across dozens of components.

## Phase 3 — Full bilingual rebuild + build fixes (this update)

**Architecture, rebuilt from scratch to avoid duplicate routes:**
- `app/(en)/...` — English pages, no `/en` prefix (route groups don't affect the URL)
- `app/(fr)/fr/...` — French pages, `/fr` prefix
- `app/(en)/layout.tsx` and `app/(fr)/layout.tsx` are two independent **root layouts** (Next.js's "multiple root layouts" pattern) — each sets its own static `<html lang="en">` / `<html lang="fr">`, with no middleware and no dynamic rendering, so every page still prerenders at build time
- `app/api/contact/route.ts`, `app/sitemap.ts`, `app/robots.ts` sit outside both route groups since they don't render HTML and don't need a locale
- **Verified with a real build**: 63 pages generated, zero duplicate routes, zero missing exports — see test results above

**Full translation coverage** — everything listed in your brief is translated, not just labels:
- `lib/dictionary.ts` — nav, hero, footer, forms (including validation/success/error messages), all 9 static pages, FAQ, JSON-LD-facing copy
- `lib/projects.ts` (`projectTranslationsFr`) — every one of the 18 projects has translated overview/features/role, and the 5 case-study projects have translated problem/solution/approach/challenges/architecture/outcome/lessons/future improvements
- `lib/skills.ts`, `lib/credentials.ts`, `lib/timeline.ts`, `lib/countries.ts` — French counterparts with a `getXxx(locale)` getter each
- Technology names (Next.js, React, Supabase, etc.) are intentionally left untranslated, as instructed
- SEO: every page has locale-specific title/description/OG/Twitter card metadata, `hreflang` alternates (en/fr/x-default), and the sitemap lists both language versions of every URL including all 5 case studies and all 12 countries

**Language switcher**: `components/LangSwitcher.tsx` — detects the current path via `usePathname()` and builds the equivalent URL in the other language (works correctly on dynamic pages too, since slugs are shared between `/case-studies/x` and `/fr/case-studies/x`).

## What changed from the previous version

- **Previously-removed projects are back**, per your explicit instruction: GPWCCU, Ram Pottery (now two projects: E-Commerce storefront + Hub/ERP), KS Accounting are all back in the catalog, alongside every new project you listed.
- The bilingual system from an earlier revision (`/insights` article hub, old dictionary shape) was fully removed and rebuilt against the current project structure — there's no leftover dead code from that version in this delivery.

## CV

`public/cv/mogana-dev-cv.pdf` is a **placeholder** (generated with reportlab, not a real CV) — I don't have your actual CV content, only the category summary in your message. Replace this file with your real CV under the exact same filename and every "Download CV" button across the site (navbar, hero, my-profile, contact, mobile menu) will pick it up automatically, no code changes needed.

## Profile photo

`public/hero-banner- profile-image.png` — an **abstract placeholder** (not a real photo), used on `/my-profile`. Replace it with your real photo under the same filename.

## Countries page — a note on "visa sponsorship"

Per your SEO keyword list, country pages mention "visa sponsorship discussions where applicable" rather than promising sponsorship outright — this keeps the copy honest (you're not the one offering sponsorship, an employer would be) while still targeting the search intent recruiters use.

## Phase 2 — Final polish (this update)

- **Premium placeholder images**: `scripts/gen_placeholders.py` generated 6 branded product placeholders (`public/placeholders/`) — enterprise SaaS dashboard, analytics, marketplace listings, AI dashboard, e-commerce storefront, mobile app. Every project card and case study now shows a real image instead of an empty state, mapped by category in `lib/projects.ts` (`image` and `gallery` fields).
- **Modern CV**: `scripts/gen_cv.py` builds a proper two-column European-style CV (sidebar with contact/languages/skills, main column with summary/experience/education) from the same data already on the site (`lib/timeline.ts`, `lib/skills.ts`, `lib/credentials.ts`). It's still placeholder content — no real name — but the layout is final; replace `public/cv/mogana-dev-cv.pdf` directly once your real CV is ready, or regenerate the placeholder with `python3 scripts/gen_cv.py`.
- **Profile photo**: regenerated as an abstract, premium "professional silhouette" badge (not a fake photo of a real person) — see the note below on why I didn't generate a photorealistic headshot.
- **Project statuses**: replaced "Concept" everywhere with `Live` / `In Progress` / `Private Demo` / `Case Study Available`, mapped honestly per project in `lib/projects.ts`.
- **Case studies expanded**: every flagship case study (`CaseStudyDetail.tsx`) now includes a hero image, a gallery, Problem/Solution/Approach, **Challenges**, **Architecture**, Features, Outcome, **Future Improvements**, Lessons Learned, and a Live Demo / Repository links row (showing "Private Repository" instead of hiding the section, per your instruction).
- **Real contact form**: `app/api/contact/route.ts` — a Next.js Route Handler using [Resend](https://resend.com) to actually send email. See "Contact form setup" below — **this requires your own Resend API key to actually send mail**; I don't have one and couldn't test real delivery in this environment. Without a key configured, the form fails gracefully with a clear message pointing to WhatsApp/email instead of pretending to succeed.
- **New recruiter pages**: `/hire-me`, `/availability` (in addition to the existing `/recruiter-faq`), linked from a new "For Recruiters" footer column.

## Contact form setup (required for real email sending)

1. Create a free account at [resend.com](https://resend.com) and get an API key.
2. Copy `.env.example` to `.env.local` and set `RESEND_API_KEY` (and optionally `CONTACT_TO_EMAIL` if different from `hello@mogana.dev`).
3. The `from` address in `app/api/contact/route.ts` currently uses Resend's shared sandbox sender (`onboarding@resend.dev`) so it works immediately without domain setup — for production, verify your own domain in Resend and update the `from` address for better deliverability.
4. Redeploy. Until this is configured, the form shows a clear "email service isn't configured yet" message and points people to WhatsApp/email instead — it never silently fails.

## A note on the profile photo

I generated an abstract, premium silhouette-badge placeholder rather than a fake photorealistic "business portrait" of a person — creating a realistic-looking photo of a fictional person to stand in for you isn't something I'll do, since it would look like a real photo of someone who doesn't exist. The abstract badge signals "photo coming soon" clearly while still looking premium. Drop your real photo into `public/hero-banner- profile-image.png` (same filename) whenever it's ready.


## Phase 4 — Final premium rework (this update)

**Routing fix**: `/en` and `/en/*` now 308-redirect to the equivalent bare English path via `proxy.ts` (Next.js 16's replacement for `middleware.ts` — migrated to the current convention, not the deprecated one). Verified: `/en` → `/`, `/en/projects` → `/projects`, never a 404. A full repo grep confirmed no hardcoded `/en` exists anywhere else (canonical URLs, hreflang, sitemap, nav, footer were already using the locale-aware `withLocale()` helper correctly).

**Real images wired in.** You provided ~74 real images plus an already-organized `public/images/` tree (brand, banners, profile, projects, countries, skills, qr, seo) — I copied that structure into the build and wired every path in: real profile photo, real project screenshots (all 18, single 16:9 image, `object-contain`, no more 3-image galleries), real country banners, real skill icons (23, in white tiles), real logo (navbar + footer + favicon + JSON-LD), real OG image. The old AI-generated placeholder set is gone. The raw `all-images` folder was not shipped in the final ZIP.

**Color system**: rebuilt around the European blue/yellow palette you specified (`#003399`, `#FFCC00`, `#2563EB`, `#7C3AED`, `#F59E0B`) with the dark-blue background system (`#06101F` / `#0A1628`). Yellow/orange reserved for high-value CTAs only, per your instruction not to over-use it.

**Animation direction**: removed `FloatingObjects.tsx`, the orbit rings, tilt-panel hero mockup, glow-line dividers, and looping decorative motion entirely. Backgrounds are now calm and static; scroll content still uses short, once-only fade/translate reveals (already respecting `prefers-reduced-motion` from earlier phases).

**Project image rule**: single image per project, `object-contain`, framed in a small browser-chrome-style card on case study pages — no cropping, no galleries.

**Skill icons**: real icons in white `.icon-tile` tiles (64×64, consistent padding/shadow), technology name beneath, on the Skills page.

**Documents**: CV and motivation letter are now a single dropdown (`DownloadCVButton`, despite the name) offering all 4 documents — CV EN/FR, motivation letter EN/FR — from `public/documents/`, available in the navbar, hero, My Profile, Hire Me, Contact, and the footer's recruiter column. Still placeholder content (I don't have your real CV/letter text) but the selector and file structure are final.

**AI-assistance wording removed.** Searched and rewrote every instance of "AI-assisted development/workflows" across the dictionary, credentials, timeline, and page metadata (EN+FR) — replaced with "AI integration," "AI automation," or removed. Kept legitimate mentions (OpenAI/Claude API integration, MorisAI as a project).

**Articles system** (new): 8 original articles in both languages (not mechanically translated — the French versions are separately written), covering the exact 8 topics you listed. Homepage carousel (native scroll-snap, prev/next buttons, touch swipe works natively, keyboard-focusable, no heavy dependency) plus `/articles` and `/articles/[slug]` in both locales, full metadata + breadcrumb JSON-LD, all added to the sitemap. Poster images are abstract editorial graphics (not fake photorealistic people, per your instruction).

**Featured/case-study set updated** to your specified 5: BlueWave Accounting, GPWCCU, Ram Pottery Hub, MyMauritiusTrip, MorisAI — wrote full new case studies (problem/solution/approach/challenges/architecture/outcome/lessons/future improvements) for Ram Pottery Hub and MorisAI in both languages, and demoted Ram Pottery E-Commerce and Mobiz.mu back to catalog-only entries.

**Navigation restructured**: primary nav is now Home/About/Profile/Projects/Skills/Articles/Contact; Case Studies, Countries, Hire Me, Availability, Recruiter FAQ and Privacy live in the footer, exactly as specified.

**Project statuses**: confirmed no "Concept" anywhere — only Live/In Progress/Private Demo/Case Study Available (and accurate French equivalents), unchanged from the prior phase.

### Test results
- `npm run lint` — 0 errors/warnings
- `npm run build` — **81 pages**, 0 errors
- `npm audit` — 0 vulnerabilities
- Smoke-tested: every core page × 2 languages, all 5 case studies × 2 languages, all 8 articles × 2 languages, all 12 countries × 2 languages, all 4 documents, key images, the contact API, `/en` + `/en/projects` redirect behavior — **all passing**

### Known placeholders still needing your real content
- `public/documents/cv/mogana-dev-cv-{en,fr}.pdf` and the two motivation letters — layout is final, content is placeholder
- Article poster images — abstract graphics, not real screenshots
- Project screenshots, profile photo, banners, logo, skill icons, country images — **these are now your real provided assets**, not placeholders

### Environment variables required
- `RESEND_API_KEY` — required for the contact form to actually send email (see `.env.example`)
- `CONTACT_TO_EMAIL` — optional, defaults to `hello@mogana.dev`

### A note on Lighthouse scores
I can't run an actual Lighthouse audit in this sandboxed environment (no Chrome/DevTools Protocol access), so I won't report fabricated numbers. What's true and verifiable: every route is statically generated (`○`/`●` in the build output, zero `ƒ` dynamic pages except the contact API and the `/en` proxy), images use `next/image` throughout with explicit `sizes`, fonts load via `preconnect` + `display=swap`, and there's no heavy animation or carousel library — all the structural levers that drive a good Lighthouse score are in place, but the actual number needs to be measured post-deployment.
