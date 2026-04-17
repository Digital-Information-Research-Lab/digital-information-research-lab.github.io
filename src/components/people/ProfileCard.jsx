import React from 'react';
import Headshot from './Headshot';
import styles from '../../css/people.module.css';
import { BsEnvelopeFill } from 'react-icons/bs';

/**
 * ProfileCard
 *
 * Clickable card with a square headshot, name, role, and optional email.
 * The containing page wires click to a modal with the full bio.
 */
export default function ProfileCard({ id, name, role, contact }) {
  return (
    <div className={styles.profileCard}>
      <Headshot id={id} name={name} />
      <div className={styles.profileInfo}>
        <div className={styles.profileTitle}>{name}</div>
        <div className={styles.profileDesc}>{role}</div>
        {contact && (
          <div className={styles.contact}>
            <a href={`mailto:${contact}`} onClick={(e) => e.stopPropagation()}>
              <BsEnvelopeFill /> {contact}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
