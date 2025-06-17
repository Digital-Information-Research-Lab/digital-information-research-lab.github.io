import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import React, { useEffect } from 'react';
import AboutProject from './AboutProject';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

/**
 * Simplified Impact Card Component
 * Shows research metrics and applications without expandable content
 */
function ImpactCard({ title, metric, icon, preview, imgSrc }) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.impactCard}>
        {/* Card Header */}
        <div className={styles.cardHeader}>
          <div className={styles.iconContainer}>
            <span className={styles.cardIcon}>{icon}</span>
            <img src={imgSrc} alt={title} className={styles.cardImage} />
          </div>
          <div className={styles.metricBadge}>
            {metric}
          </div>
        </div>

        {/* Card Content */}
        <div className={styles.cardContent}>
          <Heading as="h3" className={styles.cardTitle}>{title}</Heading>
          <p className={styles.cardPreview}>{preview}</p>
        </div>
      </div>
    </div>
  );
}

/**
 * Enhanced Homepage function that uses the new AboutProject accordion component
 * Showcases our e-commerce marketplace research with interactive content
 */
function Homepage() {
  return (
    <>
      {/* Use the new AboutProject accordion component */}
      <AboutProject />
    </>
  )
}

const ImpactCardData = [
  {
    title: 'Gamification of Market Interventions',
    metric: 'E-commerce and Social Media',
    icon: '🎮',
    imgSrc: '/img/OEVLWG0.jpg',
    preview: 'Transform economic theory into engaging behavioral simulations that reveal marketplace dynamics and platform governance challenges.'
  },
  {
    title: 'Interactive Two-Sided Experiments',
    metric: '4,000+ Participants',
    icon: '🔄',
    imgSrc: '/img/55868.jpg',
    preview: 'Real-time marketplace simulations revealing how trust mechanisms affect buyer-seller relationships in digital platforms.'
  },
  {
    title: 'Reproducible Open Science',
    metric: '10+ Experiments',
    icon: '🔬',
    imgSrc: '/img/replicablescience.jpg',
    preview: 'One-click experiment replication enabling scientific rigor and accelerating platform governance research across institutions.'
  },
];

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
      
      {/* Enhanced Impact Cards Section */}
      <section className={styles.impactSection} data-aos="zoom-in">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Research Impact & Applications</h2>
            <p className={styles.sectionSubtitle}>
              Discover how our behavioral experiments are transforming platform governance 
              and shaping policy for digital marketplaces worldwide.
            </p>
          </div>
          
          <div className="row">
            {ImpactCardData.map((card, idx) => (
              <ImpactCard key={idx} {...card} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}