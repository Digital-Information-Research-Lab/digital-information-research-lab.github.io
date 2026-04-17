import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import HomepageFeatures from '@site/src/components/HomepageFeatures';
import ProblemStatement from '@site/src/components/HomepageFeatures/ProblemStatement';
import AgenticAIFocus from '@site/src/components/HomepageFeatures/AgenticAIFocus';
import GameplayVideos from '@site/src/components/HomepageFeatures/GameplayVideos';
import KeyMetrics from '@site/src/components/HomepageFeatures/KeyMetrics';
import MarketplaceNetwork from '@site/src/components/HomepageFeatures/MarketplaceNetwork';

import styles from './index.module.css';

/**
 * Hero is problem-forward. Visitors read the failure mode the lab studies
 * before they encounter features or metrics. Two CTAs: scroll to the
 * problem section, or jump to the agentic-AI work.
 */
function HomepageHeader() {
  return (
    <header className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>
            Platform Governance Research Lab
          </span>
          <h1 className={styles.heroTitle}>
            Misleading product claims are profitable when sellers can't be
            held accountable.
          </h1>
          <p className={styles.heroSubtitle}>
            We design and test marketplace mechanisms, including ones run by
            AI agents, that make honesty the most rewarding strategy.
          </p>

          <div className={styles.heroActions}>
            <a href='#problem' className={styles.heroPrimary}>
              Read the problem →
            </a>
            <a href='#agentic-ai' className={styles.heroSecondary}>
              See agentic AI work
            </a>
          </div>
        </div>

        <div className={styles.heroImageContainer}>
          <MarketplaceNetwork />
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
      description='Platform Governance Research Lab. We design and test marketplace mechanisms, including ones run by AI agents, that make honesty the most rewarding strategy.'
    >
      <HomepageHeader />
      <main>
        {/* Numbers right below the hero, as most research sites do */}
        <KeyMetrics />
        {/* The why */}
        <ProblemStatement />
        {/* How the marketplace actually plays */}
        <GameplayVideos />
        {/* What happens when sellers are AI agents */}
        <AgenticAIFocus />
        {/* Support & Partners close the page */}
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
