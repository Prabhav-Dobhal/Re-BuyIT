import styles from "./myAds.module.css";

const MyAds = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img
          src="/MyAdsImg/MyAds_Img.png"
          alt="No Ads"
          className={styles.image}
        />
        <h2 className={styles.heading}>You haven't listed anything yet</h2>
        <p className={styles.subtext}>Start selling now to reach buyers near you!</p>
        <button
          className={styles.button}
        >
          Start Selling
        </button>
      </div>
    </div>
  );
};

export default MyAds;