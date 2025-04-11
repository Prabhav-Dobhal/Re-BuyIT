import React from "react";
import { Link } from "react-router-dom";
import styles from "../SellPage/SellPageHomePage.module.css";
import { useTheme } from "../../hooks/useTheme";
import {
  FaCar,
  FaMotorcycle,
  FaMobileAlt,
  FaHome,
  FaLaptop,
  FaBicycle,
  FaCamera,
} from "react-icons/fa";

const categories = [
  { name: "Cars", icon: <FaCar /> },
  { name: "Motorcycles", icon: <FaMotorcycle /> },
  { name: "Phones", icon: <FaMobileAlt /> },
  { name: "Houses", icon: <FaHome /> },
  { name: "Laptops", icon: <FaLaptop /> },
  { name: "Scooters", icon: <FaBicycle /> },
  { name: "Cameras", icon: <FaCamera /> },
];

const SellPage: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`${styles.sellpagehome} ${styles[theme]}`}>
      <h1 className={`${styles.title} ${styles[theme]}`}>
        Post Your Advertisement
      </h1>
      <div className={`${styles.categorysection} ${styles[theme]}`}>
        <h2 className={`${styles.categorytitle} ${styles[theme]}`}>
          Choose Category
        </h2>
        <ul className={`${styles.categorylist} ${styles[theme]}`}>
          {categories.map((category, index) => (
            <li
              key={index}
              className={`${styles.categoryitem} ${styles[theme]}`}
            >
              <Link
                to={category.name}
                className={`${styles.categorylink} ${styles[theme]}`}
              >
                <span style={{ marginRight: "8px" }}>{category.icon}</span>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SellPage;
