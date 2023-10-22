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
  
  const handlePremiumClick = () => {
    window.open("https://buy.stripe.com/dR6dRH6YY3QAg9iaEE", "_blank");
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
 