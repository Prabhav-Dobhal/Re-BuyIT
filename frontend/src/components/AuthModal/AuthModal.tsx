import React, { useState } from 'react';
import Carousel from './Carousel';
import styles from './AuthModal.module.css';

const AuthModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true); // Track login/register state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const carouselImages = [
    {
      id: '1',
      src: '/LoginCarousel/img1.png',
      alt: 'Promotion 1'
    },
    {
      id: '2',
      src: '/LoginCarousel/img2.png',
      alt: 'Promotion 2'
    },
    {
      id: '3',
      src: '/LoginCarousel/img3.png',
      alt: 'Promotion 3'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Login attempt with:', { email, password });
    } else {
      if (password !== confirmPassword) {
        alert("Passwords don't match!");
        return;
      }
      console.log('Registration attempt with:', { email, password });
    }
  };

  const handleSwitchMode = () => {
    setIsLogin(!isLogin);
    // Clear form when switching
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>

        <Carousel images={carouselImages} />

        <h2 className={styles.title}>{isLogin ? 'Login' : 'Register'}</h2>

        <form onSubmit={handleSubmit} className={styles.authForm}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Enter Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              className={styles.inputField}
              required
              autoComplete="new-email"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">
              {isLogin ? 'Enter Password' : 'Create Password'}
            </label>
            <div className={styles.passwordContainer}>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••"
                className={styles.inputField}
                required
                autoComplete="new-password"
              />
              <button
                type="button"
                className={styles.showButton}
                onClick={() => setShowPassword(!showPassword)}
              >
                Show
              </button>
            </div>
          </div>

          {!isLogin && (
            <div className={styles.formGroup}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••••"
                className={styles.inputField}
                required
                autoComplete="new-password"
              />
            </div>
          )}

          <button type="submit" className={styles.submitButton}>
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <div className={styles.switchText}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            type="button"
            className={styles.switchButton}
            onClick={handleSwitchMode}
          >
            {isLogin ? 'Register Now' : 'Login Now'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;