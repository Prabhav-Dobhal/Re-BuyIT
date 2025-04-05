import React, { useState } from "react";
import SellCategorySection from "../../SellCategorySection/SellCategorySection";
import styles from "./SellCameras.module.css";

const SellCameras: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className={styles.sellCategoryContainer}>
      <h1 className={styles.sellTitle}>Add Your Camera for Sale</h1>
      <p className={styles.sellDescription}>
        Fill in the details below to list your camera. Add price, upload photos,
        and confirm your location to reach the right buyers.
      </p>

      <input
        type="text"
        placeholder="Enter Title"
        className={styles.inputBox}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Enter Description"
        className={styles.textareaBox}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <SellCategorySection />
    </div>
  );
};

export default SellCameras;
