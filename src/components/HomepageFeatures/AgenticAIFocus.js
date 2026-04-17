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
            We instrumented our marketplace so that LLM-driven sellers
            compete against each other and against human buyers. Without any
            intervention, the agents escalate misleading advertising and
            shrink consumer surplus. A truth-warrant rule reverses both
            effects, and raises the profits of honest agents in the
            process.
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
            <strong>Takeaway:</strong> Agents exposed to a truth-warrant
            rule shift from inflated quality claims to verifiable ones.
            Honest agents then capture the market share that used to go to
            deceptive competitors, without any external moderation.
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

        {/* Featured companion work: the sunburst makes the seller-strategy
            landscape legible for HUMAN sellers. Pairing it with the LLM
            chart above lets a reader see how strategy distributions shift
            when the same marketplace is populated by AI agents instead. */}
        <a
          href='https://venna20.github.io/Visualizing-How-Players-Think-in-a-Digital-Marketplace-Experiment/'
          target='_blank'
          rel='noopener noreferrer'
          className={styles.companionCard}
        >
          <div className={styles.companionThumb}>
            <img
              src='/img/sunburst-seller-strategies.png'
              alt='Sunburst of 161 human sellers across four market variants, color-coded by strategy'
              loading='lazy'
            />
          </div>
          <div className={styles.companionBody}>
            <span className={styles.companionLabel}>COMPANION ANALYSIS</span>
            <h3 className={styles.companionTitle}>
              How 161 human sellers think across four markets
            </h3>
            <p className={styles.companionText}>
              An interactive D3 sunburst from our collaborator{' '}
              <strong>Venna Patel</strong> maps every seller's strategy mix
              over four weeks of play, with hover tooltips that surface
              their own exit-survey words. Explore the full interactive
              version on her site.
            </p>
            <span className={styles.companionCta}>
              Open the interactive visualization ↗
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
