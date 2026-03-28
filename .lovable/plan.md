

# VitaBridge — Post-Fix Audit (Apple Standard)

## Current Score: 81/100

The previous rounds fixed the major structural issues. What remains are refinements that separate "good" from "polished." This audit covers typography, mobile responsiveness, color, and 2026 design trends.

---

## Font Assessment

**Current**: Cormorant Garamond (display) + DM Sans (body)
**Verdict**: Keep. This is the correct pairing. Cormorant has the editorial gravitas of a private bank. DM Sans is clean without being sterile. The 2026 trend toward "quiet luxury" in digital design (Bottega Veneta, Aman, Peninsula Hotels) favors exactly this kind of high-contrast serif/sans pairing. No change needed.

**Font size**: Body at 15px is acceptable but the pervasive use of `text-sm` (13.5px) for reading content remains the single biggest readability issue. This was deferred previously but should now be addressed.

---

## Remaining Issues — Prioritized

### 1. CRITICAL: Body text still too small (text-sm epidemic)
97+ instances of `text-sm` (13.5px) used for content users actually read: package descriptions, test items, step descriptions, event descriptions, add-on descriptions. The 2026 accessibility standard (WCAG 2.2) and Apple HIG both set 16px as the minimum for body reading content. At 13.5px on mobile (393px viewport), DM Sans becomes strained.

**Fix**: Upgrade reading content `text-sm` to `text-base` in these components:
- `YourExperience.tsx`: step descriptions (line 54), addon descriptions (line 82)
- `Events.tsx`: event descriptions (line 87)
- `CategoryAccordion.tsx`: test items (line 61)
- `ScreeningMarketplace.tsx`: "Best for" text (line 343), package card body text
- `EnquiryForm.tsx`: form labels (lines 66, 70, 74, 78, 86)
- `Footer.tsx`: footer link items (lines 43-46, 61-68)

Keep `text-xs` for: tier labels, badges, counts, eyebrows, timestamps. Keep `text-sm` for: nav links, filter buttons (UI chrome).

### 2. HIGH: Mobile filter controls wrap awkwardly at 393px
At the user's current viewport (393px), the gender filter (3 buttons) + sort filter (3 buttons) stack and wrap unpredictably. Two segmented controls side by side is too dense for mobile.

**Fix**: On mobile, stack filters vertically. Use `flex-col sm:flex-row` on the filter wrapper. Or collapse sort into a single icon-toggle button on mobile that cycles through the 3 sort states, keeping the gender filter as the only visible segmented control.

### 3. HIGH: Package cards on mobile — single column is correct but cards are very tall
At 393px, cards render single-column (correct). But with all accordion categories expanded by default (`defaultOpen={ci < 2}`), each card is extremely tall. Users must scroll extensively to compare packages.

**Fix**: On mobile, default all accordions to collapsed (`defaultOpen={false}` when viewport < 768px). Show only the summary bar (test count + duration + top categories). User taps to expand. This reduces initial card height by ~60%.

### 4. HIGH: Nav mobile menu lacks polish
The mobile menu (`AnimatePresence` slide-down) works but feels abrupt. Links use `text-base font-medium` with `border-b border-border` — creating a heavy, utilitarian look. The language toggle is left-aligned (`self-start`) which breaks the centered rhythm.

**Fix**: Remove `border-b` from individual links. Add `py-3` instead of `py-2`. Center the language toggle. Add a subtle `bg-secondary/50` hover state on links. The menu should feel like a luxury overlay, not a settings panel.

### 5. MEDIUM: Color refinements for 2026 trend
The current gold `hsl(39, 30%, 56%)` is slightly muted — reads as "champagne corporate." The 2026 luxury digital trend (seen in Aman, Four Seasons, Dior digital) leans toward warmer, slightly richer golds with more saturation.

**Fix**: Increase gold saturation slightly:
- `--gold`: `39 38% 54%` (warmer, more confident)
- `--gold-text`: `39 60% 26%` (slightly deeper for better contrast on white — ~5.2:1)
- `--gold-light`: `37 42% 64%` (richer hover state)

These are subtle shifts (~3-5% saturation) that won't break the design but add warmth.

