import styles from './NoMessages.module.css';
import { motion } from 'framer-motion';

const NoMessages = () => {
  return (
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.messageBubble}>
        <div className={styles.bubbleTail}></div>
        <div className={styles.bubbleBody}>
          <svg className={styles.chatIcon} viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
          </svg>
        </div>
      </div>

      <motion.h2 
        className={styles.title}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Your inbox is empty
      </motion.h2>

      <motion.p 
        className={styles.subtitle}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        When you start selling, your messages will appear here
      </motion.p>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <button className={styles.actionButton}>
          <span>List an Item</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 4v16m8-8H4" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>
      </motion.div>

      <div className={styles.decorativeElements}>
        <div className={styles.dot1}></div>
        <div className={styles.dot2}></div>
        <div className={styles.dot3}></div>
      </div>
    </motion.div>
  );
};

export default NoMessages;