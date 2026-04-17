import React from 'react';
import styles from './GameplayVideos.module.css';

/**
 * Side-by-side seller and buyer gameplay recordings from the marketplace.
 * Autoplays silently so the page feels alive without demanding attention.
 */
export default function GameplayVideos() {
  return (
    <section className={styles.videosSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>
            How the marketplace plays
          </h2>
          <p className={styles.sectionSubtitle}>
            Two short recordings from a live experiment. Sellers on the left
            decide what to claim about their product and whether to back it.
            Buyers on the right decide who to trust.
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
                preload='metadata'
                className={styles.video}
              />
            </div>
            <p className={styles.videoDescription}>
              Sellers post listings, pick a quality level, set a price, and
              choose whether to put money on their claim through a truth
              warrant.
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
                preload='metadata'
                className={styles.video}
              />
            </div>
            <p className={styles.videoDescription}>
              Buyers compare sellers, make a purchase, and can challenge a
              misleading claim to collect the seller's warrant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
