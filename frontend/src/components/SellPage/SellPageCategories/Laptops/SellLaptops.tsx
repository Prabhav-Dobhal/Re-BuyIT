import React, { useState } from "react";
import SellCategorySection from "../../SellCategorySection/SellCategorySection";
import styles from "./SellLaptops.module.css";
import { useTheme } from "../../../../hooks/useTheme";

const laptopBrands = [
  "Dell",
  "HP",
  "Lenovo",
  "Asus",
  "Acer",
  "Apple",
  "MSI",
  "Samsung",
  "Microsoft",
  "LG",
  "Avita",
  "Infinix",
];

const SellLaptops: React.FC = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [ram, setRam] = useState("");
  const [storage, setStorage] = useState("");
  const [condition, setCondition] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { theme } = useTheme();

  return (
    <div className={`${styles.sellCategoryContainer} ${styles[theme]}`}>
      <h1 className={`${styles.sellTitle} ${styles[theme]}`}>
        Add Your Laptop for Sale
      </h1>
      <p className={`${styles.sellDescription} ${styles[theme]}`}>
        Fill in the details below to list your laptop. Mention brand, model,
        RAM, storage, condition, title, and description to reach the right
        buyers.
      </p>

      <select
        className={`${styles.dropdown} ${styles[theme]}`}
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        required
      >
        <option value="">Select Brand</option>
        {laptopBrands.map((b) => (
          <option key={b} value={b}>
            {b}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Laptop Model (e.g. Inspiron 15, MacBook Air M2)"
        className={`${styles.inputBox} ${styles[theme]}`}
        value={model}
        onChange={(e) => setModel(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="RAM (e.g. 8GB, 16GB)"
        className={`${styles.inputBox} ${styles[theme]}`}
        value={ram}
        onChange={(e) => setRam(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Storage (e.g. 256GB SSD, 1TB HDD)"
        className={`${styles.inputBox} ${styles[theme]}`}
        value={storage}
        onChange={(e) => setStorage(e.target.value)}
        required
      />

      <select
        className={`${styles.dropdown} ${styles[theme]}`}
        value={condition}
        onChange={(e) => setCondition(e.target.value)}
        required
      >
        <option value="">Select Condition</option>
        <option value="New">New</option>
        <option value="Like New">Like New</option>
        <option value="Used">Used</option>
        <option value="Very Used">Very Used</option>
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

export default SellLaptops;
