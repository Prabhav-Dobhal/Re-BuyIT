import React, { useState, useCallback } from "react";
import styles from "./LocationSearchBar.module.css";
import { useTheme } from "../../../hooks/useTheme"; 

const locations = [
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai",
  "Kolkata", "Surat", "Pune", "Jaipur", "Lucknow", "Kanpur", "Nagpur",
  "Indore", "Thane", "Bhopal", "Visakhapatnam", "Pimpri-Chinchwad",
  "Patna", "Vadodara"
];

const LocationSearchBar: React.FC = () => {
  const { theme } = useTheme(); 
  const [search, setSearch] = useState("");
  const [filteredLocations, setFilteredLocations] = useState<string[]>(locations);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearch = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value.toLowerCase();
    setSearch(searchQuery);
    setFilteredLocations(
      locations.filter((location) => location.toLowerCase().includes(searchQuery))
    );
    setShowDropdown(searchQuery.length > 0);
  }, []);

  const handleSelect = useCallback((location: string) => {
    setSearch(location);
    setShowDropdown(false);
  }, []);

  return (
    <div className={`${styles.locationDropdown} ${styles[theme]}`}>
      <input
        type="text"
        placeholder="Search location..."
        value={search}
        onChange={handleSearch}
        className={`${styles.locationInput} ${styles[theme]}`}
      />
      {showDropdown && (
        <ul className={`${styles.dropdownList} ${styles[theme]}`}>
          {filteredLocations.map((location, index) => (
            <li
              key={index}
              className={`${styles.dropdownItem} ${styles[theme]}`}
              onClick={() => handleSelect(location)}
            >
              {location}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationSearchBar;
