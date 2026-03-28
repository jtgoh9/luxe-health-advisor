

# Audit Review: What's Already Fixed vs. What Remains

The external audit was written against an **older snapshot** of the code (pre-fixes). Many items have already been resolved. Here's the status of each finding and whether implementation is warranted.

---

## Already Fixed — Do NOT Implement (7 of 10)

| # | Audit Finding | Status | Evidence |
|---|--------------|--------|----------|
| 1 | gold-text contrast on dark theme | **N/A** | We rejected the dark theme. No dark theme exists. Current `--gold-text: 39 60% 26%` achieves ~4.8:1 on white — acceptable. We already warmed it to `39 60% 26%` in the last round. |
| 2 | H2 line-height missing | **Fixed** | All H2s now have `leading-[1.15]` — confirmed across all section components in previous rounds. |
| 3 | Price vs name hierarchy | **Fixed** | Package name is now `text-2xl sm:text-3xl font-light`, price is `text-xl sm:text-2xl font-medium` — name dominant, price subordinate. Already corrected. |
| 4 | H3 font-weight 400 default | **Fixed** | `index.css` line 80-82: `h3, h4, h5, h6 { font-weight: 300; }` — already added. |
| 5 | Eyebrow tracking px → em | **Fixed** | `index.css` line 93: `.section-eyebrow` uses `tracking-[0.25em]` — already corrected. |
| 6 | Eyebrow font size 11→12px | **Fixed** | `index.css` line 93: `text-[12px]` — already corrected. |
| 8 | Nav logo weight too heavy | **Fixed** | `Nav.tsx` line 51: `font-light tracking-[0.15em]` and `text-xl` — already corrected. |

---

## Already Fixed But Audit Doesn't Know (2 more)

| # | Finding | Status |
|---|---------|--------|
| 9 | DM Sans missing weight 600 | **Fixed** | `index.css` line 1: Google Fonts import includes `wght@300;400;500;600`. |
| 7 | Hero H1 too large on mobile | **Fixed** | `Hero.tsx` line 34: `text-4xl sm:text-5xl md:text-7xl lg:text-8xl` — mobile is 36px, exactly what the audit recommends. |

---

## Remaining Item Worth Implementing (1 of 10)

### Fix 10: Border radius inconsistency

The audit identifies 6 different `rounded-*` values across the site. Our design system uses `rounded-sm` (2px) for all non-circular elements. But shadcn/ui components (accordion, dialog, select, etc.) use `rounded-md`, `rounded-lg`, `rounded-xl` by default.

**Should we implement?** Partially. The shadcn components are internal UI chrome (dropdowns, dialogs) that users rarely notice. The visible inconsistency is in custom components where `rounded-md` or `rounded-lg` snuck in. A targeted cleanup is worth doing.

**What to do:**
- Search for `rounded-md`, `rounded-lg`, `rounded-xl` in custom components (not `src/components/ui/`)
- Replace with `rounded-sm` where found
- Leave shadcn/ui defaults untouched — modifying those creates maintenance burden

---

## Verdict

**9 of 10 findings are already resolved.** The audit was run against stale code. The only actionable item is the border-radius cleanup, which is low-priority polish.

### Implementation plan:

| File | Change |
|------|--------|
| Custom components (non-ui/) | Replace `rounded-md`, `rounded-lg`, `rounded-xl` with `rounded-sm` on non-circular elements |

**Scope: ~15 min. Low risk. No logic changes.**

