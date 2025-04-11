import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import styles from './NotFound.module.css';
import LightLogo from '../../assets/lightNotFoundLogo.svg';
import DarkLogo from '../../assets/DarkNotFOundLogo.svg';

const NotFound: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <div className={styles.content}>
        <h1 className={styles.title}>Oops... we didn't find anything that matches this search :(</h1>
        <p className={styles.subtitle}>Try search for something more general, change the filters or check for spelling mistakes</p>
        <div className={styles.imageContainer}>
          {theme === 'light' ? (
            <img src={LightLogo} alt="Not found" className={styles.logo} />
          ) : (
            <img src={DarkLogo} alt="Not found" className={styles.logo} />
          )}
        </div>
      </div>
    </div>
  );
};

export default NotFound;