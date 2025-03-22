import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import HomepageResearchSteps from '../components/HomepageFeatures/HomepageResearchSteps';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
      <div>
          {/* <div className="image-container">
              <img src={require('@site/static/img/background.webp').default} alt="background" />
              <h1 className="overlayText">Platform Governance Research Lab</h1>
          </div> */}
          <header
            className={clsx("hero", styles.heroBanner)}
            style={{
                backgroundImage: `url(${require("@site/static/img/background.webp").default})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            >
            <div className="container">
                <h1 className={styles.heroTitle}>Platform Governance Research Lab</h1>
                <p className={styles.heroSubtitle}>
                Curbing <strong>misleading claims</strong> through market solutions
                </p>
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
            description="Description will go into a meta tag in <head />">
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
                <HomepageResearchSteps/>
            </main>
        </Layout>
    );
}
