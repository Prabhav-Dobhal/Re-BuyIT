import React, { useState } from "react";
import styles from "./Navbar.module.css";
import AuthModal from "../AuthModal/AuthModal";

const Navbar: React.FC = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleAuthModalToggle = () => {
    setIsAuthModalOpen(!isAuthModalOpen);
  };

  return (
    <>
      <div 
        className={styles.navbar} 
        onClick={handleAuthModalToggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleAuthModalToggle()}
      >
        Navbar
      </div>
      
      {isAuthModalOpen && (
        <AuthModal 
          onClose={() => setIsAuthModalOpen(false)} 
        />
      )}
    </>
  );
};

export default Navbar;