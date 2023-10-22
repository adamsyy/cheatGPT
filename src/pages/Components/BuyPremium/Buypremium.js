import React, { useState } from 'react';
import styles from './Buypremium.module.css';
import Loader from "../Loader/Loader"

const PremiumBadge = () => {
    var initialEmail = localStorage.getItem("email");
  const [loading, setIsLoading] = useState(false);

  const handlePremiumClick = () => {
    // CHECK IF LOGGED IN
    const initialEmail = localStorage.getItem('email');

    setIsLoading(true);

    // Perform the API call here
    fetch('https://flask-hello-world-theta-green.vercel.app/paymentadd', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
       "email":initialEmail
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response data here
        console.log(data);
        setIsLoading(false); // Set loading to false when the request is complete
        window.open("https://buy.stripe.com/cN228Zabafzig9ibIK", "_blank");
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
        setIsLoading(false); // Set loading to false when there's an error
      });
  };

  return (
    <div className={styles.premiumBadge} onClick={handlePremiumClick}>
      {loading ?<Loader/> : 'Buy Premium'}
    </div>
  );
};

export default PremiumBadge;
