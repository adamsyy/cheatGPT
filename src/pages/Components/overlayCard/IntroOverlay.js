
import React, { useState } from 'react';
import styles from './IntroOverlay.module.css';

const IntroOverlay = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.card}>
        <button className={styles.closeButton} onClick={handleClose}>
          X
        </button>
        <h2>Welcome to CheatGPT!</h2>
        <p>Some introductory text here...</p>
      </div>
    </div>
  );
};

export default IntroOverlay;
