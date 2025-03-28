import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
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

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, stepsData.length - 1));
  };

  return (
    <>
      <div
        className={[
          styles.container,
          activeIndex === 0 && styles.step0Active,
          activeIndex === 1 && styles.step1Active,
          activeIndex === 2 && styles.step2Active,
          activeIndex === 3 && styles.step3Active,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {/* Section Heading */}
        <div className={styles.sectionHeading} >
          <h3>Our Research Process in Four Steps</h3>
        </div>

        {/* Arrows & Horizontal Slider */}
        <div className={styles.horizontalContainer}>
        <button
          className={styles.arrowLeft}
          onClick={handlePrev}
          disabled={activeIndex === 0}
          aria-label="Previous step"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

          <div className={styles.sliderWrapper}>
            <div
              className={styles.sliderTrack}
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {stepsData.map((step, idx) => (
                <div className={styles.stepSlide} key={idx}>
                  
                  <div className={styles.stepWrapper}>
                    <div className={styles.stepText}>
                      
                      <div className={styles.imageContainer}>
                          <img
                            src={step.imgSrc}
                            alt={step.title}
                            className={styles.stepImage}
                          />
                      </div>

                    <div className={styles.stepTitleBox}>
                      <h2>{step.title}</h2>
                    </div>
                      <p>{step.description}</p>

                  </div>

                  
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className={styles.arrowRight}
            onClick={handleNext}
            disabled={activeIndex === stepsData.length - 1}
            aria-label="Next step"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Supported By Section */}
      <section className={styles.supportedBySection} data-aos="zoom-in">
        <h3>Supported By</h3>
        <div className={styles.logosContainer}>
          <img
            src="/img/InstituteMark_DBI_RGB.png"
            alt="Logo"
            className={styles.supportedLogo}
          />
          <img
            src="/img/NSF_Logo.png"
            alt="Logo 2"
            className={styles.supportedLogo}
          />
        </div>
      </section>

      {/* Technology Partners Section */}
      <section className={styles.supportedBySection} data-aos="zoom-in">
        <h3>Technology Partners</h3>
        <div className={styles.logosContainer}>
          <img
            src="/img/empirica_logo.png"
            alt="Logo 3"
            className={styles.supportedLogo}
          />
        </div>
      </section>
    </>
  );
}



// ALTERNATE RESEARCH STEPS- THE HEADING TEXT IS BROKEN RIGHT NOW IN THIS
  // export default function HomepageResearchSteps() {
  //   const [activeIndex, setActiveIndex] = useState(0);
  //   const containerRef = useRef(null);
  
  //   const [typedWords, setTypedWords] = useState([]);
  //   const headingText = "Our Research Process in Four Steps";
  //   const didStartTyping = useRef(false);
  //   useEffect(() => {
  //     if (didStartTyping.current) return;
  //     didStartTyping.current = true;
  //     console.log("text:", headingText);

  //     const words = headingText.split(' ');
  //     let currentIndex = 0;
  //     const typingSpeed = 400; 
  
  //     const interval = setInterval(() => {
  //       setTypedWords((prev) => [...prev, words[currentIndex]]);
  //       console.log("curr word:", words[currentIndex]);
  //       currentIndex++;
  
  //       if (currentIndex >= words.length) {
  //         clearInterval(interval);
  //       }
  //     }, typingSpeed);
  
  //     return () => clearInterval(interval);
  //   }, [headingText]);
  
  //   useEffect(() => {
  //     function handleScroll() {
  //       if (!containerRef.current) return;
  
  //       const rect = containerRef.current.getBoundingClientRect();
  //       const containerTop = rect.top + window.scrollY;
  //       const containerHeight = rect.height;
  //       const scrollY = window.scrollY;
  
  //       const scrollFraction =
  //         (scrollY - containerTop) / (containerHeight - window.innerHeight);
  //       const clampedScroll = Math.max(0, Math.min(1, scrollFraction));
  
  //       const totalSteps = stepsData.length;
  //       const stepSize = 1 / totalSteps;
  //       const newIndex = Math.floor(clampedScroll / stepSize);
  
  //       setActiveIndex(Math.min(totalSteps - 1, Math.max(0, newIndex)));
  //     }
  
  //     window.addEventListener('scroll', handleScroll);
  //     return () => window.removeEventListener('scroll', handleScroll);
  //   }, []);
  
  //   return (
  //     <>
  //       <div 
  //         ref={containerRef}
  //         className={[
  //           styles.container,
  //           activeIndex === 0 && styles.step0Active,
  //           activeIndex === 1 && styles.step1Active,
  //           activeIndex === 2 && styles.step2Active,
  //           activeIndex === 3 && styles.step3Active,
  //         ].filter(Boolean).join(' ')}
  //       >
  //         <div className={styles.sectionHeading} data-aos="zoom-in">
  //           {/* <h2>Replicable Behavioral Economics Research</h2> */}

  //           <h3 className={styles.typewriterHeading}>
  //           {console.log("Rendered typedWords:", typedWords.join(' '))}
  //             {typedWords.join(' ')}
  //           </h3>
  //         </div>
  
  //         <div className={styles.scrollWrapper}>
  //           <div className={styles.stickyPanel}>
  //             <div className={styles.timeline}>
  //               {stepsData.map((_, idx) => (
  //                 <div
  //                   key={idx}
  //                   className={`${styles.dot} ${
  //                     idx === activeIndex ? styles.activeDot : ''
  //                   }`}
  //                 >
  //                   {idx + 1}
  //                 </div>
  //               ))}
  //             </div>
  
  //             <div className={styles.innerWrapper}>
  //               {stepsData.map((step, idx) => (
  //                 <div
  //                   key={idx}
  //                   className={`${styles.stepContent} ${
  //                     idx === activeIndex ? styles.activeStep : ''
  //                   } ${styles[`step${idx}`]}`}
  //                   data-active={idx === activeIndex}
  //                 >
  //                   <div className={styles.stepWrapper}>
  //                     <div className={styles.stepText}>
  //                       <div className={styles.stepTitleBox}>
  //                         <h2>{step.title}</h2>
  //                       </div>
  //                       <p>{step.description}</p>
  //                       <div className={styles.imageContainer}>
  //                         <img
  //                           src={step.imgSrc}
  //                           alt={step.title}
  //                           className={styles.stepImage}
  //                         />
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               ))}
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  
  //       <section className={styles.supportedBySection} data-aos="zoom-in">
  //         <h3>Supported By</h3>
  //         <div className={styles.logosContainer}>
  //           <img 
  //             src="/img/InstituteMark_DBI_RGB.png" 
  //             alt="Logo"
  //             className={styles.supportedLogo}
  //           />
  //           <img 
  //             src="/img/NSF_Logo.png"
  //             alt="Logo 2"
  //             className={styles.supportedLogo}
  //           />
  //           <img 
  //             src="/img/empirica_logo.png"
  //             alt="Logo 3"
  //             className={styles.supportedLogo}
  //           />
  //         </div>
  //       </section>
  //     </>
  //   );
  // }