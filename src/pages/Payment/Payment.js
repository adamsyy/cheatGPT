import React, { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import Navbar from '../Home/Navbar/Navbar';
import styles from '../Stats/stats.module.css';
import paymentStyles from './Payment.module.css';
import Loader from '../Components/Loader/Loader'; // Import the loader component

export default function Payment() {
  const [text, setText] = useState("Thank You For your payment!");
  const [success, setSuccess] = useState(false); // Initialize the success state
  const [loading, setLoading] = useState(true); // Initialize the loading state

  const verifyData = () => {
    fetch("https://flask-hello-world-theta-green.vercel.app/paymentverify", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data["success"] === true) {
          localStorage.setItem('premium', 'true');
          setSuccess(true); // Set the success state to true
        } else {
          setSuccess(false); // Set the success state to false
        }
      })
      .finally(() => {
        setLoading(false); // Set loading to false when the API call is complete
      });
  };

  useEffect(() => {
    verifyData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className={styles['home-main']}>
        {loading ? ( // Show loader when loading is true
          <Loader />
        ) : (
          <div className={styles['home-heading-description-div']}>
            {success ? (
              <div className={styles['home-heading']}>
                Thank You <span style={{ color: 'pink' }}>For your payment</span>!
              </div>
            ) : (
              <div className={styles['home-heading']}>
                Unable <span style={{ color: 'pink' }}>to process your request</span>!
              </div>
            )}

            <div className={paymentStyles['payment-message']}>
              If you have any inquiries, email adamoommen.mec@gmail.com
            </div>
            <div className={paymentStyles['premium-button']}>
              <Link to="/" className={paymentStyles['button-link']}>Explore Premium</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
