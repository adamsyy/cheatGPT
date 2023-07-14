import React from 'react';
import '../../../App.css';
import styles from './result.module.css';

const Result = ({ data }) => {
  return (
    <div className={styles["result-div"]}>
      {/* Render the data */}
      <div>{data}</div>
    </div>
  );
};

export default Result;