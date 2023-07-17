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
const Navbar = () => {
  const initialEmail = localStorage.getItem("email");
  const handleContributeClick = () => {
    window.open("https://www.buymeacoffee.com/adamsyyy", "_blank");
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

    


        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  const handleLogout = () => {
    localStorage.removeItem("email");
    window.location.reload();
  }
  const authEmail = async (email) => {
    const requestBody = { email: email };
    try {
      await axios.post("https://flask-hello-world-theta-green.vercel.app/auth", requestBody);
      console.log("POST request successful");
    } catch (error) {
      console.log("Error occurred while making POST request:", error);
    }
  }

  if(initialEmail){
    return (
      <div className={styles.navbar}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <div className={styles.navItems}>
          <div className={styles.navItem} onClick={handleContributeClick}>
            Contribute
          </div>
          <div className={styles.navItem} onClick={handleLogout}>
            Logout
          </div>
        </div>
      </div>
    );
  }else{  return (
    <div className={styles.navbar}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <div className={styles.navItems}>
        <div className={styles.navItem} onClick={handleContributeClick}>
          Contribute
        </div>
        <div className={styles.navItem} onClick={handleLogin}>
          Login
        </div>
      </div>
    </div>
  );}

};

export default Navbar;
