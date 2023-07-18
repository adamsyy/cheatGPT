import React, { useState } from "react";
import styles from "./inputField.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function InputField({ setResultData }) {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { phrase: value };
    setIsLoading(true);

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
      <div className={styles.inputFieldContainer}>
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Enter your text here"
            value={value}
            rows={value.split("\n").length < 3 ? 3 : value.split("\n").length + 2}
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
        </form>
      </div>{" "}
      {isLoading && <div className={styles.loader} />}
    </>
  );
}

export default InputField;