import React, { useState } from 'react';
import styles from './Buypremium.module.css';
import Loader from '../Loader/Loader';
import axios from 'axios';
import app from '../../../store/firebase';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const handleLogin = async () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const email = user.email;
    localStorage.setItem('email', email);

    await authEmail(email);
  } catch (error) {
    console.log(error);
  }
};

const authEmail = async (email) => {
  const requestBody = { email: email };
  try {
    const response = await axios.post(
      'https://flask-hello-world-theta-green.vercel.app/auth',
      requestBody
    );
    console.log('POST request successful');
    console.log(response.data.premium);
    if (response.data.premium === true) {
      localStorage.setItem('premium', 'true');
  
    }
    window.location.reload();
  } catch (error) {
    console.log('Error occurred while making POST request:', error);
    window.location.reload();
  }
};

const PremiumBadge = () => {
  var initialEmail = localStorage.getItem('email');
  const [loading, setIsLoading] = useState(false);

  const handlePremiumClick = async () => {
    const initialEmail = localStorage.getItem('email');
  
    if (!initialEmail) {
      // If the user is not signed in, open Gmail with the pre-filled email
      const mailtoLink = document.createElement('a');
      const recipient = 'adamoommen.mec@gmail.com';
      const subject = 'CheatGPT Premium Application Needed';
      const body = 'Hi, I wanted a premium account, I am from {country}, i prefer payment via Buymeacoffee/UPI/Buy giftcard (select one)';
      
      mailtoLink.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Simulate a click on the link to open the email client
      mailtoLink.click();
    } else {
      setIsLoading(true);
  
      // User is already signed in; perform other actions
      fetch('https://flask-hello-world-theta-green.vercel.app/paymentadd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: initialEmail,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle other actions when the user is already signed in
          setIsLoading(false);
          const mailtoLink = document.createElement('a');
          const recipient = 'adamoommen.mec@gmail.com';
          const subject = 'CheatGPT Premium Application Needed';
          const body = 'Hi, I wanted a premium account, I am from {country}, i prefer payment via Buymeacoffee/UPI/Buy giftcard  (select one)';
          
          mailtoLink.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
          
          // Simulate a click on the link to open the email client
          mailtoLink.click();
        })
        .catch((error) => {
          // Handle errors
          console.error(error);
          setIsLoading(false); // Set loading to false when there's an error
          // You might still want to reload the page here in case of an error.
          window.location.reload();
        });
    }
  };
  

  return (
    <div className={styles.premiumBadge} onClick={handlePremiumClick}>
      {loading ? <Loader /> : 'Buy Premium'}
    </div>
  );
};

export default PremiumBadge;
