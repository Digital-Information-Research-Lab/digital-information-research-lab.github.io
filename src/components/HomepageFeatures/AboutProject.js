import React, { useState } from 'react';

export default function AboutProject() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCommunityNotesExpanded, setIsCommunityNotesExpanded] = useState(false);

  const resetToInitialState = () => {
    setIsExpanded(false);
    setIsCommunityNotesExpanded(false);
  };

  return (
    <div style={{ padding: '0rem' }}>
      <p>
        Digital marketplaces like Amazon, Alibaba, and eBay are “two sided platforms” with one side
        producing goods and services and the other side consuming them; whether that is the sale of
        advertised products on these platforms, or the consumption of information on two-sided social
        media platforms like Meta, X (Twitter), Reddit, and Bluesky. We are creating a platform to
        model such two-sided interactive marketplaces for the production and consumption of information
        and goods.

        <p>
            Our software platform bridges economic theory and user interface design, and allows us to
            explore mechanism design solutions to complex platform challenges that are impossible to study
            in the absence of human participant interactions. As a running example, we use the marketplace
            to investigate a new design solution to limit fake news and misleading information in the
            digital platforms. Our marketplace allows real human players to interact with each other in a
            gamified online simulation of real-world e-commerce conditions.
          </p>
          <p>In this interactive marketplace, participants are randomly assigned to play as either buyers or sellers.</p>

          <table>
            <thead>
              <tr><th>Human buyers</th><th>Human sellers</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Purchase products based on advertisements, aiming to maximize their utility by acquiring high-quality items within a budget, purchasing a low-quality product is considered cheated.</td>
                <td>Aim to maximize profits by producing either low or high-quality products, but all advertisements claim high quality.</td>
              </tr>
            </tbody>
          </table>

          <p>
            Just like on Amazon and eBay where consumers rate sellers after the purchase of their products,
            in our Reputation market, human players in the role of consumers can add ratings to influence
            the reputation—and likely future sales—of human players in the role of a producer.
          </p>
          <p>We are introducing an intervention market that introduces "truth warrants."</p>

          <table>
            <thead>
              <tr><th>Human buyers</th><th>Human sellers</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Challenge if they believe the claim is misleading /fake news/ misinformation.</td>
                <td>Choose to warrant their claims by escrowing collateral.</td>
              </tr>
            </tbody>
          </table>

          <p><strong>Truth Warrants</strong> are promises made by sellers about their product claims, backed by money.
            If the seller’s claim is truthful, they keep the money. If it’s false, buyers can challenge the claim
            and win the money, ensuring sellers are accountable for honesty.</p>

        {!isExpanded && (
          <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => setIsExpanded(true)}>
            {' '}Read more
          </span>
        )}
      </p>
      {isExpanded && (
        <>

          <h3>Guarantees vs. Warrants</h3>
          <table align="center">
            <thead>
              <tr><th>Feature</th><th>Guarantees ✅</th><th>Warrants ✅</th></tr>
            </thead>
            <tbody>
              <tr><td>Linked to product</td><td>✔️</td><td>❌</td></tr>
              <tr><td>Linked to specific claims about the product</td><td>❌</td><td>✔️</td></tr>
              <tr><td>Financially backed claims</td><td>Sometimes</td><td>Always</td></tr>
              <tr><td>Third-party verifiable</td><td>❌</td><td>✔️</td></tr>
            </tbody>
          </table>

          <h3 style={{ marginTop: "2rem" }}>Community Notes vs. Warrants</h3>
          <table>
                <thead>
                  <tr><th>Feature</th><th>Community Notes</th><th>Warrants</th></tr>
                </thead>
                <tbody>
                  <tr><td>Crowdsourced moderation</td><td>✔️</td><td>✔️ (via challenges)</td></tr>
                  <tr><td>Direct financial accountability</td><td>❌</td><td>✔️</td></tr>
                  <tr><td>Immediate penalty for deception</td><td>❌</td><td>✔️ (forfeited escrow)</td></tr>
                  <tr><td>Rapid verification</td><td></td><td>✔️ (rapid challenge resolution)</td></tr>
                  <tr><td>Verification</td><td>Could be biased</td><td>Never biased (Decentralized third party verification)</td></tr>
                  <tr><td>Pollution & Negative externalities</td><td>Does not solve</td><td>✔️ Solves</td></tr>
                </tbody>
              </table>
          {!isCommunityNotesExpanded && (
            <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => setIsCommunityNotesExpanded(true)}>
              {' '}Read more
            </span>
          )}
          {isCommunityNotesExpanded && (
            <>
              <h2>Why build this project?</h2>
  <p>
    In today's online marketplaces, sellers often know more about their products than buyers do.
    This imbalance lets some sellers use misleading advertisements, fake reviews, and false claims
    to trick buyers into poor decisions. As a result, buyers can feel cheated, trust breaks down,
    and overall satisfaction suffers. Our goal is to reduce this problem by creating a fairer,
    more transparent marketplace. By holding sellers accountable for their claims, we aim to
    rebuild consumer confidence and foster an online marketplace where honesty is rewarded and
    trust thrives.
  </p>

  <h2>Challenges with Existing Methods</h2>
  <h3>Why aren't existing interventions enough?</h3>
  <ul>
    <li>
      Traditional methods rely on buyers or platforms to detect dishonesty, rather than holding
      sellers accountable directly. "Traditional approaches to combating misleading claims in
      two-sided marketplaces have shown limited efficacy..." (Truth Warrants Reduce Misleading Claims on Digital Platforms, 2025).
    </li>
    <li>
      Current reputation and moderation systems can be manipulated by dishonest sellers.
      “Sellers also buy fake reviews to solve the ‘cold start’ problem…” (Truth Warrants Reduce Misleading Claims, 2025).
    </li>
    <li>
      Centralized moderation systems struggle to scale and may be biased.
      For example, Facebook (Meta) uses both AI and human moderators (https://transparency.meta.com/).
    </li>
  </ul>

  <h2>Opportunity for Real-world Testbeds</h2>
  <h3>Why run virtual lab experiments?</h3>
  <ul>
    <li>Digital experiments let us test interventions quickly and repeatedly in controlled environments.</li>
    <li>Tools like Empirica allow us to simulate and scale real-world behavior.</li>
  </ul>

  <h2>Designing Replicable Behavioral Experiments</h2>
  <h3>Why is replication important?</h3>
  <ul>
    <li>Reliable results require experiments that can be reproduced.</li>
    <li>Replicable experiments ensure interventions work across market conditions and users.</li>
  </ul>
            </>
          )}
          <div style={{ marginTop: '1rem' }}>
            <span style={{ color: 'blue', cursor: 'pointer' }} onClick={resetToInitialState}>
              {' '}Read less
            </span>
          </div>
          
        </>
      )}
    </div>
  );
}