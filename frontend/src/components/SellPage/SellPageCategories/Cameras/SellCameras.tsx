import React, { useState } from "react";
import SellCategorySection from "../../SellCategorySection/SellCategorySection";
import styles from "./SellCameras.module.css";
import { useTheme } from "../../../../hooks/useTheme";

const SellCameras: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { theme } = useTheme(); // e.g., theme = "light" or "dark"

  return (
    <div className={`${styles.sellCategoryContainer} ${styles[theme]}`}>
      <h1 className={`${styles.sellTitle} ${styles[theme]}`}>
        Add Your Camera for Sale
      </h1>

      <p className={`${styles.sellDescription} ${styles[theme]}`}>
        Fill in the details below to list your camera. Add price, upload photos,
        and confirm your location to reach the right buyers.
      </p>

      <input
        type="text"
        placeholder="Enter Title"
        className={`${styles.inputBox} ${styles[theme]}`}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Enter Description"
        className={`${styles.textareaBox} ${styles[theme]}`}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <SellCategorySection  />
    </div>
  );
};

export default SellCameras;
