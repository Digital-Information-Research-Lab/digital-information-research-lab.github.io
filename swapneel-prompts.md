# List of Prompts used in Editing the Landing page

It is a new kind of best-practice to capture the process of creation of AI-generated code so we can revisit specifics, identify logical gaps, perform root cause analyziz (arguably fuzzy since LLMs are stochastic parrots), and ultimately learn to iteratively improve our software development processes. I divide these into two sections broadly, first the individual primary prompts, and next the troubleshooting secondary prompts that I employ in arriving at my desired outcome for the website layout.

## 1

Compose a PRD for the landing page that reuses the content on the current landing page but lays it out in a responsive, modular fashion with the demo videos that are clearly visible and readable by visitors on the page. Currently, the issue I find with this website which is hosted at the web URL @https://truthmarket.com (visit the page and review it) is that it highlights neither our technical contributions nor a demo video of our two-sided marketplace very clearly (in fact there are four such videos). 

So I want you to write out a PRD that will allow me to refactor the landing page of this website in a manner that is similar to the layout of @https://atlasgo.io. You may visit the page and understand how the code is structured using HTMl and JS source files so that you can use the basic structure from docusaurus to build a similar set of steps for the <HomePageResearchSteps> section in @HomepageResearchSteps.js so that it is rendered more neatly and in a visually appealing manner. 

Do not overcomplicate the code. Keep it modular and do not overcomplicate the design with too much custom CSS. I want it to remain extensible and well documented so that a new designer can take over and adapt the site to be better. But first lay out the plan in a PRD before making any changes so that I understand and approve all of the landing page changes to make this more reflective of our behavioral experiments. Use the page content to understand the purpose of our research and accordingly build a new plan for a landing page update.

## 2

Approved, continue to implement the step by step plan starting with Phase 1. Ensure the code you write is documented, minimal, modular, and clear to read and extend. Use standard libraries and double check any additional imports required to make them run. Check for any bugs arising from incorrect logical structure or overcomplicated CSS and simplify it while keeping the design visually appealing. Too many colors are not helpful, thoughtful design to convey the behavioral experimentation aspect in two-sided marketplaces is important. Mitigating false and misleading advertisements should be the front and center message of the platform. Update the plan and then start implementation.


## 3

Update the "What are we building" titled section to make it clear what the goals of the study are and ensure you do not use the term "misinformation" but rather use the term "misleading product claims" and "advertisements" where appropriate since this is an e-commerce marketplace that we want to showcase. Make this section more appealing with the use of css and js components using standard elements that site visitors can interact with to learn more about the experiment. For example an accordion with the same color scheme as the site, in light tones, can be an easy way for users to learn more about the site without being exposed to too much content upon visiting. A popup on-click would also work. But don't just take me at my word, explore what other websites have done and accordingly create a list of options to design this section and share more information about our marketplace with potential visitors. Make your own decision about how to design the website and exhibit good design sense in doing so. Think carefully and propose some options. 

# 4 

I would like you to use the "Buy Advertised Products" video and the "Sell advertised product" video in the corresponding place of the "Consumer Experience" and "Producer experience" sections respectively. The current videos are incorrect in the hero section. Instead use the videos in the section below and associate the correct video to these sections specific to the consumer and producer as indicated.  If you can allow the videos to be expanded by a user that would be great. But don't use too much custom CSS because I want it to remain standard, modular, and extensible. So think carefully and implement it. Then you can rmove the "See Our Marketplace in Action" section completely.


# 5 

Suggest improvements for the section including "Gamification of Interventions", "Interactive Experiments", and "Replicable Science". Take a look at @https://docusaurus.io/showcase to generate ideas. Explore deeply and lean on a refined web design sense to generate unique suggestions inspired to showcase academic impact and potential application to two sided marketplaces and social media (which is also a two sided marketplace). Suggest ideas below.

Let's start by implementing impact cards, and then propose improvements for "Supported By" and "Technology Partners" as well so that we can showcase our broader support and collaborations.


### Troubleshooting

1. This looks good but why can't I see it reflected on the landing page? I see you've added it into the docs/intro page which is not where these accordions should be. Move them to the landing page or home page that is loaded when you visit https://truthmarket.com

2. Can you expand the accordion section to be wider on wider screens and mobile responsive to be narrower on smaller screens using modular components and standard libraries?

3. Some of the new changes are irrelevant. Remove these:

```
Open Source
Docusaurus
Documentation & Website Platform

🤝
Research Collaborations
M
Active Collaboration
MIT Platform Governance Lab
Cross-institutional Research Partnership

H
3 Joint Papers
Harvard Business School
```

    But update the UI for the rest by relying on clean and modern elements with a thoughtful layout

4. Why didn't you remove the rest of the older sections? Replicable Behavioral Experimentation, Supported By, and Technology partners?

    And the NSF award is $550,000 please update that.

---

### Prompt 6 — 2026-04-16
"can you confirm from the readme how this site works and can be pushed to the repo? … /init with rules strictly followed from /coding-agent skill … design an improvved landing page" + follow-ups: "create the claude.md file too please" / "The project is actually using tailwind it's fine / remove subscribe form / remove dead code / make the problem statement front and center / focus on agentic marketplaces as well using the nice LLM embeds in a meaningful way / redesign the site so that it presents the problem clearly before features and examples. … the literature where we link papers and slides is such a poorly designed page that needs work"

