import React, { useState } from 'react';
import styles from '../../css/people.module.css';

/**
 * Headshot
 *
 * Loads /headshot/{id}.jpg at runtime (not via webpack require) so a
 * missing image doesn't break the build. If the image fails to load,
 * we render a muted circle with the person's initials instead.
 */
export default function Headshot({ id, name, circle = false }) {
  const [failed, setFailed] = useState(false);

  if (failed || !id) {
    return (
      <div className={`${styles.headshot} ${circle ? styles.circular : ''} ${styles.initialsFallback}`}>
        <span className={styles.initials}>{initialsOf(name || id)}</span>
      </div>
    );
  }

  return (
    <div className={`${styles.headshot} ${circle ? styles.circular : ''}`}>
      <img
        src={`/headshot/${id}.jpg`}
        alt={name || id}
        onError={() => setFailed(true)}
        loading='lazy'
      />
    </div>
  );
}

function initialsOf(str) {
  if (!str) return '';
  const parts = String(str).trim().split(/\s+/);
  if (parts.length === 1) return parts[0][0]?.toUpperCase() ?? '';
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
