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
import Chat from "./Chat/Chat";import { useLocation } from "react-router-dom";
import BackButton from "./BackButton/Backbutton";
const Navbar: React.FC = () => {
  const {theme} = useTheme();
  const location = useLocation();
  return (
    <nav className={`${styles.navbar} ${styles[theme]}`}>
      {
      location.pathname==='/' ?
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
      </div> : <BackButton />
      
      }
    </nav>
  );
};

export default Navbar;
