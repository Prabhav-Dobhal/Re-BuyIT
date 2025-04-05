import styles from "./right.module.css";
import darkstyles from "./right.module.css"
import { Share2, Heart } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

const RightSection = () => {

  const { theme } = useTheme();

  return (
    <div className={theme==='light'?styles.container:darkstyles.container}>
      {/* 1️⃣ Price & Property Details */}
      <div className={theme==='light'?styles.card:darkstyles.card}>
      <div className={theme==='light'?styles.header:darkstyles.header}>
      <h2 className={theme==='light'?styles.price:darkstyles.price}>₹ 1,10,00,000</h2>
      <div className={theme==='light'?styles.icon:darkstyles.icon}>
      <Share2 className={theme==='light'?styles.icon:darkstyles.icon} />
            <Heart className={theme==='light'?styles.icon:darkstyles.icon} />
          </div>
        </div>
        <p className={theme==='light'?styles.details:darkstyles.details}>3 Bds - 3 Ba - 1550 ft²</p>
        <div className={theme==='light'?styles.footer:darkstyles.footer}>
        <p className={theme==='light'?styles.address:darkstyles.address}>Sector 123, Mohali, Punjab</p>
          <p className={theme==='light'?styles.date:darkstyles.date}>Mar 22</p>
        </div>
      </div>

      {/* 2️⃣ Seller Info */}
      <div className={theme==='light'?styles.card:darkstyles.card}>
      <div className={theme==='light'?styles.sellerTop:darkstyles.sellerTop}>
      <div className={theme==='light'?styles.sellerProfile:darkstyles.sellerProfile}>
              <div className={theme==='light'?styles.avatar:darkstyles.avatar}>AS</div>
            <h3 className={theme==='light'?styles.sellerName:darkstyles.sellerName}>Amit Singh</h3>
          </div>
          <div className={theme==='light'?styles.arrow:darkstyles.arrow}>&gt;</div>
        </div>
        <button className={theme==='light'?styles.contactBtn:darkstyles.contactBtn}>Contact the seller</button>
      </div>

      {/* 3️⃣ Location Details */}
      <div className={theme==='light'?styles.card:darkstyles.card}>
      <h3 className={theme==='light'?styles.postedIn:darkstyles.postedIn}>Posted in</h3>
        <p className={theme==='light'?styles.postedAddress:darkstyles.postedAddress}>Sector 123, Mohali, Punjab</p>
      </div>

      {/* 4️⃣ Google Map */}
      <div className={theme==='light'?styles.card:darkstyles.card}>
      <div className={theme==='light'?styles.mapHeader:darkstyles.mapHeader}>
      <p className={theme==='light'?styles.coordLabel:darkstyles.coordLabel}>Coordinates:</p>
          {/* <p className={styles.coordinates}>30.767° N, 76.681° E</p> */}
        </div>
        <iframe
          className={theme==='light'?styles.map:darkstyles.map}
          src="https://www.google.com/maps?q=30.767,76.681&output=embed"
          loading="lazy"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default RightSection;

