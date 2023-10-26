import React, { useState, useContext } from 'react';
import styles from "./Navbar.module.css";
import logo from "./logo.png";
import AuthContext from "../../../store/authContext";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth"; 
import axios from "axios"; // Import the axios library

import app from "../../../store/firebase";
import { Link } from 'react-router-dom'; // Import the Link component

const Navbar = () => {
  const [isLoading, setIsLoading] = useState(false); // Add isLoading state
  const initialEmail = localStorage.getItem("email");
  const premium = localStorage.getItem("premium");
  
  const handleContributeClick = () => {
    window.open("https://www.buymeacoffee.com/adamsyyy", "_blank");
  };
  const handleBuyPremiumClick=()=>{
handlePremiumClick();
  }
  const handleFeedback=()=>{
    window.open("https://forms.gle/vQkYpcuFEoWQWdaf8", "_blank");
  }

  
  const handlePremiumClick = async () => {
  
    setIsLoading(true);

    // Perform the API call here
   const initialEmail = localStorage.getItem('email');
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
      .then(() => {
        // Create an anchor element
        const mailtoLink = document.createElement('a');
        
        // Set the "href" attribute with the mailto link
        const recipient = 'adamoommen.mec@gmail.com';
        const subject = 'CheatGPT Premium Application Needed';
        const body = 'Hi, I wanted a premium account';
        
        mailtoLink.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Simulate a click on the link to open the email client
        mailtoLink.click();
        
        // Handle any further actions or UI changes as needed
        setIsLoading(false);
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
        setIsLoading(false); // Set loading to false when there's an error
        // You might still want to reload the page here in case of an error.
       
      });
  };

  


  const handleLogin = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
  
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const email = user.email;
        localStorage.setItem("email", email);
        
        authEmail(email);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem('premium');
    localStorage.removeItem('count');
    window.location.reload();
  }
  
  const authEmail = async (email) => {
    setIsLoading(true); // Set isLoading to true when submitting
    const requestBody = { email: email };
    try {
      var response=await axios.post("https://flask-hello-world-theta-green.vercel.app/auth", requestBody);
      console.log("POST request successful");
      console.log(response.data.premium);
if(response.data.premium==true){
  localStorage.setItem('premium', 'true');
}
      setIsLoading(false); // Set isLoading to false after receiving the results
      // window.location.reload();
    } catch (error) {
      console.log("Error occurred while making POST request:", error);
      setIsLoading(false); // Set isLoading to false on error
      window.location.reload();
    }
  }

  if (initialEmail) {
    return (
      <div className={styles.navbar}>
        <Link to="/home"> {/* Update the to attribute to "/home" */}
          <img src={logo} alt="Logo" className={styles.logo} />
        </Link>
        <div className={styles.navItems}>
        {!premium && (
          <div className={styles.nonpremiumBadge} onClick={handleBuyPremiumClick}>
            {isLoading?<h1>Please Wait</h1>:  <h1>Buy Premium</h1>}
     
          </div>
        )}
        <div className={styles.navItemopt} onClick={handleFeedback} >
            Feedback
          </div>
          <div className={styles.navItem} onClick={handleContributeClick}>
            Contribute
          </div>
          <div className={styles.navItem} onClick={handleLogout}>
            Logout
          </div>
          {premium && (
          <div className={styles.premiumBadge}>
            Premium
          </div>
        )}
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.navbar}>
        <Link to="/home"> {/* Update the to attribute to "/home" */}
          <img src={logo} alt="Logo" className={styles.logo} />
        </Link>
        <div className={styles.navItems}>
          <div className={styles.navItem} onClick={handleContributeClick}>
            Contribute
          </div>
          {!isLoading && (
            <div className={styles.navItem} onClick={handleLogin}>
              Login
            </div>
          )}
          {isLoading && (
            <div className={styles.loader} />
          ) /* Render the loader when isLoading is true */}
        </div>
      </div>
    );
  }
};

export default Navbar;
 