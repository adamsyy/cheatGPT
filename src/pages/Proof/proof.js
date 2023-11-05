import { React, useState } from "react";
import "../../styles/fonts.css";
import "../../App.css";
import styles from "./proof.module.css";
import { Helmet } from "react-helmet";
import random1 from "./proof2.png";

const Proof = () => {
  return (
    <div>
       <Helmet>
        <title>Bypass AI Detection | CheatGPT</title>
        <meta
          name="description"
          content="The ultimate AI detection bypass tool. We remove AI detection from content generated by ChatGPT and other AI language models."
        />
        <meta
          name="keywords"
          content="AI detection bypass, AI detection removal, ChatGPT content, AI language model detection, AI content filtering, AI text manipulation, Anti-detection solutions, Bypassing AI filters, Content moderation bypass, Natural language processing, Unrestricted AI content, AI-generated text privacy, Chatbot content filtering, Text manipulation techniques, Evading language model detection, AI content censorship, Digital content privacy, AI-generated content control, CheatGPT, AI detection tool"
        />
        {/* Add any other meta tags as needed */}
      </Helmet>
      <div className={styles.proofmain}>
        <div className={styles.proof_heading}>
          <span>A reliable ally for AI detectors.</span>
          <br />
          <span>Check it out,</span>
          <br />
          <span>yourself.</span>
        </div>
        <div >
  <img className={styles.image_container}src={random1} alt="Random 1" />
</div>
      </div>
    </div>
  );
};

export default Proof;
