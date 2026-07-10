# Project: Arclight Studio — Agency Landing Site Clone

## 0. Source & Goal

Reference site: https://contextual-enthusiasm-213641.framer.app/
(Framer template "SYLVEN® — Premium Agency & Portfolio", re-skinned as "arclight Studio")

Goal: Rebuild this site pixel-for-pixel using **React + Tailwind CSS + Framer Motion**.

- No backend, no database, no API calls.
- No TypeScript — plain JavaScript (.jsx) only.
- All animation via **framer-motion** (no other animation libraries, no CSS-only animation unless trivial like hover transitions).
- Contact form is UI-only (no real submission — on submit, just show a success state or console.log the payload).
- Fully responsive: desktop, tablet, mobile — matching the original's breakpoints and reflow behavior.

### ⚠️ Important note on "pixel-to-pixel" accuracy
This document was written from the site's rendered text/content and general structural analysis, not from direct pixel measurements, computed CSS, or exported assets. To actually hit pixel parity, Codex (or you) should:
1. Open the live site in Chrome DevTools, and for each section inspect: exact colors (hex), font-family/weight/size/line-height/letter-spacing, spacing (margin/padding in px), max-width/container widths, and border-radius values.
2. Use the browser's "Inspect" + "Copy styles" or screenshot each section at 1440px, 768px, and 390px widths as a visual reference to compare against the build.
3. Treat the structure, copy, and component breakdown below as ground truth, but treat exact colors/spacing/fonts as **best-guess defaults** that must be corrected against the live reference during implementation, section by section.
4. Download real image assets (project thumbnails, headshots, icons) directly from the site's framerusercontent.com URLs referenced below (or replace with your own placeholders of identical aspect ratio if download isn't possible) — do not use random stock photos.

---

## 1. Tech Stack

- React 18 (Vite, plain JS, no TS)
- Tailwind CSS (utility-first, no CSS Modules, no styled-components)
- Framer Motion for: scroll-triggered fade/slide-ins, marquee/logo scroller, hover states, page transitions, number counters, FAQ accordion, sticky/reveal nav
- React Router for the 3 routes: `/`, `/projects`, `/contact`
- Icons: lucide-react (or inline SVG) for arrows, plus icon, social icons
- Fonts: Geist, "Geist Placeholder", sans-serif — use this exact font stack for both body text and big display headlines (heavier weight for headlines).

## 2. Global Design System

Build a `tailwind.config.js` theme extension with design tokens once confirmed from the live site. Best-guess starting point (verify against reference):

- Section numbering pattern: every major section has a small `[0N]` tag top-left and a category label top-right — replicate this as a reusable `<SectionTag number="02" left="Works" right="// Creative Development" />` component
- Consistent max-width container (~1280–1320px), generous section vertical padding (~120–160px desktop, ~64–80px mobile)

## 3. Global Components

### 3.1 Navbar
- Logo/wordmark top-left: "arclight" (lowercase wordmark, small circular logo mark)
- Center or right nav links: `Home 01`, `Projects 02`, `Contact 03` (numbered nav items)
- Right-side CTA pill button: "Now [View Selected Work]" with animated status dot, scrolls to/links to projects section
- Nav should have a subtle scroll behavior (e.g. background blur/solidify on scroll, or hide-on-scroll-down/show-on-scroll-up) — animate with framer-motion
- Mobile: hamburger → full-screen or dropdown menu with staggered link animation

### 3.2 Footer
- Large CTA block: "Have an approved design ready for development?" with "Always Connected" label and email `hello@arclight.studio`
- Sub-line: "Send it over. We'll reply with how we'd handle the build — scope, timeline, and price."
- Submit/contact prompt, "Our team replies within 24 hours"
- Secondary footer bar: "Lets Talk" + big email link `hello@arclight.com`
- Footer nav columns: Home / Projects / Contact / Work
- Social links: X.Com, Instagram, Linkedin
- Large watermark wordmark: "arclight Studio®"
- Copyright: "©2026 Arclight. All rights reserved."

