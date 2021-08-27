import React from 'react';
import Link from 'next/link';
import AuthBotLeft from '../assets/img/AuthBotLeft';
import AuthBotRight from '../assets/img/AuthBotRight';
import AuthTopLeft from '../assets/img/AuthTopLeft';
import AuthTopRight from '../assets/img/AuthTopRight';
import LogoImg from '../assets/img/LogoImg';
import { BaseButton, BaseInput, Layout } from '../components';
import { useRouter } from 'next/router';
import styles from '../styles/Auth.module.scss';

const testData = {
  email: 'kek@mail.ru',
  password: '123',
};

const Auth = () => {
  const router = useRouter();
  const [data, setData] = React.useState({ email: '', password: '' });
  const [isConfirm, setIsConfirm] = React.useState(true);
  const [isError, setError] = React.useState(false);

  const confirm = () => {
    if (testData.email === data.email && testData.password === data.password) {
      console.log('Пользователь авторизован');
      router.push('/');
    } else {
      console.log('Введеные данные не верны');
      setError(true);
      setIsConfirm(false);
    }
  };

  const restorePassword = () => {
    router.push('/Restore');
  };

  return (
    <Layout>
      <AuthTopLeft className={styles.AuthTopLeft} />
      <AuthTopRight className={styles.AuthTopRight} />
      <AuthBotLeft className={styles.AuthBotLeft} />
      <AuthBotRight className={styles.AuthBotRight} />
      <div className={styles.Auth}>
        <LogoImg className={styles.Auth_logo}></LogoImg>

        <BaseInput
          placeholder='Email'
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          style={{ marginBottom: 16 }}
        />

        <BaseInput
          placeholder='Пароль'
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          type='password'
          style={{ marginBottom: 16 }}
        />

        {isError && (
          <div className={styles.Auth_error}>
            Почта или пароль введены не верно!
          </div>
        )}

        <BaseButton
          style={{ width: '100%', marginBottom: 8 }}
          method={confirm}
          disabled={!data.email || !data.password}
        >
          Войти
        </BaseButton>

        <div className={styles.Policy}>
          Нажимая «Войти», ты соглашаешься <br /> с
          <Link href='/Politics'>
            <a>
              <span> политикой обработки персональных данных</span>
            </a>
          </Link>
        </div>

        {!isConfirm ? (
          <BaseButton
            type='clear'
            style={{ position: 'absolute', bottom: 80 }}
            method={restorePassword}
          >
            Восстановить пароль
          </BaseButton>
        ) : (
          ''
        )}
      </div>
    </Layout>
  );
};

export default Auth;
