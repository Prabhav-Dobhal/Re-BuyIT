import { useState } from "react";
import { useTheme } from "../../../hooks/useTheme"; 
import styles from "./Login.module.css"; 
import ProfileDropdown from "../ProfileDropdownMenu/ProfileDropdownMenu";
import LoginPage from "../../LoginPage/LoginPage";

/*
 * this renders two conditionals components, 1. login page or 2. Dropdown Menu 
 */

function Login() {
  const [haveAccount , setHaveAccount] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  
  return (
    <div className={`${styles.login} ${styles[theme]}`}>
    <button className={styles.profileButton} onClick={() => setIsOpen(!isOpen)}>
      <span>Login</span>
      {!haveAccount && isOpen ? <LoginPage/> : <ProfileDropdown openFlag = {!isOpen}/>}
    </button>
    </div>
  );
}

export default Login;