// Footer.js

import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_main}>
        <div className={styles.footer}>
      <div className={styles.cheatGptAndText}>
        <div className={styles.cheatGpt}>cheatGpt</div>
        <div className={styles.text}>
          Side project I made during my college days. Care for joy as much as productivity.
          See details as the baseline of quality. And we help people bypass AI detectors.
        </div>
      </div>

      <div className={styles.cheatGptAndText}>
        <div className={styles.cheatGpt}>About</div>
        <div className={styles.socials}>
          <ul>
            <li>Contribute</li>
            <li>Contact</li>
            <li>Feedback</li>
          </ul>
        </div>
      </div>

      <div className={styles.cheatGptAndText}>
        <div className={styles.cheatGpt}>Socials</div>
        <div className={styles.socials}>
          <ul>
            <li>LinkedIn</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>

    
    </div>
      <div className={styles.additionalInfo}>
        Made by Adamsy with 🩷 <br />
        <div className={styles.additionals} href="#">Privacy policy</div>
        <div className={styles.additionals}  href="#">Terms of use</div>

        © cheatGpt 2023
      </div>
    </div>
  );
};

export default Footer;
