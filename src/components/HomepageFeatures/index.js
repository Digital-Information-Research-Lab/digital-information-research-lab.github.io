import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

/**
 * Support & partner card.
 *
 * Renders a logo, optional grant amount badge, title, type, and short
 * description. Wrapped in an external link when `link` is provided.
 */
function SupportCard({ title, type, amount, description, logoSrc, link }) {
  const cardContent = (
    <div className={styles.supportCard}>
      <div className={styles.supportCardHeader}>
        <div className={styles.logoContainer}>
          <img src={logoSrc} alt={title} className={styles.supportLogo} />
        </div>
        {amount && <div className={styles.amountBadge}>{amount}</div>}
      </div>

      <div className={styles.supportCardContent}>
        <Heading as='h3' className={styles.supportCardTitle}>
          {title}
        </Heading>
        <div className={styles.supportType}>{type}</div>
        <p className={styles.supportDescription}>{description}</p>
      </div>
    </div>
  );

  return (
    <div className={clsx('col col--4')}>
      {link ? (
        <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className={styles.supportCardLink}
        >
          {cardContent}
        </a>
      ) : (
        cardContent
      )}
    </div>
  );
}

const SupporterData = [
  {
    title: 'National Science Foundation',
    type: 'Federal Funding Agency',
    amount: '$550,000',
    description:
      'Supporting our research into digital marketplace governance and accountability mechanisms for advertised claims.',
    logoSrc: '/img/NSF_Logo.png',
    link: 'https://www.nsf.gov/',
  },
  {
    title: 'Boston University Digital Business Institute',
    type: 'Institutional Support',
    description:
      'Providing institutional support, research infrastructure, and academic resources for our platform governance research.',
    logoSrc: '/img/InstituteMark_DBI_RGB.png',
    link: 'https://www.bu.edu/questrom/research/centers-institutes/digital-business-institute/',
  },
  {
    title: 'Empirica',
    type: 'Technology Partner',
    description:
      'MIT-developed platform enabling real-time behavioral experiments and multi-participant research simulations.',
    logoSrc: '/img/empirica_logo.png',
    link: 'https://empirica.ly/',
  },
];

export default function HomepageFeatures() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div>
      <section className={styles.supportSection} data-aos='fade-up'>
        <div className={styles.supportContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Support & Partners</h2>
            <p className={styles.sectionSubtitle}>
              Our research is made possible through generous funding,
              institutional support, and technology partnerships.
            </p>
          </div>

          <div className='row'>
            {SupporterData.map((supporter, idx) => (
              <SupportCard key={`supporter-${idx}`} {...supporter} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
