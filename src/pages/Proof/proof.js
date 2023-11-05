import { React, useState } from "react";
import "../../styles/fonts.css";
import "../../App.css";
import styles from "./proof.module.css";

import random1 from "./proof2.png";

const Proof = () => {
  return (
    <div>
      <div className={styles.proofmain}>
        <div className={styles.proof_heading}>
          <span>A reliable ally for AI detectors.</span>
          <br />
          <span>Check it out,</span>
          <br />
          <span>yourself.</span>
        </div>
        <div className={styles.image_container}  >
  <img className={styles.image_container} src={random1} alt="Random 1" />
</div>
      </div>
    </div>
  );
};

export default Proof;
