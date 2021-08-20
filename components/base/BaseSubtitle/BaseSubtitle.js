import React from 'react';
import styles from './BaseSubtitle.module.scss';

const BaseSubtitle = ({ children, style }) => {
  return (
    <p className={styles.p} style={{ ...style }}>
      {children}
    </p>
  );
};

export default BaseSubtitle;
