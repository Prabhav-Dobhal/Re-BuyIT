import { useTheme } from "../../../hooks/useTheme";
import React from "react";
import styles from "./ToggleSwitch.module.css";
import moon from "../../../../public/NavBarPhotos/night-mode (2).png";
import sun from "../../../../public/NavBarPhotos/light.png";
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
