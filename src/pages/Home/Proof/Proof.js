// ImageComponent.js

import React from 'react';
import styles from './Proof.module.css';
import imageSrc from './Proof.png'; // Replace this with your image file path

const Proof = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src={imageSrc} alt="Your Image" className={styles.image} />
        <div className={styles.pinkBox}>
        CheatGPT guarantees an impressive 99% accuracy in enabling AI-generated content to pass all AI detection tests flawlessly. </div>
      </div>

    </div>
  );
};

export default Proof;
