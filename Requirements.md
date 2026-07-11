# Requirements - Navbar + Hero (Phase 1)

## Objective

Recreate the Navbar and Hero section of the provided Framer website as accurately as possible.

Reference:
https://contextual-enthusiasm-213641.framer.app/

The goal is **pixel-perfect visual parity**, not just a similar design.

---

# Tech Stack

- React 19
- Vite
- Tailwind CSS v4
- Framer Motion (only where necessary)
- lucide-react for icons
- No component libraries (MUI, Chakra, shadcn, DaisyUI, etc.)

---

# Primary Goal

The React implementation should look indistinguishable from the original Framer website.

Match:

- Layout
- Typography
- Colors
- Shadows
- Border radius
- Gradients
- Spacing
- Alignment
- Hover effects
- Animations
- Responsive behavior

Do NOT redesign anything.

---

# Development Rules

## 1. Recreate exactly

Do not simplify layouts.

Do not change:

- spacing
- font sizes
- component sizes
- border radius
- opacity
- colors

Everything should visually match the reference.

---

## 2. Code Quality

Write production-quality code.

Requirements:

- reusable components
- semantic HTML
- readable code
- no duplicated JSX
- no inline styles unless absolutely necessary

---

## 3. Responsiveness

Support:

- Mobile
- Tablet
- Laptop
- Desktop
- Large desktop

The responsive behavior should mimic the Framer site.

Never guess breakpoints.
Inspect the reference carefully before implementing.

---

## 4. Styling

Use Tailwind utilities.

Avoid custom CSS unless impossible.

If custom CSS is required:

- keep it inside globals.css
- document why it is needed

---

## 5. Animations

Use Framer Motion only.

Replicate:

- entrance animations
- hover animations
- button interactions
- floating effects
- fades
- transforms

Animation timing should closely match the original.

Avoid overengineering.

---

## 6. Assets

If assets can be extracted from the published site:

Use them.

Otherwise:

Use placeholders and clearly mark them with:

TODO: Replace with original asset

---

# Navbar Requirements

Recreate the navbar exactly.

Include:

- logo
- navigation links
- CTA button
- spacing
- alignment
- hover effects
- sticky behavior (if present)

Inspect:

- navbar height
- horizontal padding
- blur
- transparency
- shadows
- borders

The navbar should match the original at every screen width.

---

# Hero Requirements

Recreate every visible element.

Match:

- headline
- highlighted text
- paragraph
- CTA buttons
- images
- decorative elements
- gradients
- background
- glow effects
- floating cards
- badges
- icons
- illustrations

Do not omit decorative elements.

---

# Component Structure

Suggested structure:

src/

components/

- Navbar.jsx
- Hero.jsx
- Container.jsx
- Button.jsx

pages/

- Home.jsx

App.jsx

---

# Accessibility

Use semantic HTML.

Include:

- aria-labels
- alt text
- keyboard accessibility

Buttons should be actual `<button>` elements.

Navigation should use `<nav>`.

---

# Performance

Prefer:

- CSS transforms
- opacity animations
- GPU-accelerated animations

Avoid unnecessary re-renders.

---

# Deliverables

Implement only:

- Navbar
- Hero

Do NOT implement any lower sections.

---

# Important Workflow

Before writing any code:

1. Carefully inspect the reference website.
2. Identify layout hierarchy.
3. Identify fonts.
4. Identify spacing system.
5. Identify color palette.
6. Identify animation behavior.
7. Identify responsive changes.

Then implement.

Do not estimate values when they can be inspected.

---

# Definition of Done

The implementation should be visually indistinguishable from the Framer version.

When compared side-by-side:

- layout matches
- spacing matches
- typography matches
- colors match
- animations match
- responsiveness matches

No redesigns.
No approximations unless technically unavoidable.