# Action File — Reference Site Analysis & Build Spec

> **Read this first whenever you have a doubt while building.**
>
> This file is the behavioural spec for recreating the **design, layout,
> animation and motion feel** of the reference site, while filling it with
> **our own brand content** (Luma UAE — from `changes/content-and-assets.md`).
>
> - Reference site analysed: `https://luma-peptides.com/home/`
> - Our content + image system: `changes/content-and-assets.md`
> - Recreation playbook + rules: `changes/recreation-rules.md`
> - Image folders ready to wire: `src/images/` (+ `src/images/README.md`)
>
> **Golden rule:** copy the reference's *experience* — structure, theme, fonts,
> motion. Use **our own** copy, products, images, brand details. Never paste the
> reference site's wording into our build.

---

## 0. Brand: ALLUVI — and the reference site

Our brand is **ALLUVI**. The reference site (`luma-peptides.com`) is only a
**design/motion source** — never a content source.

| | Reference site (design source) | Our build = **ALLUVI** |
|---|---|---|
| Name | Luma Research Peptides | **ALLUVI** |
| Email | — | **sales@lumauae.com** (kept per instruction) |
| Currency | Thai Baht (฿) | **AED (د.إ)** |
| Order channel | WooCommerce cart/checkout | **WhatsApp ordering** + cart |
| Tone | Clinical, "research use only", legal-heavy | Premium, vibrant, futuristic, customer-focused |

We take the **look and motion** from the reference and the **words, products,
prices, brand details** from `changes/content-and-assets.md` (see §10 mapping).

> **CRITICAL — brand string replacement.** `content-and-assets.md` was written
> for the old name "Luma". **Every place its copy says "Luma" as OUR brand,
> render it as "ALLUVI"** — e.g. `Discover Luma` → `Discover ALLUVI`,
> `Why Choose Luma` → `Why Choose ALLUVI`, `choose Luma` → `choose ALLUVI`,
> footer watermark `Luma` → `ALLUVI`, `© {year} Luma` → `© {year} ALLUVI`,
> browser title / meta. Contact details (address, phone, email
> `sales@lumauae.com`, WhatsApp) stay exactly as in §1 of that file.

---

## 0.5 — ALLUVI design direction (confirmed by the user)

The reference is deliberately near-monochrome. **ALLUVI deliberately departs
from that.** The user wants the site to feel **smooth, vibrant, animated, 3D,
shining and futuristic.** Confirmed direction:

