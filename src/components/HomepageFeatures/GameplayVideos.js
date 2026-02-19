import React from 'react';
import styles from './GameplayVideos.module.css';

/**
 * GameplayVideos Component
 * Shows seller and buyer gameplay videos side by side
 * Adapted from TruthMarket project showcase
 */
export default function GameplayVideos() {
  return (
    <section className={styles.videosSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>
            Interactive Marketplace Simulation
          </h2>
          <p className={styles.sectionSubtitle}>
            Watch how our experimental platform enables controlled behavioral
            experiments with real participants
          </p>
        </div>

        <div className={styles.videosGrid}>
          <div className={styles.videoCard}>
            <h3 className={styles.videoLabel}>SELLER GAMEPLAY</h3>
            <div className={styles.videoWrapper}>
              <video
                src='/vid/seller_gameplay.mp4'
                autoPlay
                muted
                loop
                playsInline
                className={styles.video}
              />
            </div>
            <p className={styles.videoDescription}>
              Sellers create product listings, set quality levels, choose
              pricing strategies, and decide whether to warrant their claims
            </p>
          </div>

          <div className={styles.videoCard}>
            <h3 className={styles.videoLabel}>BUYER GAMEPLAY</h3>
            <div className={styles.videoWrapper}>
              <video
                src='/vid/buyer_gameplay.mp4'
                autoPlay
                muted
                loop
                playsInline
                className={styles.video}
              />
            </div>
            <p className={styles.videoDescription}>
              Buyers browse listings, compare sellers, make purchases, and can
              challenge misleading claims to collect stakes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
