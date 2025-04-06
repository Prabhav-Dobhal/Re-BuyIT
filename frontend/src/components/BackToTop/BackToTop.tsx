import { useEffect, useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import styles from './BackToTop.module.css';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > window.innerHeight / 2);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={`${styles.backToTopButton} ${theme === 'dark' ? styles.dark : ''}`}
    >
      <img
        src="../../src/assets/chevron-up.svg"
        alt="Chevron Up"
        className={`${styles.backToTopIcon} ${
          theme === 'dark' ? styles.darkIcon : styles.lightIcon
        }`}
      />
      Back to Top
    </button>
  );
};

export default BackToTop;
