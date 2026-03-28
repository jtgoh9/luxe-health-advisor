

# Audit of Proposed 7 Fixes

## Overall Assessment

The fixes are well-scoped and mostly correct. Here is a fix-by-fix review with issues flagged.

---

## Fix 1: Dark Luxury Theme — REJECT

**Problem**: The approved and implemented design direction is "white premium with gold accents." This fix reverts the entire color system to a dark navy theme (`#0D1117` background), which directly contradicts the approved plan. The `--gold-text` value is also changed to `39 55% 65%` (a lighter gold for dark backgrounds) — this would break the WCAG-compliant `--gold-text` we set at `39 60% 28%` for white backgrounds.

**Recommendation**: Do not apply. The current white premium theme is the approved direction. If a dark mode is desired later, implement it as a toggle using Tailwind's `dark:` variant, not a wholesale replacement.

---

## Fix 2: Compare Table — Group by Category — APPROVE WITH ADJUSTMENT

**Concept is correct**: The current compare table lists every individual test (50+ rows for high-tier packages), which is unusable. Grouping by category name is the right approach.

**Issues to fix in the proposal**:
- The proposal references `allTests` at specific line numbers that may have shifted. The actual code is at lines 47-56 and 206-218 currently — these match.
- The category-level comparison loses granularity. A user comparing Pine vs Sequoia won't see *which* tests differ within a category. Consider adding an expandable row per category that shows individual tests on click.
- Minor: `mx-auto` on the Check icon is good for centering.

**Recommendation**: Apply Change A and Change B as written. They're correct for the current codebase. Consider a follow-up to add expandable category rows.

---

## Fix 3: Remove Thailand & Vietnam — APPROVE

**All three string replacements are correct** and match the current codebase exactly (lines 12, 65, 66 in translations.ts). The replacement text is clean and properly scoped to Singapore + JB only.

**Recommendation**: Apply as-is.

---

## Fix 4: "Everything in X, plus:" Divider — APPROVE WITH MINOR FIX

**Concept is excellent**: The current styled note looks like a broken interactive element. The centred pill divider is much clearer.

**Issue**: `bg-primary/8` is not valid Tailwind syntax. Tailwind opacity modifiers use increments of 5 (e.g., `bg-primary/5`, `bg-primary/10`). This will silently fail and render no background.

**Fix**: Change `bg-primary/8` to `bg-primary/5` or `bg-primary/10`.

Also `border-primary/15` has the same issue — change to `border-primary/10` or `border-primary/20`.

**Recommendation**: Apply with the opacity values corrected.

---

## Fix 5: EW Therapy Tags Translation — APPROVE

**Correct and clean**. The hardcoded English labels at lines 17-24 of `EuropeanWellness.tsx` match the search pattern exactly. The replacement properly uses the `lang` prop that's already available in the component.

**Recommendation**: Apply as-is.

---

## Fix 6: Events with Dates & Specific WA Messages — APPROVE WITH NOTE

**Good improvements**: Adding dates and event-specific WhatsApp messages is valuable.

**Issues**:
- The import line adds `WHATSAPP` from translations, which is exported. However, the current `Events.tsx` imports `waLink` — the new version builds links manually with `WHATSAPP`. This is fine but creates two patterns for WA link generation. For consistency, could use `waLink` with a custom message parameter, but the current approach works.
- The `flex flex-col` and `mt-auto` additions for equal-height cards are good.
- Hardcoded dates ("Q3 2026", "Q4 2026") should ideally be in the translations object, but for now this is acceptable.

**Recommendation**: Apply as-is.

---

## Fix 7: Parkway Prices + Missing Package — APPROVE WITH CAUTION

**Price corrections** (625→585, 998→958, 2728→2688): These claim to be verified from Parkway's live website. The changes are small adjustments that look plausible.

**New package** (Screen Senior Comprehensive at SGD 6,388): Well-structured, fills a logical gap between Senior Executive (SGD 2,688) and Excelsior (SGD 12,388).

**Issue**: The insertion point uses a "find and replace" pattern that splices between the closing of `ps-screen-senior` and the opening of `ps-screen-excelsior`. The search pattern matches the current code correctly.

**Recommendation**: Apply. The disclaimer already covers price verification.

---

## Bonus: OG Image & Canonical — DEFER

**Correct advice**: The current OG image URL points to a Lovable preview snapshot that will break. The canonical URL `vitabridge.com` doesn't exist. However, this should only be done once a real domain and branded image are ready.

**Recommendation**: Defer until domain is registered.

---

## Summary

| Fix | Verdict | Notes |
|-----|---------|-------|
| 1. Dark theme | **REJECT** | Contradicts approved white premium direction |
| 2. Compare by category | **APPROVE** | Apply as-is, code matches |
| 3. Remove Thailand/Vietnam | **APPROVE** | Apply as-is |
| 4. Divider styling | **APPROVE** | Fix `bg-primary/8` → `bg-primary/5` and `border-primary/15` → `border-primary/10` |
| 5. EW therapy translations | **APPROVE** | Apply as-is |
| 6. Events dates + WA | **APPROVE** | Apply as-is |
| 7. Parkway prices + new pkg | **APPROVE** | Apply as-is |
| Bonus. OG meta | **DEFER** | Wait for real domain |

## Implementation Plan

Apply fixes 2-7 (skipping fix 1) in order, with the Tailwind opacity correction on fix 4. Total: 5 files modified, ~30 minutes of work.

### Files to modify:
- `src/components/ScreeningMarketplace.tsx` — Fix 2 (category-grouped compare table)
- `src/data/translations.ts` — Fix 3 (remove Thailand/Vietnam references)
- `src/components/CategoryAccordion.tsx` — Fix 4 (divider styling with corrected opacity)
- `src/components/EuropeanWellness.tsx` — Fix 5 (translated therapy tags)
- `src/components/Events.tsx` — Fix 6 (dates + event-specific WA messages)
- `src/data/providers.ts` — Fix 7 (Parkway price corrections + new package)

