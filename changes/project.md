# ALLUVI — Project Briefing

> **What this file is.** A complete map of the ALLUVI website: every section,
> every technique, every animation, and **exactly which file to open** to edit
> anything. If you want to change something, find it here first, then open the
> file named in the "Edit here" line.
>
> Companion docs in this folder: `content-and-assets.md` (all copy + the image
> system), `recreation-rules.md` (build playbook), `changes.md` (change log).
> The original design analysis is in `action/reference-analysis.md`.

---

## 1. What the site is

ALLUVI is a single-page-app marketing + shop website for a premium research
peptide brand. It has a long animated home page, a shop page, product detail
pages, and a 404 page. Theme: **dark base + iridescent cyan→violet→magenta
accents**, glassmorphism, glow, smooth motion.

**Routes**
| URL | Page file |
|-----|-----------|
| `/` | `src/pages/Home.tsx` |
| `/shop` | `src/pages/Shop.tsx` |
| `/product/:slug` | `src/pages/Product.tsx` |
| anything else | `src/pages/NotFound.tsx` |

---

## 2. Tech stack

| Layer | Tool | Notes |
|-------|------|-------|
| Build | **Vite** | `vite.config.ts` |
| Framework | **React 18 + TypeScript** | |
| Styling | **Tailwind CSS** | `tailwind.config.js` + `src/index.css` |
| Routing | **React Router** | routes in `src/App.tsx` |
| UI animation | **Motion** (`motion/react`) | reveals, carousel, cursor, tilt |
| Smooth scroll | **Lenis** | `src/hooks/useLenis.ts` |
| Scroll ticker | **GSAP** | only drives Lenis's frame loop (`src/lib/gsap.ts`) |
| CSS motion | Tailwind keyframes | marquee, float, shimmer, etc. |

> **Note:** `three` / `@react-three/fiber` / `@react-three/drei` are still in
> `package.json` but **no longer used** — the WebGL hero orb was removed. They
> can be deleted from `package.json` safely.

### How to run
```
npm install        # first time only
npm run dev        # dev server — opens on localhost:5173+ (prints the URL)
npm run build      # production build → dist/
npm run preview    # preview the production build
```

---

## 3. Folder map

```
web_2/
  index.html              page <head>, title, fonts, meta
  tailwind.config.js       design tokens (colours, fonts, keyframes)
  public/favicon.svg
  src/
    main.tsx               app entry — Router + CartProvider
    App.tsx                routes + global layout (Header/Footer/Cursor…)
    index.css              CSS variables, base styles, utility classes
    lib/
      gsap.ts              GSAP + ScrollTrigger registration
      images.ts            image resolver (maps src/images/** to slots)
      products.ts          THE 8 PRODUCTS — names, prices, blurbs
      utils.ts             brand details, WhatsApp link helper, cn()
      cart.tsx             cart state (context + localStorage)
    hooks/
      useReducedMotion.ts  detects prefers-reduced-motion
      useLenis.ts          smooth scrolling
      useStickyHeader.ts   header transparent -> solid on scroll
      useTypewriter.ts     hero rotating headline
      useCountUp.ts        number count-up on scroll
    components/            shared UI (see §6)
    sections/              one file per home-page section (see §5)
    pages/                 one file per route (see §1)
    images/                real photos — one folder per area (see §8)
  changes/                 this file + content/rules/log docs
  action/                  original reference-site analysis
```

---

## 4. Design system — where the look is defined

**Colours & fonts → `tailwind.config.js`** (`theme.extend.colors` / `fontFamily`).
**CSS variables, base styles, reusable classes → `src/index.css`.**

