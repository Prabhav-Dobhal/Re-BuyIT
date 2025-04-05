import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import ToggleSwitch from "../Navbar/ToggleSwitch/ToggleSwitch";
import Sellbutton from "./SellButton/Sellbutton";
import Login from "../Navbar/Login/Login";
import WishlistButton from "../Navbar/Wishlist/Wishlist";
import LocationSearchBar from "../Navbar/LocationSearchBar/LocationSearchBar";
import ItemSearchBar from "../Navbar/ItemSearchBar/ItemSearchBar";
import { useTheme } from "../../hooks/useTheme"; 

const Navbar: React.FC = () => {
  const {theme} = useTheme();

  return (
    <nav className={`${styles.navbar} ${theme === "dark" ? styles.dark : styles.light}`}>
      <Logo />
      <div className={styles.navbarContent}>
        <LocationSearchBar />
        <ItemSearchBar />
        <Login />
        <WishlistButton />
        <ToggleSwitch />
        <Sellbutton />
      </div>
    </nav>
  );
};

export default Navbar;
