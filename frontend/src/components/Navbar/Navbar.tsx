import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import ToggleSwitch from "../Navbar/ToggleSwitch/ToggleSwitch";
import Sellbutton from "./SellButton/Sellbutton";
import Login from "../Navbar/Login/Login";
import WishlistButton from "../Navbar/Wishlist/Wishlist";
import LocationSearchBar from "../Navbar/LocationSearchBar/LocationSearchBar";
import ItemSearchBar from "../Navbar/ItemSearchBar/ItemSearchBar";
import { useTheme } from "../../hooks/useTheme"; 
import AuthModal from "../AuthModal/AuthModal";
import Notification from "./Notification/Notification";
import Chat from "./Chat/Chat";
// import NoMessages from "../ChatFunctionality/NoMessagesPage/NoMessages"; page for no inbox messages
const Navbar: React.FC = () => {
  const { theme } = useTheme();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsAuthModalOpen(true);
  };

  const handleModalClose = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <>
    <nav className={`${styles.navbar} ${styles[theme]}`}>
      <div className={styles.navbarContent}>
        <Logo />
        <LocationSearchBar />
        <ItemSearchBar />
        <Login onClick={handleLoginClick}/>
        <WishlistButton />
        <Chat />
        <Notification />
        <ToggleSwitch />
        <Sellbutton />
      </div>
    </nav>
    {isAuthModalOpen && (
      <AuthModal onClose={handleModalClose} />
    )}
    </>
  );
};

export default Navbar;