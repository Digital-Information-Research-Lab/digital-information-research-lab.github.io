import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './HomepageVideo.module.css';

function TiltFrame({ children }) {
  const frameRef = useRef(null);

  function handleMouseMove(e) {
    if (!frameRef.current) return;

    const rect = frameRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (y / rect.height) * 6;    
    const rotateY = (x / rect.width) * -6;    

    frameRef.current.style.transform = `
      perspective(800px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      scale(1.03)
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

export default function HomepageVideo() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className={styles.videoContainer}>
      <h2 className={styles.sectionTitle} data-aos="zoom-in">
        Designing Multiagent Marketplaces
      </h2>

      <div className={styles.videosWrapper}>
        <div className={styles.videoItem} data-aos="zoom-in">
          <div className={styles.label} data-aos="fade-up" data-aos-delay="300">
            Seller Agents
          </div>

          <TiltFrame>
            <div className={styles.frame}>
              <div className={styles.frameHeader}>
                <span className={`${styles.dot} ${styles.red}`} />
                <span className={`${styles.dot} ${styles.yellow}`} />
                <span className={`${styles.dot} ${styles.green}`} />
              </div>
              <div className={styles.frameContent}>
                <img
                  src="/img/feedback.gif"
                  alt="Consumer View"
                  className={styles.video}
                />
              </div>
            </div>
          </TiltFrame>
        </div>

        <div className={styles.videoItem} data-aos="zoom-in">
          <div className={styles.label} data-aos="fade-up" data-aos-delay="300">
            Buyer Human Participants
          </div>

          <TiltFrame>
            <div className={styles.frame}>
              <div className={styles.frameHeader}>
                <span className={`${styles.dot} ${styles.red}`} />
                <span className={`${styles.dot} ${styles.yellow}`} />
                <span className={`${styles.dot} ${styles.green}`} />
              </div>
              <div className={styles.frameContent}>
                <img
                  src="/img/oneround.gif"
                  alt="Producer View"
                  className={styles.video}
                />
              </div>
            </div>
          </TiltFrame>
        </div>
      </div>
    </section>
  );
}
