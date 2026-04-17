import React from 'react';
import Link from '@docusaurus/Link';
import styles from './AgenticAIFocus.module.css';

/**
 * AgenticAIFocus
 *
 * Spotlights the lab's work on AI-agent marketplaces. Embeds the
 * LLM-seller-reasoning visualization at full width with framing copy
 * so visitors understand what the chart shows and why it matters,
 * before encountering the broader visualization carousel below.
 */
export default function AgenticAIFocus() {
  return (
    <section className={styles.section} id='agentic-ai'>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>FRONTIER RESEARCH</span>
          <h2 className={styles.title}>
            What happens when the sellers are AI agents?
          </h2>
          <p className={styles.lede}>
            We instrumented our marketplace so that LLM-driven sellers compete
            against each other and against human buyers. Without intervention,
            agentic sellers escalate misleading advertising and shrink consumer
            surplus. Our truth-warrant mechanism reverses both effects — and
            raises the profits of honest agents.
          </p>
        </div>

        <div className={styles.vizCard}>
          <div className={styles.vizMeta}>
            <span className={styles.vizLabel}>FEATURED ANALYSIS</span>
            <h3 className={styles.vizTitle}>
              LLM seller reasoning, production, and sales under warranty rules
            </h3>
          </div>
          <div className={styles.iframeWrapper}>
            <iframe
              src='/analysis/32_llm_reasoning_with_bars.html'
              className={styles.iframe}
              title='LLM seller reasoning with production and sales bars'
              loading='lazy'
              sandbox='allow-scripts allow-same-origin allow-popups'
            />
          </div>
          <div className={styles.takeaway}>
            <strong>Takeaway:</strong> Agentic sellers exposed to a
            truth-warrant rule shift from inflated quality claims toward
            verifiable ones. Honest agents capture market share that previously
            went to deceptive ones, without external moderation.
          </div>
        </div>

        <div className={styles.actions}>
          <Link to='/research/ai-ai-marketplace' className={styles.primaryAction}>
            Read the agentic marketplace research →
          </Link>
          <Link to='/publications' className={styles.secondaryAction}>
            See the paper
          </Link>
        </div>
      </div>
    </section>
  );
}
