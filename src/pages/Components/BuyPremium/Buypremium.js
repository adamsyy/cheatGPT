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
    if (!initialEmail) {
      // If the email is not available, initiate the login process and wait for it to complete.
      await handleLogin();
    }else{
      setIsLoading(true);

      // Perform the API call here
      initialEmail = localStorage.getItem('email');
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
          // // Handle the API response data here
          // console.log(data);
          // setIsLoading(false); // Set loading to false when the request is complete
          // // Open a new window
          // window.open('https://buy.stripe.com/28ocNDfvudra7CM3cg', '_blank');
          // // Reload the current page
          // window.location.reload();
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
