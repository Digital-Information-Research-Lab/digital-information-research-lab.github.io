import React, { useEffect, useState, useRef } from 'react';
import Link from '@docusaurus/Link';
import styles from './ResearchHighlights.module.css';

/**
 * Research card data for the three marketplace research directions
 */
const researchHighlights = [
  {
    id: 'human-human',
    category: 'FOUNDATIONAL RESEARCH',
    title: 'Human-Human Marketplace',
    description:
      'Our foundational research studying how real human participants interact as buyers and sellers in controlled e-commerce simulations with Truth Warrant mechanisms.',
    link: '/research/human-human-marketplace',
    date: 'January 2026',
  },
  {
    id: 'human-ai',
    category: 'EMERGING RESEARCH',
    title: 'Human-AI Marketplace',
    description:
      'Investigating how AI assistants influence human decision-making in digital marketplaces, from product recommendations to deception detection.',
    link: '/research/human-ai-marketplace',
    date: 'January 2026',
  },
  {
    id: 'ai-ai',
    category: 'FRONTIER RESEARCH',
    title: 'AI-AI Marketplace',
    description:
      'Large-scale simulations of AI agent economies to understand emergent market behaviors and test governance mechanisms for autonomous economic agents.',
    link: '/research/ai-ai-marketplace',
    date: 'January 2026',
  },
];

/**
 * Individual research card component - Transluce style
 */
function ResearchCard({ research }) {
  return (
    <Link to={research.link} className={styles.researchCard}>
      <div className={styles.cardImagePlaceholder}>
        <div className={styles.cardIcon}>
          {research.id === 'human-human' && '👥'}
          {research.id === 'human-ai' && '🤖'}
          {research.id === 'ai-ai' && '🔄'}
        </div>
      </div>
      <div className={styles.cardContent}>
        <span className={styles.cardCategory}>{research.category}</span>
        <h3 className={styles.cardTitle}>{research.title}</h3>
        <p className={styles.cardDescription}>{research.description}</p>
        <span className={styles.cardDate}>{research.date}</span>
      </div>
    </Link>
  );
}

/**
 * Main Research Highlights section - Transluce-inspired horizontal carousel
 */
export default function ResearchHighlights() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
    }
    return () => {
      if (ref) {
        ref.removeEventListener('scroll', checkScroll);
      }
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  return (
    <section className={styles.highlightsSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Highlights</h2>
        <Link to='/research' className={styles.viewAllLink}>
          Learn More About Our Work →
        </Link>
      </div>

      <div className={styles.carouselContainer}>
        {/* Left scroll button */}
        <button
          className={`${styles.scrollButton} ${styles.scrollLeft} ${!canScrollLeft ? styles.hidden : ''}`}
          onClick={() => scroll('left')}
          aria-label='Scroll left'
        >
          ‹
        </button>

        {/* Cards container */}
        <div className={styles.cardsScroller} ref={scrollRef}>
          {researchHighlights.map((research) => (
            <ResearchCard key={research.id} research={research} />
          ))}
        </div>

        {/* Right scroll button */}
        <button
          className={`${styles.scrollButton} ${styles.scrollRight} ${!canScrollRight ? styles.hidden : ''}`}
          onClick={() => scroll('right')}
          aria-label='Scroll right'
        >
          ›
        </button>
      </div>
    </section>
  );
}
