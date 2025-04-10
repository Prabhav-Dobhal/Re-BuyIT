import { useState } from "react";
import { RecommendationCard } from "./Recommendation.types";
import RecommendationCardComponent from "../RecommendationCard/RecommendationCardComponent";
import styles from "./Recommendation.module.css";
import { useTheme } from "../../hooks/useTheme";

const Recommendation = () => {
  let { theme } = useTheme();

  const [recommendationCards, setRecommendatonCards] = useState<
    RecommendationCard[]
  >([]);

  return (
    <>
      <div
        className={`${styles.recommendationscontainer} ${
          theme === "dark" ? styles.dark : ""
        }`}
      >
        <h2 className={styles.freshRecommendationHeaderText}>
          Fresh Recommendation
        </h2>
        <div className={styles.recommendationcardscontainer}>
          {recommendationCards?.map((recommendationCard, index) => {
            return (
              <RecommendationCardComponent
                key={index}
                {...recommendationCard}
                //Don't forget to fetch it from User DB and update here
                isWishListItem={false}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Recommendation;
