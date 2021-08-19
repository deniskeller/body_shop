import React from 'react';
import { BaseButton } from '../..';
import styles from './Cookie.module.scss';

const Cookie = ({ handlerCookie }) => {
  return (
    <div className={styles.Cookie}>
      <div className={styles.Cookie_text}>
        Сайт использует файлы cookie. Продолжая пользоваться сайтом, ты
        соглашаешься на использование этих файлов.
      </div>
      <BaseButton method={handlerCookie} type='emtpy' style={{ minWidth: 64 }}>
        ок
      </BaseButton>
    </div>
  );
};

export default Cookie;
