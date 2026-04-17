# Landing Page Improvement Plan — v1

**Date:** 2026-04-16
**Author:** Claude (Opus 4.7)
**Status:** Proposal — awaiting user approval before implementation
**Target file(s):** `src/pages/index.js`, `src/pages/index.module.css`, `src/components/HomepageFeatures/*`

---

## Audit of current landing page

Sections in `src/pages/index.js` (in render order):

| # | Component | What it does | Issues observed |
|---|-----------|--------------|-----------------|
| 1 | `HomepageHeader` (inline) | Hero with title, subtitle, "Research" link card, lab logo image | (a) Subtitle uses **"misinformation"** — violates your prior instruction (prompt #3) to use "misleading product claims"; (b) right side is a static logo — does not communicate that this lab studies *marketplaces*; (c) only one CTA |
| 2 | `ResearchHighlights` | Horizontal carousel of 3 marketplace-direction cards | Card visuals are emoji placeholders (👥/🤖/🔄) inside a gradient block — feels like a draft, not finished design |
| 3 | `KeyMetrics` | 4 stats + tech-stack badges | Tech stack lists **"Tailwind CSS"** but the project does not use Tailwind (only Docusaurus's CSS modules). Inaccurate, undermines credibility |
| 4 | `GameplayVideos` | Buyer + seller MP4s side-by-side, autoplay/muted/loop | Generally good. Heavy MP4s (34 MB + 26 MB) — fine for desktop, may stutter on mobile |
| 5 | `ProblemStatement` | THE PROBLEM / OUR APPROACH / THE RESULT — text only | Comes *after* highlights/metrics/videos. A first-time visitor sees stats and demos before being told the *why*. Information architecture is inverted |
| 6 | `AnalysisVisualizations` | Carousel of 4 embedded HTML viz iframes | No takeaways under any chart — violates web-design-ux rule 6 ("every viz needs a takeaway, not just a title"). Visitors see decoration without interpretation |
| 7 | `HomepageFeatures` | Renders only "Support & Partners". Defines `ImpactCardData` and `Homepage()` but never renders them — **dead code** | Dead exports; section is ~1 row of 3 logos which feels light vs. surrounding sections |
| 8 | `SubscribeSection` | Newsletter form | Submit handler is a fake `setTimeout` — clicking "Subscribe" pretends to succeed but stores nothing. **Will mislead users and lose addresses.** Either wire to a real provider or label as "Coming soon" |

Other observations:

- **Section count = 8** which is a lot for a landing page. Each transition needs to earn its place.
- The site CSS variable system in `src/css/custom.css` is reasonably consistent (we should reuse vars rather than hardcoding new colors).
- `data-aos="fade-up"` is used on a few sections — should be applied uniformly so the scroll experience is cohesive.

---

## Proposed improvements

Grouped by tier so you can pick what to ship.

### Tier 1 — Critical fixes (low risk, high payoff)

These are bug-class issues. Recommend shipping these regardless of design direction.

1. **Fix terminology in hero** — replace "misinformation" with "misleading product claims" in `HomepageHeader` subtitle. Your prior explicit instruction (prompt #3 in `swapneel-prompts.md`).
2. **Remove "Tailwind CSS" from tech stack** in `KeyMetrics.js`. Replace with "Docusaurus" (and optionally "MDX") so the stack is truthful.
3. **Remove dead code** in `HomepageFeatures/index.js` — `ImpactCardData`, the unused `Homepage()` function, the unused `ImpactCard` component. They confuse future editors and inflate bundle size.
4. **Subscribe form: be honest** — either (a) wire to Buttondown / ConvertKit / Mailchimp, or (b) change CTA to a `mailto:` link or "Notify me when newsletter launches" with a clear note. Right now it silently discards addresses.

### Tier 2 — Information architecture

Reorder sections so the page tells a story (Problem → Approach → Evidence → Stats → Partners → Subscribe):

```
Hero (improved)
↓
ProblemStatement   ← moved up: tell visitors WHY before showing them WHAT
↓
GameplayVideos     ← moved up: the videos ARE the approach demo
↓
ResearchHighlights ← three directions as the analytical breakdown
↓
AnalysisVisualizations  ← evidence (with new takeaways)
↓
KeyMetrics         ← moved down: stats land harder *after* the work is shown
↓
HomepageFeatures   ← Support & Partners
↓
SubscribeSection
```

Why: visitors currently see "4,000+ Participants" before knowing what the participants are *doing*. The number is more meaningful when preceded by problem framing + a video of the actual platform.

### Tier 3 — Hero rebuild

Three options for the hero (right side currently just shows the lab logo at high opacity):

- **Option A — Looped silent video tile.** Use the `seller_gameplay.mp4` (compressed) as a small inline preview on the right. Pros: instantly communicates "we built a real marketplace platform." Cons: file size; one video has to be picked.
- **Option B — Animated buyer↔seller diagram.** A simple SVG showing buyer ⇄ marketplace ⇄ seller with a "truth warrant" pill in the middle. Pros: communicates the *mechanism*, stays light. Cons: need to design the SVG (~30 min).
- **Option C — Two stacked cards.** "Buyer experience / Seller experience" as small cards with thumbnails that link to GameplayVideos section. Pros: signals the dual-sided nature; clickable. Cons: more dense.

**Recommended: Option B (SVG diagram)** — most communicative, lightest payload, no MP4 redundancy with GameplayVideos below. Falls back gracefully on mobile.

Also for the hero text:

- Tighter title: keep "Decentralized governance for trustworthy digital marketplaces" or shorten to **"Honest selling, by design."** with a one-line subtitle. Recommend keeping the current title (already strong) and just fixing the subtitle.
- Add **two CTAs** instead of one: "Read our research →" and "Watch a 30-sec demo ↓" (anchor-scroll to GameplayVideos).

### Tier 4 — Visualization takeaways

For `AnalysisVisualizations`, add a 1-2 sentence takeaway *below* each iframe (not inside it). Pattern:

> **What this shows:** [one sentence orienting the reader]
> **Takeaway:** [one sentence with the finding, hedged appropriately]

The component data array already has `title`. Extend to `{ id, title, what, takeaway, path }`. Renders under the iframe. Requires you to write the four takeaways (or I can draft them from looking at each viz HTML for review).

### Tier 5 — Polish

- Replace emoji icons in `ResearchHighlights` cards (👥/🤖/🔄) with simple `react-icons` (e.g., `Hi2.HiUserGroup`, `Hi2.HiCpuChip`, `Hi2.HiArrowsRightLeft`). Keeps tone academic/professional.
- Apply `data-aos="fade-up"` consistently across all sections.
- Add `loading="lazy"` and `preload="metadata"` to `<video>` tags in GameplayVideos to delay autoplay until in view (saves initial bandwidth).
- Compress the two MP4s (currently 34 MB + 26 MB) — leave for a follow-up; not blocking.

---

## What I will NOT change without explicit ask

- The blog/research posts under `blog/2026-01-*`.
- The People page.
- Site navbar, footer, CSS variables (unless required by a section change).
- The deployment workflow.

---

## Risk + reversibility

- All changes are isolated to `src/pages/index.js` and the `HomepageFeatures/` folder.
- Each tier ships as one commit so any tier can be reverted independently.
- No dependency changes (no new npm packages) for tiers 1–4. Tier 5 uses `react-icons` which is already in `package.json`.

---

## Test plan (per `zero-trust-testing` skill)

After changes:

1. `yarn build` must complete with zero errors.
2. `npx serve build -l 3500` then navigate Playwright (headed, viewport 1440×900) through:
   - `/` — verify all 8 sections render, no React error overlay, scroll through, screenshot each section
   - `/research` — landing of blog
   - `/people`, `/publications`, `/docs/intro` — make sure I haven't broken anything tangential
3. Re-test at mobile viewport (375×812).
4. Check console for warnings (especially React hooks rules, hydration mismatches).
5. Verify `seller_gameplay.mp4` and `buyer_gameplay.mp4` actually load (200 status).
6. Only then commit + push to `deploy` branch.

---

## Question for you before I start

Which tiers should I ship in this round?

- [ ] Tier 1 only (critical fixes — ~15 min, lowest risk, immediate honesty improvements)
- [ ] Tier 1 + Tier 2 (fixes + reorder — ~30 min, biggest narrative impact)
- [ ] Tier 1 + 2 + 3 (above + new hero — ~1 hr, biggest visual impact; recommend Option B)
- [ ] Tier 1 + 2 + 3 + 4 (full redesign minus polish — ~1.5 hr; need your draft of viz takeaways or my best-effort drafts for review)
- [ ] All five tiers (~2 hr total)

Also need a decision on:

- **Subscribe form**: keep as-is (silent discard), wire to a provider (which one?), or temporarily replace with a `mailto:` link?
- **Hero option**: A (video), B (SVG diagram — recommended), or C (two cards)?

I will not touch any code until you reply with a tier choice + the two decisions above.
