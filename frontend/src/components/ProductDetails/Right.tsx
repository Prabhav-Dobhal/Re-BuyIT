import styles from "./right.module.css";
// import darkstyles from "./right.module.css"
import { Share2, Heart } from "lucide-react";
// import { useTheme } from "../../hooks/useTheme";

const RightSection = () => {

  // const { theme } = useTheme();

  return (
    // <div className={theme==='light'?styles.container:darkstyles.container}>
    <div className={styles.container}>
      {/* 1️⃣ Price & Property Details */}
      <div className={styles.card}> 
        <div className={styles.header}>
          <h2 className={styles.price}>₹ 1,10,00,000</h2>
          <div className={styles.icons}>
            <Share2 className={styles.icon} />
            <Heart className={styles.icon} />
          </div>
        </div>
        <p className={styles.details}>3 Bds - 3 Ba - 1550 ft²</p>
        <div className={styles.footer}>
          <p className={styles.address}>Sector 123, Mohali, Punjab</p>
          <p className={styles.date}>Mar 22</p>
        </div>
      </div>

      {/* 2️⃣ Seller Info */}
      <div className={styles.card}>
        <div className={styles.sellerTop}>
          <div className={styles.sellerProfile}>
            <div className={styles.avatar}>AS</div>
            <h3 className={styles.sellerName}>Amit Singh</h3>
          </div>
          <div className={styles.arrow}>&gt;</div>
        </div>
        <button className={styles.contactBtn}>Contact the seller</button>
      </div>

      {/* 3️⃣ Location Details */}
      <div className={styles.card}>
        <h3 className={styles.postedIn}>Posted in</h3>
        <p className={styles.postedAddress}>Sector 123, Mohali, Punjab</p>
      </div>

      {/* 4️⃣ Google Map */}
      <div className={styles.card}>
        <div className={styles.mapHeader}>
          <p className={styles.coordLabel}>Coordinates:</p>
          {/* <p className={styles.coordinates}>30.767° N, 76.681° E</p> */}
        </div>
        <iframe
          className={styles.map}
          src="https://www.google.com/maps?q=30.767,76.681&output=embed"
          loading="lazy"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default RightSection;

