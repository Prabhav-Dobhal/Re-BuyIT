import React, { useState } from 'react';
import { RiChat1Line } from "react-icons/ri";
import styles from './Chat.module.css'; 
import {useTheme} from '../../../hooks/useTheme';
import { Link } from 'react-router-dom'

const Chat: React.FC = () => {
    const theme = useTheme();
    // only for testing connect to db for real render
    const [notifications]= useState<number>(0); 
  return (
    <div className={`${styles.iconWrapper} ${styles[theme]}`}>
        <Link to ="" className={`${styles.link} ${styles[theme]}`} >
      <RiChat1Line className={styles.chatIcon} />
      {notifications > 0 && (
        <span className={styles.notificationBadge}>
          {notifications}
        </span>
      )}
      </Link>
    </div>
  );
};

export default Chat;
