import { useEffect, useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import './BackToTop.css';
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
    <button onClick={scrollToTop} className={`back-to-top-button ${theme  === 'dark' ? 'dark' : ''}`}>
      <img src="../../src/assets/chevron-up.svg" alt="Chevron Up" className="back-to-top-icon" />
      Back to Top
    </button>

  );
};

export default BackToTop;
// 