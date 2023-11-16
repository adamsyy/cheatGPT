import React, { useState,useEffect } from 'react';
import { Helmet } from 'react-helmet';
import '../../styles/fonts.css';
import '../../App.css';
import styles from './Home.module.css';
import InputField from './InputField/inputField';
import Result from './Result/result';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import Payment from '../Payment/Payment';
import PremiumBadge from '../Components/BuyPremium/Buypremium'; // Import the PremiumBadge component
import Proof from '../Proof/proof';
import Footer from '../Footer/footer';
import WhyPremium from '../Whypremium.js/whypremium';
import Testimonials from '../Testimonials/TestimonialsSection';
import TestimonialsSection from '../Testimonials/TestimonialsSection';
import axios from "axios"; 
const Home = () => {
  const [resultData, setResultData] = useState(null);
  const [isBig, setisBig] = useState(false);
  const initialEmail = localStorage.getItem("email");
  const [isLoading, setIsLoading] = useState(false); 
  const [doneOnce,setDoneOnce]=useState(false);

  useEffect(() => {
    if (initialEmail&&doneOnce==false) {
      authEmail(initialEmail);
    }
  });

  const authEmail = async (email) => {
    setIsLoading(true); // Set isLoading to true when submitting
    const requestBody = { email: email };
    try {
      var response=await axios.post("https://flask-hello-world-theta-green.vercel.app/auth", requestBody);
      console.log("POST request successful");
      console.log(response.data.premium);
if(response.data.premium==true){
  localStorage.setItem('premium', 'true');
  window.location.reload();
}
      setIsLoading(false); // Set isLoading to false after receiving the results
      // window.location.reload();
    } catch (error) {
      console.log("Error occurred while making POST request:", error);
      setIsLoading(false); // Set isLoading to false on error
      window.location.reload();
    }
  }
  return (
    <div>
<Helmet>
    <meta
        name="keywords"
        content="ai bypass, character ai bypass filter, c.ai bypass, character ai bypass words, ai bypass tool, get conch ai bypass, beta character ai bypass, snapchat ai bypass, character ai bypass filter reddit, character ai bypass apk, character ai bypass app, aiseo ai bypass, how to bypass ai art filter, ai rules, ai ay rule, character ai bypass mod apk, ai article paywall bypass, how to bypass adobe ai guidelines, how to bypass as an ai language model, how to bypass ai filter character ai, is there a way to bypass character ai, is there a way to bypass c.ai filter, a1 skip bags, bypass bing ai restrictions, best ai bypass detection tool, bypass bing ai image restrictions, bing ai bypass filter, beacons ai bypass, bardeen ai bypass paywall, best ai bypass tool, bypass bing ai limit, beta character ai bypass words, beta character ai nsfw filter bypass, bing ai image generator bypass, ai bypass captcha, ai bypass checker, bypass ai content detection, bypass ai character, ai chat bypass, c.ai bypass code, ai clip skip, get around ai checker, character ai censorship bypass, bypass ai detection chatgpt, conch ai bypass, ckk.ai bypass, character ai bypass extension, character ai bypass filter words, ai bypass detection, bypass ai detection free, bypass ai detection reddit, ai detection bypass prompt, get around ai detector, turnitin ai detection bypass, bypass attack examples, does undetectable ai bypass turnitin, bypass ai detection, how to bypass turnitin ai detection, how to bypass ai detection reddit, how do you bypass the character ai filter, how to bypass ai detection chatgpt, chat gpt ai detector bypass, how to bypass copyleaks ai detector, ai essay bypass, ai_efficiency_override, how to bypass ai essay detection, how to bypass ai ethics, ai alternative, ai ou aie, ai alternative sounds, character ai nsfw filter bypass extension, character ai filter bypass extension, ai essay detector bypass, character ai nsfw filter bypass chrome extension, character ai nsfw filter bypass extension reddit, character ai nsfw filter bypass español, how to bypass e stop, ai bypass free, ai bypass filter, bypass ai filter reddit, character ai bypass filter mod apk download, c.ai bypass filter, character ai bypass filter apk, ai bypass paraphraser free, free ai bypass, how to bypass character ai filter, how to bypass c.ai nsfw filter, words to bypass character ai filter, how to bypass character ai filter reddit, how to bypass snapchat ai filter, how to bypass ai filter, words to use to bypass character ai filter, ai bypass github, bypass ai generator, character ai bypass guidelines, photoshop ai bypass guidelines, bypass ai detection, how to bypass ai detection on turnitin, paraphrase to bypass ai detection, prompt for chat gpt to bypass ai detection, rewrite to bypass ai detection, how to bypass ai detection essay, bypass ai detection prompt, chatgpt prompts to bypass ai detection, bypass ai detection ai detection remover, how to bypass antivirus detection, how to bypass bot detection, what is ai detection, how to bypass are you a robot, aiseo bypass ai detection, can a bot bypass captcha, bypass iphone disadvantages, best way to bypass ai detection, how to bypass robot verification, bypass ai detection chatgpt, how to bypass ai detection chatgpt reddit, how to bypass ai detection chat gpt, can quillbot bypass ai detection, chatgpt prompt to bypass ai detection, bypass attack examples, how to bypass antivirus, chatgpt bypass ai detection, how to bypass gpt-3 ai content detection, can you bypass turnitin ai detection, how to bypass zscaler without password, does quillbot bypass ai detection, how do I bypass turnitin ai detection, how to bypass emulator detection, bypass ai detection free reddit"
    />
    {/* Add any other meta tags as needed */}
</Helmet>
      <Navbar />

      <div className={styles['home-main']}>
        <div className={styles['home-heading-description-div']}>
          <div className={styles['home-heading']}>
            Cheat<span style={{ color: 'pink' }}>GPT</span>!
          </div>

          <div className={styles['home-description']}>
            <h1>
              The ultimate AI detection bypass tool. We remove AI detection from
              content generated by ChatGPT and other AI language models.
            </h1>
          </div>
        </div>
        <InputField setResultData={setResultData} setisBig={setisBig} />
        <div className={styles['home-full-result']}>
          {resultData && <Result data={resultData} />}
          {isBig && <PremiumBadge />} {/* Use the PremiumBadge component here */}
        </div>
      </div>
      {/* <Payment/> */}
      {/* <Proof/>
      <WhyPremium/>
      // <TestimonialsSection/> */}
      <Proof/>
      <WhyPremium/>
      <TestimonialsSection/>
      <Footer/>
    </div>
  );
};

export default Home;
