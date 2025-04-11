import React from "react";
import { useNavigate } from "react-router-dom";
import {useTheme} from '../../../hooks/useTheme';
import styles from "./Backbutton.module.css";
const BackButton: React.FC = () => {
  const navigate = useNavigate();
  const {theme} = useTheme();
  const handleGoBack = (): void => {
    navigate(-1);
  };

  return (
    <button
      onClick={handleGoBack}
      className={`${styles.btn} ${styles[theme]}`}
    >
      ⬅ Go Back
    </button>
  );
};

export default BackButton;
