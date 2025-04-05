import { useTheme } from "../../../hooks/useTheme";
import React from "react";
import styles from "./ToggleSwitch.module.css";
import { MdOutlineLightMode } from "react-icons/md";
import moon from "/NavBarPhotos/night-mode (2).png";
import sun from "/NavBarPhotos/light.png";


function ToggleSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={styles.imgContainer} onClick={toggleTheme}>
      <img
        src={theme === "light" ? moon : sun}
        alt="Toggle Theme"
        className={styles.img}
      />
    </button>
    
  );
}

export default ToggleSwitch;
