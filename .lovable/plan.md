

# VitaBridge UX Overhaul Plan

Based on the audit above, here is the implementation plan to address the highest-impact issues.

## Phase 1: Critical Fixes

### 1. Accessibility — Gold contrast fix
- Darken gold text color to `#8B6914` for body text usage while keeping `#BFA06A` for backgrounds/borders
- Add a `--gold-text` CSS variable for accessible text contrast
- Add visible focus rings to all interactive elements (btn-gold, btn-ghost, accordion buttons)

### 2. Typography scale increase
- Base body: 15px (`text-[15px]`)
- Card body: 14px minimum
- Package price: 36-40px (dominant element)
- Eyebrow: 11px (up from 10px)
- Muted text: darken to 45% lightness

### 3. Navigation overhaul
- Add section links to Nav: Packages, Journey, About, Contact
- Mobile hamburger: include section links + language + CTA
- Add `scroll-behavior: smooth` to html
- Add floating back-to-top button
- Add floating WhatsApp FAB (bottom-right, mobile only)

## Phase 2: Marketplace Redesign

### 4. Provider selector enhancement
- Show tagline under each provider name
- Add test count badge ("18 packages" or "6 plans")
- Horizontal scroll indicator (dots) on mobile

### 5. Package card redesign
- Move compare checkbox to card header row (next to tier badge)
- Make price the largest element (font-serif text-4xl)
- Add summary bar: "47 tests · Half day · Cardiac + Cancer"
- Handle "Everything in X, plus:" as a styled note, not empty accordion
- Equalize card heights with a "Show all tests" expand pattern
- Reduce mobile padding (p-6 → p-4)

### 6. Compare table mobile fix
- Sticky first column on mobile
- Better column sizing and scroll indicators

### 7. Price sorting
- Add "Sort by: Price (low→high) | Price (high→low)" toggle above package grid

### 8. "Help me choose" mini-quiz
- Add a CTA above the provider selector: "Not sure which package? Let us help"
- Simple 3-question flow: Age range, Primary concern, Budget range
- Highlights 1-2 recommended packages

## Phase 3: Conversion & Trust

### 9. Floating WhatsApp FAB
- Fixed bottom-right on all screen sizes
- Pulse animation on first load
- Context-aware: if user has viewed a specific package, pre-fill that package name

### 10. Testimonial carousel
- Replace single quote with 3-5 testimonials
- Auto-rotating carousel with dots
- Include name, location, and which provider they used

### 11. Enquiry form backend
- Connect to Supabase for storing submissions
- Add email notification (or log to a table for now)
- Add "We'll respond within 2 hours" copy

### 12. Section consolidation
- Merge Journey + Add-Ons into "Your Experience" section
- Move Events below European Wellness
- Add micro-testimonials near package card CTAs

## Technical Details

### Files to modify:
- `src/index.css` — contrast fixes, smooth scroll, FAB styles
- `tailwind.config.ts` — add gold-text color
- `src/components/Nav.tsx` — section links, mobile nav
- `src/components/ScreeningMarketplace.tsx` — card redesign, sorting, sticky compare column, help-me-choose
- `src/components/CategoryAccordion.tsx` — ARIA attributes, empty state handling
- `src/components/Testimonial.tsx` — carousel with multiple quotes
- `src/components/Hero.tsx` — font size adjustments
- `src/components/Journey.tsx` + `src/components/AddOns.tsx` — merge into single component
- `src/components/FooterCta.tsx` — add response time copy
- `src/data/translations.ts` — new copy for all additions
- New: `src/components/FloatingWhatsApp.tsx` — FAB component
- New: `src/components/BackToTop.tsx` — scroll-to-top button
- New: `src/components/HelpMeChoose.tsx` — guided quiz modal

### Estimated scope:
- Phase 1 (Critical): ~4 files, mostly CSS + Nav
- Phase 2 (Marketplace): ~3 files, significant logic changes
- Phase 3 (Conversion): ~5 files, new components + data

