import React, { useState, useEffect } from "react";
import styles from "./ItemSearchBar.module.css";
import search from "/NavBarPhotos/magnifying-glass.png";
import { useTheme } from "../../../hooks/useTheme"; 
import { FaSearch } from "react-icons/fa";
const placeholderTexts = [
  "Search for products...",
  "Find your favorite items...",
  "What are you looking for?"
];

const ItemSearchBar: React.FC = () => {
  const { theme } = useTheme();
  const [query, setQuery] = useState("");
  const [placeholder, setPlaceholder] = useState(placeholderTexts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholder(prev => {
        const nextIndex = (placeholderTexts.indexOf(prev) + 1) % placeholderTexts.length;
        return placeholderTexts[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div className={`${styles.searchContainer} ${styles[theme]}`}>
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleQueryChange}
        className={`${styles.searchBar} ${styles[theme]}`}
      />
      <button className={`${styles.searchButton} ${styles[theme]}`}>
        <FaSearch className={`${styles.icon} ${styles[theme]}`}/>
      </button>
    </div>
  );
};

export default ItemSearchBar;
