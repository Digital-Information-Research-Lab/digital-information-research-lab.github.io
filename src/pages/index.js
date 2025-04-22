import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import HomepageResearchSteps from '../components/HomepageFeatures/HomepageResearchSteps';
import HomepageVideo from '../components/HomepageFeatures/HomepageVideo';


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
                We are a research group at Boston University, focusing on decentralized governance of marketplaces to curb misleading claims and digital harm.
                </p>
                <div className={styles.buttons}>
                <a
                className="button button--primary button--lg"
                href="/docs/intro" // <- Change this to your target page route
                >
                Explore The Docs
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
            description="Description will go into a meta tag in <head />">
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
                <HomepageVideo/>
                <HomepageResearchSteps/>
            </main>
        </Layout>
    );
}
