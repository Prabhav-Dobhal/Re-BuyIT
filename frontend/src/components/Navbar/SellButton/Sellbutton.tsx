import React from "react";
import styles from "./Sellbutton.module.css";
import { useTheme } from "../../../hooks/useTheme";

const SellButton: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`${styles.sellButtonContainer} ${theme === "dark" ? styles.dark : ""}`}>
      <button className={`${styles.sellButton} ${theme === "dark" ? styles.dark : ""}`}>
      Sell
    </button>
    </div>
  );
};

export default SellButton;
