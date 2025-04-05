import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../../hooks/useTheme"; 
import styles from "./Login.module.css"; 

function Login() {
  const { theme } = useTheme();

  return (
    <Link to="/" className={styles[theme]}>
      Log in
    </Link>
  );
}

export default Login;