### Colour tokens (Tailwind class names)
| Token | Value | Used for |
|-------|-------|----------|
| `bg` | `#0A0B0F` | main dark background |
| `bg-soft` | `#101218` | alternating darker sections |
| `surface` / `surface-2` | `#14161d` / `#1b1e27` | cards |
| `heading` | `#f4f6fb` | headings |
| `body` | `#c2c7d2` | body text |
| `dim` | `#838a9c` | muted text |
| `cyan` `violet` `magenta` | `#22d3ee` `#8b5cf6` `#ec4899` | accents / glow |
| `hairline` | white 10% | thin borders |

### Fonts
- **Space Grotesk** — headings, UI, buttons (`font-display`).
- **Lora** italic — accent/quote text (`font-serif`).
- Loaded in `index.html`.

### Reusable utility classes (defined in `src/index.css`)
| Class | Effect |
|-------|--------|
| `.shell` | centered max-width page container |
| `.text-iris` | iridescent gradient text |
| `.glass` | frosted glass card (blur + hairline border) |
| `.shine` | light-sweep on hover |
| `.rule-iris` | gradient hairline divider |
| `.ghost-label` | huge faint outlined background label |

To **recolour the whole site** → edit the colours in `tailwind.config.js`.
To **change a global effect** (glass, shine, glow) → edit `src/index.css`.

---

## 5. Home page — sections in order

The home page (`src/pages/Home.tsx`) stacks these 12 sections, then the footer.
Each lives in its own file in `src/sections/`.

| # | Section | File | Anchor id | Content |
|---|---------|------|-----------|---------|
| 1 | Hero | `sections/Hero.tsx` | `#home` | Typewriter headline, 2 buttons, featured product card |
| 2 | Features | `sections/Features.tsx` | — | 3 cards: Purity First / Reliable Consistency / Secure Packaging |
| 3 | Marquee | `sections/MarqueeSection.tsx` | — | Giant "Peptides" word + scrolling phrase ticker |
| 4 | Products | `sections/Products.tsx` | `#products` | Grid of all 8 products |
| 5 | About | `sections/About.tsx` | `#about` | Who We Are, `25+` count-up, check items |
| 6 | Why Us | `sections/WhyUs.tsx` | `#why-us` | 4 tilt cards + italic quote |
| 7 | Clarity | `sections/Clarity.tsx` | — | Brand statement + focus list |
| 8 | Standards | `sections/Standards.tsx` | — | 4 trust tiles |
| 9 | Evolution | `sections/Evolution.tsx` | — | Image + "Built for what research needs next" |
| 10 | Testimonials | `sections/Testimonials.tsx` | `#testimonials` | 3-review autoplay carousel |
| 11 | Contact | `sections/Contact.tsx` | `#contact` | Contact info cards + WhatsApp button |
| 12 | CTA | `sections/CTA.tsx` | — | Final "Get Instant Help" call to action |
| — | Footer | `components/Footer.tsx` | — | Newsletter, links, watermark |

**To reorder / remove a section:** edit the list in `src/pages/Home.tsx`.
**To edit a section's text or layout:** open its file above.

### Section detail (what's inside each)

- **Hero** — background image (`hero/home-hero-background-image`), eyebrow pill,
  rotating headline (the two strings are the `HEADLINES` array at the top of the
  file), serif sub-paragraph, `Shop Products` + `Discover ALLUVI` buttons, three
  check items, and the floating **featured product card** (currently
  `retatrutide-40mg` — change the slug in `getProduct('…')`).
- **Features** — section heading + the `E_1` image tile + 3 image cards. The
  card texts/icons/images are the `FEATURES` array at the top of the file.
- **Marquee** — outlined "RESEARCH" loop + solid "Peptides" word + the phrase
  ticker. Phrases are the `PHRASES` array; the big words are `GIANT` and the
  literal `Peptides` heading.
- **Products** — pulls all products from `src/lib/products.ts` and renders a
  `ProductCard` for each.
- **About** — copy is inline; the `25+` number is `useCountUp(25)`; images come
  from the `about/` folder.
