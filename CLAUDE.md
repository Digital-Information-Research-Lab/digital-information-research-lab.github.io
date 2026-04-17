# CLAUDE.md

Guidance for Claude Code when working in this repo.

## Project

**Platform Governance Research Lab** website (formerly "Digital Information Research Lab"). Live at <https://truthmarket.com>. Showcases behavioral experiments on misleading product claims in two-sided digital marketplaces (human–human, human–AI, AI–AI).

## Stack

- **Docusaurus 3.9** (classic preset) on **React 19**
- **Yarn** package manager, **Node ≥ 18** (CI uses Node 24)
- Animations: `aos`, `framer-motion`. Flow diagrams: `@xyflow/react`, `reactflow`. Icons: `react-icons`.
- No TypeScript, no test framework configured.

## Repo layout

| Path | Purpose |
|------|---------|
| `src/pages/index.js` | Landing page composition (hero + ordered sections) |
| `src/pages/index.module.css` | Landing-page-specific styles |
| `src/pages/people.js`, `publications.js` | Other top-level pages |
| `src/components/HomepageFeatures/` | All landing-page section components (one folder, many files) |
| `src/components/people/` | People page subcomponents |
| `src/theme/Footer/` | Swizzled Docusaurus footer |
| `src/css/custom.css` | Site-wide CSS variables and base styles |
| `src/data/people/*.json` | People data (PI, postdoc, grad, undergrad) |
| `docs/` | Markdown documentation (routed under `/docs`) |
| `blog/` | Blog/research posts (routed under `/research` per `routeBasePath`) |
| `static/` | Static assets — `img/`, `headshot/`, `vid/`, `analysis/` HTML embeds |
| `docusaurus.config.js` | Site config: title, navbar, footer, deployment branch |

## Local development

```bash
yarn                                  # install
yarn start                            # dev server with hot reload
yarn build                            # production build → ./build
yarn build --out-dir ./_site          # production build (CI uses this)
npx serve build                       # serve production build locally
```

## Deployment

**Push to the `deploy` branch triggers GitHub Pages deployment automatically** via `.github/workflows/node-gh-pages.yml`:

1. Checkout → setup Node 24 → `yarn --frozen-lockfile`
2. `yarn build --out-dir ./_site`
3. Sanity check `./_site/index.html` exists
4. Upload artifact → deploy to GitHub Pages → published at <https://truthmarket.com>

Do **not** use `yarn deploy` — the GitHub Action handles publication. Just push to `deploy`.

## Working rules (from `~/.claude/skills/coding-agent`)

- Log every raw user prompt to `swapneel-raw-prompts.md` at the start of processing.
- Maintain a structured changelog in `swapneel-prompts.md` after each task completion.
- Plan in `scratchpad/` (versioned: `v1`, `v2`, …) before implementing non-trivial changes.
- Build + serve + Playwright-verify every route locally before pushing. Build-pass is not the same as working app.
- Commit and push prompt-log + code together — prompt/commit pairs are training data.
- Never commit `.env` files, API keys, or secrets. `.gitignore` already covers `.env*`.

## Landing page architecture

`src/pages/index.js` composes sections in this order (problem-first):

1. `HomepageHeader` (inline) — split-layout hero with inline `MarketplaceDiagram` SVG; problem-forward copy
2. `ProblemStatement` — PROBLEM / MECHANISM (3-step warrant) / APPROACH / RESULT
3. `AgenticAIFocus` — featured LLM viz (`static/analysis/32_*.html`) framing the agentic-AI work
4. `GameplayVideos` — buyer/seller experiment demo MP4s
5. `ResearchHighlights` — three marketplace research directions
6. `AnalysisVisualizations` — carousel of remaining embedded charts (32 lives solo in AgenticAIFocus)
7. `KeyMetrics` — quantitative stats + tech stack
8. `HomepageFeatures` — Support & Partners (NSF, BU DBI, Empirica)

Each section lives in its own file with a paired `*.module.css`. Reuse this pattern for new sections — do not collapse multiple sections into one mega-component.

`AboutProject.js` is unused on the homepage but kept because `docs/intro.md` imports it (`<AboutProject />` accordion). Don't delete without updating `docs/intro.md`.

Hash-anchor links inside the homepage (e.g. `#problem`, `#agentic-ai`) use raw `<a>` tags rather than Docusaurus's `<Link>` so the static anchor checker doesn't warn — section IDs live on `<section>` elements rendered by child components, which the static checker can't see.

## Style conventions observed in the codebase

- Module CSS (`*.module.css`) per component — never global CSS
- AOS scroll animations on section reveals (`data-aos="fade-up"`)
- Card-based layouts via Docusaurus's `row` / `col col--4` utility classes
- Light theme only (`colorMode.disableSwitch: true`)
- Terminology: use **"misleading product claims"** and **"advertisements"**, not "misinformation"

## Known facts to preserve

- NSF award amount: **$550,000**
- Active funder: National Science Foundation
- Institutional support: Boston University Digital Business Institute
- Technology partner: Empirica (MIT)
- Three research directions: human–human, human–AI, AI–AI marketplaces (see `blog/2026-01-*` posts)
