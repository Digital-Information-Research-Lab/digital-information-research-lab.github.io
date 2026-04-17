import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import HomepageFeatures from '@site/src/components/HomepageFeatures';
import ProblemStatement from '@site/src/components/HomepageFeatures/ProblemStatement';
import AgenticAIFocus from '@site/src/components/HomepageFeatures/AgenticAIFocus';
import GameplayVideos from '@site/src/components/HomepageFeatures/GameplayVideos';
import ResearchHighlights from '@site/src/components/HomepageFeatures/ResearchHighlights';
import AnalysisVisualizations from '@site/src/components/HomepageFeatures/AnalysisVisualizations';
import KeyMetrics from '@site/src/components/HomepageFeatures/KeyMetrics';

import styles from './index.module.css';

/**
 * Inline SVG that visualizes the marketplace mechanism: a buyer and a seller
 * (or LLM-driven seller) connected through a truth-warrant escrow. Used as
 * the hero illustration so the right column communicates *what* the lab
 * studies without needing to load a heavy chart in above-the-fold content.
 */
function MarketplaceDiagram() {
  return (
    <svg
      className={styles.heroDiagram}
      viewBox='0 0 480 360'
      xmlns='http://www.w3.org/2000/svg'
      role='img'
      aria-label='Buyer and seller connected through a truth-warrant escrow'
    >
      <defs>
        <linearGradient id='warrantGrad' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0%' stopColor='#7c3aed' />
          <stop offset='100%' stopColor='#0075c0' />
        </linearGradient>
      </defs>

      {/* Buyer node */}
      <g>
        <circle cx='80' cy='180' r='52' fill='#fafaf8' stroke='#d6d4d0' />
        <text
          x='80'
          y='176'
          textAnchor='middle'
          fontSize='13'
          fontWeight='600'
          fill='#1a1a1a'
        >
          Buyer
        </text>
        <text
          x='80'
          y='196'
          textAnchor='middle'
          fontSize='11'
          fill='#5a5a5a'
        >
          challenges claim
        </text>
      </g>

      {/* Seller node */}
      <g>
        <circle cx='400' cy='180' r='52' fill='#fafaf8' stroke='#d6d4d0' />
        <text
          x='400'
          y='176'
          textAnchor='middle'
          fontSize='13'
          fontWeight='600'
          fill='#1a1a1a'
        >
          Seller
        </text>
        <text
          x='400'
          y='196'
          textAnchor='middle'
          fontSize='11'
          fill='#5a5a5a'
        >
          human or AI agent
        </text>
      </g>

      {/* Edges */}
      <line
        x1='132'
        y1='180'
        x2='198'
        y2='180'
        stroke='#cfcdc8'
        strokeWidth='1.5'
        strokeDasharray='4 4'
      />
      <line
        x1='282'
        y1='180'
        x2='348'
        y2='180'
        stroke='#cfcdc8'
        strokeWidth='1.5'
        strokeDasharray='4 4'
      />

      {/* Center: truth warrant escrow */}
      <g>
        <rect
          x='198'
          y='130'
          width='84'
          height='100'
          rx='14'
          fill='url(#warrantGrad)'
        />
        <text
          x='240'
          y='168'
          textAnchor='middle'
          fontSize='12'
          fontWeight='700'
          fill='#ffffff'
          letterSpacing='0.04em'
        >
          TRUTH
        </text>
        <text
          x='240'
          y='186'
          textAnchor='middle'
          fontSize='12'
          fontWeight='700'
          fill='#ffffff'
          letterSpacing='0.04em'
        >
          WARRANT
        </text>
        <text
          x='240'
          y='208'
          textAnchor='middle'
          fontSize='10'
          fill='#e0d4ff'
        >
          escrow
        </text>
      </g>

      {/* Top label: claim */}
      <text
        x='240'
        y='80'
        textAnchor='middle'
        fontSize='12'
        fontWeight='600'
        fill='#5b21b6'
      >
        advertised claim
      </text>
      <path
        d='M 130 100 Q 240 50 350 100'
        fill='none'
        stroke='#a78bfa'
        strokeWidth='1.5'
      />

      {/* Bottom label: payout */}
      <text
        x='240'
        y='300'
        textAnchor='middle'
        fontSize='12'
        fontWeight='600'
        fill='#0075c0'
      >
        payout if claim is false
      </text>
      <path
        d='M 130 280 Q 240 320 350 280'
        fill='none'
        stroke='#7dd3fc'
        strokeWidth='1.5'
      />
    </svg>
  );
}

/**
 * Hero — problem-forward. The first thing a visitor reads is the failure
 * mode the lab is studying, not the lab's own positioning. Two CTAs:
 *   • Primary anchors to the problem section for visitors who want depth
 *   • Secondary jumps to the marketplace demo videos
 */
function HomepageHeader() {
  return (
    <header className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>Platform Governance Research Lab</span>
          <h1 className={styles.heroTitle}>
            Misleading product claims are profitable when sellers can't be
            held accountable.
          </h1>
          <p className={styles.heroSubtitle}>
            We design and test marketplace mechanisms — including marketplaces
            run by AI agents — that make honesty the most rewarding strategy.
          </p>

          <div className={styles.heroActions}>
            {/* Hash links use <a> rather than <Link> so Docusaurus's static
                anchor checker doesn't flag the section IDs as broken — they
                live on <section> elements rendered by child components. */}
            <a href='#problem' className={styles.heroPrimary}>
              Read the problem →
            </a>
            <a href='#agentic-ai' className={styles.heroSecondary}>
              See agentic AI work
            </a>
          </div>
        </div>

        <div className={styles.heroImageContainer}>
          <MarketplaceDiagram />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description='Platform Governance Research Lab — designing marketplaces where honest selling is the most rewarding strategy, including marketplaces run by AI agents.'
    >
      <HomepageHeader />
      <main>
        {/* Problem first — directive: problem statement front and center */}
        <ProblemStatement />
        {/* Spotlight on agentic AI work, with a featured viz */}
        <AgenticAIFocus />
        {/* How the marketplace actually plays */}
        <GameplayVideos />
        {/* Three research directions */}
        <ResearchHighlights />
        {/* Broader analysis carousel for follow-on viewing */}
        <AnalysisVisualizations />
        {/* Stats + funders/partners */}
        <KeyMetrics />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
