// WhyPremium.js

import React, { useState } from "react";
import "../../styles/fonts.css";
import "../../App.css";
import styles from "./whypremium.module.css";

const WhyPremium = () => {
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);

  const toggleAccordion1 = () => {
    setExpanded1(!expanded1);
  };

  const toggleAccordion2 = () => {
    setExpanded2(!expanded2);
  };

  return (
    <div>
      <div className={styles.proofmain}>
        <div className={styles.proof_heading}>
          <span>Free for anyone..</span>
          <br />
          <span>Affordable for Unlimited usage.</span>
          <br />
        </div>
        <div className={styles.proof_subheading}>
          The premium account comes with its benefits.
        </div>
        <div className={styles.customAccordion}>
          <div className={styles.accordionItem} onClick={toggleAccordion1}>
            <h3>No word limit</h3>
            <span className={expanded1 ? styles.iconExpanded : styles.iconCollapsed}></span>
          </div>
          {expanded1 && (
            <div className={styles.accordionDescription}>
          here are no limits on words, allowing us to deliver in-depth and comprehensive information, ensuring our message is fully expressed and understood.</div>
          )}

          <div className={styles.accordionItem} onClick={toggleAccordion2}>
            <h3>Unlimited Prompts</h3>
            <span className={expanded2 ? styles.iconExpanded : styles.iconCollapsed}></span>
          </div>
          {expanded2 && (
            <div className={styles.accordionDescription}>
              Experience the freedom of 'Unlimited Prompts' that empower creativity and exploration without restrictions..
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WhyPremium;
