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
│   │   ├── globals.css           # Design tokens, base & utility styles, animations
│   │   ├── layout.tsx            # Root layout (fonts, PromoBanner, FloatingNav)
│   │   └── page.tsx              # Home — composes all section components
│   └── components/
│       ├── BottomCTA.tsx         # Green CTA section (Book a Demo / Contact Us)
│       ├── Carousel.tsx          # Horizontal gradient cards (Short-form Videos, etc.)
│       ├── DemoForm.tsx          # Book-a-demo section with form (id="demo")
│       ├── FAQ.tsx               # Accordion FAQ (items prop from page)
│       ├── FeaturesGrid.tsx     # 6 feature cards (Teacher Dashboard, etc.)
│       ├── FloatingNav.tsx       # Fixed floating nav with scroll position, dropdown, mobile
│       ├── Footer.tsx            # Site footer (Product, Resources, Legal, copyright)
│       ├── ForInstitutions.tsx  # Institutions section + Community Impact mockup
│       ├── ForSchools.tsx       # Schools section + Teacher Dashboard mockup
│       ├── Foundation.tsx       # CentIQ Foundation section + placeholder image
│       ├── Hero.tsx              # Full-bleed hero (image, floating cards, CTA)
│       ├── IntroSection.tsx      # "See how students learn" intro block
│       ├── PhoneMockup.tsx      # Phone device mockup (not currently used on home)
│       ├── PilotResults.tsx     # Bishop Mora pilot stats (95%, 89%, 73%, 53%)
│       ├── PromoBanner.tsx      # Top promo strip (400+ lessons)
│       ├── SocialProofBar.tsx   # Star rating + press names (Forbes, EdSurge, etc.)
│       └── Testimonials.tsx    # Three quote cards (Maria S., Mr. Rodriguez, James T.)
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── REPO_LAYOUT.md
└── tsconfig.json
```

*Excluded from tree: `node_modules/`, `.next/`, `.git/`*

---

## Tech stack

| Layer      | Choice                          |
|-----------|----------------------------------|
| Framework | Next.js 16 (App Router)          |
| React     | 19.x                             |
| Styling   | Tailwind CSS v4 + PostCSS       |
| Fonts     | DM Serif Display, DM Sans (Google Fonts) |
| Icons     | lucide-react                     |
| Utils     | clsx                             |
| Language  | TypeScript 5                     |

---

## What’s implemented

### Root layout (`src/app/layout.tsx`)

- **Metadata**: Title and description for CentIQ (financial literacy).
- **Fonts**: `DM_Serif_Display` and `DM_Sans` with CSS variables (`--font-dm-serif`, `--font-dm-sans`).
- **Chrome**: Renders `PromoBanner` at top, then `FloatingNav`, then `<main>{children}</main>`.

### Global styles (`src/app/globals.css`)

- **Design tokens** (`@theme`): brand green, cream/warm neutrals, text colors, borders, orange accent, serif/sans fonts, radius (pill, card, input), shadows (card, card-hover, phone, btn, **nav**, **float**), keyframes: **fade-up**, **card-up**, **float-in**, **bob**, **fill-bar**, **swoosh-in**.
- **Base**: smooth scroll, body font/color/background, overflow-x hidden.
- **Utilities**: `.section-padding`, `.section-inner`, `.section-label`, `.scrollbar-hide`.
- **Hero helpers**: `.float-bob-1/2/3` (float-in + bob), `.progress-fill` (fill-bar), `.hero-swoosh` (swoosh-in).

### Home page (`src/app/page.tsx`)

Composes the full marketing flow from section components. Defines `faqs` and passes them into `FAQ`. Section order:

1. **Hero** — `Hero`
2. **Social proof** — `SocialProofBar`
3. **Intro** — `IntroSection`
4. **Carousel** — `Carousel`
5. **For Schools** — `ForSchools`
6. **For Institutions** — `ForInstitutions`
7. **Features** — `FeaturesGrid`
8. **Pilot results** — `PilotResults`
9. **Foundation** — `Foundation`
10. **Testimonials** — `Testimonials`
11. **Demo form** — `DemoForm`
12. **FAQ** — `FAQ` (items from page)
13. **Bottom CTA** — `BottomCTA`
14. **Footer** — `Footer`

### Layout / global components

| Component       | Role |
|----------------|------|
| **PromoBanner** | Top strip: “Now available: 400+ standards-aligned financial literacy lessons”, “Learn more” link. |
| **FloatingNav** | Fixed nav; position animates by scroll (below promo when scrolled). CentIQ logo; desktop: Product dropdown (For Schools, For Institutions, Foundation), direct links, Student Login, Book a Demo; mobile: hamburger + same links/CTAs. Rounded card style with `shadow-nav`. Client component. |

### Section components (home page)

| Component          | Role |
|--------------------|------|
| **Hero**           | Full-bleed hero with Unsplash image, gradient overlay, green swoosh (animated). Floating cards (Current Lesson + progress bar, 95% Class Average, 7 Day Streak) with float-in + bob. Bottom content card: headline, subcopy, “Start learning today” CTA. |
| **SocialProofBar** | Border-bottom bar: 5-star rating + “95% of students found it easy to understand”; divider; press names (Forbes, EdSurge, TechCrunch, Education Week). |
| **IntroSection**    | Centered block: section label, “See how students learn”, short value prop. |
| **Carousel**       | Horizontal scroll of 5 gradient cards (Short-form Videos, Interactive Lessons, Ask Questions, Test Your Knowledge, Financial Fitness); snap scroll, hover lift. |
| **ForSchools**     | Two-column: Teacher Dashboard mockup (student list with scores) + “For Schools” copy, checklist, “Learn More” → `/for-schools`. |
| **ForInstitutions**| Two-column: copy (CRA, rewards, branded experiences) + Community Impact mockup (2,400+ students, 95%, 48 partners, CRA); “Explore Partnerships” → `/for-institutions`. |
| **FeaturesGrid**   | 6 cards: Teacher Dashboard, Class Rankings, Curriculum Aligned, Group Activities, Easy Integration, Short-Form Videos (icons + descriptions). |
| **PilotResults**   | Green full-bleed section: “Pilot Results”, Bishop Mora Salesian, 4 stats (95%, 89%, 73%, 53%). |
| **Foundation**      | Two-column: placeholder “community photo” + CentIQ Foundation copy, checklist, “Learn About Our Foundation” → `/foundation`. |
| **Testimonials**   | 4.9 badge, 3 quote cards (Maria S., Mr. Rodriguez, James T.). |
| **DemoForm**       | Section with `id="demo"`: “Book a demo”, copy, form (name, email, organization, role select, “How can we help?” textarea, “Request a Demo” button). CentIQ-styled inputs. |
| **FAQ**            | Accordion; accepts `items` (question/answer). Home passes 4 CentIQ FAQs. Client component. |
| **BottomCTA**      | Green section: “Ready to bring financial literacy to your community?”, “Book a Demo” (#demo), “Contact Us”. |
| **Footer**         | CentIQ branding, Product / Resources / Legal columns (placeholder links), copyright, josh@centiqapp.com. |

### Other components

| Component      | Role |
|----------------|------|
| **PhoneMockup**| Phone device UI (My Classes, current lesson, quick actions, streak). Present in repo but not imported on home (Hero uses its own floating cards). |

### Sub-pages (routes)

- **`/for-schools`** — Metadata “For Schools | Cent-IQ”. Heading “For Schools”, short tagline, `<BottomCTA />`. *(Uses named import `{ BottomCTA }`; component is default export.)*
- **`/for-institutions`** — “For Institutions | Cent-IQ”. Heading “For Institutions”, tagline, `<BottomCTA />`.
- **`/foundation`** — “Foundation | Cent-IQ”. Heading “Foundation”, tagline, `<BottomCTA />`.

These are minimal placeholders; primary content is in the home page sections.

### Public assets

- Default Next/Vercel SVGs: `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`.

### Config

- **next.config.ts** — Default Next config.
- **tsconfig.json** — Path alias `@/*` → `./src/*`, strict TypeScript, Next plugin.
- **postcss.config.mjs** — Tailwind/PostCSS for Tailwind v4.

---

## Summary

CentIQ is a **Next.js 16 marketing site** for a financial literacy product (schools, institutions, foundation). The **home page** is built from **section components**: Hero (full-bleed image + floating cards), SocialProofBar, IntroSection, Carousel, ForSchools, ForInstitutions, FeaturesGrid, PilotResults, Foundation, Testimonials, DemoForm, FAQ, BottomCTA, and Footer. **FloatingNav** is a scroll-aware fixed nav (rounded card, below PromoBanner when scrolled). **PromoBanner** sits at the very top. The **design system** lives in `globals.css` (green/cream/orange, DM fonts, shadows, section utilities, hero animations). **Three routes** (`/for-schools`, `/for-institutions`, `/foundation`) are thin landing pages that use **BottomCTA**. **PhoneMockup** exists in `components` but is not used on the home page.
