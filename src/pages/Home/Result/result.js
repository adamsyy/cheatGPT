
import '../../../App.css';
import React, { useState, useContext } from 'react';
import styles from './result.module.css';
import heart_filled from "../../../styles/heart_filled.png";
import heart_unfilled from "../../../styles/heart_unfilled.png";
import axios from "axios"; // Import the axios library
const Result = ({ data }) => {

  const initialEmail = localStorage.getItem("email");
const [isClicked,setisClicked]= useState(false);
const [noofclicks,setNoOfclicks]= useState(0);
  const sendToBackend = async () => {
 setNoOfclicks(noofclicks+1);

setisClicked(!isClicked);
    const requestBody = { user_id:initialEmail,content:data };
    try {
      if(noofclicks>0){return;}
      await axios.post("https://flask-hello-world-theta-green.vercel.app/add_favorites", requestBody);
      console.log("POST request successful");
      setisClicked(true);
      //setIsLoading(false); // Set isLoading to false after receiving the results
     // window.location.reload();

    } catch (error) {

      console.log("Error occurred while making POST request:", error);

    }
  }


  return (
    <div className={styles["result-out"]} >
    {initialEmail &&
   <>
   {
    !isClicked &&
    <img src={heart_unfilled} onClick={sendToBackend}>
    </img>
   }
     {
    isClicked &&
    <img src={heart_filled} onClick={sendToBackend}>
    </img>
   }
   </>
    }
    <div className={styles["result-div"]}>
      {/* Render the data */}
      <div>{data}</div>
    </div>
    </div>
  );
};

export default Result;