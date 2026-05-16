# Changes Log

## Build 1 — ALLUVI site scaffold + full home build

**Stack:** Vite + React 18 + TypeScript · Tailwind CSS · React Router ·
Motion · GSAP + ScrollTrigger · Lenis · react-three-fiber + three + drei
(hero WebGL only).

**Design direction:** dark base (`#0A0B0F`) + iridescent cyan→violet→magenta
accents, glow/bloom, shimmer sweeps, glassmorphism — per `action/reference-analysis.md` §0.5.

### Added
- Project config: `package.json`, `vite.config.ts`, `tsconfig.json`,
  `tailwind.config.js` (design tokens + keyframes), `postcss.config.js`,
  `index.html` (Space Grotesk + Lora), `public/favicon.svg`.
- `src/index.css` — tokens, base, glass/shine/iris utilities, reduced-motion.
- `src/lib/` — `gsap.ts`, `images.ts` (resolver), `products.ts` (8 products),
  `utils.ts` (brand + WhatsApp helpers), `cart.tsx` (cart context).
- `src/hooks/` — `useReducedMotion`, `useLenis`, `useStickyHeader`,
  `useTypewriter`, `useCountUp`.
- `src/components/` — `Img`, `Placeholder`, `Reveal`, `Button`, `Eyebrow`,
  `SectionLabel`, `Marquee`, `TiltCard`, `Cursor`, `ScrollProgress`,
  `FloatWhatsApp`, `Header`, `Footer`, `CartDrawer`, `ProductCard`,
  `HeroScene` (WebGL), `icons`.
- `src/sections/` — `Hero`, `Features`, `MarqueeSection`, `Products`,
  `About`, `WhyUs`, `Clarity`, `Standards`, `Evolution`, `Testimonials`,
  `Contact`, `CTA`.
- `src/pages/` — `Home`, `Shop`, `Product`, `NotFound`.

### Content
All copy + products sourced from `changes/content-and-assets.md`. Brand
"Luma" → **ALLUVI** throughout. Currency AED. WhatsApp ordering wired.

### Notes / open
- Routes: `/`, `/shop`, `/product/:slug`. Optional `/about` `/contact`
  `/faq` pages not built (home has anchor sections instead).
- WhatsApp number / email kept from the content file per brief.
