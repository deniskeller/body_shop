import React from 'react';
import styles from './BaseTitle.module.scss';

const BaseTitle = ({ first_title, second_title }) => {
  return (
    <div className={styles.BaseTitle}>
      <h1 className={styles.h1}>
        <span>{first_title}</span> <br />
        {second_title}
      </h1>
    </div>
  );
};

export default BaseTitle;