### 3.3 Reusable primitives
- `PillButton` (black/white invert hover, optional leading dot)
- `SectionTag` (numbered label pattern used at top of every section)
- `RevealOnScroll` wrapper (framer-motion `whileInView`, fade+translateY, staggered children via `variants`)
- `MarqueeRow` (infinite horizontal auto-scroll, used for "Worked with" client logos — duplicate list + `animate={{x: [...]}}` loop)
- `Counter` (animate numeric count-up on scroll into view, used for "0+" stats → e.g. "40+ Live Projects", "6+ Years Experience")
- `AccordionItem` (FAQ, expand/collapse height with framer-motion `AnimatePresence`)

---

## 4. Page: Home (`/`)

Build as a stack of sections, each full-bleed dark background, alternating subtle content padding. Implement in this order:

### 4.1 Hero
- Small eyebrow badge: "WHITE-LABEL WORDPRESS & FRAMER DEVELOPMENT" + "Working Worldwide" tag (with animated status dot)
- Giant headline (two-line, tight leading, mixed case as shown): 
  "WE BUILD. YOU TAKE THE CREDIT."
- Primary CTA pill button: "Send a Test Project" (links to /contact or scrolls to footer form)
- Animate headline lines in with staggered word/line fade-up on load
- Background: subtle noise/gradient texture, mostly flat black

### 4.2 "For Branding Studios" intro strip
- Eyebrow: "FOR BRANDING STUDIOS"
- Subheadline: "We build your client sites under your brand. You keep the relationship, the credit, and the margin."
- Row of 4 small feature/stat chips: "6+ Years Experience", "Wordpress", "Framer", "NDA Friendly"

### 4.3 "Worked with" logo marquee
- Label: "/Worked with"
- Infinite auto-scrolling horizontal row of client wordmarks: zeitgeistandco, mgexecutivecoach, clickodigital, innovazione-futura.ag, hank-hirth.de (each a text-based logo link, loop seamlessly, pause on hover)

### 4.4 Delivery Proof (stats section)
- Section tag: `[01] [ DELIVERY PROOF ]`
- Two large animated counters side by side:
  - "40+ Live Projects" (confirm real number from source if visible; else use placeholder that counts up to a plausible number)
  - "6+ Years Experience"
- Large centered headline: "APPROVED DESIGNS SHIPPED WITHOUT DEVELOPMENT DRAMA."
- Two badge pills: "NDA-FRIENDLY", "WHITE-LABEL DELIVERY"

### 4.5 Projects/Works grid
- Section tag: `[02] // Creative Development` / "Works"
- Heading: "Projects (27)" — animated count if you like
- Subcopy: "From concept to code, we transform ambitious ideas into refined, interactive digital realities. Every case study reflects..."
- Grid/stacked list of project cards, each with hover-reveal marquee-style repeated title text and index number, linking to `/projects/:slug`:
  1. Hank + Hirth — `[01]`
  2. MG Executive Coach — `[02]`
  3. Annie Ricci — `[03]`
  4. Clicko Digital — `[04]`
  5. Innovazione Futura — `[05]`
  6. Dude's Comic Corner — `[06]`
- Each card: large project thumbnail image, title, index; on hover the title text scrolls/marquees and image scales slightly (framer-motion `whileHover`)
- Since this is a static clone with no backend, project detail pages can be simple placeholder pages at `/projects/:slug` showing the project title and a "coming soon" note, OR simply anchor-link back to `/projects` — your call, but the **card + grid + hover animation on the home page** is the priority to match pixel-for-pixel.

### 4.6 Services ("Vision to Victory")
- Section tag: `[03] // SERVICES` / "Vision to Victory™"
- Heading: "Development support where agencies usually get stuck." + "WE TURN VISION INTO VICTORY"
- 3 stacked/alternating service rows, each with a portrait image + number + title + description, image alternates side on scroll (sticky-image or simple alternating layout):
  1. `01` Figma to WordPress — "Approved designs turned into clean, responsive WordPress websites. Built on ACF or the editor your team already uses — no bloated page builders unless you ask."
  2. `[02]` Figma to Framer — "Fast, polished Framer builds for landing pages and marketing sites. Animations and interactions included, ready to publish under your client's domain."
  3. `03` Ongoing Site Support — "Updates, fixes, and small builds for sites we've delivered or sites you're stuck maintaining. A dev team on call without the retainer overhead."
