import React, { useState } from "react";
import SellCategorySection from "../../SellCategorySection/SellCategorySection";
import styles from "./SellCars.module.css";
import { useTheme } from "../../../../hooks/useTheme";
import { preventScrollTrigger } from "../../../../utils/preventScrollTrigger";
import { preventInvalidNumberKeys } from "../../../../utils/preventInvalidNumberKeys";
const indianCarBrands = [
  "Maruti Suzuki",
  "Hyundai",
  "Tata",
  "Mahindra",
  "Honda",
  "Toyota",
  "Kia",
  "Renault",
  "Skoda",
  "Volkswagen",
  "Nissan",
];

const SellCars: React.FC = () => {

  const [brand, setBrand] = useState<string>("");
  const [fuelType, setFuelType] = useState<string>("");
  const [kmDriven, setKmDriven] = useState<string>("");
  const [modelYear, setModelYear] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const {theme} = useTheme();
  return (
    <div className={`${styles.sellCategoryContainer} ${styles[theme]}`}>
    <h1 className={`${styles.sellTitle} ${styles[theme]}`}>Add Your Car for Sale</h1>
    <p className={`${styles.sellDescription} ${styles[theme]}`}>
      Fill in the details below to list your car. Add brand, fuel type,
      kilometers driven, model year, price, photos and location to attract
      buyers.
    </p>
  
    <select
      className={`${styles.dropdown} ${styles[theme]}`}
      value={brand}
      onChange={(e) => setBrand(e.target.value)}
      required
    >
      <option value="">Select Brand</option>
      {indianCarBrands.map((b) => (
        <option key={b} value={b}>
          {b}
        </option>
      ))}
    </select>
  
    <select
      className={`${styles.dropdown} ${styles[theme]}`}
      value={fuelType}
      onChange={(e) => setFuelType(e.target.value)}
      required
    >
      <option className={`${styles.dropdownItem} ${styles[theme]}`} value="">Select Fuel Type</option>
      <option className={`${styles.dropdownItem} ${styles[theme]}`} value="Petrol">Petrol</option>
      <option className={`${styles.dropdownItem} ${styles[theme]}`} value="Diesel">Diesel</option>
      <option className={`${styles.dropdownItem} ${styles[theme]}`} value="Electric">Electric</option>
    </select>
  
    <input
      type="number"
      placeholder="Kilometers Driven"
      className={`${styles.inputBox} ${styles[theme]}`}
      value={kmDriven}
      onChange={(e) => setKmDriven(e.target.value)}
      onWheel={preventScrollTrigger}
      onKeyDown={preventInvalidNumberKeys}
      required
    />
  
    <input
      type="number"
      placeholder="Model Year (e.g. 2020)"
      className={`${styles.inputBox} ${styles[theme]}`}
      value={modelYear}
      onChange={(e) => setModelYear(e.target.value)}
      onWheel={preventScrollTrigger}
      onKeyDown={preventInvalidNumberKeys}
      required
    />
  
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
  
    <SellCategorySection  />
  </div>
  
  );
};

export default SellCars;
