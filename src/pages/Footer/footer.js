import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_main}>
      <div className={styles.footer}>
        <div className={styles.cheatGptAndText}>
          <div className={styles.cheatGpt}>cheatGpt</div>
          <div className={styles.text}>
            Side project I made during my college days. Care for joy as much as productivity. See details as the baseline of quality. And we help people bypass AI detectors.
          </div>
        </div>

        <div className={styles.cheatGptAndText}>
          <div className={styles.cheatGpt}>About</div>
          <div className={styles.socials}>
            <ul>
              <li>
                <a href="https://www.buymeacoffee.com/adamsyyy" target="_blank" rel="noopener noreferrer">
                  Contribute
                </a>
              </li>
              <li>
                <a href="mailto:adamoommen.mec@gmail.com">
                  Contact
                </a>
              </li>
              <li>
                <a href="https://forms.gle/vQkYpcuFEoWQWdaf8" target="_blank" rel="noopener noreferrer">
                  Feedback
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.cheatGptAndText}>
          <div className={styles.cheatGpt}>Socials</div>
          <div className={styles.socials}>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/adamsy/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/adamsyyyyyy/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://twitter.com/adamsycodes" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.additionalInfo}>
        Made by Adamsy with 🩷 <br />
        <div className={styles.additionals_main}>
          <a href="https://www.privacypolicygenerator.info/live.php?token=QwzW1Cqy4CLIpWk7NhcnSxzeNdBe1Mbx" className={styles.additionals}>Privacy policy</a>
          <a href="https://www.termsofusegenerator.net/live.php?token=aqBbe0CAJHbrmQz6tHQKIXq1noOFtsCq" className={styles.additionals}>Terms of use</a>
          <a className={styles.additionals}>© cheatGpt 2023</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
