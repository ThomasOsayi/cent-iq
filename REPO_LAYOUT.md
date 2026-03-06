# CentIQ — Repository Layout & Implementation Summary

## File structure (tree)

```
cent-iq/
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/
│   │   ├── for-institutions/
│   │   │   └── page.tsx          # For Institutions landing page
│   │   ├── for-schools/
│   │   │   └── page.tsx          # For Schools landing page
│   │   ├── foundation/
│   │   │   └── page.tsx          # CentIQ Foundation landing page
│   │   ├── favicon.ico
│   │   ├── globals.css           # Design tokens, base & utility styles
│   │   ├── layout.tsx            # Root layout (fonts, PromoBanner, Navbar)
│   │   └── page.tsx              # Home page (full marketing site)
│   └── components/
│       ├── BottomCTA.tsx        # Reusable CTA section (title, description, link)
│       ├── DemoForm.tsx         # Demo request form (name, email, org, submit)
│       ├── FAQ.tsx              # Accordion FAQ component
│       ├── Footer.tsx           # Footer with links (exported, minimal usage)
│       ├── Navbar.tsx           # Sticky nav with dropdown & mobile menu
│       ├── PhoneMockup.tsx      # Hero phone mockups (main + tilted)
│       └── PromoBanner.tsx     # Top promo strip
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

*Excluded from tree: `node_modules/`, `.next/`, `.git/`*

---

## Tech stack

| Layer        | Choice                          |
|-------------|----------------------------------|
| Framework   | Next.js 16 (App Router)          |
| React       | 19.x                             |
| Styling     | Tailwind CSS v4 + PostCSS       |
| Fonts       | DM Serif Display, DM Sans (Google Fonts) |
| Icons       | lucide-react                     |
| Utils       | clsx                             |
| Language    | TypeScript 5                     |

---

## What’s implemented

### Root layout (`src/app/layout.tsx`)

- **Metadata**: Title and description for CentIQ (financial literacy).
- **Fonts**: `DM_Serif_Display` and `DM_Sans` with CSS variables (`--font-dm-serif`, `--font-dm-sans`).
- **Global chrome**: Renders `PromoBanner` at top, then `Navbar`, then `<main>{children}</main>`.

### Global styles (`src/app/globals.css`)

- **Design tokens** (Tailwind `@theme`): brand green, cream/warm neutrals, text colors, borders, orange accent, serif/sans fonts, radius (pill, card, input), shadows (card, card-hover, phone, btn), `fade-up` animation.
- **Base**: smooth scroll, body font/color/background, overflow-x hidden.
- **Utilities**: `.section-padding`, `.section-inner`, `.section-label`.
- **Scrollbar**: `.scrollbar-hide` for carousels.

### Home page (`src/app/page.tsx`)

Single long-form marketing page with these sections (in order):

1. **Hero** — Badge (“400+ Standards-Aligned Lessons”), headline, subcopy, “Book a Demo” / “Watch Video”, star rating line, `PhoneMockup` (main + tilted).
2. **Press bar** — Logos/names: Forbes, EdSurge, TechCrunch, Education Week, Fast Company (visual only).
3. **Intro** — “Your home base for financial literacy”, “See how students learn”, short value prop.
4. **Carousel** — Horizontal scroll of 5 gradient cards: Short-form Videos, Interactive Lessons, Ask Questions, Test Your Knowledge, Financial Fitness (snap scroll, hover lift).
5. **For Schools** — Two-column: Teacher Dashboard mockup (student list with scores) + copy (400+ lessons, checklist, “Learn More” → `/for-schools`).
6. **For Institutions** — Two-column: copy (CRA, rewards, branded experiences) + Community Impact mockup (2,400+ students, 95%, 48 partners, CRA); “Explore Partnerships” → `/for-institutions`.
7. **Features grid** — 6 cards: Teacher Dashboard, Class Rankings, Curriculum Aligned, Group Activities, Easy Integration, Short-Form Videos (icons + short descriptions).
8. **Pilot results** — Green full-bleed section with Bishop Mora Salesian stats: 95% easy to understand, 89% helped with class, 73% fun/engaging, 53% used outside class.
9. **Foundation** — Two-column: placeholder “community photo” + copy (CentIQ Foundation, free for underserved); “Learn About Our Foundation” → `/foundation`.
10. **Testimonials** — 4.9 badge, 3 quote cards (Maria S., Mr. Rodriguez, James T.).
11. **Demo form** — Inline form (name, email, organization, role select, “How can we help?” textarea, “Request a Demo” button); `id="demo"` for anchor links.
12. **FAQ** — Rendered via `<FAQ items={...} />` (4 questions: grade levels, state alignment, free for underserved, onboarding).
13. **Bottom CTA** — Green section: “Ready to bring financial literacy…”, “Book a Demo” / “Contact Us”.
14. **Footer** — CentIQ branding, Product/Resources/Legal columns (links are placeholders), copyright, josh@centiqapp.com.

Data (features, stats, testimonials, FAQs) is defined in `page.tsx` and passed into sections/components as needed.

### Components

| Component       | Role |
|----------------|------|
| **PromoBanner** | Top strip: “Now available: 400+ standards-aligned…”, “Learn more” link. |
| **Navbar**      | Sticky; logo → CentIQ; desktop: Product dropdown (For Schools, For Institutions, Foundation), direct links, Student Login, Book a Demo; mobile: hamburger, same links + CTAs. Client component (`"use client"`). |
| **PhoneMockup** | Main phone: “My Classes”, current lesson (Saving & Budgeting, progress bar), Quick Actions chips, streak card. Second phone (md+): Class Rankings, Achievements, Progress Report, Ask Questions. |
| **FAQ**         | Accordion; accepts `items` (question/answer). Used on home with 4 CentIQ-specific FAQs. Client component. |
| **Footer**      | Simple footer (Cent-IQ, For Schools/Institutions/Foundation, copyright). Exported but home page uses its own inline footer. |
| **DemoForm**    | Form with name, email, organization, submit; shows thank-you state. Styled for generic zinc/foreground. Not used on home (home uses inline form). |
| **BottomCTA**   | Configurable title, description, CTA text/href. Used on sub-pages. |

### Sub-pages (routes)

- **`/for-schools`** — Title/description “For Schools | Cent-IQ”. Heading “For Schools”, short tagline, `<BottomCTA />`.
- **`/for-institutions`** — “For Institutions | Cent-IQ”. Heading “For Institutions”, tagline, `<BottomCTA />`.
- **`/foundation`** — “Foundation | Cent-IQ”. Heading “Foundation”, tagline, `<BottomCTA />`.

These three are minimal placeholders; main content lives on the home page sections and links.

### Public assets

- Default Next/Vercel SVGs: `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`.

### Config

- **next.config.ts** — Default Next config (no custom options).
- **tsconfig.json** — Path alias `@/*` → `./src/*`, strict TypeScript, Next plugin.
- **postcss.config.mjs** — Tailwind/PostCSS setup for Tailwind v4.

---

## Summary

CentIQ is a **Next.js 16 marketing site** for a financial literacy product (schools, institutions, foundation). The **home page** is a full one-pager with hero, social proof, product sections, pilot stats, testimonials, demo form, FAQ, and footer. **Navbar** (with Product dropdown and mobile menu) and **PromoBanner** are global. **Design system** is in `globals.css` (green/cream/orange, DM fonts, shadows, section utilities). **Three sub-routes** (`/for-schools`, `/for-institutions`, `/foundation`) exist as thin landing pages with a shared **BottomCTA**. Reusable pieces include **FAQ**, **PhoneMockup**, **DemoForm**, and **Footer**; the home page uses an inline demo form and its own footer for the full CentIQ layout.
