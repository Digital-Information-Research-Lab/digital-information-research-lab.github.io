import React, { useState, useRef, useEffect } from 'react';
import styles from './AnalysisVisualizations.module.css';

/**
 * AnalysisVisualizations Component
 * Interactive carousel of data visualizations from marketplace experiments
 * Adapted from TruthMarket project
 */

// Note: 32_llm_reasoning_with_bars.html is featured in <AgenticAIFocus />
// above, so it intentionally is not duplicated here.
const visualizations = [
  {
    id: 'brand-change-reasoning',
    title: 'Brand Change Reasoning Quadrant',
    path: '/analysis/31_brand_change_reasoning_quadrant.html',
  },
  {
    id: 'irrational-production',
    title: 'Irrational Production Dashboard',
    path: '/analysis/29_irrational_production_dashboard.html',
  },
  {
    id: 'exit-sankey',
    title: 'Exit Sankey Strategy Rep with Stake',
    path: '/analysis/27_exit_sankey_strategy_rep_with_stake.html',
  },
];

export default function AnalysisVisualizations() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreenViz, setFullscreenViz] = useState(null);
  const scrollContainerRef = useRef(null);

  const maxIndex = visualizations.length - 1;

  const scrollToIndex = (index) => {
    const clampedIndex = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(clampedIndex);

    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const itemWidth = container.clientWidth;
      container.scrollTo({
        left: Math.round(clampedIndex * itemWidth),
        behavior: 'smooth',
      });
    }
  };

  const handlePrev = () => {
    scrollToIndex(currentIndex - 1);
  };

  const handleNext = () => {
    scrollToIndex(currentIndex + 1);
  };

  const openFullscreen = (viz) => {
    setFullscreenViz(viz);
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = () => {
    setFullscreenViz(null);
    document.body.style.overflow = 'auto';
  };

  // Close fullscreen on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && fullscreenViz) {
        closeFullscreen();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [fullscreenViz]);

  // Update current index on scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const itemWidth = container.clientWidth;
      const newIndex = Math.round(scrollLeft / itemWidth);
      setCurrentIndex(Math.max(0, Math.min(newIndex, maxIndex)));
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [maxIndex]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Experiment Results & Analysis</h2>
          <h3 className={styles.subtitle}>
            Human vs AI Marketplace and Human vs Human Marketplace Experiments
          </h3>
          <p className={styles.description}>
            Interactive visualizations: hover, click or scroll to explore
            detailed analysis. Credits: Vedant Kejariwal, Harshaveena
            Komatineni, Swapneel Mehta, Quang Nguyen & Team.
          </p>
        </div>

        <div className={styles.carouselWrapper}>
          {/* Navigation Buttons */}
          {currentIndex > 0 && (
            <button
              onClick={handlePrev}
              className={`${styles.navButton} ${styles.navButtonLeft}`}
              aria-label='Previous visualization'
            >
              ‹
            </button>
          )}

          {currentIndex < maxIndex && (
            <button
              onClick={handleNext}
              className={`${styles.navButton} ${styles.navButtonRight}`}
              aria-label='Next visualization'
            >
              ›
            </button>
          )}

          {/* Scrollable Container */}
          <div ref={scrollContainerRef} className={styles.scrollContainer}>
            {visualizations.map((viz, index) => (
              <div key={viz.id} className={styles.vizItem}>
                <div className={styles.vizCard}>
                  <button
                    onClick={() => openFullscreen(viz)}
                    className={styles.fullscreenButton}
                    aria-label='Open fullscreen'
                    title='Open fullscreen'
                  >
                    ⛶
                  </button>
                  <div className={styles.iframeWrapper}>
                    <div className={styles.iframeScaler}>
                      <iframe
                        src={viz.path}
                        className={styles.iframe}
                        title={viz.title}
                        loading='lazy'
                        sandbox='allow-scripts allow-same-origin allow-popups'
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className={styles.dotsContainer}>
            {visualizations.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
                aria-label={`Go to visualization ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {fullscreenViz && (
        <div className={styles.fullscreenOverlay} onClick={closeFullscreen}>
          <div
            className={styles.fullscreenContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.fullscreenHeader}>
              <h3 className={styles.fullscreenTitle}>{fullscreenViz.title}</h3>
              <button
                onClick={closeFullscreen}
                className={styles.closeButton}
                aria-label='Close fullscreen'
              >
                ✕
              </button>
            </div>
            <iframe
              src={fullscreenViz.path}
              className={styles.fullscreenIframe}
              title={fullscreenViz.title}
              sandbox='allow-scripts allow-same-origin allow-popups'
            />
          </div>
        </div>
      )}
    </section>
  );
}
