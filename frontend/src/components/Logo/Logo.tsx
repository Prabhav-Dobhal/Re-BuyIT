import React from "react";
import styles from "./Logo.module.css";
import { useTheme } from "../../hooks/useTheme"; 
import cartIcon from "../../assets/Cartlogo.png"; 
const Logo: React.FC = () => {
    const { theme } = useTheme();  
    return (
        <div className={`${styles.cartContainer} ${styles[theme]}`} onClick={() => window.location.href = "/"}>
            <div className={`${styles.cartLogo} ${styles[theme]}`}>
                <img
                    src={cartIcon}
                    alt="Shopping Cart"
                    className={styles.cartImage}
                />
            </div>
            <div className={styles.logoText}>ReBUY iT</div>
        </div>
    );
};

export default Logo;
