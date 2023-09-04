
import '../../../App.css';
import React, { useState, useContext } from 'react';
import styles from './result.module.css';
import heart_filled from "../../../styles/heart_filled.png";
import heart_unfilled from "../../../styles/heart_unfilled.png";
import axios from "axios"; // Import the axios library
const Result = ({ data }) => {

  const initialEmail = localStorage.getItem("email");
const [isClicked,setisClicked]= useState(false);
const [isDeadLock,setDeadLock]=useState(false);
  const sendToBackend = async () => {
if(isDeadLock){
  return;
}
 if(isClicked){
  deleteDoc();
  return;
 }

setisClicked(true);
    const requestBody = { user_id:initialEmail,content:data };
    try {
setDeadLock(true);
      await axios.post("https://flask-hello-world-theta-green.vercel.app/add_favorites", requestBody);
      console.log("POST request successful");
      setDeadLock(false);
      //setIsLoading(false); // Set isLoading to false after receiving the results
     // window.location.reload();

    } catch (error) {
      setDeadLock(false);
      console.log("Error occurred while making POST request:", error);

    }
  }

  const deleteDoc = async () => {
    if(isDeadLock){
      return;
    }
    setisClicked(false);
    const requestData = {
      content:data // Replace with the content value you want to match
    };
  
    try {
      setDeadLock(true);
      await axios.delete("https://flask-hello-world-theta-green.vercel.app/delete_favorites", {
        headers: {
          "Content-Type": "application/json"
        },
        data: requestData
      });
      console.log("DELETE request successful");
      setDeadLock(false);
      // Handle the response or do any necessary post-request actions here
    } catch (error) {
      setDeadLock(false);
      console.log("Error occurred while making DELETE request:", error);
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