- **Why Us** — the 4 cards are the `ITEMS` array; cards use `TiltCard`.
- **Clarity** — glass panel; focus list is the `FOCUS` array.
- **Standards** — 4 tiles, the `TILES` array.
- **Evolution** — two-column image + copy; image is `extra/E_3`.
- **Testimonials** — the 3 reviews are the `REVIEWS` array; autoplay interval is
  the `6500` ms in the `setInterval`.
- **Contact** — info rows are the `INFO` array; pulls phone/email/address from
  `BRAND` in `src/lib/utils.ts`.
- **CTA** — inline copy + 2 buttons.

---

## 6. Shared components (`src/components/`)

| File | What it is | Edit it to… |
|------|-----------|-------------|
| `Header.tsx` | Top nav, mobile menu, search overlay, cart button | change nav links (`NAV` array), logo |
| `Footer.tsx` | Footer columns, newsletter, watermark | change footer links / newsletter text |
| `Button.tsx` | Pill button (`primary` / `secondary` / `ghost`) | change button styling |
| `ProductCard.tsx` | Product card used in grids | change card layout / hover |
| `CartDrawer.tsx` | Slide-out cart, WhatsApp checkout | change cart drawer |
| `Cursor.tsx` | Custom glow cursor (desktop only) | change/disable the cursor |
| `ScrollProgress.tsx` | Iridescent top progress bar | — |
| `FloatWhatsApp.tsx` | Floating WhatsApp button (bottom-right) | change the WhatsApp button |
| `Img.tsx` | Smart image (photo / video / placeholder) | — |
| `Placeholder.tsx` | Grey fallback when an image is missing | — |
| `Reveal.tsx` | Fade-up-on-scroll wrapper | change the global reveal feel |
| `TiltCard.tsx` | 3D cursor-tilt card wrapper | change the tilt strength (`max`) |
| `Marquee.tsx` | Infinite scrolling strip | — |
| `Eyebrow.tsx` | Small pill label with pulsing dot | — |
| `SectionLabel.tsx` | Huge faint background word | — |
| `icons.tsx` | All SVG icons | add a new icon |

---

## 7. Animation & motion — what does what

| Effect | Technique | File / where |
|--------|-----------|--------------|
| Smooth inertia scrolling | Lenis | `hooks/useLenis.ts` |
| Fade-up reveal on scroll | Motion `whileInView` | `components/Reveal.tsx` (used everywhere) |
| Hero load-in stagger | Motion variants | `sections/Hero.tsx` (`fadeUp`) |
| Typewriter headline | custom hook | `hooks/useTypewriter.ts` |
| Count-up number (`25+`) | custom hook + IntersectionObserver | `hooks/useCountUp.ts` |
| Card cursor-tilt (3D) | Motion springs | `components/TiltCard.tsx` |
| Testimonials carousel | Motion `AnimatePresence` + autoplay | `sections/Testimonials.tsx` |
| Custom glow cursor | Motion springs | `components/Cursor.tsx` |
| Top progress bar | Motion `useScroll` | `components/ScrollProgress.tsx` |
| Sticky header fade | scroll listener | `hooks/useStickyHeader.ts` |
| Mobile menu / search / cart open | Motion `AnimatePresence` | `Header.tsx`, `CartDrawer.tsx` |
| Product details accordion | Motion height animation | `pages/Product.tsx` |
| Infinite marquee | CSS keyframes | `tailwind.config.js` (`marquee`) + `Marquee.tsx` |
| Floating / shimmer / pulse / spin | CSS keyframes | `tailwind.config.js` (`animation` block) |
| Shine sweep on hover | CSS | `.shine` in `src/index.css` |

**All motion respects `prefers-reduced-motion`** — `MotionConfig reducedMotion="user"`
in `App.tsx`, a global CSS block in `index.css`, and checks in the hooks.

**To change the reveal speed/feel everywhere** → `components/Reveal.tsx`.
**To change a CSS animation's speed** → the `animation` block in `tailwind.config.js`.

