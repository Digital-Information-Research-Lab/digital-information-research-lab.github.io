import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import background from '../assets/background.webp';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
      <div>
          <div className="image-container">
              <img src={background} alt="background" />
          </div>
          <header className={clsx('hero hero--primary', styles.heroBanner)}>
              <div className="container">
                  <div className="title">
                      Curbing <div className="underline">misleading claims</div> through market solutions
                  </div>
                  <div className="description">
                      Our research explores how platforms can <br />
                      <div className="bold">balance</div> the rights of <div className="bold">speakers</div> and
                      <div className="bold">&nbsp;listeners</div> <br /> while
                      combating <div className="italic">dishonest assertions</div>.
                  </div>
              </div>
              <div className="container">
                  {/* Video Goes Here */}
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
            </main>
        </Layout>
    );
}
