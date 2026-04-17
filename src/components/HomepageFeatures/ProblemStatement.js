import React from 'react';
import styles from './ProblemStatement.module.css';

/**
 * ProblemStatement
 *
 * Anchored as the second section of the landing page so visitors encounter
 * the *why* before any features or examples. Three blocks:
 *   1. THE PROBLEM   — short, sharp framing of the failure mode
 *   2. THE MECHANISM — three numbered steps showing how a truth warrant works
 *   3. OUR APPROACH  — the experimental program (incl. agentic AI)
 *   4. THE RESULT    — verifiable outcomes
 *
 * Copy intentionally avoids the word "misinformation" per project terminology.
 */
export default function ProblemStatement() {
  return (
    <section className={styles.section} id='problem'>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.problemSection}>
            <h2 className={styles.problemTitle}>THE PROBLEM</h2>
            <p className={styles.problemText}>
              In real online marketplaces, misleading product claims can be
              profitable, and buyers usually can't tell what's true until it's
              too late. Reputation systems and after-the-fact moderation rarely
              keep up. Our research asks a practical question: if you change
              the rules of the market, can you make honest selling the most
              rewarding strategy — without heavy moderation?
            </p>
          </div>

          <div className={styles.mechanismSection}>
            <h2 className={styles.mechanismTitle}>THE MECHANISM</h2>
            <p className={styles.mechanismLede}>
              Truth warrants let sellers escrow money to back the claims in
              their advertisements. Honest sellers signal credibility cheaply;
              dishonest sellers pay buyers when caught.
            </p>
            <ol className={styles.mechanismSteps}>
              <li>
                <span className={styles.stepNumber}>1</span>
                <div>
                  <strong>Seller advertises a claim.</strong> e.g. "this
                  product has feature X" or "high quality guaranteed".
                </div>
              </li>
              <li>
                <span className={styles.stepNumber}>2</span>
                <div>
                  <strong>Seller posts a warrant.</strong> Optionally escrows
                  money to back the specific claim.
                </div>
              </li>
              <li>
                <span className={styles.stepNumber}>3</span>
                <div>
                  <strong>Buyer can challenge.</strong> If the claim is false
                  the buyer collects the escrow. No central arbiter required.
                </div>
              </li>
            </ol>
          </div>

          <div className={styles.approachSection}>
            <h2 className={styles.approachTitle}>OUR APPROACH</h2>
            <ul className={styles.approachList}>
              <li>
                <strong>Human vs Human.</strong> Real people act as both
                buyers and sellers in a controlled marketplace.
              </li>
              <li>
                <strong>Human vs AI.</strong> Real buyers transact with
                LLM-driven sellers running different advertising strategies.
              </li>
              <li>
                <strong>AI vs AI.</strong> Large-scale simulations of agentic
                seller economies stress-test market rules at machine speed.
              </li>
              <li>
                <strong>100+ controlled experiments</strong> comparing market
                designs head-to-head — not opinion, evidence.
              </li>
            </ul>
          </div>

          <div className={styles.resultSection}>
            <h2 className={styles.resultTitle}>THE RESULT</h2>
            <ul className={styles.resultList}>
              <li>
                A reusable marketplace testbed for advertising and trust
                research with both human and AI sellers.
              </li>
              <li>
                Clear evidence that rule changes — not moderation — shift
                seller behavior and improve buyer outcomes.
              </li>
              <li>
                Findings presented at Harvard, MIT, Google, Yale, Columbia,
                Stanford, and IC2S2.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
