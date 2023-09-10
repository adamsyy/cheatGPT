import { React, useEffect, useState } from "react";
import "../../../styles/fonts.css";
import "../../../App.css";
import styles from "./fav.module.css";
import Navbar from "../../Home/Navbar/Navbar";
import heart_filled from "../../../styles/heart_filled.png";
import heart_unfilled from "../../../styles/heart_unfilled.png";

const Fav = () => {

  const [resultData, setResultData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [likedItems, setLikedItems] = useState([]);

  const fetchData = () => {
    const initialEmail = localStorage.getItem("email");
    // Define the email ID you want to send as the request body
    const emailId = initialEmail; // Replace with your desired email ID
  
    // Create a POST request configuration
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Set the content type to JSON
      },
      body: JSON.stringify({ user_id: initialEmail }), // Convert the email ID to JSON format and set it as the request body
    };
  
    fetch("https://flask-hello-world-theta-green.vercel.app/get_favorites", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log("Item at index 0:", data.favorites[0]);
        console.log("Item at index 1:", data.favorites[1]);
        setResultData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle any errors that occur during the fetch
      });
  };
  


  const handleDelete = (index) => {
    // Create a copy of resultData
    const updatedData = { ...resultData };

    // Remove the item at the given index from the favorites array
    updatedData.favorites.splice(index, 1);

    // Update the resultData state
    setResultData(updatedData);
  };

  useEffect(() => {
    // Fetch data immediately when the component mounts
    setIsLoading(true);
    fetchData();

    // Call the API every 5 seconds using setInterval
    const interval = setInterval(() => {
      fetchData();
    }, 50000000000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      <div className={styles.loaderdiv}>
        {isLoading && <div className={styles.loader} />}
      </div>
      {resultData && (
        <div className={styles["home-main"]}>
          <div className={styles["home-heading-description-div"]}>
            <div className={styles["home-heading"]}>
           Favorites
              <span style={{ color: "pink" }}> !</span>
            </div>

            <div className={styles["home-description"]}>
             Here are your favourite prompts
            </div>
            <div className={styles["home-heading-description-div2"]}>
              <div className={styles["home-ppl-10"]}>
            
                {resultData["favorites"].map((item, index) => (
                  <div key={index} className={styles["home-ppl-10-item-container"]}>
                    <div className={styles["home-ppl-10-item"]}>{item.content}</div>
                    <img
                      src={likedItems.includes(index) ? heart_unfilled : heart_filled}
                      alt="Like"
                      className={styles["like-icon"]}
                      onClick={() => handleDelete(index)}
                    />
                  </div>
                ))}
              </div>

           
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Fav;
