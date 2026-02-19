import React from 'react';
import styles from './ProblemStatement.module.css';

/**
 * ProblemStatement Component
 * Displays the research problem and approach from TruthMarket project
 */
export default function ProblemStatement() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.problemSection}>
            <h2 className={styles.problemTitle}>THE PROBLEM</h2>
            <p className={styles.problemText}>
              In real online marketplaces, misleading ads can be profitable, and
              buyers often can't tell what's true until it's too late. Our
              research asks a practical question: if you change the rules of the
              market, can you make honest selling the best strategy without
              heavy moderation?
            </p>
          </div>

          <div className={styles.approachSection}>
            <h2 className={styles.approachTitle}>OUR APPROACH</h2>
            <ul className={styles.approachList}>
              <li>
                <strong>Human vs Human</strong>: Real people act as both buyers
                and sellers in the marketplace
              </li>
              <li>
                <strong>Human vs AI</strong>: Real buyers interact with agentic
                LLM sellers that follow different selling strategies
              </li>
              <li>
                <strong>Truth Warrants</strong>: Sellers escrow money to back
                their claims — buyers can challenge false claims and win
              </li>
              <li>
                <strong>Controlled Experiments</strong>: 100+ live experiments
                comparing marketplace rule variations
              </li>
            </ul>
          </div>

          <div className={styles.resultSection}>
            <h2 className={styles.resultTitle}>THE RESULT</h2>
            <ul className={styles.resultList}>
              <li>
                Platform and findings shared at Harvard, MIT, Google, Yale, and
                Columbia
              </li>
              <li>
                Reusable marketplace testbed for experiments on advertising and
                trust with both human and AI sellers
              </li>
              <li>
                Clear evidence showing how rule changes shift seller behavior
                and improve buyer outcomes
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
