import React from "react";
import styles from "./Loading.module.css";

const Loading = () => {
  return <div className={styles.grid}>
      <div className={styles.loading}></div>
  </div>;
};

export default Loading;