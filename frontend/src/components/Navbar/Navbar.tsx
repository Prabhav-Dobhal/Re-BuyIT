import React, { useState } from "react";
import styles from "./Navbar.module.css";
import AuthModal from "../AuthModal/AuthModal";

const Navbar: React.FC = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <>
        <div>
          Navbar
        </div>
    </>
  );
};

export default Navbar;
