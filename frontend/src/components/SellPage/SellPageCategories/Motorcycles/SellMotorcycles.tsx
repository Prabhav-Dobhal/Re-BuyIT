import React, { useState } from "react";
import SellCategorySection from "../../SellCategorySection/SellCategorySection";
import styles from "./SellMotorcycles.module.css";

const indianMotorcycleBrands = [
  "Royal Enfield",
  "Hero",
  "Bajaj",
  "TVS",
  "Honda",
  "Yamaha",
  "KTM",
  "Suzuki",
  "Jawa",
  "BMW Motorrad",
  "Harley-Davidson",
];

const SellMotorcycles: React.FC = () => {
  const [brand, setBrand] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [kmDriven, setKmDriven] = useState("");
  const [modelYear, setModelYear] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className={styles.sellCategoryContainer}>
      <h1 className={styles.sellTitle}>Add Your Motorcycle for Sale</h1>
      <p className={styles.sellDescription}>
        Fill in the details below to list your motorcycle. Add brand, fuel type,
        kilometers driven, model year, price, photos, and location to attract
        the right buyers.
      </p>

      <select
        className={styles.dropdown}
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        required
      >
        <option value="">Select Brand</option>
        {indianMotorcycleBrands.map((b) => (
          <option key={b} value={b}>
            {b}
          </option>
        ))}
      </select>

      <select
        className={styles.dropdown}
        value={fuelType}
        onChange={(e) => setFuelType(e.target.value)}
        required
      >
        <option value="">Select Fuel Type</option>
        <option value="Petrol">Petrol</option>
        <option value="Electric">Electric</option>
      </select>

      <input
        type="number"
        placeholder="Kilometers Driven"
        className={styles.inputBox}
        value={kmDriven}
        onChange={(e) => setKmDriven(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Model Year (e.g. 2020)"
        className={styles.inputBox}
        value={modelYear}
        onChange={(e) => setModelYear(e.target.value)}
        required
      />

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

export default SellMotorcycles;
