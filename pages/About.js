import React from 'react';
import Link from 'next/link';
import {
  BaseButton,
  BaseTitle,
  Layout,
  QuestionItem,
  Social,
} from '../components';
import { background } from '../utils/global';
import { Arrow } from '../assets/img/Arrow';
import hiddenMail from '../utils/hiddenMail';
import SocialBg from '../assets/img/SocialBg';
import AboutFooterTop from '../assets/img/AboutFooterTop';
import AboutFooterBot from '../assets/img/AboutFooterBot';
import styles from '../styles/About.module.scss';

const mockUsers = [
  {
    date_period: {
      start: '02.08.2021',
      end: '08.08.2021',
    },
    winners: [
      { user_id: 15, user_mail: 'dentean1@mail.ru', user_score: 1300 },
      { user_id: 15, user_mail: 'dentean2@mail.ru', user_score: 1300 },
      { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
      { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
      { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
      { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
      { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
      { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
      { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
      { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
    ],
  },
  {
    date_period: {
      start: '09.08.2021',
      end: '15.08.2021',
    },
    winners: [
      { user_id: 15, user_mail: 'dentean3@mail.ru', user_score: 1300 },
      { user_id: 15, user_mail: 'dentea4n@mail.ru', user_score: 1300 },
      { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
    ],
  },
];

const questions = [
  {
    id: 1,
    title: `Как я узнаю, `,
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, corrupti?',
  },
  {
    id: 2,
    title: `Как я узнаю, 
  что вошёл в ТОП-100?`,
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, corrupti?',
  },
  {
    id: 3,
    title: `Как я узнаю, 
  что вошёл в ТОП-100?`,
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, corrupti?',
  },
];

const About = () => {
  const [page, setPage] = React.useState(1);

  const prevPage = () => {
    setPage(page - 1);
    // console.log('page: ', page);
  };

  const nextPage = () => {
    setPage(page + 1);
    // console.log('page: ', page);
  };

  const prevDisable = () => {
    if (page <= 1) {
      return true;
    }
    return false;
  };

  const nextDisable = () => {
    if (mockUsers.length <= page) {
      return true;
    }
    return false;
  };

  const winnersComputed = (pageNumber = 1) => {
    let startIndex = pageNumber - 1;
    let endIndex = pageNumber;

    let winners = mockUsers.slice(startIndex, endIndex);
    return winners;
  };

  // React.useEffect(() => {
  //   console.log('page: ', page);
  // }, [page]);

  return (
    <Layout bg={background.light_beige}>
      <div className={styles.About_content}>
        <BaseTitle style={{ marginBottom: 16 }} type='left'>
          Настроение мягкости
        </BaseTitle>
        <div className={styles.About_timing}>
          <span>Сроки проведения с </span>15.09 по 15.10
        </div>
        <h2 className={styles.About_subtitle}>
          Помоги котику собрать ингридиенты новой линейки масел от The Body Shop
        </h2>
        <p className={styles.About_text}>
          Игра посвящена «обновлению коллекции масел для тела»‎.
        </p>
        <br />
        <p className={styles.About_text}>
          Игра посвящена «обновлению коллекции масел для тела»‎.
        </p>
        <br />
        <br />
        <h2 className={styles.About_subtitle}>Механика геймплэя</h2>
        <ul className={styles.About_ul}>
          <li className={styles.About_li}>
            <span className={styles.About_li_number}>1.</span>Первый экран
            открывает игровое поле заполненное фишками.
          </li>
          <li className={styles.About_li}>
            <span className={styles.About_li_number}>2.</span>При смене
            положения фишки меняются местами: перетаскиваемая с той на какое
            поле ставится.
          </li>
          <li className={styles.About_li}>
            <span className={styles.About_li_number}>3.</span>Если при смене
            фишки рядом оказались одинаковые значки, то они сгорают, а игрок
            получает некоторое количество баллов. Количество балов зависит от
            того сколько фишек сгорело и типа фишки.
          </li>
        </ul>
        <h2 className={styles.About_subtitle}>Призовой фонд</h2>
        <p className={styles.About_text}>
          Скидка 20% с 15 сентября по 15 октября включительно для каждого, кто
          сыграл хоть один раз.
        </p>
        <br />
        <p className={styles.About_text}>
          Скидка 30% c 15 сентября по 15 октября включительно зарегистрированных
          пользователей, набравших N баллов и более за одну игру.
        </p>
        <br />
        <p className={styles.About_text}>
          Каждую неделю проходит розыгрыш 10 наборов из масел для тела среди
          ТОП-100 участников за неделю (набравших максимальное количество
          баллов). Розыгрыш проходит 4 раза.
        </p>
        <br />
        <p className={styles.About_textmini}>
          Состав набора:{' '}
          <span>
            масло для тела «Авокадо» 200 мл, масло для тела «Манго» 200 мл,
            масло для тела «Британская роза» 200 мл.
          </span>
        </p>
        {/* тут будет картинка кота с призами */}
        <div className={styles.About_catimg}></div>

        <div className={styles.About_btn}>
          <BaseButton type='secondary'>подробнее</BaseButton>
        </div>
      </div>

      <div className={styles.About_social}>
        <div className={styles.About_social_bg}>
          <SocialBg />
        </div>

        <Social background='#004236' fill='#FFED76' />
      </div>

      <div className={styles.About_winner}>
        <BaseTitle
          style={{ marginBottom: 24, textAlign: 'center' }}
          type='left'
        >
          победители
        </BaseTitle>

        <div className={styles.About_winner_content}>
          <span
            className={` ${styles.Navbar_left} ${
              prevDisable() ? styles.disable : ''
            }`}
          >
            <BaseButton
              type='clear'
              style={{ width: 23, height: 20 }}
              method={prevPage}
            >
              <Arrow />
            </BaseButton>
          </span>
          <span
            className={` ${styles.Navbar_right} ${
              nextDisable() ? styles.disable : ''
            }`}
          >
            <BaseButton
              type='clear'
              style={{ width: 23, height: 20 }}
              method={nextPage}
            >
              <Arrow />
            </BaseButton>
          </span>

          {mockUsers && (
            <div>
              {winnersComputed(page).map((winnersPeriod, index) => {
                return (
                  <div key={index}>
                    <div className={styles.About_winner_header}>
                      <div className={styles.Period}>
                        {winnersPeriod.date_period.start} —{' '}
                        {winnersPeriod.date_period.end}
                      </div>
                    </div>

                    <ul className={styles.About_winner_users}>
                      {winnersPeriod.winners.map((winner, j) => {
                        return (
                          <li key={j} className={styles.About_winner_user}>
                            <div className={styles.About_winner_usermail}>
                              {hiddenMail(winner.user_mail)}
                            </div>
                            <div className={styles.About_winner_userscore}>
                              {winner.user_score}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div className={styles.About_question}>
        <div className={styles.About_question_header}>
          <BaseTitle type='left'>
            вопросы <br /> и ответы
          </BaseTitle>
        </div>

        <div>
          {questions &&
            questions.map((item) => {
              return <QuestionItem item={item} key={item.id} />;
            })}
        </div>
      </div>

      <div className={styles.About_footer}>
        <div className={styles.About_footer_content}>
          <div className={styles.About_footer_topimg}>
            <AboutFooterTop />
          </div>
          <div className={styles.About_footer_botimg}>
            <AboutFooterBot />
          </div>
          <div className={styles.About_footer_title}>
            <BaseTitle type='left' style={{ color: '#FFED76' }}>
              связаться <br />с нами
            </BaseTitle>
          </div>
          <div className={styles.About_footer_subtitle}>
            Напиши нам, и мы ответим <br /> на интересующие тебя вопросы
          </div>

          <BaseButton type='default' style={{ width: '100%' }}>
            написать
          </BaseButton>
        </div>
      </div>
    </Layout>
  );
};

export default About;
