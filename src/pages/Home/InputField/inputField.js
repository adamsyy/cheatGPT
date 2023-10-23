import React, { useState, useEffect } from "react";
import styles from "./inputField.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../../store/authContext";

function InputField({ setResultData, setisBig }) {
  var initialEmail = localStorage.getItem("email");
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(Number(localStorage.getItem("count")) || 0); // Initialize count state from localStorage
  const premium = localStorage.getItem("premium");
  const maxTries = 10; // Define the maximum allowed tries

  useEffect(() => {
    // Update the count in local storage whenever it changes
    localStorage.setItem("count", count.toString());
  }, [count]);

  const handleSubmit = (e) => {
    if (!initialEmail) {
      initialEmail = "anonymous";
    }
    e.preventDefault();

    if (count >= maxTries) {
      setResultData(
        "You have exceeded the maximum allowed tries. Please consider subscribing to our premium plan which is priced at just $2 for unlimited access."
      );
      setisBig(true);
      return; // Do not proceed if the maximum tries are exceeded
    }

    if (value.trim().length > 1125 && initialEmail === "anonymous") {
      setResultData(
        "Please consider subscribing to our premium plan, which is priced at just $2, in order to input longer sentences."
      );
      setisBig(true);
      return; // Do not proceed if input is too short
    }
    if (value.trim().length > 1125 && !premium && initialEmail !== "anonymous") {
      setResultData(
        "Please consider subscribing to our premium plan, which is priced at just $2, in order to input longer sentences."
      );
      setisBig(true);
      return; // Do not proceed if input is too short
    }
    setisBig(false);
    const requestBody = { phrase: value, email: initialEmail };
    setIsLoading(true);

    // Update the count every time the user inputs something
    setCount(count + 1);

    fetch("https://flask-hello-world-theta-green.vercel.app/paraphrase1", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTimeout(() => {
          setResultData(data.paraphrases);
          setIsLoading(false);
        }, 0);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
      });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSubmit(e);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className={styles.inputFieldContainerWrapper}>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputFieldContainer}>
            <textarea
              placeholder="Enter your AI-generated text"
              value={value}
              rows={
                value.split("\n").length < 3 ? 3 : value.split("\n").length + 2
              }
              onChange={handleChange}
              style={{ fontFamily: "San Francisco" }}
              onKeyDown={handleKeyDown}
            />
            <FontAwesomeIcon
              icon={faCheck}
              type="submit"
              color="black"
              className={styles.tickicon}
              size="10x"
              onClick={handleSubmit}
            />
          </div>
        </form>
     {!premium&&(
         <div className={styles.remainingTries}>
         Tries remaining: {maxTries - count}
       </div>
     )}
      </div>
      {isLoading && <div className={styles.loader} />}
    </>
  );
}

export default InputField;
