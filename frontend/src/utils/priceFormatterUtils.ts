import { RecommendationCard } from "../components/Recommendations/Recommendation.types";

export const formatPrice = (value: RecommendationCard["price"]): string => {
  let x = value.toString();
  let afterPoint = "";

  if (x.indexOf(".") > 0) {
    afterPoint = x.substring(x.indexOf("."), x.length);
  }

  x = Math.floor(value).toString();
  let lastThree = x.substring(x.length - 3);
  let otherNumbers = x.substring(0, x.length - 3);

  if (otherNumbers !== "") {
    lastThree = "," + lastThree;
  }

  const formattedInteger =
    otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

  return formattedInteger + afterPoint;
};
