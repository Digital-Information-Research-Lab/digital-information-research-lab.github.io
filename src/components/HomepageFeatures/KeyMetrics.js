import React from 'react';
import styles from './KeyMetrics.module.css';

/**
 * KeyMetrics Component
 * Displays research impact metrics from TruthMarket project
 */

const metrics = [
  {
    icon: '👥',
    value: '4,000+',
    label: 'Participants',
  },
  {
    icon: '📊',
    value: '1,250+',
    label: 'Datasets',
  },
  {
    icon: '📈',
    value: '$550K',
    label: 'NSF Grant',
  },
  {
    icon: '🎤',
    value: '6+',
    label: 'Talks',
  },
];

export default function KeyMetrics() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Research Impact</h2>
          <p className={styles.subtitle}>
            NSF-funded research platform built with Boston University and MIT
          </p>
        </div>

        <div className={styles.metricsGrid}>
          {metrics.map((metric, index) => (
            <div key={index} className={styles.metricCard}>
              <span className={styles.icon}>{metric.icon}</span>
              <span className={styles.value}>{metric.value}</span>
              <span className={styles.label}>{metric.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.techStack}>
          <h3 className={styles.techTitle}>Technology Stack</h3>
          <div className={styles.techBadges}>
            {[
              'React.js',
              'Tailwind CSS',
              'MIT Empirica',
              'GPT API',
              'Python',
              'Data Pipelines',
              'Statistical Analysis',
            ].map((tech) => (
              <span key={tech} className={styles.badge}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
