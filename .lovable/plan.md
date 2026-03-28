

# Audit of 9 Proposed Fixes — Senior Apple UX Engineer Review

## Summary Verdict

5 of 9 prompts should be implemented. 1 must be rejected outright. 3 need modification.

---

## Prompt-by-Prompt Assessment

### Prompt 1: Dark Luxury Theme — REJECT

**Do not implement.** We explicitly rejected the dark theme in two previous audits. The rationale hasn't changed:
- The current white + warm gold system is aligned with 2026 "quiet luxury" (Aman, Peninsula Hotels, Bottega Veneta digital)
- Dark navy reads as "fintech" or "crypto dashboard," not "health concierge for HNW families"
- Switching the entire color system now would invalidate 5 rounds of carefully tuned contrast ratios, button styles, and section transitions
- The claim "gold on white reads as a spa blog" is subjective and wrong — Raffles, Four Seasons, and Hermès all use gold on white

**Verdict: REJECT. Do not implement.**

---

### Prompt 2: Replace Testimonials with Founder Promise — IMPLEMENT (modified)

**Should implement. The reasoning is correct.** Four fabricated testimonials from "The S. Family, Jakarta" are a trust liability for HNW clients who will see through placeholder content. A founder's personal statement is more honest and builds authentic credibility.

**Modification needed:** The proposed component removes the carousel but the replacement is just a static quote. Keep it simple as proposed — a single centered founder statement with gold rule accents. Remove the existing carousel dots and rotation logic entirely.

**Verdict: IMPLEMENT as proposed.**

---

### Prompt 3: Footer — Remove AI Claims + Hide Placeholder Number — IMPLEMENT

**Should implement. Both fixes are correct:**
1. "AI-assisted matching · Real-time availability · Encrypted communications" is factually false — VitaBridge has no AI, no live booking API, no E2E encryption. This was added in a previous round as a "tech signal" but it's dishonest. Remove it.
2. Displaying "+65 1234 5678" as a formatted number looks real but is a placeholder. Replacing with "Chat via WhatsApp" as a link is the right call until a real number is set.

**Verdict: IMPLEMENT as proposed.**

---

### Prompt 4: Fix Step 4 Copy — "Medical Team" → "Concierge Team" — IMPLEMENT

**Should implement. This is a legal liability fix.** The footer disclaimer says "Not a licensed medical provider" while Step 4 says "Our medical team monitors your screening results." These directly contradict each other. The proposed copy ("concierge team shares your screening report, helps coordinate") is accurate and avoids clinical language.

**Verdict: IMPLEMENT as proposed.**

---

### Prompt 5: Hero CTA Order + Subtext — IMPLEMENT (modified)

**Should implement, with one modification:**

1. **CTA swap — Yes.** "Begin Journey" as the primary gold CTA pointing to `#journey` is correct. First-time visitors need to understand VitaBridge before browsing packages. Currently the gold button says "Browse Packages" which skips the value proposition.

2. **Subtext change — Partially.** The proposed copy is better than the current generic text because it names two concrete differentiators (Indonesian-speaking team + European Wellness access). However, the current ghost CTA links to WhatsApp (`waLink(lang)`), which is correct for "Begin Journey" — change the gold CTA to `#journey` and ghost to `#marketplace` as proposed.

**Verdict: IMPLEMENT as proposed.**

---

### Prompt 6: European Wellness — Stop Sending Clients Off-Site — IMPLEMENT

**Should implement. This is a revenue-critical fix.** The current "Visit Website" button links to `european-wellness.eu` where clients can book directly, bypassing VitaBridge entirely. Replacing it with a WhatsApp enquiry captures the lead. The proposed EW-specific pre-filled WhatsApp message is well-crafted.

**Verdict: IMPLEMENT as proposed.**

---

### Prompt 7: Marketplace Value Proposition Banner — IMPLEMENT

**Should implement.** The reasoning is sound — clients comparing SGD 12,388 packages can book directly with the provider. VitaBridge never explains its value at the point of decision. A thin banner with 4 bullet points (concierge, logistics, same price, 90-day follow-up) inserted between the header and provider tabs is non-intrusive and addresses the "why book through us" question.

**Verdict: IMPLEMENT as proposed.**

---

### Prompt 8: Events — Replace with Community Waitlist — MODIFY

**Should modify, not fully replace.** The current Events section already has event-specific WhatsApp messages and capacity labels added in previous rounds. The problem the prompt identifies is real — no confirmed events exist yet. But the proposed replacement loses the specific event types (dinner, seminar, open day) and replaces them with generic category cards that say essentially the same thing but less specifically.

**Better approach:** Keep the current 3-card structure but remove the fake dates ("Q3 2026 · Singapore"). Replace dates with "Coming Soon" in all languages. Keep the event-specific WhatsApp messages (already implemented). This is a smaller, more honest change.

**Verdict: IMPLEMENT with modification — remove dates, keep card structure.**

---

### Prompt 9: Marketplace Disclaimer Repositioning — IMPLEMENT (modified)

**Should implement.** Moving the disclaimer to be more visible is correct. However, the proposed layout puts "Prices as of Q1 2026" as a separate element — this is a maintenance burden (needs updating quarterly). Better to integrate the date into the existing disclaimer text.

**Verdict: IMPLEMENT as proposed — the Q1 2026 date stamp adds useful context.**

---

## Implementation Plan

| # | Prompt | Verdict | Files |
|---|--------|---------|-------|
| 1 | Dark theme | **REJECT** | — |
| 2 | Founder promise | **IMPLEMENT** | `Testimonial.tsx`, `translations.ts` |
| 3 | Footer cleanup | **IMPLEMENT** | `Footer.tsx` |
| 4 | Step 4 copy fix | **IMPLEMENT** | `translations.ts` |
| 5 | Hero CTA + subtext | **IMPLEMENT** | `Hero.tsx`, `translations.ts` |
| 6 | EW WhatsApp CTA | **IMPLEMENT** | `EuropeanWellness.tsx` |
| 7 | Marketplace value banner | **IMPLEMENT** | `ScreeningMarketplace.tsx` |
| 8 | Events date removal | **IMPLEMENT (modified)** | `Events.tsx` |
| 9 | Disclaimer reposition | **IMPLEMENT** | `ScreeningMarketplace.tsx` |

**Total: 8 fixes across 7 files. No architectural changes. Mostly copy and className edits.**

