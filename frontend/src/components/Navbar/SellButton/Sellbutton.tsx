import React from "react";
import styles from "./Sellbutton.module.css";
import { useTheme } from "../../../hooks/useTheme";
import { useNavigate } from "react-router-dom";

const SellButton: React.FC = () => {
  const { theme } = useTheme();
  const handleClick = useNavigate();
  return (
    <div className={`${styles.sellButtonContainer} ${styles[theme]}`}>
      <button  className={`${styles.sellButton} ${styles[theme]}`} onClick={() => handleClick("/Sell")}>
      Sell
    </button>
    </div>
  );
};

export default SellButton;
