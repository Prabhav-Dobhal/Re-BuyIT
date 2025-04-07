import { useState } from "react";
import { formatPrice } from "../../utils/priceFormatterUtils";
import { RecommendationCard } from "../Recommendations/Recommendation.types";
import styles from "./RecommendationCardComponent.module.css";
import { useTheme } from "../../hooks/useTheme";

import heartRedIcon from "/NavBarPhotos/hearts_18811641.png";
import heartIcon from "/public/NavBarPhotos/light_heart.png";

const RecommendationCardComponent = ({
  image,
  featured,
  price,
  model,
  description,
  location,
  date_added,
  isWishListItem,
}: RecommendationCard & { isWishListItem: boolean }) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const { theme } = useTheme();

  return (
    <div
      className={`${styles.recommendationcardbox} ${
        theme === "dark" ? styles.darkMode : ""
      }`}
    >
      <div
        className={styles.heartRedIconWrapper}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={
            isWishListItem ? heartRedIcon : hovered ? heartRedIcon : heartIcon
          }
          alt="Heart"
          className={
            isWishListItem ? styles.heartRedIconFilled : styles.heartIconOutline
          }
        />
      </div>

      <img src={image} alt="ProductImage" className={styles.ProductImage} />

      {featured && <div className={styles.ProductFeatured}>FEATURED</div>}

      <span className={styles.ProductPrice}>₹{formatPrice(price)}</span>
      <span className={styles.ProductModel}>{model}</span>
      <span className={styles.ProductDescription}>
        {description.length > 40
          ? description.substring(0, 40) + "..."
          : description}
      </span>
      <span className={styles.ProductLocation}>{location}</span>
      <span className={styles.ProductDateAdded}>{date_added}</span>
    </div>
  );
};

export default RecommendationCardComponent;