---

## 8. Images — how to add or replace a photo

Real photos live in `src/images/`, one folder per area. **You only touch this
folder** — no code changes needed. See `src/images/README.md` and
`content-and-assets.md` §6–§8 for the full slot list.

How it works: `src/lib/images.ts` auto-maps every file to a slot keyed by
`folder/filename` (without extension). `components/Img.tsx` shows the photo, or
a grey placeholder if the file is missing.

| Folder | Holds |
|--------|-------|
| `logo/` | `site-logo` — falls back to the "ALLUVI" wordmark |
| `hero/` | hero background + product image |
| `about/` | About section media (one can be a video) |
| `extra/` | `E_1` (Features tile), `E_2` (Clarity bg), `E_3` (Evolution) |
| `testimonials/` | reviewer avatars |
| `products/` | one image per product, named after its slug |
| `product-gallery/` | 4 images per product (`<slug>_1`…`_4`) |

**To swap an image:** drop a file into the right folder with the **exact slot
name** (any extension). Done.

---

## 9. Products — how to edit the catalogue

All 8 products are defined in **`src/lib/products.ts`**. Each has: `slug`,
`name`, `price` (AED string, or `null` = "enquire"), `category`, `tint`, `blurb`.

- **Change a price / name / description** → edit that product object.
- **Add a product** → add an object to the `products` array, then add its
  images to `src/images/products/<slug>.*` and
  `src/images/product-gallery/<slug>_1..4.*`.
- The `slug` is the single source of truth — it drives the URL and the image
  file names.

Product cards render via `components/ProductCard.tsx`. Priced products show
**Add to Cart**; unpriced ones show **Enquire on WhatsApp**.

---

## 10. Brand details & cart

- **Brand name, address, email, phone, WhatsApp number, social links** →
  `BRAND` object in `src/lib/utils.ts`. Change them in one place.
- **WhatsApp links** are built by `whatsappLink()` in the same file.
- **Cart** → `src/lib/cart.tsx` (state + localStorage). Checkout hands off to
  WhatsApp with the cart contents as a message. The drawer UI is
  `components/CartDrawer.tsx`.

---

## 11. Quick "where do I go to edit…" index

| I want to change… | Open this file |
|-------------------|----------------|
| Brand name / phone / email / WhatsApp | `src/lib/utils.ts` |
| A product's price / name / blurb | `src/lib/products.ts` |
| Site colours | `tailwind.config.js` |
| Global effects (glass, glow, shine) | `src/index.css` |
| Page `<title>` / meta / fonts | `index.html` |
| Header nav links / logo | `src/components/Header.tsx` |
| Footer links / newsletter | `src/components/Footer.tsx` |
| The order of home-page sections | `src/pages/Home.tsx` |
| Hero headline / buttons / featured product | `src/sections/Hero.tsx` |
| Any specific section's text/layout | `src/sections/<SectionName>.tsx` (see §5) |
| Shop page (filters, heading) | `src/pages/Shop.tsx` |
| Product detail page layout | `src/pages/Product.tsx` |
| Reveal animation feel | `src/components/Reveal.tsx` |
| A CSS animation's timing | `tailwind.config.js` (`animation` block) |
| Add / replace a photo | drop it into `src/images/<folder>/` |
| Routes (add a page) | `src/App.tsx` |

---

## 12. Deploy & version control

- Git repo: `https://github.com/mohamedsahadm786/web_3` (branch `main`).
- After any change: `npm run build` to confirm it compiles, then commit & push.
- `node_modules/` and `dist/` are git-ignored.

---

## 13. History of changes

See `changes/changes.md`. Key edits so far:
1. Initial full build (12 sections, 4 pages, cart, motion).
2. Removed the aurora glow blobs from the hero background.
3. Removed the WebGL 3D orb from the hero (and the `HeroScene` component).
