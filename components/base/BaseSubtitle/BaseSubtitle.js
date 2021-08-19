import React from 'react';
import styles from './BaseSubtitle.module.scss';

const BaseSubtitle = ({ subtitle, style }) => {
  return (
    <p className={styles.p} style={{ ...style }}>
      {subtitle}
    </p>
  );
};

export default BaseSubtitle;
