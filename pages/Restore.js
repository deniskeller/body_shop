import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AuthTopLeft from '../assets/img/AuthTopLeft';
import AuthTopRight from '../assets/img/AuthTopRight';
import AuthBotLeft from '../assets/img/AuthBotLeft';
import AuthBotRight from '../assets/img/AuthBotRight';
import LogoImg from '../assets/img/LogoImg';
import {
  BaseButton,
  BaseInput,
  BasePopup,
  BaseSubtitle,
  BaseTitle,
  Layout,
} from '../components';
import styles from '../styles/Restore.module.scss';

const testMail = 'kek@mail.ru';

const Restore = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState('');

  const [modal, setModal] = React.useState(false);
  const [isEmailValid, setIsEmailValid] = React.useState(null);

  const restorePassword = () => {
    if (email === testMail) {
      setIsEmailValid(true);
      setModal(true);
    } else {
      setIsEmailValid(false);
      setModal(true);
    }
  };

  return (
    <Layout>
      {isEmailValid ? (
        <BasePopup visible={modal} setVisible={setModal}>
          <BaseTitle style={{ marginBottom: 10 }}>
            проверь
            <br />
            Email
          </BaseTitle>

          <BaseSubtitle style={{ marginBottom: 24 }}>
            Тебе было отправлено <br /> письмо со ссылкой
            <br /> на восстановление пароля
          </BaseSubtitle>

          <BaseButton method={() => router.push('/')}>Понятно</BaseButton>
        </BasePopup>
      ) : (
        <BasePopup visible={modal} setVisible={setModal}>
          <BaseTitle style={{ marginBottom: 10 }}>ошибка</BaseTitle>

          <BaseSubtitle style={{ marginBottom: 24 }}>
            Такой email
            <br />
            не зарегистрирован.
            <br />
            <br />
            Ты можешь сыграть,
            <br /> чтобы зарегистрироваться
            <br /> и получать призы.
          </BaseSubtitle>

          <BaseButton method={() => router.push('/')}>Понятно</BaseButton>
        </BasePopup>
      )}

      <AuthTopLeft className={styles.AuthTopLeft} />
      <AuthTopRight className={styles.AuthTopRight} />
      <AuthBotLeft className={styles.AuthBotLeft} />
      <AuthBotRight className={styles.AuthBotRight} />

      <div className={styles.Auth}>
        <LogoImg className={styles.Auth_logo}></LogoImg>

        <BaseSubtitle style={{ marginBottom: 24 }}>
          Введи email, на который был <br />
          зарегистрирован аккаунт
        </BaseSubtitle>

        <BaseInput
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: 16 }}
        />

        <BaseButton
          style={{ width: '100%', marginBottom: 8 }}
          disabled={!email}
          method={restorePassword}
        >
          Восстановить пароль
        </BaseButton>

        <div className={styles.Policy}>
          Нажимая «Восстановить пароль», ты соглашаешься
          <br />с
          <Link href='/Politics'>
            <a>
              <span> политикой обработки персональных данных</span>
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Restore;
