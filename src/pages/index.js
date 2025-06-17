import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import HomepageVideo from '../components/HomepageFeatures/HomepageVideo';

/**
 * Enhanced header component that emphasizes our mission to combat misinformation
 * in digital marketplaces through behavioral experiments.
 */
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
      <div>
          <header
            className={clsx("hero", styles.heroBanner)}
            style={{
                backgroundImage: `url(${require("@site/static/img/background8.png").default})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            >
            <div className="container">
                <h1 className={styles.heroTitle}>Platform Governance Research Lab</h1>
                <p className={styles.heroSubtitle}>
                  Combating misinformation in digital marketplaces through gamified behavioral experiments. 
                  We design two-sided platforms to study and prevent misleading claims that harm consumers and democracy.
                </p>
                <p className={styles.heroMission}>
                  Bridging economic theory and user interface design to create research-driven solutions for platform governance.
                </p>
                <div className={styles.buttons}>
                <a
                className="button button--primary button--lg"
                href="/docs/intro"
                >
                Explore Documentation
                </a>
                <a
                className="button button--secondary button--lg"
                href="/people"
                style={{ marginLeft: '1rem' }}
                >
                Meet the Team
                </a>
            </div>
            </div>
            </header>

      </div>
  );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Platform Governance Research Lab - Combating misinformation through behavioral experiments">
            <HomepageHeader/>
            <main>
                <HomepageVideo/>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
