import React, { useState } from "react";
import styles from "./SellCategorySection.module.css";
import { useTheme } from "../../../hooks/useTheme";
import { FaUpload } from "react-icons/fa";

const SellCategorySection: React.FC = () => {
  const { theme } = useTheme();
  const [images, setImages] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newImages = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );

    if (images.length + newImages.length > 10) {
      alert("You can upload a maximum of 10 images.");
      return;
    }

    setImages((prev) => [...prev, ...newImages]);
  };

  const removeImage = (url: string) => {
    setImages((prev) => prev.filter((img) => img !== url));
    URL.revokeObjectURL(url); // Free memory (it clears the url made and stored in local).
  };

  return (
    <div className={`${styles.sellCategorySectionContainer} ${styles[theme]}`}>
      <div className={`${styles.setAPriceContainer} ${styles[theme]}`}>
        <span className={`${styles.setprice} ${styles[theme]}`}>
          SET A PRICE*
        </span>
        <div className={styles.inputWrapper}>
          <span className={styles.currencySymbol}>₹</span>
          <input
            type="number"
            className={`${styles.setpriceinput} ${styles[theme]}`}
            required
          />
        </div>
      </div>

      <div className={`${styles.uploadPhotosContainer} ${styles[theme]}`}>
        <label htmlFor="imageUpload" className={styles.customFileUpload}>
          <FaUpload className={styles.uploadIcon} />
          Choose Photos
        </label>
        <input
          id="imageUpload"
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className={styles.hiddenFileInput}
          required
        />

        <div className={styles.previewContainer}>
          {images.map((img, idx) => (
            <div key={idx} className={styles.imageWrapper}>
              <img
                src={img}
                className={styles.previewImage}
                alt={`pic-${idx}`}
              />
              <span
                className={styles.crossIcon}
                onClick={() => removeImage(img)}
              >
                ✕
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`${styles.confirmLocationConatiner} ${styles[theme]}`}
      ></div>

      <div className={`${styles.setAPriceContainer} ${styles[theme]}`}>
        <span className={`${styles.setprice} ${styles[theme]}`}>
          CONFIRM LOCATION*
        </span>
        <button className={`${styles.currentLocationBtn} ${styles[theme]}`}>
          Detect Current Location
        </button>
      </div>
      <button className={`${styles.postBtn} ${styles[theme]}`}>POST</button>
    </div>
  );
};

export default SellCategorySection;
