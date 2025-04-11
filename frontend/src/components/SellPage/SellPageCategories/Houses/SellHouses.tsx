import React, { useState } from "react";
import SellCategorySection from "../../SellCategorySection/SellCategorySection";
import styles from "./SellHouses.module.css";
import { useTheme } from "../../../../hooks/useTheme";
import { preventScrollTrigger } from "../../../../utils/preventScrollTrigger";
import { preventInvalidNumberKeys } from "../../../../utils/preventInvalidNumberKeys";
const propertyTypes = [
  "Apartment",
  "Villa",
  "Independent House",
  "Studio Apartment",
  "Farmhouse",
];

const furnishingOptions = ["Fully Furnished", "Semi Furnished", "Unfurnished"];

const SellHouses: React.FC = () => {
  const { theme } = useTheme();
  const [propertyType, setPropertyType] = useState("");
  const [bhk, setBhk] = useState("");
  const [squareFeet, setSquareFeet] = useState("");
  const [location, setLocation] = useState("");
  const [furnishing, setFurnishing] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className={`${styles.sellCategoryContainer} ${styles[theme]}`}>
      <h1 className={`${styles.sellTitle} ${styles[theme]}`}>Add Your House for Sale</h1>
      <p className={`${styles.sellDescription} ${styles[theme]}`}>
        Fill in the details below to list your house. Include type, BHK, area,
        furnishing, and location details to attract the right buyers.
      </p>

      <select
        className={`${styles.dropdown} ${styles[theme]}`}
        value={propertyType}
        onChange={(e) => setPropertyType(e.target.value)}
        required
      >
        <option value="">Select Property Type</option>
        {propertyTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Number of BHK (e.g. 2, 3)"
        className={`${styles.inputBox} ${styles[theme]}`}
        value={bhk}
        onChange={(e) => setBhk(e.target.value)}
        onKeyDown={preventInvalidNumberKeys}
        onWheel={preventScrollTrigger}
        required
      />

      <input
        type="number"
        placeholder="Area in Square Feet (e.g. 1200)"
        className={`${styles.inputBox} ${styles[theme]}`}
        value={squareFeet}
        onChange={(e) => setSquareFeet(e.target.value)}
        onKeyDown={preventInvalidNumberKeys}
        onWheel={preventScrollTrigger}
        required
      />

      <input
        type="text"
        placeholder="Location (e.g. Indiranagar, Bangalore)"
        className={`${styles.inputBox} ${styles[theme]}`}
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />

      <select
        className={`${styles.dropdown} ${styles[theme]}`}
        value={furnishing}
        onChange={(e) => setFurnishing(e.target.value)}
        required
      >
        <option value="">Select Furnishing</option>
        {furnishingOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Enter Title"
        className={`${styles.inputBox} ${styles[theme]}`}
        value={title}
        onChange={(e) => setTitle(e.target.value)}

        required
      />

      <textarea
        placeholder="Enter Description"
        className={`${styles.textareaBox} ${styles[theme]}`}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <SellCategorySection />
    </div>
  );
};

export default SellHouses;
