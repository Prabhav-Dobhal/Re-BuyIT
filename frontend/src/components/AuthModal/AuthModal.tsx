import React, { useState } from 'react';
import Carousel from './Carousel';
import styles from './AuthModal.module.css';
import { useTheme } from '../../hooks/useTheme';

const AuthModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { theme } = useTheme();
  const [isLogin, setIsLogin] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    dob: '',
    otp: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const carouselImages = [
    { id: '1', src: '/LoginCarousel/img1.jpg', alt: 'Promotion 1' },
    { id: '2', src: '/LoginCarousel/img2.jpg', alt: 'Promotion 2' },
    { id: '3', src: '/LoginCarousel/img3.jpg', alt: 'Promotion 3' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Login attempt:', { email: formData.email, password: formData.password });
    } else {
      if (currentStep === 1) {
        setCurrentStep(2);
      } else if (currentStep === 2) {
        setCurrentStep(3);
      } else {
        console.log('Registration complete:', formData);
      }
    }
  };

  const handleSwitchMode = () => {
    setIsLogin(!isLogin);
    setCurrentStep(1);
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      dob: '',
      otp: ''
    });
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={`${styles.modalContent} ${styles[theme]}`}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>

        {currentStep === 1 && <Carousel images={carouselImages} />}

        <h2 className={`${styles.title} ${styles[theme]}`}>
          {isLogin ? 'Login' : 
           currentStep === 1 ? 'Create Account' :
           currentStep === 2 ? 'Personal Information' : 'Verify Your Email'}
        </h2>

        <form onSubmit={handleSubmit} className={styles.authForm}>
          {/* Step 1: Email (and password if login) */}
          {currentStep === 1 && (
            <>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder=""
                  className={styles.inputField}
                  required
                  autoComplete="email"
                />
              </div>

              {isLogin && (
                <div className={styles.formGroup}>
                  <label htmlFor="password">Password</label>
                  <div className={styles.passwordContainer}>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder=""
                      className={styles.inputField}
                      required
                      autoComplete="current-password"
                    />
                    <button
                      type="button"
                      className={styles.showButton}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                </div>
              )}
            </>
          )}

          {/* Step 3: Personal Information */}
          {!isLogin && currentStep === 3 && (
            <>
              <div className={styles.nameFields}>
                <div className={`${styles.formGroup} ${styles.halfWidth}`}>
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder=""
                    className={styles.inputField}
                    required
                  />
                </div>

                <div className={`${styles.formGroup} ${styles.halfWidth}`}>
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder=""
                    className={styles.inputField}
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="dob">Date of Birth</label>
                <input
                  type="date"
                  id="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  className={styles.inputField}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="password">Create Password</label>
                <div className={styles.passwordContainer}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder=""
                    className={styles.inputField}
                    required
                  />
                  <button
                    type="button"
                    className={styles.showButton}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder=""
                  className={styles.inputField}
                  required
                />
              </div>
            </>
          )}

          {/* Step 2: OTP Verification */}
          {!isLogin && currentStep === 2 && (
            <div className={styles.formGroup}>
              <label htmlFor="otp">Verification Code</label>
              <input
                type="text"
                id="otp"
                value={formData.otp}
                onChange={handleInputChange}
                placeholder="Enter 6-digit OTP"
                className={styles.inputField}
                required
                maxLength={6}
                pattern="\d{6}"
              />
              <p className={styles.otpNote}>
                We've sent a verification code to {formData.email}
              </p>
              <button 
                type="button" 
                className={styles.resendButton}
                onClick={() => console.log('Resend OTP')}
              >
                Resend Code
              </button>
            </div>
          )}

          <button type="submit" className={styles.submitButton}>
            {isLogin ? 'Login' : 
             currentStep === 1 ? 'Continue' :
             currentStep === 2 ? 'Next' : 'Complete Registration'}
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