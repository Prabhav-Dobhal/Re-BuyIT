import { useTheme } from "../../../hooks/useTheme"; 
import styles from "./Login.module.css"; 

function Login() {
  const { theme } = useTheme();
  
  return (
    <div className={`${styles.login} ${styles[theme]}`}>
    <button  className={styles[theme]} >
      Log in
    </button>
    </div>
  );
}

export default Login;