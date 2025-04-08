import React from 'react';
import styles from './ProfileDropdown.module.css';
import {
  FaCog,
  FaQuestionCircle,
  FaShoppingBag,
  FaBoxOpen,
  FaUser,
} from 'react-icons/fa';

/*
 * Renders a profile dropdown menu
 */


interface ProfileDropdownProps {
  openFlag: boolean;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = (props) => {
  return (
    <div className={styles.dropdownContainer}>
      {props.openFlag && (
        <div className={styles.dropdownMenu}>
          <ul className={styles.menuList}>
            <li><FaUser /> Profile</li>
            <li><FaShoppingBag /> My ADS</li>
            <li><FaBoxOpen /> Buy Business Packages</li>
            <li><FaBoxOpen /> Bought Packages & Billing</li>
            <li><FaQuestionCircle /> Help</li>
            <li><FaCog /> Settings</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
