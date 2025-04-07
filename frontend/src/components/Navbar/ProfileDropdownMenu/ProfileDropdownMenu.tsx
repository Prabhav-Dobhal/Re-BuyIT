import React from 'react';
import styles from './ProfileDropdown.module.css';

/*
 * Renders a profile dropdown menu
 */

import {
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt,
  FaShoppingBag,
  FaBoxOpen,
  FaDownload,
  FaUser,
} from 'react-icons/fa';
interface ProfileDropdownProps {
  openFlag: boolean;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = (props) => {

  const handleLogout = () => {
    alert('Logged out!');
  };
  console.log(20);
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
            <li><FaDownload /> Install OLX Lite app</li>
            <li onClick={handleLogout}><FaSignOutAlt /> Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
