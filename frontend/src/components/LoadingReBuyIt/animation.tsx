import React, { useEffect } from "react";
import Splitting from "splitting";
import "splitting/dist/splitting.css";
import styles from "./LoadingAnimation.module.css";

const LoadingAnimation: React.FC = () => {
  useEffect(() => {
    Splitting();
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={`loading ${styles.loadingText}`}
        data-splitting
      >
        ReBUY iT
      </div>
      <div>Please Wait while we are loading</div>
    </div>
  );
};

export default LoadingAnimation;