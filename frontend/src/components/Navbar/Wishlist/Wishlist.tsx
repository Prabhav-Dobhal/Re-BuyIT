import React from "react";
import styles from "./Wishlist.module.css";
import { useTheme } from "../../../hooks/useTheme"; 
import heartIcon from "../../../../public/NavBarPhotos/hearts_18811641.png";  
import heartFilledIcon from "../../../../public/NavBarPhotos/istockphoto-1125688086-612x612.jpg"; 

const Heart: React.FC = () => {
  const { theme } = useTheme();  
  const [hovered, setHovered] = React.useState(false);

  return (
    <div 
      className={`${styles.heartContainer} ${theme === "dark" ? styles.dark : styles.light}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
    
     {theme==="light" && 
      <img 
        className={styles.heartIcon} 
        src={hovered ? heartIcon : heartFilledIcon} 
        alt="Heart"
      />}
      {
        theme ==="dark" &&
        <img
        className={styles.heartIcon}
        src={heartIcon}
        />
      }
    </div>
  );
};

export default Heart;