**TL;DR:** Documented deployment, redesigned the landing page so the problem statement comes before features, added a dedicated Agentic-AI section featuring the LLM-reasoning viz, removed the silent-discard subscribe form and dead code, and rebuilt the publications page from a markdown bullet list into a structured React page with year-grouped paper cards, talks, and press.

**Files changed:**
- `CLAUDE.md` — [NEW] codebase guide: stack, deployment workflow (push to `deploy` branch triggers `node-gh-pages.yml`), landing page architecture
- `swapneel-raw-prompts.md` — [NEW] raw prompt log per coding-agent rule 15
- `scratchpad/landing-page-redesign-v1.md` — [NEW] initial audit + tiered options
- `scratchpad/landing-page-redesign-v2.md` — [NEW] approved plan reflecting user directives (problem-forward, remove subscribe + dead code, agentic AI focus, publications redesign)
- `src/pages/index.js` — rewritten hero (problem-forward title, two CTAs, inline `MarketplaceDiagram` SVG); reordered sections so `ProblemStatement` is #2 and `AgenticAIFocus` is #3; removed `SubscribeSection`
- `src/pages/index.module.css` — new hero styles (eyebrow, two-action button row, SVG diagram container, mobile responsive)
- `src/pages/publications.js` — [NEW] React rewrite of publications page: card layout (`date | category | title | authors | abstract`), year-grouped papers, separate Talks and Press sections, expandable abstracts, color-coded category pills
- `src/pages/publications.module.css` — [NEW] supporting styles
- `src/pages/publications.md` — [DELETED] replaced by publications.js
- `src/components/HomepageFeatures/AgenticAIFocus.js` — [NEW] spotlight section featuring `32_llm_reasoning_with_bars.html` with framing copy and takeaway
- `src/components/HomepageFeatures/AgenticAIFocus.module.css` — [NEW]
- `src/components/HomepageFeatures/ProblemStatement.js` — added MECHANISM block with 3 numbered warrant steps; added "AI vs AI" to APPROACH list
- `src/components/HomepageFeatures/ProblemStatement.module.css` — added mechanism step styling (purple, grid layout, mobile responsive)
- `src/components/HomepageFeatures/AnalysisVisualizations.js` — removed `32_llm_reasoning_with_bars` from carousel (now lives in AgenticAIFocus to avoid duplication)
- `src/components/HomepageFeatures/index.js` — removed dead `Homepage()`, `ImpactCard`, `ImpactCardData`; collapsed Support + Tech-Partners into one section
- `src/components/HomepageFeatures/SubscribeSection.{js,module.css}` — [DELETED] silent-discard form removed per user directive
- `src/components/HomepageFeatures/AboutProjectWrapper.js` — [DELETED] orphan
- `src/components/HomepageFeatures/HomepageResearchSteps.js` — [DELETED] orphan
- `src/components/HomepageFeatures/ResearchSteps.module.css` — [DELETED] orphan
- `src/components/HomepageFeatures/HomepageVideo.{js,module.css}` — [DELETED] orphan

**Key decisions:**
- Kept `AboutProject.js` despite removing it from the homepage — `docs/intro.md` still imports it. Restored after initial deletion broke the docs build.
- Kept "Tailwind CSS" badge in `KeyMetrics` per explicit user direction (overrode my earlier audit finding).
- Used inline SVG (~120 lines) for the hero illustration instead of an iframe — embedding a 207 KB chart above-the-fold would have hurt LCP. The chart still gets full prominence in `AgenticAIFocus` below.
- Hash-anchor CTAs (`#problem`, `#agentic-ai`, `#papers`) use raw `<a>` rather than `<Link to="...">` so Docusaurus's static anchor checker doesn't warn (it can't see `id` attributes on `<section>` elements).
- Pulled the LLM viz `32_*` out of the AnalysisVisualizations carousel and gave it solo treatment in AgenticAIFocus — addresses directive "use LLM embeds in a meaningful way" rather than burying as #1 of 4.
- Reference research (per web-design-ux skill rule 1): Anthropic Research (date | tag | title cards), Transluce (minimal hero + categorized cards), Stanford CRFM (thematic pillar organization).

**Errors encountered:**
- Initial deletion of `AboutProject.js` broke the build because `docs/intro.md` imports it. Restored from `git checkout HEAD --`.
- Build emitted Docusaurus broken-anchor warnings for `#problem`, `#agentic-ai`, `#papers`, `#talks`, `#press`. Resolved by switching from `<Link to="#…">` to raw `<a href="#…">`.

**Verification:**
- `yarn build` passes (74s).
- Playwright headed-style scripted test: 5 routes (`/`, `/publications`, `/research`, `/people`, `/docs/intro`) × 2 viewports (1440×900, 375×812) = 10 combinations, all returned 200 with zero JS console errors. Screenshots in `/tmp/dirl-zero-trust/evidence/`.
- Verified the word "misinformation" is no longer in the hero subtitle. SubscribeSection text "Subscribe to receive monthly research" no longer appears anywhere on `/`.
