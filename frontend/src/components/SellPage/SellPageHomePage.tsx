import React from "react";
import { Link } from "react-router-dom";
import styles from "../SellPage/SellPageHomePage.module.css";
import { useTheme } from "../../hooks/useTheme";

const categories = [
  "Cars",
  "Motorcycles",
  "Phones",
  "Houses",
  "Laptops",
  "Scooters",
  "Cameras",
];
const SellPage: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`${styles.sellpagehome} ${styles.theme}`}>
      <h1 className={`${styles.title} ${styles.theme}`}>
        Post Your Advertisement
      </h1>
      <div className={`${styles.categorysection} ${styles.theme}`}>
        <h2 className={`${styles.categorytitle} ${styles.theme}`}>
          Choose Category
        </h2>
        <ul className={`${styles.categorylist} ${styles.theme}`}>
          {categories.map((category, index) => (
            <li
              key={index}
              className={`${styles.categoryitem} ${styles.theme}`}
            >
              <Link
                to={category}
                className={`${styles.categorylink} ${styles.theme}`}
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SellPage;
