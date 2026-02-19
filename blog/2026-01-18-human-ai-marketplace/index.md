---
slug: human-ai-marketplace
title: "Human-AI Marketplace: Studying Agentic LLM Sellers in E-Commerce"
authors: [pgrl]
tags: [research, marketplace, human-ai, artificial-intelligence, llm, agentic-ai]
description: "NSF-funded research studying misleading ads through human buyers and agentic LLM seller interactions in controlled marketplace experiments."
---

# Human-AI Marketplace Research

Our Human-AI marketplace research investigates what happens when real human buyers interact with AI-powered sellers in controlled e-commerce experiments. This research direction builds on our foundational Human-Human marketplace work to understand how agentic LLM sellers behave, deceive, and respond to market incentives.

<!-- truncate -->

## The Problem

In real online marketplaces, misleading ads can be profitable, and buyers often can't tell what's true until it's too late. As AI systems increasingly generate product listings and advertisements, understanding their behavior becomes critical. Our research asks: **if you change the rules of the market, can you make honest selling the best strategy—even for AI agents?**

## Experiment Design

### Human vs AI Marketplace Configuration

Real human buyers interact with agentic LLM sellers that follow different selling strategies:

- **Honest Strategy**: AI sellers accurately represent product quality
- **Deceptive Strategy**: AI sellers may mislead to maximize short-term profit
- **Adaptive Strategy**: AI sellers respond to market feedback and reputation signals

<div style={{display: 'flex', gap: '1rem', margin: '2rem 0', flexWrap: 'wrap'}}>
  <div style={{flex: 1, minWidth: '300px'}}>
    <h4 style={{textAlign: 'center', color: '#0075c0'}}>SELLER GAMEPLAY</h4>
    <video 
      src="/vid/seller_gameplay.mp4" 
      autoPlay 
      muted 
      loop 
      playsInline
      style={{width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}
    />
    <p style={{fontSize: '0.9rem', color: '#666', textAlign: 'center', marginTop: '0.5rem'}}>
      Sellers create listings, set prices, and decide whether to stake claims
    </p>
  </div>
  <div style={{flex: 1, minWidth: '300px'}}>
    <h4 style={{textAlign: 'center', color: '#0075c0'}}>BUYER GAMEPLAY</h4>
    <video 
      src="/vid/buyer_gameplay.mp4" 
      autoPlay 
      muted 
      loop 
      playsInline
      style={{width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}
    />
    <p style={{fontSize: '0.9rem', color: '#666', textAlign: 'center', marginTop: '0.5rem'}}>
      Buyers browse listings, compare sellers, and can challenge misleading claims
    </p>
  </div>
</div>

## Key Research Questions

1. **Do LLM sellers increase deception rates?**
   - How do AI-generated advertisements compare to human-written ones?
   - What types of misleading claims do LLMs tend to generate?

2. **Can Truth Warrants work for AI sellers?**
   - Do staking mechanisms reduce AI deception the same way they do for humans?
   - How do LLMs reason about risk vs. reward when stakes are involved?

3. **How do buyers respond to AI sellers?**
   - Can buyers distinguish AI-generated from human-generated listings?
   - Does knowing a seller is AI change buyer behavior?

## Interactive Analysis Results

Explore our experiment results through interactive visualizations. Hover, click, or scroll to dive into the data.

*Credits: Vedant Kejariwal, Harshaveena Komatineni, Swapneel Mehta, Quang Nguyen & Team.*

### LLM Seller Reasoning Analysis

This visualization shows how LLM sellers reason about production and sales decisions across different market conditions:

<div style={{width: '100%', height: '700px', borderRadius: '12px', overflow: 'hidden', border: '2px solid rgba(16, 185, 129, 0.2)', marginBottom: '2rem'}}>
  <iframe 
    src="/analysis/32_llm_reasoning_with_bars.html"
    style={{width: '100%', height: '100%', border: 'none'}}
    title="LLM Seller Reasoning with Production/Sales Bars"
    loading="lazy"
  />
</div>

### Brand Change Reasoning Quadrant

Analyzing how sellers change their branding strategies based on market feedback:

<div style={{width: '100%', height: '700px', borderRadius: '12px', overflow: 'hidden', border: '2px solid rgba(16, 185, 129, 0.2)', marginBottom: '2rem'}}>
  <iframe 
    src="/analysis/31_brand_change_reasoning_quadrant.html"
    style={{width: '100%', height: '100%', border: 'none'}}
    title="Brand Change Reasoning Quadrant"
    loading="lazy"
  />
</div>

### Irrational Production Dashboard

Identifying patterns of irrational production decisions:

<div style={{width: '100%', height: '700px', borderRadius: '12px', overflow: 'hidden', border: '2px solid rgba(16, 185, 129, 0.2)', marginBottom: '2rem'}}>
  <iframe 
    src="/analysis/29_irrational_production_dashboard.html"
    style={{width: '100%', height: '100%', border: 'none'}}
    title="Irrational Production Dashboard"
    loading="lazy"
  />
</div>

### Exit Strategy Analysis

Understanding how sellers exit the market under different conditions:

<div style={{width: '100%', height: '700px', borderRadius: '12px', overflow: 'hidden', border: '2px solid rgba(16, 185, 129, 0.2)', marginBottom: '2rem'}}>
  <iframe 
    src="/analysis/27_exit_sankey_strategy_rep_with_stake.html"
    style={{width: '100%', height: '100%', border: 'none'}}
    title="Exit Sankey Strategy with Stake"
    loading="lazy"
  />
</div>

## Key Findings

Our experiments have revealed important insights about AI behavior in marketplaces:

| Finding | Implication |
|---------|-------------|
| LLM sellers can generate convincing misleading ads | Platforms need AI-specific content moderation |
| Staking mechanisms reduce AI deception | Economic incentives work for AI agents too |
| Buyers struggle to identify AI-generated content | Disclosure requirements may be necessary |
| AI sellers adapt to reputation signals | Reputation systems remain effective |

## Research Impact

<div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', margin: '2rem 0', textAlign: 'center'}}>
  <div>
    <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#0075c0'}}>4,000+</div>
    <div style={{fontSize: '0.875rem', color: '#666'}}>Participants</div>
  </div>
  <div>
    <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#0075c0'}}>1,250+</div>
    <div style={{fontSize: '0.875rem', color: '#666'}}>Datasets</div>
  </div>
  <div>
    <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#0075c0'}}>$550K</div>
    <div style={{fontSize: '0.875rem', color: '#666'}}>NSF Grant</div>
  </div>
  <div>
    <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#0075c0'}}>6+</div>
    <div style={{fontSize: '0.875rem', color: '#666'}}>Talks</div>
  </div>
</div>

## Technology Stack

Our platform combines multiple technologies:

- **React.js** + **Tailwind CSS** for the marketplace UI
- **MIT Empirica** for experiment orchestration
- **GPT API** for agentic seller behavior
- **Python** for data pipelines and statistical analysis

## Related Publications

- [Market Design Interventions for Safer Agentic AI](/publications) - Studying how truth warrants affect LLM seller behavior
- [Improving the Governance of Digital Platforms with Interactive Marketplace Experiments](/publications) - IC2S2 2024 presentation

## Get Involved

Interested in participating in our Human-AI marketplace research or accessing our datasets? [Contact us](/people) to learn more.

---

*This research is supported by the National Science Foundation and builds on our foundational [Human-Human marketplace](/research/human-human-marketplace) work.*
