import React, { useState, ChangeEvent } from "react";
import SellCategorySection from "../../SellCategorySection/SellCategorySection";
import styles from "./SellPhones.module.css";
import { useTheme } from "../../../../hooks/useTheme";

const phoneBrands: string[] = [
  "Samsung",
  "Apple",
  "Xiaomi",
  "Realme",
  "OnePlus",
  "Vivo",
  "Oppo",
  "Motorola",
  "Infinix",
  "iQOO",
  "Nothing",
  "Lava",
  "Micromax",
];

const SellPhones: React.FC = () => {
  const [brand, setBrand] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [storage, setStorage] = useState<string>("");
  const [condition, setCondition] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  // Example theme variable – replace with actual theme logic
  const {theme }=useTheme();

  const handleChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setter(e.target.value);
    };

  return (
    <div className={`${styles.sellCategoryContainer} ${styles[theme]}`}>
      <h1 className={`${styles.sellTitle} ${styles[theme]}`}>Add Your Phone for Sale</h1>
      <p className={`${styles.sellDescription} ${styles[theme]}`}>
        Fill in the details below to list your phone. Add brand, model, storage,
        condition, title, description, price, and photos to reach the right
        buyers.
      </p>

      <select
        className={`${styles.dropdown} ${styles[theme]}`}
        value={brand}
        onChange={handleChange(setBrand)}
        required
      >
        <option value="">Select Brand</option>
        {phoneBrands.map((b) => (
          <option key={b} value={b}>
            {b}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Phone Model (e.g. iPhone 13, Galaxy S21)"
        className={`${styles.inputBox} ${styles[theme]}`}
        value={model}
        onChange={handleChange(setModel)}
        required
      />

      <input
        type="text"
        placeholder="Storage (e.g. 64GB, 128GB)"
        className={`${styles.inputBox} ${styles[theme]}`}
        value={storage}
        onChange={handleChange(setStorage)}
        required
      />

      <select
        className={`${styles.dropdown} ${styles[theme]}`}
        value={condition}
        onChange={handleChange(setCondition)}
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
        onChange={handleChange(setTitle)}
        required
      />

      <textarea
        placeholder="Enter Description"
        className={`${styles.textareaBox} ${styles[theme]}`}
        value={description}
        onChange={handleChange(setDescription)}
        required
      />

      <SellCategorySection />
    </div>
  );
};

export default SellPhones;