### 6. MEDIUM: Section transitions feel abrupt
Every section starts with a hard edge — white to off-white or vice versa. The 2026 trend (Apple.com, Linear, Vercel) uses subtle gradient transitions between sections or very soft borders.

**Fix**: Add a subtle top gradient on alternating sections: `bg-gradient-to-b from-background to-secondary` on the first 48px of secondary sections. This creates a soft visual bleed rather than a hard cut. Implement via a pseudo-element or a small gradient div at the top of each `bg-secondary` section.

### 7. MEDIUM: Testimonial section needs more visual authority
The quote mark at `text-5xl` is now proportional (good), but the overall section feels plain — just text on off-white. No visual anchor or framing.

**Fix**: Add a thin vertical gold line above the quote mark (height: 40px, width: 1px, `bg-primary`, centered) as a visual anchor. This is the "Monocle editorial" pattern — a fine rule that signals "this is a pulled quote" without being decorative.

### 8. MEDIUM: Footer CTA green WhatsApp button is visually jarring
The WhatsApp CTA at `hsl(153, 42%, 30%)` is the only green element on the entire page. It breaks the gold/white/navy color system abruptly. The same issue exists on the floating WhatsApp FAB.

**Fix**: Style the WhatsApp CTA as `btn-gold` instead — gold is the action color of this brand. The WhatsApp icon alone is enough to signal the platform. Or use the green only on the FAB (small, out of main flow) and make the footer CTA gold. This maintains color system integrity.

### 9. LOW: Accordion test items line-height too loose
Test items in `CategoryAccordion` use `text-sm leading-relaxed` (1.625 line-height). At 13.5px, this creates 22px line-height — the inter-line gap visually dominates the compact text. For list items in a dense UI context, `leading-snug` (1.375) is more appropriate.

**Fix**: Change `leading-relaxed` to `leading-normal` on accordion test items (line 61 of CategoryAccordion.tsx). If body text is upgraded to `text-base`, keep `leading-relaxed`.

### 10. LOW: Hero eyebrow on mobile is orphaned
At 393px, the centered eyebrow ("PREMIUM HEALTH CONCIERGE") sits alone at the top with 32px of space below before the H1. With `pt-28` (nav offset), the eyebrow appears very high on the viewport.

**Fix**: Reduce `mb-8` after the eyebrow to `mb-5 sm:mb-8`. Tighten mobile spacing to bring the H1 closer to the eyebrow, creating a stronger visual group.

---

## What's Working Well — Preserve

- Cormorant + DM Sans pairing is excellent and on-trend
- Sharp 2px border radius throughout — correct luxury signal
- `leading-[1.15]` on all H2s — resolved the previous collision issue
- Product-first hierarchy (name > price) on package cards — correct
- Light font-weight (300) on headings and logo — refined
- TrustBar 2x2 grid on mobile — clean and readable
- Footer multi-column layout — professional and complete
- Testimonial pause-on-hover — good interaction design
- Scroll snap on provider tabs — smooth mobile UX
- Privacy reassurance on enquiry form — builds trust

---

## Implementation Plan

| # | Fix | Files | Impact |
|---|-----|-------|--------|
| 1 | Body text `text-sm` → `text-base` for reading content | 6 components | Readability +++ |
| 2 | Mobile filter stack / sort collapse | `ScreeningMarketplace.tsx` | Mobile UX |
| 3 | Accordion collapsed by default on mobile | `ScreeningMarketplace.tsx`, `CategoryAccordion.tsx` | Mobile scroll depth |
| 4 | Nav mobile menu polish | `Nav.tsx` | Brand feel |
| 5 | Gold color warmth tweak | `index.css` | Visual warmth |
| 6 | Section transition gradients | Multiple section components | Visual flow |
| 7 | Testimonial vertical rule accent | `Testimonial.tsx` | Editorial authority |
| 8 | WhatsApp CTA → gold in footer | `FooterCta.tsx` | Color consistency |
| 9 | Accordion line-height tighten | `CategoryAccordion.tsx` | Density |
| 10 | Hero mobile eyebrow spacing | `Hero.tsx` | Mobile balance |

**Total: ~10 files. All className/CSS changes. No logic changes except mobile accordion default state.**

**Projected score after: 90/100.** Remaining 10 points require real photography, branded assets, and actual user testing — beyond what code alone can achieve.

