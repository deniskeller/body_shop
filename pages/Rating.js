import React from 'react';
import { BaseTitle, Layout, Preloader } from '../components';
import styles from '../styles/Rating.module.scss';
import { background, colors } from '../utils/global';
import hiddenMail from '../utils/hiddenMail';
import RatingTop from '../assets/img/RatingTop';
import RatingBottom from '../assets/img/RatingBottom';
import getAllUsers from '../API/RatingServices';
import ErrorCat from '../assets/img/ErrorCat';

const mockUsers = [
  { user_id: 15, user_mail: 'keller@gmail.com', user_score: 1300 },
  { user_id: 7, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 15, user_mail: 'dentean@mail.ru', user_score: 1300 },
];

const Rating = () => {
  const [users, setUsers] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const [widthRef, setWidthRef] = React.useState(0);
  const [widthScroll, setWidthScroll] = React.useState(0);
  const refWrapper = React.useRef();

  React.useEffect(() => {
    if (users.length > 0) {
      setWidthRef(refWrapper.current.offsetWidth);
      setWidthScroll(refWrapper.current.clientWidth);
    }
  }, [refWrapper, widthScroll, users.length]);

  let scrollWidth = widthRef - widthScroll;

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const response = await getAllUsers();
      const data = response.data;
      console.log('data: ', data);
      setUsers(data);
    } catch (e) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Layout bg={background.green} fill='#ffffff'>
      <div className={styles.RatingTop}>
        <RatingTop />
      </div>
      <div className={styles.RatingBottom}>
        <RatingBottom />
      </div>

      {error && <ErrorCat className={styles.ErrorCat} />}

      <div className={styles.Rating}>
        <BaseTitle style={{ color: colors.yellow, marginBottom: 15 }}>
          рейтинг
        </BaseTitle>

        {error && (
          <div className={styles.Rating_error}>
            Нет данных. <br />
            <br />
            Попробуй обновить страницу
            <br />
            или вернуться позже.
          </div>
        )}

        {isLoading && <Preloader />}

        {users && users.length > 0 ? (
          <div className={styles.wrapper} ref={refWrapper}>
            <ul className={styles.Rating_users}>
              {mockUsers.slice(0, 100).map((user, index) => {
                return (
                  <li key={index} className={styles.Rating_user}>
                    <div className={styles.Rating_usernumber}>{index + 1}</div>
                    <div className={styles.Rating_usermail}>
                      {hiddenMail(user.user_mail)}
                    </div>
                    <div className={styles.Rating_userscore}>
                      {user.user_score}
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className={styles.User}>
              <div
                className={styles.User_content}
                style={{ left: -scrollWidth / 2 }}
              >
                <div className={styles.User_number}>103</div>
                <div className={styles.User_text}>твой рейтинг</div>
                <div className={styles.User_score}>12 30300</div>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </Layout>
  );
};

export default Rating;
