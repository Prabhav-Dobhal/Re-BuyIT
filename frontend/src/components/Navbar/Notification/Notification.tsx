import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosNotificationsOutline } from "react-icons/io";
import styles from './Notification.module.css';
import { useTheme } from '../../../hooks/useTheme';
import { useState } from 'react';
const Notification: React.FC = () => {
const {theme} =useTheme();
//only for testing conc. to db for real render
const [notifications, setNotifications] = useState<number>(0);
  return (
    <div className={`${styles.chatContainer} ${styles[theme]}`}>
      <Link to="#">
        <IoIosNotificationsOutline className={`${styles.chatIcon} ${styles[theme]}`} />
        {
            notifications > 0 && (
                <span className={`${styles.notificationCount} ${styles[theme]}`}>
                {notifications}
                </span>
            )
        }
      </Link>
    </div>
  );
};

export default Notification;
