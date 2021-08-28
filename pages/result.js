import React from 'react';
import { useRouter } from 'next/router';
import { BaseButton, BaseSubtitle, BaseTitle, Layout } from '../components';
import styles from '../styles/Result.module.scss';

import LogoImg from '../assets/img/LogoImg';
import ResultBot from '../assets/img/ResultBot';
import ResultTopLeft from '../assets/img/ResultTopLeft';
import ResultTopRight from '../assets/img/ResultTopRight';
import ResultCatRed from '../assets/img/ResultCatRed';
import ResultCatBlue from '../assets/img/ResultCatBlue';

const mockScore = 1400;
const need_score = 1300;

const Result = () => {
  const router = useRouter();

  const [auth, setAuth] = React.useState(false);

  React.useEffect(() => {
    const testEmail = window.localStorage.getItem('email');
    const testPassword = window.localStorage.getItem('phone');
    if (testEmail && testPassword) {
      setAuth(true);
    }
  }, []);

  return (
    <Layout>
      <ResultBot className={styles.ResultBot} />
      <ResultTopLeft className={styles.ResultTopLeft} />
      <ResultTopRight className={styles.ResultTopRight} />

      {auth ? (
        <ResultCatRed className={styles.ResultCatRed} />
      ) : (
        <ResultCatBlue className={styles.ResultCatBlue} />
      )}

      <div className={styles.Result}>
        <LogoImg className={styles.Result_logo} />

        {auth ? (
          <>
            <BaseTitle
              style={{ marginBottom: 8, fontSize: 34, lineHeight: '95%' }}
            >
              {mockScore}
              <br />
              <span className={styles.Result_largetitle}>очков</span>
            </BaseTitle>

            {mockScore > need_score ? (
              <BaseSubtitle style={{ marginBottom: 24 }}>
                Это победа! <br /> <br />
                Ты получаешь скидку 30%.
                <br />
                Промо-код отправлен тебе на email.
              </BaseSubtitle>
            ) : (
              <BaseSubtitle style={{ marginBottom: 24 }}>
                <span className={styles.Result_needmore_text}>
                  До получения промо-кода <br /> следующего уровня не хватает:
                  <br />
                </span>
                <br />
                105 очков
              </BaseSubtitle>
            )}

            <BaseButton method={() => router.push('/game')}>
              Играть еще раз
            </BaseButton>
          </>
        ) : (
          <>
            <BaseTitle
              style={{ marginBottom: 10, fontSize: 18, lineHeight: '130%' }}
            >
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
