import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import ResearchHighlights from '@site/src/components/HomepageFeatures/ResearchHighlights';
import Link from '@docusaurus/Link';

import styles from './index.module.css';
import HomepageVideo from '../components/HomepageFeatures/HomepageVideo';

/**
 * Transluce-inspired hero section with split layout
 * Clean, minimalist design with text on left, illustration on right
 */
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroSection}>
      <div className={styles.heroContainer}>
        {/* Left side - Text content */}
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Decentralized governance for trustworthy digital marketplaces
          </h1>
          <p className={styles.heroSubtitle}>
            We are a research lab studying how behavioral experiments and
            economic mechanisms can combat misinformation in e-commerce
            platforms.
          </p>

          {/* Featured News Card */}
          <Link to='/research' className={styles.newsCard}>
            <span className={styles.newsLabel}>RESEARCH</span>
            <span className={styles.newsTitle}>
              Explore Our Three Marketplace Research Directions
            </span>
            <span className={styles.newsArrow}>→</span>
          </Link>
        </div>

        {/* Right side - Illustration */}
        <div className={styles.heroImageContainer}>
          <img
            src='/img/background8.png'
            alt='Platform Governance Research'
            className={styles.heroImage}
          />
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
      description='Platform Governance Research Lab - Combating misinformation through behavioral experiments'
    >
      <HomepageHeader />
      <main>
        <ResearchHighlights />
        <HomepageVideo />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
