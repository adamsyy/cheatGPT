import { React, useState } from 'react';
import '../../../styles/fonts.css';
import '../../../App.css';
import styles from './About.module.css';




const About = () => {
  const [resultData, setResultData] = useState(null);

  return (
    <div>

      <div className={styles["home-heading-description-div"]}>
      <div className={styles["home-heading"]}>About us</div>

        <div className={styles["home-description"]}>Introducing a groundbreaking solution that challenges the barriers imposed by AI detection systems, including ChatGPT and other AI language models. This innovative tool empowers content creators by offering a fresh perspective on circumventing AI detection.

Crafted with ingenuity and precision, this tool provides a pathway to unhindered expression within the digital landscape. By skillfully evading the algorithms intended to safeguard online platforms, it opens doors to unbridled creativity and unrestricted communication.

However, it is essential to recognize the responsibility that accompanies such capabilities. Adhering to ethical principles, including honesty, integrity, and respect, ensures that this tool is used wisely and responsibly.

Embrace this cutting-edge solution and embark on a journey where digital boundaries are pushed, enabling authentic and genuine interactions. Together, let us shape a future where creativity flourishes within the realms of AI-powered communication</div>
      </div>
      <div className={styles["home-input-div"]} >
    

      </div>
    
  
    </div>
  );
};

export default About;
