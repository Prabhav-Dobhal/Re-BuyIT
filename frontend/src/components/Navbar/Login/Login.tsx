import { useTheme } from "../../../hooks/useTheme"; 
import styles from "./Login.module.css"; 

interface LoginProps {
  onClick: () => void;
}

function Login({ onClick }: LoginProps) {
  const { theme } = useTheme();
  
  return (
    <div className={`${styles.login} ${styles[theme]}`}>
      <button 
        className={`${styles.loginButton} ${styles[theme]}`}
        onClick={onClick}
        aria-label="Login"
      >
        Log in
      </button>
    </div>
  );
}

export default Login;