# Landing Page + Publications Redesign — v2

**Date:** 2026-04-16
**Author:** Claude (Opus 4.7)
**Status:** APPROVED (user gave directives in prompt 3)
**Supersedes:** v1
**Target files:** `src/pages/index.js`, `src/pages/publications.md` → `src/pages/publications.js`, `src/components/HomepageFeatures/*`

---

## User directives (verbatim, prompt 3)

1. The project is actually using Tailwind — leave that alone (do NOT change "Tailwind CSS" badge in KeyMetrics)
2. Remove subscribe form
3. Remove dead code
4. Make the problem statement front and center
5. Focus on agentic marketplaces, use the LLM embeds in a meaningful way
6. Redesign so problem comes BEFORE features and examples
7. Look at academic product websites
8. The publications page (papers + slides) is poorly designed and needs work

## Reference research (web-design-ux rule 1)

- **Transluce** (already used as inspiration): minimal hero, abstract AI imagery, no marketing hype, categorized cards (research report / technical demonstration), date stamps for recency
- **Anthropic Research**: paper cards = `date | category tag | title` — minimal, scannable, no abstract on index, generous whitespace
- **Stanford CRFM**: thematic-pillar organization (Technical foundations / Beneficial applications / Societal impact / AI policy)

## Pattern decisions for this site

- **Cards**: `date | category | title | authors | abstract` (Anthropic+Transluce hybrid). Abstract collapsed by default for short-form scanability; click to expand.
- **Hero**: problem-forward (not solution-forward), per directive 4 + 6
- **Sections**: 7 instead of 8 (subscribe removed). Reordered so PROBLEM precedes any features/examples.

---

## Final landing page section order

```
1. Hero          ← problem statement IS the hero copy. Inline LLM-viz preview on right.
2. ProblemStatement  ← deeper-dive: PROBLEM / APPROACH / RESULT (kept, tightened)
3. AgenticAIFocus   ← NEW: framed introduction to LLM-agent marketplace work + featured viz
4. GameplayVideos   ← buyer + seller demo videos (how it works)
5. ResearchHighlights  ← three directions, with proper iconography
6. AnalysisVisualizations  ← carousel of remaining viz, with takeaways
7. KeyMetrics + Support & Partners  ← stats + funders/partners
   (SubscribeSection REMOVED)
```

Why this order:
- Hero + ProblemStatement establish *why* (directive 4, 6)
- AgenticAIFocus addresses directive 5 (featuring LLM embeds meaningfully) before the visualizations carousel — gives one chart the spotlight rather than burying it as #1 of 4
- Demos and highlights come after the *why* is established
- Metrics + partners at the bottom: credibility cap, not opening hook

---

## Concrete changes

### A. Hero rewrite (`src/pages/index.js`, `src/pages/index.module.css`)

Current title: "Decentralized governance for trustworthy digital marketplaces"
Current subtitle uses **"misinformation"** — must change.

New hero copy (problem-forward):
> **Title:** Misleading product claims are profitable when sellers can't be held accountable.
> **Subtitle:** We design and test marketplace mechanisms — including AI-agent marketplaces — that make honesty the most rewarding strategy.
> **CTA 1:** "Read our research →" (links `/research`)
> **CTA 2:** "How it works ↓" (anchor scroll to GameplayVideos)

Right side: replace the static logo with a small embedded preview of `/analysis/32_llm_reasoning_with_bars.html` in a constrained iframe (or a still SVG diagram). Communicates "agentic AI" visually without redundancy with later sections.

### B. Remove subscribe form

- Delete the `SubscribeSection` import + render in `src/pages/index.js`
- Delete `src/components/HomepageFeatures/SubscribeSection.js` and `SubscribeSection.module.css` files

### C. Remove dead code

In `src/components/HomepageFeatures/index.js`:
- Remove `import AboutProject from './AboutProject';` (line 7)
- Remove `ImpactCard` component definition (unused)
- Remove `Homepage` function (unused, renders `<AboutProject />`)
- Remove `ImpactCardData` array (unused)
- Keep `SupportCard`, `SupporterData`, `TechnologyPartnerData`, `HomepageFeatures` export

Delete orphan files (verified zero imports):
- `AboutProjectWrapper.js`
- `HomepageResearchSteps.js`
- `ResearchSteps.module.css`
- `HomepageVideo.js`
- `HomepageVideo.module.css`

KEEP `AboutProject.js` content (good writeup) — extract its valuable copy into the new ProblemStatement before deleting the file.

