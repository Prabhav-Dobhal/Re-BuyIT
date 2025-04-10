import { useTheme } from "../../hooks/useTheme";
import styles from "./myAds.module.css";

const MyAds = () => {
  const { theme } = useTheme();

  return (
    <div className={`${styles.container} ${theme === "dark" ? styles.dark : ""}`}>
      <div className={styles.content}>
        <img
          src="/MyAdsImg/MyAds_Img.png"
          alt="No Ads"
          className={styles.image}
        />
        <h2 className={styles.heading}>You haven't listed anything yet</h2>
        <p className={styles.subtext}>Start selling now to reach buyers near you!</p>
        <button className={styles.button}>Start Selling</button>
      </div>
    </div>
  );
};

export default MyAds;
