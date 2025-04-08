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
import Notification from "./Notification/Notification";
import Chat from "./Chat/Chat";
const Navbar: React.FC = () => {
  const {theme} = useTheme();

  return (
    <nav className={`${styles.navbar} ${styles[theme]}`}>
      <div className={styles.navbarContent}>
        <Logo />
        <LocationSearchBar />
        <ItemSearchBar />
        <Login />
        <WishlistButton />
        <Chat />
        <Notification />
        <ToggleSwitch />
        <Sellbutton />
      </div>
    </nav>
  );
};

export default Navbar;
