import React from "react";
import styles from "./Logo.module.css";
import { useTheme } from "../../hooks/useTheme"; 
import cartIcon from "../../assets/JhanduBaam.png"; 
const Logo: React.FC = () => {
    const { theme } = useTheme();  

    return (
        <div className={`${styles.cartContainer} ${styles[theme]}`}>
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
