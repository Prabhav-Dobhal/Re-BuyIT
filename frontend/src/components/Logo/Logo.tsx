import React from "react";
import styles from "./Logo.module.css";
import { useTheme } from "../../hooks/useTheme"; 

const Logo: React.FC = () => {
    const { theme } = useTheme();  

    return (
        <div className={`${styles.cartContainer} ${styles[theme]}`}>
            <div className={`${styles.cartLogo} ${styles[theme]}`}>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
                    alt="Shopping Cart"
                    className={styles.cartImage}
                />
            </div>
            <div className={styles.logoText}>ReBUY iT</div>
        </div>
    );
};

export default Logo;
