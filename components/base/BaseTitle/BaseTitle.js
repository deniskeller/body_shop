import React from 'react';
import styles from './BaseTitle.module.scss';

const BaseTitle = ({ first_title = '', second_title = '', style }) => {
  return (
    <div className={styles.BaseTitle}>
      <h1 className={styles.h1} style={{ ...style }}>
        <span>{first_title}</span> <br />
        {second_title}
      </h1>
    </div>
  );
};

export default BaseTitle;
