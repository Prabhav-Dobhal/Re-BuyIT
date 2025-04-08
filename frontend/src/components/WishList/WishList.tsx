import { useState } from "react";
import styles from "./WishList.module.css";
import { RecommendationCard } from "../Recommendations/Recommendation.types";
import RecommendationCardComponent from "../RecommendationCard/RecommendationCardComponent";
import { useTheme } from "../../hooks/useTheme";

const WishList: React.FC = () => {
  const [wishListItems, setWishListItems] = useState<RecommendationCard[]>([]);
  const { theme } = useTheme();

  return (
    <>
      <div
        className={`${styles.wishListContainer} ${
          theme === "dark" ? styles.darkMode : ""
        }`}
      >
        <h2 className={styles.wishListHeading}>Your Wishlist</h2>

        {wishListItems?.length === 0 ? (
          <div className={styles.wishListEmpty}>
            <img
              src="/WishList/EmptyWishList.png"
              alt="emptyWishList"
              className={styles.emptyWishListImg}
            />
            <span className={styles.emptyListHeadline}>
              You haven't liked any ads yet
            </span>
            <div className={styles.emptyListTextWrapper}>
              <span>Like ads and share</span>
              <span>them with the world</span>
            </div>
            <div className={styles.discoverContainer}>
              <button className={styles.discoverbtn}>Discover</button>
            </div>
          </div>
        ) : (
          <div className={styles.wishListCardContainer}>
            {wishListItems?.map((item, index) => (
              <RecommendationCardComponent
                key={index}
                {...item}
                isWishListItem={true}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default WishList;
