import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import React, { useEffect } from 'react';
import AboutProject from './AboutProject';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import AutoPlayVideo from '@site/src/components/AutoPlay';

function IntroButton() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
      <Link to="/docs/intro"
        style={{
          backgroundColor: 'darkblue',
          color: 'white',
          textDecoration: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          display: 'inline-block',
        }}
      >
        Go to Documentation
      </Link>
    </div>
  );
}

function Homepage() {
  return (
    <>
      <main>
        <AboutProject />
      </main>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <p><strong>Producer</strong></p>
            <AutoPlayVideo src="/vid/h2hvid1.mp4" width="450" height="450" />
          </div>
          <div style={{ textAlign: 'center' }}>
            <p><strong>Consumer</strong></p>
            <AutoPlayVideo src="/vid/h2hvid2.mp4" width="450" height="450" />
          </div>
        </div>

      </div>
    </>
  )
}



const FeatureList = [
  {
    title: 'Gamification of Interventions',
    imgSrc: '/img/OEVLWG0.jpg',
    description: (
      <>
        Gamify economic interventions for realistic modeling of advertising and purchasing behavior by participants.
      </>
    ),
  },
  {
    title: 'Interactive Experiments',
    imgSrc: '/img/55868.jpg',
    description: (
      <>
        Our marketplace is interactive and real-time so participants can play in versus mode, simulating real-life advertising.
      </>
    ),
  },
  {
    title: 'Replicable Science',
    imgSrc: '/img/replicablescience.jpg',
    description: (
      <>
        Re-run experiments with the same settings at the click of a button, making scientific experimentation trivially reproducible.
      </>
    ),
  },
];

function Feature({ imgSrc, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx(styles.featureCard, 'text--center')}>
        <img src={imgSrc} alt={title} className={styles.featureImage} />

        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <div>
      <Homepage />
      <IntroButton />
      <section className={styles.features} data-aos="zoom-in">
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}