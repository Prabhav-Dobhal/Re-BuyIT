import { useState } from "react";
import styles from "./ProductDetailsRightSection.module.css";
import { Share2, Heart } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import { Coordinates } from "./productDetailsInterfaces"; 

const RightSection: React.FC = () => {
  const { theme } = useTheme();

  const [price, setPrice] = useState<string>();
  const [details, setDetails] = useState<string>();
  const [address, setAddress] = useState<string>();
  const [date, setDate] = useState<string>();
  const [sellerName, setSellerName] = useState<string>();
  const [sellerInitials, setSellerInitials] = useState<string>();
  const [coordinates, setCoordinates] = useState<Coordinates>({
    lat: "30.767",
    lng: "76.681",
  });

  return (
    <div className={styles.container}>
      {/* 1️⃣ Price & Property Details */}
      <div className={`${styles.card} ${styles[theme]}`}>
        <div className={styles.header}>
          <h2 className={`${styles.price} ${styles[theme]}`}>{price}</h2>
          <div className={`${styles.icon} ${styles[theme]}`}>
            <Share2 className={`${styles.icon} ${styles[theme]}`} />
            <Heart className={`${styles.icon} ${styles[theme]}`} />
          </div>
        </div>
        <p className={`${styles.details} ${styles[theme]}`}>{details}</p>
        <div className={styles.footer}>
          <p className={`${styles.address} ${styles[theme]}`}>{address}</p>
          <p className={`${styles.date} ${styles[theme]}`}>{date}</p>
        </div>
      </div>

      {/* 2️⃣ Seller Info */}
      <div className={`${styles.card} ${styles[theme]}`}>
        <div className={styles.sellerTop}>
          <div className={styles.sellerProfile}>
            <div className={styles.avatar}>{sellerInitials}</div>
            <h3 className={styles.sellerName}>{sellerName}</h3>
          </div>
          <div className={`${styles.arrow} ${styles[theme]}`}>&gt;</div>
        </div>
        <button className={styles.contactBtn}>Contact the seller</button>
      </div>

      {/* 3️⃣ Location Details */}
      <div className={`${styles.card} ${styles[theme]}`}>
        <h3 className={`${styles.postedIn} ${styles[theme]}`}>Posted in</h3>
        <p className={`${styles.postedAddress} ${styles[theme]}`}>{address}</p>
      </div>

      {/* 4️⃣ Google Map */}
      <div className={`${styles.card} ${styles[theme]}`}>
        <div className={styles.mapHeader}>
          <p className={`${styles.coordLabel} ${styles[theme]}`}>Coordinates:</p>
        </div>
        <iframe
          className={styles.map}
          src={`https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}&output=embed`}
          loading="lazy"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default RightSection;
