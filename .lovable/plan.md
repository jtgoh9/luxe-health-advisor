

# VitaBridge — Premium Health Screening Marketplace

## Design Direction
White premium aesthetic with warm gold accents. Clean, airy, and luxurious — inspired by high-end hospitality brands like Aman Resorts but on white surfaces.

### Color System
- **Backgrounds**: Pure white `#FFFFFF` + warm off-white `#FAFAF8` for alternating sections
- **Cards**: White with subtle warm borders and soft shadows
- **Gold accent**: `#BFA06A` (primary), `#D4B97E` (hover), soft gold tints for backgrounds
- **Text**: Deep navy `#1A1A2E` (headings), `#4A4A5A` (body), `#8A8A9A` (muted)
- **Green**: `#2D6A4F` for checkmarks and WhatsApp CTAs
- **Typography**: Cormorant Garamond (display) + DM Sans (body)

## Pages & Sections

### 1. Sticky Navigation
- Logo: "VITA**BRIDGE**" (BRIDGE in gold)
- Language toggle: ID | EN | 中文
- WhatsApp CTA button (gold outline)
- Scrolled state: white bg with subtle bottom shadow

### 2. Hero (Full Viewport)
- Clean white background with subtle gold geometric accent lines
- Large serif headline with language switching
- Two CTAs: gold fill "Begin Journey" + ghost "Browse Packages"
- Subtle scroll indicator

### 3. Trust Bar
- 4 trust items in a warm off-white strip with gold dividers
- Icons + text for each trust point

### 4. ⭐ Health Screening Marketplace (Core Feature)
- **Provider Selector**: 4 tabbed cards (DA MedSuites, Parkway, Raffles, Healthway) with active gold top-border
- **Gender Filter**: All | Male | Female toggle
- **Package Cards Grid**: Responsive grid showing all packages for selected provider
  - Tier badge, price in gold, "Best for" text
  - Expandable accordion categories showing included tests
  - "Not included" shown as muted pills
  - "Add to Compare" checkbox
  - WhatsApp enquiry button (gold)
- **Compare Mode**: Side-by-side table (up to 3 packages) with sticky header, checkmark/dash for each test, WhatsApp buttons per package
- **Disclaimer bar** at bottom

### 5. The Journey (4 Steps)
- Numbered gold circles: Consultation → Screening → JB Regenerative → Follow-up

### 6. Concierge Add-Ons
- 6-card grid: Limousine, Hotel, Ferry, Concierge, Translation, Monitoring

### 7. European Wellness Puteri Harbour
- Two-column layout with stats and exclusive access info

### 8. Community & Events
- 3 event cards with "Register Interest" WhatsApp links

### 9. Testimonial
- Centered serif quote with gold quotation mark

### 10. Footer CTA
- Large headline + WhatsApp button

### 11. Footer
- Logo + legal disclaimer

## Data Layer
- `data/providers.ts` — Full PROVIDERS array with all 4 providers and their packages
- `data/translations.ts` — All UI copy in id/en/zh
- Language state managed via useState in App.tsx

## Key Interactions
- Language switching (ID/EN/ZH) updates all text
- Provider tab selection filters packages
- Gender filter shows/hides gender-specific packages
- Accordion expand/collapse for test categories
- Compare mode: select up to 3 packages → side-by-side table
- All CTAs → WhatsApp with pre-filled messages (package-specific)
- Framer Motion scroll animations on all sections
- Fully responsive (mobile-first)

## File Structure
```
src/
  App.tsx
  data/providers.ts
  data/translations.ts
  components/
    Nav.tsx, Hero.tsx, TrustBar.tsx
    ScreeningMarketplace.tsx (with sub-components)
    Journey.tsx, AddOns.tsx, EuropeanWellness.tsx
    Events.tsx, Testimonial.tsx, FooterCta.tsx, Footer.tsx
```

