import { useState } from "react";
import styles from "./Wishlist.module.css";
import { useTheme } from "../../../hooks/useTheme";
import heartIcon from "/NavBarPhotos/hearts_18811641.png";
import heartFilledIcon from "/public/NavBarPhotos/istockphoto-1125688086-612x612.jpg";
import { useNavigate } from "react-router-dom";

const Heart: React.FC = () => {
  const { theme } = useTheme();
  const [hovered, setHovered] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleNavigate = (): void => {
    navigate("/wishlist");
  };

  return (
    <div
      className={`${styles.heartContainer} ${styles[theme]}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleNavigate}
    >
      {theme === "light" && (
        <img
          className={styles.heartIcon}
          src={hovered ? heartIcon : heartFilledIcon}
          alt="Heart"
        />
      )}
      {theme === "dark" && <img className={styles.heartIcon} src={heartIcon} />}
    </div>
  );
};

export default Heart;
