import { formatPrice } from "../../utils/priceFormatterUtils";
import { RecommendationCard } from "../Recommendations/Recommendation.types";
import styles from "./RecommendationCardComponent.module.css";

const RecommendationCardComponent = ({
  image,
  featured,
  price,
  model,
  description,
  location,
  date_added,
}: RecommendationCard) => {
  return (
    <div className={styles.recommendationcardbox}>
      <img src={image} alt="ProductImage" className={styles.ProductImage} />
      {featured && <div className={styles.ProductFeatured}>FEATURED</div>}
      <span className={styles.ProductPrice}>₹{formatPrice(price)}</span>
      <span className={styles.ProductModel}>{model}</span>
      <span className={styles.ProductDescription}>
        {description.length > 40
          ? description.substring(40, 0) + "..."
          : description}
      </span>
      <span className={styles.ProductLocation}>{location}</span>
      <span className={styles.ProductDateAdded}>{date_added}</span>
    </div>
  );
};

export default RecommendationCardComponent;
