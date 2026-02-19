import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import styles from './Footer.module.css';

/**
 * Custom Transluce-inspired footer component
 * Clean, minimal design with social icons
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left side - Copyright */}
        <div className={styles.copyright}>
          © {currentYear} Platform Governance Research Lab
        </div>

        {/* Center - Description */}
        <div className={styles.description}>
          A research lab at Boston University studying platform governance and
          digital marketplaces.
        </div>

        {/* Right side - Social icons */}
        <div className={styles.socialLinks}>
          <a
            href='https://github.com/Digital-Information-Research-Lab'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.socialLink}
            aria-label='GitHub'
          >
            <FaGithub />
          </a>
          <a
            href='https://www.linkedin.com/company/boston-university/'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.socialLink}
            aria-label='LinkedIn'
          >
            <FaLinkedin />
          </a>
          <a
            href='https://twitter.com/BU_Tweets'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.socialLink}
            aria-label='X (Twitter)'
          >
            <FaXTwitter />
          </a>
          <a
            href='mailto:info@truthmarket.com'
            className={styles.socialLink}
            aria-label='Email'
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
