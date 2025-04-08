import React, { useState } from 'react';
import { RiChat1Line } from "react-icons/ri";
import styles from './Chat.module.css'; // assuming you use CSS Modules
import {useTheme} from '../../../hooks/useTheme';


const Chat: React.FC = () => {
    const theme = useTheme();
    const [notifications]= useState<number>(1); 
  return (
    <div className={`${styles.iconWrapper} ${styles[theme]}`}>
      <RiChat1Line className={styles.chatIcon} />
      {notifications > 0 && (
        <span className={styles.notificationBadge}>
          {notifications}
        </span>
      )}
    </div>
  );
};

export default Chat;
