import { useState } from "react";
import { RecommendationCard } from "./Recommendation.types";
import RecommendationCardComponent from "../RecommendationCard/RecommendationCardComponent";
import styles from "./Recommendation.module.css";
import { useTheme } from "../../hooks/useTheme";

const Recommendation = () => {
  let { theme } = useTheme();

  const [recommendationCards, setRecommendatonCards] = useState<
    RecommendationCard[]
  >();
  return (
    <>
      <div
        className={`${styles.recommendationscontainer} ${
          theme === "dark" ? styles.dark : ""
        }`}
      >
        <h2>Fresh Recommendation</h2>
        <div className={styles.recommendationcardscontainer}>
          {recommendationCards?.map((recommendationCard, index) => {
            return (
              <RecommendationCardComponent
                key={index}
                {...recommendationCard}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Recommendation;
