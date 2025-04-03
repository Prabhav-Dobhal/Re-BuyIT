import React from "react";
import styles from "./SellButton.module.css";
import { useTheme } from "../../../hooks/useTheme";

const SellButton: React.FC = () => {
  const { theme } = useTheme();

  return (
    <button className={`${styles.sellButton} ${theme === "dark" ? styles.dark : ""}`}>
      Sell
    </button>
  );
};

export default SellButton;
