import React from 'react';
import { BaseTitle, Layout, Preloader } from '../components';
import styles from '../styles/Rating.module.scss';
import { background, colors } from '../utils/global';
import hiddenMail from '../utils/hiddenMail';
import RatingTop from '../assets/img/RatingTop';
import RatingBottom from '../assets/img/RatingBottom';
import getAllUsers from '../API/RatingServices';

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

const mockId = 7;

const Rating = () => {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const [widthRef, setWidthRef] = React.useState(0);
  const [widthScroll, setWidthScroll] = React.useState(0);
  const refWrapper = React.useRef();

  React.useEffect(() => {
    setWidthRef(refWrapper.current.offsetWidth);
    setWidthScroll(refWrapper.current.clientWidth);
  }, [refWrapper, widthScroll]);

  let scrollWidth = widthRef - widthScroll;

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const response = await getAllUsers();
      const data = response.data;
      setUsers(data);
    } catch (e) {
      setError('Что-то пошло не так...');
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
      <div className={styles.Rating}>
        <BaseTitle style={{ color: colors.yellow, marginBottom: 10 }}>
          рейтинг
        </BaseTitle>

        {error && <h1>{error}</h1>}

        {isLoading && <Preloader />}

        <div className={styles.wrapper} ref={refWrapper}>
          {users && (
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
          )}
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
      </div>
    </Layout>
  );
};

export default Rating;