- Animate each row in with scroll-triggered slide/fade, image subtle parallax on scroll (framer-motion `useScroll` + `useTransform`)

### 4.7 Pricing
- Section tag: `[04] PRICING`
- Heading: "Start with one page."
- Price card: "Test page starts from **$300**"
- Description: "Includes a full responsive build of one approved design — desktop, tablet, and mobile — with QA and white-label handoff."
- CTA: "Send a Test Project" pill button
- Fine print: "No retainer. No commitment. If the build isn't up to standard, don't pay."

### 4.8 Process
- Section tag: `[05] [ Simple process ]` / "[ Clean Handoff ]"
- Heading: "Our Process"
- Subcopy: "Built for teams that need reliable development support."
- 5-step vertical/horizontal timeline, each step: number + title + description, animate each step revealing on scroll with a connecting line that draws in (framer-motion `pathLength` or scaleY on a line div):
  1. Send the approved design — "Share the Figma file, page list, scope, assets, and timeline."
  2. We review the project — "We check the design, structure, responsive needs, and possible technical issues before writing a line of code."
  3. Development starts — "We build the site in WordPress or Framer — desktop, tablet, and mobile handled from the start."
  4. QA before delivery — "We conduct rigorous QA testing, optimize for SEO, and check layouts, spacing, forms, links, and functionality before you ever see the build."
  5. White-label handoff — "You receive a clean build under your agency's brand, ready to present to your client. One revision round included."

### 4.9 Testimonial
- Section tag: `[06] //Testimonial` / "OUR VALUE"
- Heading: "Client Experience"
- Subcopy: "A direct note from a client on strategic thinking, clarity, and dependable delivery."
- Large quote card: 
  - Kicker: "STRATEGIC PARTNER. CLEAR THINKING. DEPENDABLE DELIVERY."
  - Quote: "Farzana offers a rare strategic partnership. Her work blends authentic brand voice, precise messaging, and emotional appeal. She is someone you can trust for strategic thinking, clarity of outcomes, and dependable delivery."
  - Attribution: "Maria Gusakova — CEO Advisor & Executive Coach | Ex-McKinsey Partner"
- Small stat callout: "40+ Live Projects" (counter, reused component)
- Secondary mini-testimonial: "She does great work. Highly recommended" — Jeane Bope, Founder / Creative Director at Bope Design (with headshot image)

