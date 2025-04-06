import React from "react";
import styles from "./Sellbutton.module.css";
import { useTheme } from "../../../hooks/useTheme";

const SellButton: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`${styles.sellButtonContainer} ${styles[theme]}`}>
      <button className={`${styles.sellButton} ${styles[theme]}`}>
      Sell
    </button>
    </div>
  );
};

export default SellButton;
