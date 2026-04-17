# Lesson — Amateur Hero Design Failure

**Date:** 2026-04-17
**Severity:** Major
**Project:** digital-information-research-lab.github.io (truthmarket.com)
**Skills violated:** `web-design-ux`, `zero-trust-testing`

## What happened

I (Claude) was asked to "mainly design an improved landing page" for an academic research lab. I shipped two design failures:

1. **Amateur hand-coded SVG in the hero.** I drew a 3-node "buyer → truth-warrant → seller" diagram in inline SVG with hardcoded coordinates, circle strokes, dashed lines, and three emoji-free but visually flat text labels. The result looks like a napkin sketch, not a professional research-lab site.
2. **Duplicate agentic-AI content.** I created a new `AgenticAIFocus` section featuring the LLM-reasoning chart, but left `AnalysisVisualizations` on the page with three more LLM-related charts. Two sections conveyed the same "we have agentic AI analyses" message — redundant and diluting.
3. **Emoji icons in `KeyMetrics`.** 👥 📊 📈 🎤 above the stat cards. The user explicitly called these "bullcrap ai generated graphic icons" that "make it seem amateurish".

The user's words: *"you have a very shitty image in the hero section that should really be designed better! /skills design and /zero-trust-testing should really be giving you brutal feedback about web design more so than this is right now"*

## Why it happened

1. **I skipped the web-design-ux skill's rule 1 ("competitive research first, design second") for the hero itself.** I researched competitors for the publications page (Anthropic, Transluce, Stanford CRFM) but treated the hero as a simple layout problem instead of a design problem. I should have searched for "academic research lab hero patterns" and "force-directed graph marketplace visualization" before writing any SVG.
2. **I violated web-design-ux rule 27 ("never use random/procedural colors").** My hand-coded SVG used ad-hoc colors, stroke widths, and opacity choices with no design system backing them.
3. **I violated web-design-ux rule 37 ("first iteration should meet baseline quality").** I shipped the amateur SVG expecting "polish in a later round" instead of meeting baseline on round one.
4. **I violated coding-agent rule about minimal code AND web-design-ux rule 6 ("every visualization needs a takeaway").** The SVG communicated nothing a reader couldn't get from the headline. It was decoration pretending to be content.
5. **The zero-trust-testing skill caught zero JS errors and HTTP 200s for everything — but visual quality is not a status code.** I ran Playwright screenshots at 1440×900 and glanced at thumbnails rather than opening them at actual resolution and asking "does this look professional or amateur?" (Rule 35 of web-design-ux was written for exactly this situation, and I still ignored it.) The test passed; the design failed. The tests and the user are assessing different things.
6. **I did not reuse the "think like a designer" mindset from the project's prior prompts.** The user's `swapneel-prompts.md` log explicitly said "exhibit good design sense" and "don't overcomplicate with custom CSS" — but I both over-engineered (inline SVG I couldn't maintain) and under-designed (no visual system).

## What to do next time

Concrete habits going forward:

1. **Hero design is a design problem, not a coding problem.** Before touching any SVG, file, or component:
   - List 3+ comparable sites' heroes and screenshot/describe them (use WebFetch / screenshots)
   - Decide the design pattern in writing (typographic-only / featured card / real-product-screenshot / interactive viz)
   - ONLY THEN write code
2. **Never hand-code decorative SVG.** If a graphic is required:
   - Use a real dataviz library (D3, Observable Plot, Recharts) tied to actual data
   - Or use a real product screenshot
   - Or keep the hero typography-only
   - The hand-coded-SVG-as-decoration pattern is a reliable amateur signal
3. **Duplicate-content check before shipping.** Before merging any new landing-page section, re-read the full page section list and ask: "does any existing section convey the same message?" If yes, consolidate.
4. **No emojis in metric/stat displays in a professional / academic context.** Default to: big number (3–4 rem) in brand color + small uppercase label underneath + subtle divider lines. This is the Linear / Stripe / Anthropic pattern — it works because it's disciplined, not because it's cold.
5. **Visual verification = open the screenshot at full resolution and apply a professional/amateur smell test.** Don't just check "did the build pass / any JS errors". The question is: "if I saw this site on a competitor's page, would I think they were a credible research lab?"
6. **Assume the user is right when they call work amateur.** Don't relitigate. Document the failure, learn, and ship the fix fast.

## Specific rules to add to web-design-ux

(Flag for future skill update — writing here so the lesson isn't lost if this file gets cleaned up.)

- **Rule (proposed 48):** Never hand-code illustrative SVG diagrams for a hero. Use real data vizes, real product screenshots, or typography-only. Hand-coded decorative SVGs are a reliable amateur signal.
- **Rule (proposed 49):** Before shipping a new section, list the sections already on the page and confirm none convey the same top-line message. Duplicate messaging dilutes both sections.
- **Rule (proposed 50):** Emojis in professional/academic metric displays are an anti-pattern. Use typography + color instead.
