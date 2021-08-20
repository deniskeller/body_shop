import React from 'react';
import { Cookie, Navbar } from '../..';
import styles from './GreenLayout.module.scss';

const GreenLayout = ({ children }) => {
  return (
    <>
      <div className={styles.GreenLayout}>
        <Navbar />
        <div>{children}</div>
      </div>
    </>
  );
};

export default GreenLayout;