### D. ProblemStatement refresh

Move higher in the page (#2). Tighten copy. Add visual structure:
- Three-column or three-row layout for PROBLEM / APPROACH / RESULT
- Pull in the warrant-mechanism step diagram from `AboutProject.js` (numbered steps 1-2-3)
- Add "agentic AI" specifically into APPROACH list

Then delete `AboutProject.js` and its CSS.

### E. NEW: AgenticAIFocus section

A new section (~src/components/HomepageFeatures/AgenticAIFocus.js`) that:
- Has its own headline: "What happens when the sellers are AI agents?"
- 1-paragraph explanation linking to the "Market Design Interventions for Safer Agentic AI" paper
- Embeds the `32_llm_reasoning_with_bars.html` viz at full width with a takeaway underneath
- 2 supporting bullet findings or a small stat row

Pulls one viz out of the AnalysisVisualizations carousel and gives it spotlight treatment, addressing directive 5.

### F. Publications page redesign (`src/pages/publications.md` → `publications.js`)

Convert markdown to React. Card-based with:
```
┌─────────────────────────────────────────────────┐
│ 2024 · Conference                                │
│ Improving the Governance of Digital Platforms…   │
│ Mehta, Wiedswang, Yang, Mazar, Van Alstyne       │
│ [▸ Abstract] [PDF →] [Slides →]                  │
└─────────────────────────────────────────────────┘
```

Sections (in order):
1. **Papers** — grouped by year (2026 / 2024 / 2023 / etc.), newest first
2. **Talks** — venue + presenter
3. **Press** — outlet + date
4. **Slides** — direct links

Categories/tags shown as pills with consistent colors (per web-design-ux rule 4 — semantic):
- Conference paper → blue
- Working paper → gray
- Magazine/op-ed → amber
- Invited talk → violet

Abstracts collapsed by default; click toggles expand.

Filter/search? Skip for v1 — content list is small (~10 papers). Adding a search bar before there's a need is over-engineering (Rule on `coding-agent` line: don't add features task doesn't require).

---

## Implementation order

1. Backup current state via git status verify (no uncommitted changes)
2. Write new files (`AgenticAIFocus.js` + CSS, new `publications.js`)
3. Edit `src/pages/index.js` — new hero, remove subscribe, reorder sections, add AgenticAIFocus
4. Edit `src/pages/index.module.css` — hero adjustments
5. Edit `ProblemStatement.js` — tightened copy + warrant steps
6. Edit `HomepageFeatures/index.js` — remove dead code
7. Delete orphan files (AboutProject.js, AboutProjectWrapper.js, HomepageResearchSteps.js, HomepageVideo.js, ResearchSteps.module.css, HomepageVideo.module.css, SubscribeSection.js, SubscribeSection.module.css, AboutProject.module.css)
8. Delete `publications.md`
9. `yarn build` — must pass
10. `npx serve build -l 3500` — start serving
11. Playwright headed walkthrough of `/`, `/publications`, `/research`, `/people`, `/docs/intro` at 1440×900 + 375×812
12. Screenshots saved to `/tmp/dirl-zero-trust/evidence/`
13. Only after passing → commit + push to `deploy` branch

---

## What I will NOT change in this round

- Tailwind/tech-stack badge (per directive 1)
- The blog/research posts under `blog/`
- People page
- Navbar, footer
- CSS variables in `custom.css`
- The deployment workflow

## Risk + reversibility

- All changes contained to `src/pages/` and `src/components/HomepageFeatures/`
- Single feature commit per logical unit so anything can be reverted independently:
  - "Remove subscribe form + dead code"
  - "Redesign landing page: problem-forward + agentic AI focus"
  - "Redesign publications page"
- No new npm packages
- `react-icons` already in package.json — used for new iconography

---

## Acceptance checklist

- [ ] Hero subtitle no longer contains the word "misinformation"
- [ ] Subscribe form gone (UI + file)
- [ ] No dead exports in HomepageFeatures/index.js
- [ ] Orphan files deleted
- [ ] ProblemStatement renders #2 (right after hero)
- [ ] New AgenticAIFocus section visible
- [ ] Publications page is React component with year-grouped cards
- [ ] `yarn build` passes
- [ ] All 5 routes render without console errors at 1440×900 + 375×812
- [ ] Screenshots in `/tmp/dirl-zero-trust/evidence/`
- [ ] Commit + push to `deploy` branch
