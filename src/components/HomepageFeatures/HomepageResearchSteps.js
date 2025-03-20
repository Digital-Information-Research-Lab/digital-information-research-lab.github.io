import React, { useEffect,useRef,useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import clsx from 'clsx';
import styles from './ResearchSteps.module.css'; 

const stepsData = [
  {
    title: 'Step 1: Design',
    description: `Researchers design gamified experiments to simulate real-world consumer-producer marketplaces.`,
    imgSrc: '/img/step1.jpg',
  },
  {
    title: 'Step 2: Deploy',
    description: `Human players join a game to play the designed experiment.`,
    imgSrc: '/img/step2.jpg',
  },
  {
    title: 'Step 3: Monitor',
    description: `Data is collected from experimental activity.`,
    imgSrc: '/img/step3.jpg',
  },
  {
    title: 'Step 4: Analyze',
    description: `Data is analyzed to test hypotheses.`,
    imgSrc: '/img/step4.jpg',
  },
];


  export default function HomepageResearchSteps() {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);
  
    useEffect(() => {
      function handleScroll() {
        if (!containerRef.current) return;
  
        const containerHeight = containerRef.current.offsetHeight;
        const containerTop = containerRef.current.offsetTop;
        const scrollY = window.scrollY;
  
        const scrollFraction =
          (scrollY - containerTop) / (containerHeight - window.innerHeight);
        const clampedScroll = Math.max(0, Math.min(1, scrollFraction));
  
        const totalSteps = stepsData.length;
        const stepSize = 1 / (totalSteps * 0.75); 
        const newIndex = Math.floor(clampedScroll / stepSize);
  
        setActiveIndex(Math.min(totalSteps - 1, Math.max(0, newIndex)));
      }
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
        <>
          <div className={styles.sectionHeading}>
            <h2>Replicable Behavioral Economics Research</h2>
            <h3>Our Research Process in Four Steps</h3>
          </div>
          <div ref={containerRef} className={styles.container}>
            <div className={styles.scrollWrapper}>
              <div className={styles.stickyPanel}>
                <div className={styles.timeline}>
                  {stepsData.map((_, idx) => (
                    <div
                      key={idx}
                      className={`${styles.dot} ${
                        idx === activeIndex ? styles.activeDot : ''
                      }`}
                    >
                      {idx + 1 }
                    </div>
                  ))}
                </div>
                <div className={styles.innerWrapper}>
                {stepsData.map((step, idx) => (
                  <div
                    key={idx}
                    className={`${styles.stepContent} ${
                      idx === activeIndex ? styles.activeStep : ''
                    } ${styles[`step${idx}`]}`}
                  >
                    <div className={styles.stepWrapper}>
                      <div className={styles.stepText}>
                        <div className={styles.stepTitleBox}>
                          <h2>{step.title}</h2>
                        </div>
                        <p>{step.description}</p>
                                {/* Image */}
                      <div className={styles.imageContainer}>
                        <img
                          src={step.imgSrc}
                          alt={step.title}
                          className={styles.stepImage}
                        />
                      </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              </div>
            </div>
          </div>
        </>
      );
    }      