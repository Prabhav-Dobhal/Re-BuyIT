import React, { useState, ChangeEvent } from "react";
import SellCategorySection from "../../SellCategorySection/SellCategorySection";
import styles from "./SellScooters.module.css";
import { useTheme } from "../../../../hooks/useTheme";
import { preventScrollTrigger } from "../../../../utils/preventScrollTrigger";
import { preventInvalidNumberKeys } from "../../../../utils/preventInvalidNumberKeys";
const indianScooterBrands: string[] = [
  "Honda",
  "TVS",
  "Suzuki",
  "Hero",
  "Yamaha",
  "Bajaj",
  "Ather",
  "Ola Electric",
  "Simple Energy",
  "Bounce",
];

const SellScooters: React.FC = () => {
  const [brand, setBrand] = useState<string>("");
  const [fuelType, setFuelType] = useState<string>("");
  const [kmDriven, setKmDriven] = useState<string>("");
  const [modelYear, setModelYear] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const { theme } = useTheme();

  const handleChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setter(e.target.value);

  return (
    <div className={`${styles.sellCategoryContainer} ${styles[theme]}`}>
      <h1 className={`${styles.sellTitle} ${styles[theme]}`}>Add Your Scooter for Sale</h1>
      <p className={`${styles.sellDescription} ${styles[theme]}`}>
        Fill in the details below to list your scooter. Add brand, fuel type,
        kilometers driven, model year, price, photos, and location to attract
        the right buyers.
      </p>

      <select
        className={`${styles.dropdown} ${styles[theme]}`}
        value={brand}
        onChange={handleChange(setBrand)}
        required
      >
        <option value="">Select Brand</option>
        {indianScooterBrands.map((b) => (
          <option key={b} value={b}>
            {b}
          </option>
        ))}
      </select>

      <select
        className={`${styles.dropdown} ${styles[theme]}`}
        value={fuelType}
        onChange={handleChange(setFuelType)}
        required
      >
        <option value="">Select Fuel Type</option>
        <option value="Petrol">Petrol</option>
        <option value="Electric">Electric</option>
      </select>

      <input
        type="number"
        placeholder="Kilometers Driven"
        className={`${styles.inputBox} ${styles[theme]}`}
        value={kmDriven}
        onChange={handleChange(setKmDriven)}
        onWheel={preventScrollTrigger}
        onKeyDown={preventInvalidNumberKeys}
        required
      />

      <input
        type="number"
        placeholder="Model Year (e.g. 2020)"
        className={`${styles.inputBox} ${styles[theme]}`}
        value={modelYear}
        onKeyDown={preventInvalidNumberKeys}
        onChange={handleChange(setModelYear)}
        onWheel={preventScrollTrigger}
        required
      />

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

export default SellScooters;
