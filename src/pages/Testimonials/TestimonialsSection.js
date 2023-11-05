import React from "react";
import { Helmet } from "react-helmet";
import styles from "./TestimonialsSection.module.css";

const TestimonialsSection = () => {
  return (
    <div className={styles.container}>
      <Helmet>

      <meta
        name="keywords"
        content="CheatGPT testimonials, user reviews, CheatGPT feedback, customer testimonials, AI language model reviews, user experiences, customer feedback, CheatGPT success stories, CheatGPT user opinions, positive reviews, AI language model testimonials, customer satisfaction, CheatGPT user comments, AI content generation feedback, satisfied customers"
    />
        {/* Add any other meta tags as needed */}
      </Helmet>

      <div className={styles.box}>
        <div className={styles.title}>kBurgos</div>
        <div className={styles.review}>
          Thank you for your work. It really worked on my student task. Keep up
          the great work.
        </div>
      </div>

      <div className={styles.box}>
        <div className={styles.title}>Rhys</div>
        <div className={styles.review}>
         Hey Adam, good luck with your coding and dev
          journey. Much respect.
        </div>
      </div>

      <div className={styles.box}>
        <div className={styles.title}>Bella Menard</div>
        <div className={styles.review}>
          Bought you a coffee. Best humanizer by far 💜
        </div>
      </div>

      <div className={styles.box}>
        <div className={styles.title}>Someone</div>
        <div className={styles.review}>
          Just wanted to make sure if it can bypass
          Turnitin and if it can look at revision history. Thank you!
        </div>
      </div>

      <div className={styles.box}>
        <div className={styles.title}>daniel crone</div>
        <div className={styles.review}>
          Bought you a coffee. I came expecting failure. CheatGPT did it. A
          fluke! Again I tried. Again it won. I got mad. I told CheatGPT to write
          as a college professor, use formal language, and complex sentence
          structure. I would break CheatGPT. No, it was not to be. CheatGPT won
          again. Kudos!
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