### 4.10 FAQ
- Section tag: `[07] //FAQ` / "GOT QUESTIONS?"
- Side image (portrait photo) next to accordion list
- Accordion items (click to expand/collapse, animate height + rotate plus/chevron icon):
  1. Do you work white-label?
  2. Do you communicate with our clients?
  3. What do you need to start?
  4. Do you build in WordPress or Framer?
  5. Are revisions included?
  6. Do you offer support after launch?
  7. Can we start with a small task?
  - (Answers weren't visible in the scraped content — write reasonable, on-brand placeholder answers consistent with the rest of the copy, 1–2 sentences each.)

### 4.11 Final CTA / Contact prompt
- Section tag: `[08] [ Ready to Start? ]` / "(Start a Conversation)"
- Eyebrow: "- Let's Connect"
- Heading: "Have an approved design ready for development?"
- "Always Connected" + email `hello@arclight.studio`
- Copy: "Send it over. We'll reply with how we'd handle the build — scope, timeline, and price."
- Contact form: Name / Email / Message fields + "Submit" button (no backend — on submit, animate a success message in with framer-motion, don't actually send anything)
- "Our team replies within 24 hours"

### 4.12 Footer
- As described in 3.2

---

## 5. Page: Projects (`/projects`)

- Reuse Navbar + Footer
- Header: "Projects (27)" heading + intro copy (same as home projects intro)
- Full grid of all project cards (reuse `ProjectCard` component from home), same hover animations
- Since exact full list of 27 projects wasn't available from scraping, use the 6 confirmed projects (Hank + Hirth, MG Executive Coach, Annie Ricci, Clicko Digital, Innovazione Futura, Dude's Comic Corner) and duplicate/placeholder the remainder with generic titles ("Project 07"–"Project 27") using placeholder images, so the grid layout and animation are demonstrated correctly at full scale. Replace with real content later.

## 6. Page: Contact (`/contact`)

- Reuse Navbar + Footer
- Large heading matching the final CTA section style ("Have an approved design ready for development?")
- Full contact form (Name, Email, Project type/budget dropdown, Message, Submit)
- Same "Always Connected" / email / 24-hour reply copy
- No backend — form submit just shows a success state animation

---

## 7. Animation Inventory (Framer Motion specifics)

Implement these interaction patterns explicitly:

1. **Page load**: hero headline lines fade + slide up with stagger (`staggerChildren`), eyebrow badge fades in first
2. **Scroll reveal**: every section heading/paragraph/card uses `whileInView` with `viewport={{ once: true, amount: 0.3 }}`, fade + translateY(20px→0)
3. **Logo marquee**: continuous linear `x` animation, `repeat: Infinity`, `ease: "linear"`, duplicated content for seamless loop, pause on hover via `whileHover` state toggle
4. **Counters**: animate a number from 0 to target using `useMotionValue` + `animate()` or a custom `useEffect` interval, triggered on `whileInView`
5. **Project cards**: image `scale` on hover (`whileHover={{ scale: 1.05 }}`), title marquee/slide text on hover
6. **Service rows**: parallax image translateY tied to scroll progress (`useScroll` + `useTransform`)
7. **Process timeline**: connecting line/progress indicator animates in as user scrolls (`scaleY` or `pathLength` tied to `useScroll`)
8. **FAQ accordion**: `AnimatePresence` + height auto animation, chevron/plus icon rotates 45°/180°
9. **Buttons**: hover scale/invert color transitions (`whileHover`, `whileTap`)
10. **Nav**: mobile menu open/close with `AnimatePresence`, staggered link items; optional navbar hide-on-scroll-down / show-on-scroll-up using `useScroll` direction detection

---

## 8. Deliverable Structure (suggested folder layout)

```
src/
  main.jsx
  App.jsx
  index.css              (Tailwind directives + font-face + base styles)
  components/
    Navbar.jsx
    Footer.jsx
    PillButton.jsx
    SectionTag.jsx
    RevealOnScroll.jsx
    Marquee.jsx
    Counter.jsx
    Accordion.jsx
    ProjectCard.jsx
  sections/
    Hero.jsx
    BrandingStripe.jsx
    WorkedWith.jsx
    DeliveryProof.jsx
    Works.jsx
    Services.jsx
    Pricing.jsx
    Process.jsx
    Testimonial.jsx
    FAQ.jsx
    FinalCTA.jsx
  pages/
    Home.jsx
    Projects.jsx
    Contact.jsx
  data/
    projects.js          (array of {slug, title, index, image})
    faq.js                (array of {question, answer})
    process.js
    services.js
  assets/                 (downloaded/placeholder images)
tailwind.config.js
requirements.md            (this file)
```

---

## 9. Acceptance Checklist

- [ ] All copy matches the source text exactly (see sections 4.1–4.12 above)
- [ ] All 3 routes work (`/`, `/projects`, `/contact`) with React Router
- [ ] Every section has correct section-tag numbering (`[01]`–`[08]`)
- [ ] Layout matches source at 1440px, 1024px, 768px, and 390px — compare side-by-side screenshots
- [ ] Colors, fonts, spacing verified against live reference site (not just this doc's best guesses)
- [ ] All Framer Motion animations from Section 7 implemented
- [ ] No TypeScript, no backend calls, no external state/DB
- [ ] Lighthouse/perf sanity check — no layout shift from unoptimized images (use `width`/`height` or aspect-ratio boxes)
- [ ] Fully keyboard-accessible nav + form + accordion

---

## 10. Notes for Codex

- Work section by section, not the whole page at once — after each section, pause and visually diff against the live reference before moving to the next.
- Prioritize structural + copy accuracy first, then refine spacing/color/type to match exactly.
- Where exact assets (images/logos) can't be sourced, use appropriately-sized placeholder blocks/images with matching aspect ratio so layout doesn't break, and flag them clearly with a `{/* TODO: replace with real asset */}` comment.