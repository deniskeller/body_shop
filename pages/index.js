import React from 'react';
import Head from 'next/head';
import {
  BaseButton,
  BaseSubtitle,
  BaseTitle,
  Layout,
  NavbarLink,
} from '../components';
import styles from '../assets/styles/Home.module.scss';
import Strawberry from '../assets/img/Strawberry';
import Grapefruit from '../assets/img/Grapefruit';
import Leftgroup from '../assets/img/Leftgroup';
import Rightgroup from '../assets/img/Rightgroup';
import LogoImg from '../assets/img/LogoImg';

export default function Home() {
  const [auth, setAuth] = React.useState(false);
  const [recordValue, setRecordValue] = React.useState(1300);

  return (
    <Layout>
      <div className={styles.Grapefruit}>
        <Grapefruit />
      </div>

      <div className={styles.Strawberry}>
        <Strawberry />
      </div>

      <div className={styles.Leftgroup}>
        <Leftgroup />
      </div>

      <div className={styles.Rightgroup}>
        <Rightgroup />
      </div>

      <div className={styles.MainContent}>
        <Head>
          <title>THE BODY SHOP</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <main className={styles.Main}>
          <div className={styles.Main__logoImg}>
            <LogoImg />
          </div>
          <BaseTitle style={{ marginBottom: 15 }}>
            Настроение
            <br />
            <span className={styles.Main_largetitle}>мягкости</span>
          </BaseTitle>
          <BaseSubtitle style={{ marginBottom: 24 }}>
            Помоги котику собрать <br /> ингредиенты из новой коллекции <br />{' '}
            масел для тела «The Body Shop»
          </BaseSubtitle>
          <BaseButton style={{ marginBottom: 16 }}>Играть</BaseButton>
          {auth ? (
            <div className={styles.Record}>
              Рекорд: <span>{recordValue}</span>
            </div>
          ) : (
            <NavbarLink href='/auth' title='Войти' />
          )}
        </main>
      </div>
    </Layout>
  );
}
