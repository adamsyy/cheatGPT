import React, { useState, useRef } from "react";
import styles from "./inputField.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function InputField({ setResultData }) {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Add isLoading state

  const handleSubmit = () => {
    const requestBody = { phrase: value };
    setIsLoading(true); // Set isLoading to true when submitting

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
          setIsLoading(false); // Set isLoading to false after receiving the results
        }, 0);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false); // Set isLoading to false on error
      });
  };

  return (
    <>
      <div className={styles.inputFieldContainer}>
        <textarea
          placeholder="Enter your text here"
          value={value}
          rows={value.split("\n").length < 3 ? 3 : value.split("\n").length + 2}
          onChange={(e) => setValue(e.target.value)}
          style={{ fontFamily: "San Francisco" }}
        />
        <FontAwesomeIcon
          icon={faCheck}
          color="black"
          className={styles.tickicon}
          size="10x"
          onClick={handleSubmit}
        />
      </div>{" "}
      {
        isLoading && (
          <div className={styles.loader} />
        ) /* Render the loader when isLoading is true */
      }
    </>
  );
}

export default InputField;
