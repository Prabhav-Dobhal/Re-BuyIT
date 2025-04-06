import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../../hooks/useTheme"; 
import styles from "./Login.module.css"; 

function Login() {
  const { theme } = useTheme();
  
  return (
    <div className={`${styles.login} ${theme === "dark" ? styles.dark : styles.light}`}>
    <Link to="/" className={styles[theme]}>
      Log in
    </Link>
    </div>
  );
}

export default Login;
