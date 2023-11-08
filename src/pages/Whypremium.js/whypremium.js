import React, { useState } from "react";
import { Helmet } from "react-helmet"; // Import Helmet
import "../../styles/fonts.css";
import "../../App.css";
import styles from "./whypremium.module.css";
import PremiumBadge from "../Components/BuyPremium/Buypremium";
import PremiumBadgeHome from "../Components/BuyPremiumHomeButton/BuyPremiumHome";

const WhyPremium = () => {
  const initialEmail = localStorage.getItem("email");
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
      <Helmet>
   
      <meta
        name="keywords"
        content="CheatGPT, CheatGPT.tech, AI detection bypass, AI detection removal, AI content filtering, AI text manipulation, Anti-detection solutions, Bypassing AI filters, Content moderation bypass, Natural language processing, Unrestricted AI content, AI-generated text privacy, Chatbot content filtering, Text manipulation techniques, Evading language model detection, AI content censorship, Digital content privacy, AI-generated content control, cheatgpt premium, AI detection tool, CheatGPT benefits, CheatGPT features, unlimited prompts, premium account, word limit removal"
    />
        {/* Add any other meta tags as needed */}
      </Helmet>

      <div className={styles.proofmain}>
        <div className={styles.proof_heading}>
          <span>Free for anyone..</span>
          <br />
          <span>Affordable for Unlimited usage.</span>
          <br />
        </div>
        <div className={styles.proof_subheading}>
          The premium account comes at just $5. 
          <div className={styles.buy_button}>
            {!initialEmail&&<PremiumBadgeHome/>}
      
          </div>    
        </div>

        <div className={styles.customAccordion}>
          <div className={styles.accordionItem} onClick={toggleAccordion1}>
            <h3>No word limit</h3>
            <span className={expanded1 ? styles.iconExpanded : styles.iconCollapsed}></span>
          </div>
          {expanded1 && (
            <div className={styles.accordionDescription}>
              There are no limits on words, allowing us to deliver in-depth and comprehensive information, ensuring our message is fully expressed and understood.
            </div>
          )}

          <div className={styles.accordionItem} onClick={toggleAccordion2}>
            <h3>Unlimited Prompts</h3>
            <span className={expanded2 ? styles.iconExpanded : styles.iconCollapsed}></span>
          </div>
          {expanded2 && (
            <div className={styles.accordionDescription}>
              Experience the freedom of 'Unlimited Prompts' that empower creativity and exploration without restrictions.
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default WhyPremium;
