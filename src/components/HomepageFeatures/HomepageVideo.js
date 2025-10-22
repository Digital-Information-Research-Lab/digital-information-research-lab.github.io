import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './HomepageVideo.module.css';

/**
 * Interactive frame component with subtle tilt effect for video demonstrations
 * Provides engaging visual feedback without being distracting
 */
function TiltFrame({ children }) {
  const frameRef = useRef(null);

  function handleMouseMove(e) {
    if (!frameRef.current) return;

    const rect = frameRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (y / rect.height) * 4;    
    const rotateY = (x / rect.width) * -4;    

    frameRef.current.style.transform = `
      perspective(800px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      scale(1.02)
    `;
  }

  function handleMouseLeave() {
    if (!frameRef.current) return;
    frameRef.current.style.transform = 'none';
  }

  return (
    <div
      ref={frameRef}
      className={styles.tiltFrameWrapper}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}

/**
 * Enhanced homepage video component showcasing our behavioral experiments
 * Focuses on how our two-sided marketplace helps study and prevent misinformation
 */
export default function HomepageVideo() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className={styles.videoContainer}>
      <div className={styles.videoHeader}>
        <h2 className={styles.sectionTitle} data-aos="fade-up">
          See Our Platform in Action
        </h2>
        <p className={styles.sectionSubtitle} data-aos="fade-up" data-aos-delay="200">
          Real human participants engage in our gamified marketplace simulations, revealing how misinformation spreads 
          and helping us design interventions to protect consumers from false advertising.
        </p>
      </div>

      <div className={styles.videosWrapper} data-aos="fade-up" data-aos-delay="400">
        <div className={styles.videoItem}>
          <div className={styles.videoInfo}>
            <h3 className={styles.videoTitle}>Producer Experience</h3>
            <p className={styles.videoDescription}>
              Sellers create and promote products, choosing how truthful their advertisements will be. 
              Our platform captures every decision in real-time.
            </p>
          </div>

          <TiltFrame>
            <div className={styles.frame}>
              <div className={styles.frameHeader}>
                <span className={`${styles.dot} ${styles.red}`} />
                <span className={`${styles.dot} ${styles.yellow}`} />
                <span className={`${styles.dot} ${styles.green}`} />
              </div>
              <div className={styles.frameContent}>
                <video
                  src="/vid/seller_gameplay.mp4#t=12"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={styles.video}
                  aria-label="Producer interface showing advertising creation process"
                />
              </div>
            </div>
          </TiltFrame>
        </div>

        <div className={styles.videoItem}>
          <div className={styles.videoInfo}>
            <h3 className={styles.videoTitle}>Consumer Experience</h3>
            <p className={styles.videoDescription}>
              Buyers evaluate advertisements and make purchasing decisions, revealing how misleading 
              claims influence consumer behavior in digital marketplaces.
            </p>
          </div>

          <TiltFrame>
            <div className={styles.frame}>
              <div className={styles.frameHeader}>
                <span className={`${styles.dot} ${styles.red}`} />
                <span className={`${styles.dot} ${styles.yellow}`} />
                <span className={`${styles.dot} ${styles.green}`} />
              </div>
              <div className={styles.frameContent}>
                <video
                  src="/vid/buyer_gameplay.mp4#t=14"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={styles.video}
                  aria-label="Consumer interface showing product evaluation process"
                />
              </div>
            </div>
          </TiltFrame>
        </div>
      </div>

      <div className={styles.impactStatement} data-aos="fade-up" data-aos-delay="600">
        <p>
          <strong>Research Impact:</strong> Our experiments generate behavioral data that helps platforms 
          design better policies to identify and reduce harmful misinformation while preserving legitimate commerce.
        </p>
      </div>
    </section>
  );
}
