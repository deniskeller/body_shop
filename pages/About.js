import React from 'react';
import Link from 'next/link';
import { BaseButton, BaseTitle, Layout, QuestionItem } from '../components';
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
    console.log('page: ', page);
  };

  const nextPage = () => {
    setPage(page + 1);
    console.log('page: ', page);
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

  React.useEffect(() => {
    console.log('page: ', page);
  }, [page]);

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

        <h2 className={styles.About_social_title}>Поделиться</h2>
        <div className={styles.About_social_content}>
          <div className={styles.Social_item}>
            <Link href='/'>
              <a>
                <svg
                  width='40'
                  height='40'
                  viewBox='0 0 40 40'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M31.7742 26.2256C31.7061 26.1116 31.2849 25.1964 29.2581 23.3152C27.1363 21.3454 27.4213 21.6653 29.977 18.2593C31.5335 16.1849 32.1558 14.9182 31.9611 14.3766C31.7758 13.8604 30.631 13.9966 30.631 13.9966L26.8244 14.0188C26.8244 14.0188 26.5425 13.9808 26.3319 14.1059C26.1276 14.2294 25.9962 14.5144 25.9962 14.5144C25.9962 14.5144 25.3929 16.12 24.5885 17.4849C22.8926 20.3652 22.2133 20.5173 21.9362 20.3383C21.2918 19.9219 21.4533 18.663 21.4533 17.77C21.4533 14.9783 21.8761 13.8145 20.6283 13.5137C20.2135 13.4139 19.9094 13.3474 18.8501 13.3363C17.4915 13.3221 16.3403 13.3411 15.6895 13.6593C15.2557 13.8715 14.9216 14.345 15.1258 14.3719C15.3776 14.4051 15.9476 14.5255 16.2501 14.9372C16.6412 15.4676 16.6269 16.6616 16.6269 16.6616C16.6269 16.6616 16.8518 19.9472 16.1028 20.3557C15.5882 20.636 14.8836 20.0644 13.3714 17.4501C12.5971 16.1121 12.0112 14.6316 12.0112 14.6316C12.0112 14.6316 11.8988 14.3561 11.6977 14.2088C11.4538 14.0299 11.1118 13.9729 11.1118 13.9729L7.49202 13.995C7.49202 13.995 6.94889 14.0109 6.74938 14.2468C6.57203 14.4574 6.73513 14.8913 6.73513 14.8913C6.73513 14.8913 9.5695 21.5212 12.7776 24.8638C15.7212 27.9278 19.0623 27.7267 19.0623 27.7267H20.5761C20.5761 27.7267 21.0337 27.676 21.2664 27.4243C21.4818 27.1931 21.4739 26.7592 21.4739 26.7592C21.4739 26.7592 21.4438 24.7276 22.3875 24.4284C23.317 24.1339 24.5109 26.3919 25.7761 27.2612C26.7325 27.9183 27.4593 27.7742 27.4593 27.7742L30.8431 27.7267C30.8431 27.7267 32.6134 27.6174 31.7742 26.2256Z'
                    fill='#FFED76'
                  />
                  <circle cx='20' cy='20' r='19.5' stroke='#FFED76' />
                </svg>
              </a>
            </Link>
          </div>
          <div className={styles.Social_item}>
            <Link href='/'>
              <a>
                <svg
                  width='40'
                  height='40'
                  viewBox='0 0 40 40'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M26.1646 8.00513L22.9665 8C19.3736 8 17.0517 10.3822 17.0517 14.0693V16.8676H13.8362C13.5583 16.8676 13.3333 17.0929 13.3333 17.3707V21.4252C13.3333 21.703 13.5586 21.928 13.8362 21.928H17.0517V32.1588C17.0517 32.4366 17.2767 32.6616 17.5545 32.6616H21.7499C22.0277 32.6616 22.2527 32.4364 22.2527 32.1588V21.928H26.0124C26.2903 21.928 26.5153 21.703 26.5153 21.4252L26.5168 17.3707C26.5168 17.2373 26.4637 17.1095 26.3695 17.0151C26.2754 16.9207 26.1471 16.8676 26.0137 16.8676H22.2527V14.4954C22.2527 13.3552 22.5244 12.7764 24.0097 12.7764L26.164 12.7757C26.4416 12.7757 26.6666 12.5504 26.6666 12.2728V8.508C26.6666 8.23065 26.4419 8.00564 26.1646 8.00513Z'
                    fill='#FFED76'
                  />
                  <circle cx='20' cy='20' r='19.5' stroke='#FFED76' />
                </svg>
              </a>
            </Link>
          </div>
          <div className={styles.Social_item}>
            <Link href='/'>
              <a>
                <svg
                  width='40'
                  height='40'
                  viewBox='0 0 40 40'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clipPath='url(#clip0)'>
                    <path
                      d='M31.546 14.0196C31.2318 14.1686 30.9088 14.2943 30.5787 14.3963C30.9695 13.924 31.2674 13.3682 31.4493 12.7601C31.4901 12.6238 31.4478 12.4746 31.343 12.3854C31.2383 12.2962 31.0928 12.2855 30.9775 12.3585C30.2765 12.8029 29.5203 13.1222 28.7273 13.3089C27.9285 12.4747 26.8436 12 25.7221 12C23.3547 12 21.4286 14.0584 21.4286 16.5884C21.4286 16.7877 21.4404 16.9859 21.4638 17.1813C18.526 16.9056 15.7949 15.3624 13.9194 12.9037C13.8526 12.8161 13.7496 12.7689 13.6442 12.7779C13.5387 12.7867 13.4439 12.8503 13.3906 12.948C13.0102 13.6456 12.8091 14.4434 12.8091 15.2551C12.8091 16.3608 13.1785 17.4098 13.831 18.2295C13.6326 18.156 13.4401 18.0642 13.2563 17.9552C13.1577 17.8966 13.0373 17.8975 12.9393 17.9575C12.8412 18.0176 12.7797 18.128 12.7771 18.2488C12.7767 18.2691 12.7767 18.2894 12.7767 18.3101C12.7767 19.9604 13.6078 21.4462 14.8784 22.256C14.7693 22.2444 14.6602 22.2275 14.5518 22.2053C14.44 22.1825 14.3251 22.2244 14.2498 22.3154C14.1743 22.4065 14.1493 22.5333 14.1841 22.6492C14.6544 24.2185 15.8653 25.3728 17.3292 25.7247C16.1151 26.5374 14.7266 26.9631 13.2691 26.9631C12.965 26.9631 12.6591 26.944 12.3597 26.9062C12.211 26.8873 12.0688 26.9811 12.0182 27.1322C11.9675 27.2835 12.0212 27.452 12.1477 27.5387C14.0202 28.8218 16.1853 29.5 18.4088 29.5C22.78 29.5 25.5145 27.297 27.0387 25.449C28.9394 23.1446 30.0294 20.0944 30.0294 17.0807C30.0294 16.9548 30.0276 16.8276 30.024 16.7009C30.7739 16.0971 31.4195 15.3664 31.9448 14.5265C32.0246 14.3989 32.016 14.2303 31.9235 14.1129C31.8312 13.9954 31.6773 13.9574 31.546 14.0196Z'
                      fill='#FFED76'
                    />
                    <circle cx='19.9996' cy='20' r='19.5' stroke='#FFED76' />
                  </g>
                  <defs>
                    <clipPath id='clip0'>
                      <rect
                        width='40'
                        height='40'
                        fill='white'
                        transform='translate(0.000427246)'
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </Link>
          </div>
          <div className={styles.Social_item}>
            <Link href='/'>
              <a>
                <svg
                  width='40'
                  height='40'
                  viewBox='0 0 40 40'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clipPath='url(#clip0)'>
                    <path
                      d='M18.6884 24.609C16.6227 24.4069 14.7603 23.9296 13.1657 22.7595C12.9678 22.6139 12.7635 22.4735 12.583 22.3109C11.885 21.682 11.8147 20.9617 12.367 20.2195C12.8394 19.5843 13.6325 19.4143 14.4569 19.7791C14.6165 19.8498 14.7686 19.938 14.9143 20.0328C17.8861 21.9486 21.9685 22.0015 24.9515 20.1189C25.247 19.9063 25.5629 19.733 25.929 19.6445C26.6409 19.473 27.3048 19.7183 27.6869 20.3027C28.1234 20.9701 28.1178 21.6216 27.58 22.1397C26.7551 22.9341 25.763 23.5088 24.6607 23.9099C23.6184 24.2891 22.4767 24.4799 21.3468 24.6067C21.5173 24.7808 21.5977 24.8664 21.7043 24.9669C23.2386 26.4133 24.7796 27.8536 26.3089 29.3044C26.8299 29.7987 26.9387 30.4116 26.6518 30.9866C26.3382 31.615 25.636 32.0284 24.9476 31.9842C24.5114 31.9559 24.1712 31.7522 23.869 31.4666C22.7111 30.3734 21.5315 29.3004 20.3971 28.1866C20.067 27.8628 19.9082 27.924 19.6168 28.2052C18.452 29.3303 17.2682 30.4381 16.0774 31.5396C15.5428 32.0342 14.9065 32.1232 14.2864 31.8407C13.6272 31.5409 13.2078 30.9096 13.2402 30.2752C13.2625 29.8461 13.4874 29.5183 13.8014 29.2243C15.3198 27.8017 16.834 26.3756 18.3488 24.9507C18.449 24.8559 18.5424 24.7554 18.6884 24.609Z'
                      fill='#FFED76'
                    />
                    <path
                      d='M19.9467 19.6539C16.2616 19.6421 13.2399 16.7759 13.2614 13.313C13.2826 9.8118 16.3063 6.99034 20.0276 7.00002C23.7565 7.00945 26.7495 9.87149 26.7308 13.4091C26.7118 16.8649 23.6692 19.666 19.9467 19.6539ZM23.2958 13.3213C23.2894 11.6019 21.8298 10.2331 20.0008 10.2315C18.1565 10.2297 16.6839 11.6234 16.6981 13.3585C16.7118 15.0714 18.1838 16.4306 20.0179 16.4243C21.8463 16.4182 23.3019 15.0405 23.2958 13.3213Z'
                      fill='#FFED76'
                    />
                    <circle cx='19.9991' cy='20' r='19.5' stroke='#FFED76' />
                  </g>
                  <defs>
                    <clipPath id='clip0'>
                      <rect width='40' height='40' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </Link>
          </div>
        </div>
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
    </Layout>
  );
};

export default About;
