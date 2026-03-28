

# Typography & Visual Polish — Audit Review and Implementation Plan

## Audit Assessment

The audit is thorough and mostly accurate. Here's what we should implement, skip, and why.

---

## REJECT: Fix 1 — gold-text contrast for dark theme

The audit's #1 critical finding assumes a dark theme will be applied. **We rejected the dark theme** in the previous audit. Our background is white (`0 0% 100%`), and `--gold-text: 39 60% 28%` achieves ~4.8:1 contrast on white — passing WCAG AA. No change needed unless we add dark mode later.

---

## APPROVE: 9 Fixes to Implement

### 1. H2 line-height (Critical — all section headings)
**Why**: All 7 section H2s use `font-serif text-3xl sm:text-4xl md:text-5xl font-light` with no `leading-` class. At large sizes, Cormorant Garamond lines will collide on wrap. Verified in code.
**Change**: Add `leading-[1.15]` to every section H2 across: `ScreeningMarketplace.tsx` (line 81), `YourExperience.tsx`, `EuropeanWellness.tsx`, `Events.tsx` (line 59), `EnquiryForm.tsx` (line 37), `FooterCta.tsx` (line 18), `Testimonial.tsx`.

### 2. Price vs name hierarchy (Critical — purchase psychology)
**Why**: Verified at line 329: price is `text-3xl sm:text-4xl font-semibold`, name at line 328 is `text-2xl sm:text-3xl` with no weight. Price visually dominates the package name — wrong for a trust-first product.
**Change** in `ScreeningMarketplace.tsx`:
- Package name (line 328): `text-2xl sm:text-3xl font-light` — make it the hero
- Price (line 329): `text-xl sm:text-2xl font-medium` — subordinate but clear

### 3. Hero H1 mobile size (High)
**Why**: `text-5xl` (48px) at mobile is too large for a multi-line heading. Verified at Hero.tsx.
**Change**: `text-5xl sm:text-6xl` → `text-4xl sm:text-5xl` (keep md and lg as-is)

### 4. H3 font-weight fix (Medium)
**Why**: H2s are `font-light` (300), H3s default to 400 — sub-headings visually heavier than headings.
**Change**: Add `h3, h4, h5, h6 { font-weight: 300; }` in `index.css`

### 5. Eyebrow tracking + size (Medium)
**Why**: `tracking-[4px]` at 11px = 36% letter-spacing — too wide. px doesn't scale.
**Change** in `index.css` `.section-eyebrow`: `text-[11px] tracking-[4px]` → `text-[12px] tracking-[0.25em]`

### 6. Nav logo refinement (High)
**Why**: `font-semibold` (600) at 24px all-caps is too heavy for luxury. Verified in Nav.tsx.
**Change**: `text-2xl font-serif font-semibold tracking-wide` → `text-xl font-serif font-light tracking-[0.15em]`. Also update Footer.tsx logo to match.

### 7. Testimonial quote mark size (Low)
**Why**: `text-7xl sm:text-8xl` (72-96px) overwhelms the quote content.
**Change**: `text-7xl sm:text-8xl` → `text-5xl sm:text-6xl` in Testimonial.tsx

### 8. DM Sans weight 600 (Low)
**Why**: Code uses `font-semibold` but only loads 300/400/500. Browser synthesises 600.
**Change**: Update Google Fonts import in `index.css` to add weight 600.

### 9. Section padding standardisation (Medium)
**Why**: Random mix of `py-24` and `py-32` across sections with no pattern.
**Change**: Standardise all content sections to `py-24 sm:py-32`. FooterCta to `py-20 sm:py-28`.

---

## DEFER: 3 Items

| Item | Reason |
|------|--------|
| **Body text-sm → text-base** | High risk — 97 instances across all components. Could break card layouts, accordion density, and mobile spacing. Needs careful per-component review, not a bulk find-replace. Defer to a focused pass. |
| **Border radius cleanup** | Most `rounded-md/lg` instances come from shadcn/ui components (36+ in ui/ folder). Changing those risks breaking the design system. Custom components already use `rounded-sm` correctly. Low visual impact. |
| **Container width consolidation** | Current widths (max-w-7xl for wide, max-w-6xl for standard, max-w-3xl/2xl for focused) are actually intentional — the audit acknowledges the logic is correct. Reducing to 3 widths would change Testimonial and Form layouts. Low priority. |

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/index.css` | Eyebrow tracking/size, H3 weight rule, DM Sans 600 import |
| `src/components/Hero.tsx` | Mobile H1 size |
| `src/components/Nav.tsx` | Logo weight/size/tracking |
| `src/components/Footer.tsx` | Logo weight to match Nav |
| `src/components/ScreeningMarketplace.tsx` | H2 leading, price/name hierarchy |
| `src/components/YourExperience.tsx` | H2 leading |
| `src/components/EuropeanWellness.tsx` | H2 leading |
| `src/components/Events.tsx` | H2 leading, section padding |
| `src/components/EnquiryForm.tsx` | H2 leading |
| `src/components/FooterCta.tsx` | H2 leading, section padding |
| `src/components/Testimonial.tsx` | H2 leading (if present), quote mark size |

Total: 11 files, focused CSS and className changes. No logic changes.

