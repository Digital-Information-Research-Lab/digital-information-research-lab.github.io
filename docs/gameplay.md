---
sidebar_position: 2
---

import AutoPlayVideo from '@site/src/components/AutoPlay';
import Link from '@docusaurus/Link';

# LLM Gameplay

Welcome to the gameplay workflow documentation page! Here you'll find a concise overview of our interactive digital marketplace game. This guide explains each step of the gameplay process—from. Whether you’re a new player or a developer, this page will help you understand the core mechanics and flow of the game.

## **Multiplayer Online Marketplaces**
We build two-sided marketplace games to test human behavior in online games versus other humans to model market dynamics in real time. Producers can advertise product quality honestly or decide to mislead buyers through false ads to maximize their profits. Consumers must purchase high quality products to maximize their score
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
  <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
    <div style={{ textAlign: 'center' }}>
      <p><strong>Producer</strong></p>
      <AutoPlayVideo src="/vid/pvidnew.mp4" width="450" height="450" />
    </div>
    <div style={{ textAlign: 'center' }}>
      <p><strong>Consumer</strong></p>
      <AutoPlayVideo src="/vid/cvid3.mp4" width="450" height="450" />
    </div>
  </div>
</div>

## **LLM Experience: Login and Tutorial**
Users log in by entering their unique BU ID, ensuring secure and personalized access. Once authenticated, the system launches a brief, step-by-step tutorial that guides users through the platform's core features. Checking for understanding at the end.
<div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
  <img src="/img/login.gif" alt="LLM Consumer Log In" width="374" height="256" />
  <img src="/img/prodLogin.gif" alt="LLM Producer Log In" width="374" height="256" />
</div>

---

## **LLM Experience: One Round**
In each round, players assume the role of a consumer or producer with a limited amount of money and a set time limit. They must decide quickly whether to purchase/produce products that are either warranted for their quality or unwarranted, potentially misleading options, and balancing risk and reward within their budget.
<div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
    <img src="/img/oneround.gif" alt="LLM Consumer One Round" width="374" height="256"/>
    <img src="/img/prodOne.gif" alt="LLM Producer One Round" width="374" height="256"/>
</div>

---

## **LLM Experience: Feedback Stage**
After the purchasing stage, the feedback stage kicks in with a feedback card that reveals whether you misled/were misled by product quality or advertising. It also offers an options to challenge the warrant if you're a consumer, or to change brands if you're a producer. Followed by a summary of any challenges made. Finally, the points matrix is displayed again before the next round begins.
<div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
    <img src="/img/feedback.gif" alt="LLM Consumer Log In" width="374" height="256"/>
    <img src="/img/prodfeedback.gif" alt="LLM Consumer Log In" width="374" height="256"/>
</div>
