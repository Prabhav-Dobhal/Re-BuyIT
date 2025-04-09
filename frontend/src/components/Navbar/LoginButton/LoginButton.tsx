import { useState } from "react";
import { useTheme } from "../../../hooks/useTheme"; 
import styles from "./LoginButton.module.css"; 
import ProfileDropdown from "../ProfileDropdownMenu/ProfileDropdownMenu";

/*
 * this renders two conditionals components, 1. login page or 2. Dropdown Menu 
 */

function LoginButton() {
  const [haveAccount , setHaveAccount] = useState<Boolean>(false);
  const [isOpen, setIsOpen] = useState<Boolean>(true);
  const { theme } = useTheme();
  
  return (
    <div className={`${styles.login} ${styles[theme]}`}>
    <button className={styles.profileButton} onClick={() => setIsOpen(!isOpen)}>
      <span>Login</span>
      {!haveAccount && isOpen ? "" : <ProfileDropdown openFlag = {!isOpen}/>}
    </button>
    </div>
  );
}

export default LoginButton;