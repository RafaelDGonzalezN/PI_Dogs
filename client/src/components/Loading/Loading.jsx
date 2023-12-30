import React from "react";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <img
        src="https://i.pinimg.com/originals/44/0b/9d/440b9dc08fefeff13ec30dc0ae6a09df.gif"
        alt="Loading..."
        className={styles.loadingImage}
      />
      <h1 className={styles.loadingText}>Loading</h1>
    </div>
  );
};

export default Loading;