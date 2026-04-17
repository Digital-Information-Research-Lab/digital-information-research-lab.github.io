import React from 'react';
import styles from './KeyMetrics.module.css';

/**
 * KeyMetrics lives directly below the hero. Numbers only, typography-first.
 * No icons: the research-impact section on a professional academic site
 * should let the numbers carry the weight.
 */

const METRICS = [
  { value: '4,000+', label: 'Study participants' },
  { value: '1,250+', label: 'Experiment datasets' },
  { value: '$550K',  label: 'NSF grant' },
  { value: '8',      label: 'Invited talks' },
];

export default function KeyMetrics() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.metricsRow}>
          {METRICS.map((m, i) => (
            <div key={m.label} className={styles.metric}>
              <span className={styles.value}>{m.value}</span>
              <span className={styles.label}>{m.label}</span>
            </div>
          ))}
        </div>
        <p className={styles.caption}>
          Research Impact. NSF-funded work with Boston University's Digital
          Business Institute and MIT's Empirica platform.
        </p>
      </div>
    </section>
  );
}
