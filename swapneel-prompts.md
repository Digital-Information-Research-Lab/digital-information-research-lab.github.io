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