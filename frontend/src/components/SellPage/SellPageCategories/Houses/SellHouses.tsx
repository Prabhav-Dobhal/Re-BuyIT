import React, { useState } from "react";
import SellCategorySection from "../../SellCategorySection/SellCategorySection";
import styles from "./SellHouses.module.css";

const propertyTypes = [
  "Apartment",
  "Villa",
  "Independent House",
  "Studio Apartment",
  "Farmhouse",
];

const furnishingOptions = ["Fully Furnished", "Semi Furnished", "Unfurnished"];

const SellHouses: React.FC = () => {
  const [propertyType, setPropertyType] = useState("");
  const [bhk, setBhk] = useState("");
  const [squareFeet, setSquareFeet] = useState("");
  const [location, setLocation] = useState("");
  const [furnishing, setFurnishing] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className={styles.sellCategoryContainer}>
      <h1 className={styles.sellTitle}>Add Your House for Sale</h1>
      <p className={styles.sellDescription}>
        Fill in the details below to list your house. Include type, BHK, area,
        furnishing, and location details to attract the right buyers.
      </p>

      <select
        className={styles.dropdown}
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
        className={styles.inputBox}
        value={bhk}
        onChange={(e) => setBhk(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Area in Square Feet (e.g. 1200)"
        className={styles.inputBox}
        value={squareFeet}
        onChange={(e) => setSquareFeet(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Location (e.g. Indiranagar, Bangalore)"
        className={styles.inputBox}
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />

      <select
        className={styles.dropdown}
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
        className={styles.inputBox}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Enter Description"
        className={styles.textareaBox}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <SellCategorySection />
    </div>
  );
};

export default SellHouses;
