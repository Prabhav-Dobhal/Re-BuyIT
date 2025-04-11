import { useState } from "react";
import styles from "./right.module.css";
import darkstyles from "./rightdark.module.css";
import { Share2, Heart } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

// 🌐 Type for coordinates
interface Coordinates {
  lat: string;
  lng: string;
}

const RightSection: React.FC = () => {
  const { theme } = useTheme();
  const css = theme === "light" ? styles : darkstyles;

  // 🧠 State with default values (or use optional chaining if values might be undefined)
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
    <div className={css.container}>
      {/* 1️⃣ Price & Property Details */}
      <div className={css.card}>
        <div className={css.header}>
          <h2 className={css.price}>{price}</h2>
          <div className={css.icon}>
            <Share2 className={css.icon} />
            <Heart className={css.icon} />
          </div>
        </div>
        <p className={css.details}>{details}</p>
        <div className={css.footer}>
          <p className={css.address}>{address}</p>
          <p className={css.date}>{date}</p>
        </div>
      </div>

      {/* 2️⃣ Seller Info */}
      <div className={css.card}>
        <div className={css.sellerTop}>
          <div className={css.sellerProfile}>
            <div className={css.avatar}>{sellerInitials}</div>
            <h3 className={css.sellerName}>{sellerName}</h3>
          </div>
          <div className={css.arrow}>&gt;</div>
        </div>
        <button className={css.contactBtn}>Contact the seller</button>
      </div>

      {/* 3️⃣ Location Details */}
      <div className={css.card}>
        <h3 className={css.postedIn}>Posted in</h3>
        <p className={css.postedAddress}>{address}</p>
      </div>

      {/* 4️⃣ Google Map */}
      <div className={css.card}>
        <div className={css.mapHeader}>
          <p className={css.coordLabel}>Coordinates:</p>
        </div>
        <iframe
          className={css.map}
          src={`https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}&output=embed`}
          loading="lazy"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default RightSection;
