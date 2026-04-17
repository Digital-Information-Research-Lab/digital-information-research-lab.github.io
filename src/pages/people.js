import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Markdown from 'react-markdown';
import { BsEnvelopeFill, BsLinkedin } from 'react-icons/bs';

import piData from '../data/people/pi.json';
import gradData from '../data/people/grad.json';
import undergradData from '../data/people/undergrad.json';
import postdocData from '../data/people/postdoc.json';
import ProfileCard from '../components/people/ProfileCard';
import styles from '../css/people.module.css';

/**
 * People page: lab roster grouped into four categories, each card opens a
 * modal with a fuller bio. Visually matches the redesigned landing page
 * (bordered cards, typography-first headers, no legacy dark bars).
 */

const sortByJoined = (a, b) => {
  // Null-joined entries come last so recent / dated entries lead each group.
  if (a.joined == null && b.joined == null) return 0;
  if (a.joined == null) return 1;
  if (b.joined == null) return -1;
  return a.joined - b.joined;
};

const CATEGORIES = [
  { title: 'Principal Investigators', people: piData.slice().sort(sortByJoined) },
  { title: 'Postdoctoral Associates', people: postdocData.slice().sort(sortByJoined) },
  { title: 'Graduate Students', people: gradData.slice().sort(sortByJoined) },
  { title: 'Undergraduate Students', people: undergradData.slice().sort(sortByJoined) },
];

export default function People() {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const openPopup = (person) => {
    setSelectedPerson(person);
    document.body.style.overflow = 'hidden';
    setTimeout(() => setIsVisible(true), 10);
  };

  const closePopup = () => {
    setIsVisible(false);
    setTimeout(() => {
      setSelectedPerson(null);
      document.body.style.overflow = 'auto';
    }, 260);
  };

  useEffect(() => {
    if (!selectedPerson) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closePopup();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [selectedPerson]);

  return (
    <Layout
      title='People'
      description='The team behind the Platform Governance Research Lab.'
    >
      <main className={styles.page}>
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>People</h1>
          <p className={styles.pageLede}>
            Faculty, postdocs, and students working on marketplace
            mechanisms, truth warrants, and agentic AI marketplaces at the
            Platform Governance Research Lab.
          </p>
        </header>

        {CATEGORIES.map(({ title, people }) =>
          people.length === 0 ? null : (
            <section key={title} className={styles.category}>
              <div className={styles.categoryHeader}>
                <h2 className={styles.categoryTitle}>{title}</h2>
                <span className={styles.categoryCount}>
                  {people.length} {people.length === 1 ? 'member' : 'members'}
                </span>
              </div>
              <div className={styles.grid}>
                {people.map((person) => (
                  <div key={person.id} onClick={() => openPopup(person)}>
                    <ProfileCard
                      id={person.id}
                      name={person.name}
                      role={person.role}
                      contact={person.contact}
                    />
                  </div>
                ))}
              </div>
            </section>
          ),
        )}
      </main>

      {selectedPerson && (
        <div
          className={`${styles.modalOverlay} ${isVisible ? styles.visible : ''}`}
          onClick={closePopup}
        >
          <div
            className={`${styles.modalContent} ${isVisible ? styles.visible : ''}`}
            onClick={(e) => e.stopPropagation()}
            role='dialog'
            aria-modal='true'
            aria-label={selectedPerson.name}
          >
            <button
              className={styles.modalClose}
              onClick={closePopup}
              aria-label='Close'
            >
              ×
            </button>

            <div className={styles.modalHeader}>
              <div className={styles.modalHeadshot}>
                <img
                  src={`/headshot/${selectedPerson.id}.jpg`}
                  alt={selectedPerson.name}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div>
                <h2 className={styles.modalName}>{selectedPerson.name}</h2>
                <p className={styles.modalRole}>{selectedPerson.role}</p>
                <div className={styles.modalLinks}>
                  {selectedPerson.contact && (
                    <a href={`mailto:${selectedPerson.contact}`}>
                      <BsEnvelopeFill /> {selectedPerson.contact}
                    </a>
                  )}
                  {selectedPerson.linkedin && (
                    <a
                      href={`https://www.linkedin.com/in/${selectedPerson.linkedin}/`}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <BsLinkedin /> LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.modalBody}>
              <Markdown>
                {selectedPerson.description || 'No bio available yet.'}
              </Markdown>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
