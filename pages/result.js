import React from 'react';
import styles from '../styles/Result.module.scss';
import { useRouter } from 'next/router';

import { BaseButton, BaseSubtitle, BaseTitle, Layout } from '../components';
import LogoImg from '../assets/img/LogoImg';

const auth = false;

const mockScore = 1100;
const need_score = 1300;

const Result = () => {
  const router = useRouter();

  return (
    <Layout>
      <div className={styles.Result}>
        <div className={styles.Result_logo}>
          <LogoImg />
        </div>

        {auth ? (
          <>
            <BaseTitle style={{ marginBottom: 8, fontSize: 34 }}>
              {mockScore}
              <br />
              <span className={styles.Result_largetitle}>очков</span>
            </BaseTitle>

            {mockScore > need_score ? (
              <BaseSubtitle style={{ marginBottom: 24 }}>
                Это победа! <br />
                <br />
                Ты получаешь скидку 30%.
                <br />
                Промо-код отправлен тебе на email.
              </BaseSubtitle>
            ) : (
              <BaseSubtitle style={{ marginBottom: 24 }}>
                <span className={styles.Result_needmore_text}>
                  До получения промо-кода <br /> следующего уровня не хватает:
                  <br />
                  <br />
                </span>
                105 очков
              </BaseSubtitle>
            )}

            <BaseButton method={() => router.push('/game')}>
              Играть еще раз
            </BaseButton>
          </>
        ) : (
          <>
            <BaseTitle style={{ marginBottom: 8, fontSize: 18 }}>
              Поздравляем
              <br />
              <span className={styles.Result_largetitle}>с победой</span>
            </BaseTitle>

            <BaseSubtitle style={{ marginBottom: 24 }}>
              Сохрани свой результат и получи <br /> скидку 20% в наших
              магазинах
            </BaseSubtitle>

            <BaseButton method={() => router.push('/register')}>
              Зарегистрироваться
            </BaseButton>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Result;
