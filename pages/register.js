import React from 'react';
import Link from 'next/link';
import {
  BaseButton,
  BaseInput,
  BasePopup,
  BaseSubtitle,
  BaseTitle,
  Layout,
} from '../components';
import { useRouter } from 'next/router';
import styles from '../styles/Register.module.scss';
import LogoImg from '../assets/img/LogoImg';
import RegisterTopLeft from '../assets/img/RegisterTopLeft';
import RegisterTopRight from '../assets/img/RegisterTopRight';
import RegisterBot from '../assets/img/RegisterBot';

const Register = () => {
  const router = useRouter();
  const [data, setData] = React.useState({ email: '', phone: '' });
  const [modal, setModal] = React.useState(false);

  return (
    <Layout>
      <RegisterTopLeft className={styles.RegisterTopLeft} />
      <RegisterTopRight className={styles.RegisterTopRight} />
      <RegisterBot className={styles.RegisterBot} />

      <BasePopup visible={modal} setVisible={setModal}>
        <BaseTitle style={{ marginBottom: 10 }}>
          проверь
          <br />
          Email
        </BaseTitle>

        <BaseSubtitle style={{ marginBottom: 24 }}>
          Тебе было отправлено письмо <br /> с паролем. Промо-код будет
          <br /> доступен после авторизации.
          <br />
          <br /> Набирая очки в игре, ты
          <br /> сможешь увеличить свою скидку!
          <br />
          <br /> Каждую неделю среди
          <br /> ТОП-100 игроков проводится
          <br /> розыгрыш спец-призов.
        </BaseSubtitle>

        <BaseButton style={{ marginBottom: 8 }} method={() => router.push('/')}>
          Понятно
        </BaseButton>
        <Link href='/About'>
          <a>
            <BaseButton type='clear'>подробнее</BaseButton>
          </a>
        </Link>
      </BasePopup>

      <div className={styles.Register}>
        <LogoImg className={styles.Register_logo}></LogoImg>

        <BaseInput
          placeholder='Телефон'
          value={data.phone}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
          style={{ marginBottom: 16 }}
        />

        <BaseInput
          placeholder='Email'
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          style={{ marginBottom: 16 }}
        />

        <BaseButton
          style={{ width: '100%', marginBottom: 8 }}
          method={() => setModal(true)}
          disabled={!data.email || !data.phone}
        >
          зарегистрироваться
        </BaseButton>

        <div className={styles.Policy}>
          Нажимая «Зарегистрироваться», ты соглашаешься <br /> с
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

export default Register;