**Visual language — "dark base + neon glow accents":**
- Base background: deep near-black **`#0A0B0F`** (cinematic, keeps the
  reference's depth and section-alternation rhythm).
- Accent system: an **iridescent gradient — cyan → violet → magenta** — used
  for glows, borders, text gradients, button fills, shimmer sweeps.
- Effects: **glowing borders**, soft **bloom/halo** behind key elements,
  **shimmer/shine sweeps** across cards, buttons and headings, iridescent
  **holographic text gradients**, glassmorphism panels with lit edges.
- Vibrant 3D objects/renders **pop against the dark** base.
- Light sections still exist for rhythm, but tinted cool (very light
  blue-grey) and carry the same accent glows — never flat plain white.

**3D approach — "hybrid, WebGL hero only":**
- The **hero centerpiece is real WebGL** via **react-three-fiber + Three.js +
  drei** — a lit, cursor-reactive 3D object (iridescent/holographic material,
  bloom). This is an approved addition to the stack (user-confirmed).
- **Every other section uses CSS pseudo-3D** — `perspective` + `rotate3d`
  tilt, layered parallax depth, glass panels — no WebGL, keeps it fast.

**Futuristic web techniques to apply (the "futuristic" brief):**
- Cursor-reactive lighting / spotlight-follow on the hero and cards.
- Custom cursor with a soft glow trail (Canvas 2D, fine-pointer only).
- Scroll-driven depth parallax (multi-layer) and section cross-fades.
- Animated gradient-mesh / aurora backgrounds (CSS or lightweight shader).
- Magnetic buttons, glow-on-hover, shine-sweep on hover.
- Marquee with iridescent stroked text; count-ups; masked line reveals.
- Smooth inertia scrolling (Lenis), page/route transitions.
- All gated by `prefers-reduced-motion` and fine-pointer checks.

**Token note:** §2's colour table below describes the *reference's* tokens.
ALLUVI's actual tokens = this section's dark `#0A0B0F` + iridescent accent
system. Keep the reference's *structure & section rhythm*, restyle with these.

---

## 1. Tech & motion stack — detected vs. what we build with

**Reference is built on:** WordPress + **Uncode** theme (Space Grotesk/Lora via
Google Fonts, `uncodeicon` icon font, Breeze cache plugin). All motion comes
from Uncode's built-in animation engine — detected classes:
`animate_when_almost_visible`, `start_animation`, `with-parallax`,
`mobile-parallax-not-allowed`, `slight-anim`, `alpha-anim`, `tmb-image-anim`,
`tmb-overlay-anim`, `tmb-overlay-text-anim`, `btn-border-animated`,
`icon-animated`, plus a CSS marquee.

**We rebuild it on the lean stack** (from `recreation-rules.md` §5):
**Vite + React 18 + TypeScript** · Tailwind CSS · React Router ·
Motion (`motion/react`) · GSAP + ScrollTrigger + SplitText · Lenis ·
CSS keyframes · Canvas 2D (custom cursor).

**Approved addition (user-confirmed, §0.5):** **react-three-fiber + three +
@react-three/drei** — used **only for the hero WebGL scene**. No other 3D
library. We reproduce the *feel* of Uncode's effects — not the same plugin.
See §7 for the effect→owner map.

---

## 2. Global design tokens

### Colour theme — dark/light alternating, near-monochrome
The site has **no UI accent colour**. All vivid colour comes from the imagery
(iridescent 3D renders). UI is black / white / grey only.

| Token | Value | Use |
|---|---|---|
| `ink` (near-black) | `#101216` / `rgb(16,18,22)` | Primary dark surface, dark buttons, body bg base `#1e1e1e` |
| `ink-2` | `#141618` / `rgb(20,22,24)` | Process section bg |
| `navy` (dark teal) | `#001621` / `rgb(0,22,33)` | Big "marquee" section bg |
| `surface-light` | `#eaeaea` / `rgb(234,234,234)` | Light alternating sections (products, "Standards") |
| `surface-soft` | `#f7f7f7` / `rgb(247,247,247)` | Soft light section bg |
| `white` | `#ffffff` | White sections, primary-button text |
| `text-body-dark` | `#dddddd` / `rgb(221,221,221)` | Body text on dark |
| `heading-light` | `#f7f7f7` / white | Headings on dark |
| hairline | white/black at ~10–15% opacity | Borders, the dashed scroll-cue box |

**Section background rhythm (home, top→bottom):**
`dark hero → white → dark-navy → light-grey → dark → white → dark-teal → light-grey → dark → white`.
Sections are **full-bleed flat rectangles** — no rounded corners, no margins.

### Typography — use the exact two families
- **Space Grotesk** (300/400/500/600/700/**800**) — headings, nav, buttons, UI.
  Headings are weight **800** with **tight negative tracking** (~`-0.05em`,
  e.g. h2 `letter-spacing:-1.45px`).
- **Lora** (italic weights) — used for *italic accent text*: hero sub-paragraph,
  section eyebrows ("Our process"), and the **second line of headlines** is set
  in Lora italic for contrast (e.g. headline line 1 bold Space Grotesk, line 2
  italic Lora).
- Both load from Google Fonts. Never substitute Inter/Roboto/Arial.

**Type scale observed** (desktop): h2 ~29–80px / 800 / tight; h3 small label
14px / 800 / **uppercase** / tracking `-0.7px`; body 13–16px / 400 / line-height
~1.75 / colour `#ddd` on dark; buttons 11px / 800 / **uppercase** / tracking
`1.43px`.

### Buttons
- **Pill shape** — `border-radius: 999px`.
- **Primary** — dark fill (`#101216`), white text, optional leading icon.
- **Secondary** — light/translucent fill, dark text (used as the "outline-ish"
  partner button).
- Uppercase label, 800 weight, wide tracking. Hover = animated border draw
  (`btn-border-animated`) — reproduce with a border/underline sweep.

---

## 3. Header / navigation

- **Layout:** logo left · centred nav menu · account + cart icons right.
- **Logo:** "Luma" wordmark (Space Grotesk) with a small label/superscript mark.
  → use our `logo/site-logo` slot; falls back to a `LUMA` wordmark.
- **Nav links (reference):** Home · Research Compounds ▾ · About · Contact · FAQ
  · **Order Now** (pill button) · account icon · cart icon.
- **Our nav** (from `content-and-assets.md` §2): Home · About Us · Products ·
  Why Us · Testimonials · Contact, plus a **Buy Now** pill, cart icon, search
  icon. Section anchors `#home #about #products #why-us #testimonials #contact`.
- Header is **transparent over the hero**, then becomes a solid sticky bar on
  scroll (shrink + background fade-in). Reproduce: sticky header, transparent at
  top, opaque after ~80px scroll.

---

## 4. Home page — section-by-section spec

10 sections + footer. For each: reference layout/feel, then **our content**.

### S1 — Hero (full viewport)
- **Reference:** full-bleed **3D-render abstract background** (iridescent
  organic/molecular shapes), dark overlay. Left: a large **two-line headline**
  (line 1 Space Grotesk 800, line 2 **Lora italic**), an **italic Lora
  sub-paragraph**, **two pill buttons** (primary dark + secondary light, each
  with a leading icon), and a small fine-print legal line under them. Right: a
  **floating glassmorphic "Featured Compound" card** — translucent dark panel,
  rounded, holding a product image on a light tile, product name, price range,
  a "STRENGTH" label + radio pills, a "VIALS" label + radio pills, and a
  full-width "SELECT OPTIONS" button.
- **Our content** (`content-and-assets.md` §3.1): eyebrow pill
  `High-Purity Research Peptides`; **typewriter headline** rotating
  `Your Weight-Loss Journey Reinvented by Science` ↔
  `Lab-Engineered Formulations for Your Biology`; sub-paragraph about verified
  suppliers; buttons `Shop Products` (→`/shop`) + `Discover Luma` (→`#about`);
  `Scroll` cue.
- **Decision for the featured card:** keep the reference's right-side featured
  product card — populate it with one of our products (suggest **BPC-157 &
  TB-500 40mg** or **Retatrutide 40mg**) using our `products/` image, AED price,
  and a "View Product"/"Enquire" button instead of variant radios (our products
  have no variants — see §11).
- **Images:** `hero/home-hero-background-image` (full-bleed bg),
  `hero/home-hero-product-image` (floating product render).
- **Motion:** background **parallax on scroll** (GSAP ScrollTrigger `scrub`);
  headline + paragraph + buttons **staggered load-in** (Motion); typewriter via
  custom hook; featured card a gentle floating **bob** (CSS keyframes).

### S2 — Feature trio ("Advancing Scientific Inquiry")
- **Reference:** white section, centred heading, then **3 image cards** in a
  row. Each card = a vivid 3D-render image filling the card, fading via gradient
  into a dark lower area where a white **heading**, a lighter **sub-line** and a
  small bold **tagline** sit. A dashed-border empty box sits below the row.
- **Our content** (`§3.2`): heading line; 3 cards — **Purity First**,
  **Reliable Consistency**, **Secure Packaging** (texts in §3.2), each with an
  index label `01 / 03` style. Plus one image tile → use `extra/E_1`.
- **Motion:** cards reveal staggered on scroll (Motion `whileInView`, once);
  on hover the image **zooms** and overlay text **slides up**
  (`tmb-image-anim` / `tmb-overlay-text-anim` feel).

### S3 — Big marquee / statement section
- **Reference:** dark-teal (`#001621`) section dominated by a **huge word**
  ("Peptides", solid white 800) with the word "Research" repeated as **outlined
  (stroke-only) giant letters** scrolling as an infinite **marquee** behind it.
  Below: an intro paragraph and a **circular scroll-down button**.
- **Our content** (`§3.4` marquee strip): slash-separated phrases —
  `Premium Research Formulations / Fast WhatsApp Support / Trusted by Thousands
  / Customer-Focused Service / Easy WhatsApp Ordering / Precision in Every
  Product`. Big solid word: use our brand word (e.g. **"Peptides"** or
  **"Formulations"**); outlined marquee word: **"Research"** or **"Luma"**.
- **Motion:** infinite horizontal marquee (CSS keyframes); intro heading
  word-by-word scrubbed reveal (GSAP SplitText + ScrollTrigger); circular button
  subtle rotate/pulse.

### S4 — Products grid
- **Reference:** light-grey section, large **product grid** (~3–4 cols, 20+
  items) with an optional **Price filter** sidebar. Each card: small **category
  label**, product image on a light tile, an **"Add to cart" / "Select options"**
  button revealed on hover, **title**, a **"HPLC report available"** doc badge
  (icon + text), **price**, and a short **research blurb**.
- **Our content** (`§3.5` + `§5`): heading
  `Research formulations packed with precision and care`, link
  `View All Products` (→`/shop`), and our **8 products** (slugs, names, AED
  prices, blurbs in §5). Hover action button = **`Enquire`** for every product
  + a wishlist heart. Doc badge → keep as a "Lab-tested" / "Verified purity"
  badge to fit our copy. Price filter sidebar is **optional** — our catalogue is
  only 8 items; can omit or simplify.
- **Images:** `products/<slug>` per card.
- **Motion:** cards stagger-reveal on scroll; hover = image zoom + action
  button fade-in.

### S5 — Process section ("Structured Sourcing. Measured Standards.")
- **Reference:** dark section, 3D-render decoration + a real **lab photo**, with
  a content **card panel**: an *italic eyebrow* ("Our process"), a two-line
  heading, a sub-heading, a paragraph, and a "Learn About Our Process" button.
- **Our content:** best mapped to our **About** copy (`§3.3`) — eyebrow
  `Who We Are`, heading
  `Advancing Modern Research with Smarter Formulations`, the two About
  paragraphs, the **stat counter** counting to `25+` (label
  `High-Purity Research Peptides`), and the 3 check items
  (`Verified Suppliers`, `Sealed & Protected`, `Uniform Standards`).
- **Images:** `about/home-about-stat-image`, `about/video` (cycling media — see
  §8), `extra/E_2` is also a candidate for the bg.
- **Motion:** count-up number (GSAP + ScrollTrigger + hook); panel + image
  parallax; check items stagger in.

### S6 — "Designed for Research Environments"
- **Reference:** white section. Two-line heading (line 2 lighter/grey), an intro
  paragraph, then a **4-card grid** of dark tiles — each tile a 3D-render image
  with a heading + short text (Controlled Handling, Traceable Batches, Secure
  Ordering, International Shipping). Below the grid: a large **italic quote**
  heading.
- **Our content:** map to our **Why Us** section (`§3.6`) — eyebrow
  `Why Choose Luma`, statement heading, and the **4 "flip" items**
  (`Consistent Results`, `Verified Purity`, `Reliable Service`, `Quick
  Support`) become the 4 tiles. The reference uses hover image-reveal tiles;
  our content-doc describes **flip circles** — pick one: keep the reference's
  4-tile hover-reveal grid (recommended, matches the design) OR keep our flip
  circles. The italic quote → a line from our brand voice.
- **Motion:** tiles stagger-reveal; hover image zoom / flip; quote line-reveal
  (SplitText masked lines).

### S7 — "Clarity in Sourcing" (text + watermark logo)
- **Reference:** dark-teal gradient bg with a 3D render. Two columns: left = a
  card panel (heading, paragraphs, a **bulleted focus list**, a closing line);
  right = a large **faint "Luma" watermark logo** over the render.
- **Our content:** a secondary **About / brand-statement** block. Reuse About
  paragraph 2 and the check items as the bulleted list, or a short "What we
  focus on" list (Purity · Consistency · Safe handling · Verified suppliers).
- **Motion:** parallax render; panel slide-in; watermark slow drift.

### S8 — "Standards First" (4 small tiles)
- **Reference:** light-grey section. Heading + intro, then **4 compact dark
  tiles**, each with an **icon**, a heading, and one line of text (Independent
  Suppliers, Analytical Transparency, Compliance Focused, Ethical Positioning).
- **Our content:** a second "trust" strip — reuse our 3 feature-trio values
  (`§3.2`) + 1 more, or our check items, as 4 icon tiles. Keep it short.
- **Motion:** icon entrance animation (`icon-animated` feel); tiles stagger in.

### S9 — "Responsible Evolution" (image + text)
- **Reference:** dark section, two columns — left a large **3D-render image**,
  right a heading (second word lighter) + paragraphs.
- **Our content:** a closing brand/mission block — use our About copy or a
  short "where we're headed" statement built from our brand voice.
- **Images:** `about/home-about-small-image` or `extra/E_3`.
- **Motion:** image parallax; text line-reveals.

### S10 — Final CTA ("Access the Catalogue")
- **Reference:** white section, centred heading, one paragraph, **two pill
  buttons** (Explore the Compounds · Request Community Access).
- **Our content:** map to our **Help / CTA** (`§3.7`) — eyebrow
  `Here to Guide You`, heading `Let's Talk To` + greyed `Get Instant Help`,
  paragraph, button `Chat on WhatsApp`. Second button → `Shop Products`.
- **Motion:** heading reveal; buttons fade-up.

### + Testimonials (our content has it; reference home does not)
Our `content-and-assets.md` §3.8 has a **testimonials carousel** (3 reviews —
Michael Reed, Emily Carter, Sofia Bennett). The reference home page has **no**
testimonials section. **Decision:** add a testimonials section in the reference
aesthetic (dark or light alternating tile, Motion `AnimatePresence` carousel
with autoplay), placed after S6 or before the final CTA. Avatars from
`testimonials/`.

### + Contact (our §3.9)
Reference has a separate `/contact/` route. Our content-doc keeps Contact as a
home section (`#contact`) — render it as a block before the footer (details +
heading `Get in Touch` + paragraph + `Chat With Us` WhatsApp button), and/or
also a `/contact` page.

---

## 5. Footer

- **Reference:** dark footer. Left: **"Get the latest from Luma"** newsletter
  (email input + Subscribe button) + a disclaimer paragraph + social icons.
  Then **3 link columns** — Shop · Navigate · Customers. A large **faint "Luma"
  watermark logo** sits on the right. Bottom bar: `© 2026 Luma Research
  Peptides. All rights reserved`.
- **Our content** (`content-and-assets.md` §4.1): eyebrow
  `Here to Help You Anytime`; address `Level 5, Dubai, UAE`, phone
  `+971 54 380 0625`, email `sales@lumauae.com`; button `Start Your Order`
  (→`/shop`); Quick Links column (Home, About Us, Products, Why Us,
  Testimonials, Contact); newsletter (eyebrow `Get Latest Offers`, heading
  `Don't miss the latest offers`, placeholder `Enter your email`, success
  `Subscribed — thank you`); social `Facebook` / `Instagram`; bottom bar
  `© {year} Luma. All Rights Reserved.`; giant faint `Luma` watermark.

---

## 6. 3D content & imagery

The reference's "3D" is **not WebGL** — it is a set of **pre-rendered abstract
images** (named `luma1`…`luma8`): glossy, iridescent, organic/molecular shapes
(soap-bubble clusters, coral/tube forms, glass blobs). They are used as:
- the full-bleed **hero background**,
- the **card/tile imagery** in S2, S5, S6, S7, S9.

**Our equivalent:** we do **not** have these renders. Use what we have:
- `hero/home-hero-background-image` — hero bg.
- `hero/home-hero-product-image` — floating product.
- `extra/E_1 E_2 E_3` — feature tile / CTA bg / banner.
- `about/*` — process & about tiles (one slot is a **video**, see §8).
- `products/*`, `product-gallery/*` — product imagery.
- Where the reference uses a decorative 3D render we have no asset for, use a
  product image, an `extra/` image, or a tasteful gradient/placeholder — never
  break layout (the `<Img>` component falls back to a grey `<Placeholder>`).
- If we *want* the iridescent look, that is a later asset task; for now treat
  those as decorative background slots.

---

## 7. Animation & motion catalog — effect → owner

| Effect (reference) | Where | Owner in our build |
|---|---|---|
| Smooth scrolling | whole page | **Lenis** |
| Hero bg parallax | S1 | **GSAP ScrollTrigger** (`scrub`) |
| Hero text/buttons load-in stagger | S1 | **Motion** |
| Typewriter headline | S1 | **custom hook** |
| Floating featured card bob | S1 | **CSS keyframes** |
| Reveal-on-scroll blocks (fade + move-up) | all | **Motion `whileInView`** (`once:true`) |
| Card stagger reveal | S2, S4, S6, S8 | **Motion** stagger |
| Card hover: image zoom + overlay text slide | S2, S4, S6 | **Motion** / CSS |
| Infinite marquee | S3 | **CSS keyframes** |
| Giant outlined marquee word | S3 | CSS (text-stroke) + keyframes |
| Heading line / word reveals (masked) | S3, S6, S9 | **GSAP SplitText + ScrollTrigger** |
| Count-up number (`25+`) | S5 | **GSAP + ScrollTrigger + hook** |
| Section bg / decorative parallax | S5, S7, S9 | **GSAP ScrollTrigger** |
| Icon entrance animation | S8 | **Motion** |
| Animated button border on hover | buttons | CSS / Motion |
| Testimonials carousel | testimonials | **Motion `AnimatePresence`** + autoplay |
| Sticky header transparent→solid | header | custom hook / Motion |
| Circular scroll-cue button | S3 | CSS keyframes |
| **WebGL 3D hero centerpiece** | S1 | **react-three-fiber + drei** (lit, cursor-reactive, bloom) |
| CSS pseudo-3D tilt / depth | S2, S4, S6 cards | CSS `perspective`+`rotate3d` / Motion |
| Glow / bloom halos | accents, hero, cards | CSS `box-shadow` + blurred gradient layers |
| Shine / shimmer sweep | buttons, cards, headings | CSS keyframes (moving gradient mask) |
| Iridescent text gradient | headings, accents | CSS `background-clip:text` + animated gradient |
| Aurora / gradient-mesh bg | ambient section bgs | CSS animated gradients (lightweight) |
| Custom glow cursor + trail | whole page | Canvas 2D (fine-pointer only) |
| Magnetic buttons | CTAs | Motion (`useMotionValue`/spring) |

**Motion rules** (from `recreation-rules.md` §8 — must follow):
- Animate **`transform` + `opacity` only**; never `width/height/top/left`.
- Every effect respects **`prefers-reduced-motion`** (disable/simplify).
- Reveal-on-scroll plays **once**.
- Heading reveals use masked lines (`overflow:hidden` wrapper + `yPercent`).
- Parallax disabled on mobile / touch.

---

## 8. Image asset system (reuse as-is)

Already set up in `src/images/` — see `src/images/README.md` and
`content-and-assets.md` §6–§8. Build the resolver `src/lib/images.ts`
(`import.meta.glob`, keyed `"folder/name"` without extension) and the `<Img>`
component (renders photo / looping muted video / sized `<Placeholder>`).

Folders present: `logo/ hero/ about/ extra/ testimonials/ products/
product-gallery/`. Note `about/video.mp4` → the About media slots **cycle**
through three media items and one is a **video** (autoplay, muted, loop).
`product-gallery/` has 4 thumbnails per product (`<slug>_1`…`_4`).

**Our 8 product slugs** (must match `src/lib/products.ts` + image filenames):
`bpc-157-tb-500-40mg · nad-1000mg · glow-70mg · retatrutide-20mg ·
retatrutide-40mg · tirzepatide-20mg · tirzepatide-40mg · tirzepatide-5mg`.

---

## 9. Routes

- **Reference routes:** `/home/ /about/ /contact/ /faq/ /shop/ /product/:slug
  /cart/ /my-account/` + product categories.
- **Our routes** (`content-and-assets.md` §2): `/` (Home) · `/shop` ·
  `/product/:slug`. Optionally add `/about`, `/contact`, `/faq` if we want
  parity with the reference — **decide next prompt**. Product detail layout,
  shop layout, product-card spec are in `content-and-assets.md` §4.2–§4.4.

---

## 10. Content-mapping summary (reference section → our content)

| Reference home section | Our content source (`content-and-assets.md`) |
|---|---|
| S1 Hero + featured card | §3.1 Hero (typewriter, eyebrow, 2 buttons) + one of our 8 products in the card |
| S2 Feature trio | §3.2 Purity First / Reliable Consistency / Secure Packaging |
| S3 Big marquee section | §3.4 marquee phrases + brand word |
| S4 Products grid | §3.5 + §5 — our 8 products |
| S5 Process section | §3.3 About — heading, paragraphs, `25+` counter, check items |
| S6 "Designed for…" 4 cards | §3.6 Why Us — 4 items |
| S7 "Clarity in Sourcing" | §3.3 About (secondary) — brand statement + focus list |
| S8 "Standards First" 4 tiles | §3.2 values / check items as 4 icon tiles |
| S9 "Responsible Evolution" | brand/mission closing statement |
| S10 Final CTA | §3.7 Help/CTA — `Chat on WhatsApp` |
| (added) Testimonials | §3.8 — 3 reviews carousel |
| (added) Contact block | §3.9 — `Get in Touch` |
| Footer | §4.1 — newsletter, link columns, watermark |

Where our content doc has no exact match for a reference section (S7, S8, S9),
write **new copy that is 100% on-brand** — built from our existing wording
(purity, consistency, verified suppliers, safe handling, WhatsApp support) — and
keep it short, matching the reference's clinical-but-premium tone.

---

## 11. Open decisions to confirm next prompt (before building)

1. **Featured hero card** — our products have no strength/vial variants. Replace
   the reference's radio pickers with a simple price + "View Product"/"Enquire"
   CTA? (recommended)
2. **S6 layout** — use the reference's 4-tile hover-reveal grid, or keep our
   content-doc's "flip circles"? (recommend reference grid)
3. **Routes** — add `/about`, `/contact`, `/faq` pages, or keep `/`, `/shop`,
   `/product/:slug` only?
4. **Price filter sidebar** in S4 — keep (only 8 products) or omit?
5. **3D renders** — proceed with our existing images + placeholders now, source
   iridescent renders later?

Everything else follows `recreation-rules.md`. Build section by section, verify
each in the browser, keep `changes/changes.md` updated.
