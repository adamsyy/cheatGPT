import { React, useEffect, useState } from "react";
import "../../styles/fonts.css";
import "../../App.css";
import styles from "./stats.module.css";
import Navbar from "../Home/Navbar/Navbar";

const Stats = () => {
  const [resultData, setResultData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://flask-hello-world-theta-green.vercel.app/stats")
      .then((res) => res.json())
      .then((data) => {
        setResultData(data);
        console.log(data["count"]);
        setIsLoading(false);
      });
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
              {resultData["count2"]}
              <span style={{ color: "pink" }}> Prompts</span>!
            </div>

            <div className={styles["home-description"]}>
              {resultData["count"]} Users have signed up to use CheatGpt till now.
            </div>
            <div className={styles["home-heading-description-div2"]}>
            <div className={styles["home-heading-description-div2"]}>
  <div className={styles["home-ppl-10"]}>
    Last 10 people who signed up:
    {resultData["last_10_email"].map((item, index) => ( // Add 'index' parameter
      <div key={index} className={styles["home-ppl-10-item-container"]}> {/* Add a new container */}
        <div className={styles["home-ppl-10-item"]}>
          {item}
        </div>
      </div>
    ))}
  </div>

  <div className={styles["home-ppl-10"]}>
    Last 50 search queries:
    {resultData["last_50_search"].map((item, index) => ( // Add 'index' parameter
      <div key={index} className={styles["home-ppl-10-item-container"]}> {/* Add a new container */}
        <div className={styles["home-ppl-10-item"]}>
          {item}
        </div>
      </div>
    ))}
  </div>
</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stats;
