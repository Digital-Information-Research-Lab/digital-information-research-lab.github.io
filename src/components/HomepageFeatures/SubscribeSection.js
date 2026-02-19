import React, { useState } from 'react';
import styles from './SubscribeSection.module.css';

/**
 * Transluce-inspired Subscribe section
 * Clean subscription form for research and organization updates
 */
export default function SubscribeSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate form submission - replace with actual newsletter service
    // For example: Mailchimp, ConvertKit, Buttondown, etc.
    try {
      // Add your newsletter API integration here
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus('success');
      setName('');
      setEmail('');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className={styles.subscribeSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Subscribe to receive monthly research and organization updates.
        </h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <input
              type='text'
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
              required
            />
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              required
            />
            <button
              type='submit'
              className={styles.submitButton}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>

          {status === 'success' && (
            <p className={styles.successMessage}>
              Thanks for subscribing! You'll receive our updates soon.
            </p>
          )}
          {status === 'error' && (
            <p className={styles.errorMessage}>
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
