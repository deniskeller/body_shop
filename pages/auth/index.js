import React from 'react';
import AuthBotLeft from '../../assets/img/AuthBotLeft';
import AuthBotRight from '../../assets/img/AuthBotRight';
import AuthTopLeft from '../../assets/img/AuthTopLeft';
import AuthTopRight from '../../assets/img/AuthTopRight';
import LogoImg from '../../assets/img/LogoImg';
import { BaseButton, BaseInput, Layout } from '../../components';
import styles from './Auth.module.scss';
import { useRouter } from 'next/router';

const testData = {
  mail: 'kek@mail.ru',
  password: '123',
};

const auth = () => {
  const router = useRouter();
  const [data, setData] = React.useState({ mail: '', password: '' });
  const [isConfirm, setIsConfirm] = React.useState(true);
  const [isMail, setIsMail] = React.useState(null);
  const [isPassword, setIsPassword] = React.useState(null);

  const confirm = () => {
    console.log('data: ', data);
    if (testData.mail === data.mail && testData.password === data.password) {
      console.log('Пользователь авторизован');
      router.push('/');
    } else {
      console.log('Введеные данные не верны');
      if (testData.mail !== data.mail) {
        setIsMail(true);
      }
      if (testData.password !== data.password) {
        setIsPassword(true);
      }
      setIsConfirm(false);
    }
  };

  const restorePassword = () => {
    router.push('/Restore');
  };

  React.useEffect(() => {
    // console.log('data: ', data);
  }, [data]);

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
          value={data.mail}
          onChange={(e) => setData({ ...data, mail: e.target.value })}
          style={{ marginBottom: 16 }}
          isError={isMail}
        />

        <BaseInput
          placeholder='Пароль'
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          type='password'
          style={{ marginBottom: 16 }}
          isError={isPassword}
        />

        <BaseButton
          style={{ width: '100%', marginBottom: 8 }}
          method={confirm}
          disabled={!data.mail || !data.password}
        >
          Войти
        </BaseButton>

        <div className={styles.Policy}>
          Нажимая «Войти», ты соглашаешься <br /> с
          <span> политикой обработки персональных данных</span>
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

export default auth;
