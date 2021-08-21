import React from 'react';
import { BaseTitle, Layout } from '../../components';
import styles from './Rating.module.scss';
import { background, colors } from '../../utils/global';
import RatingTop from '../../assets/img/RatingTop';
import RatingBottom from '../../assets/img/RatingBottom';
import getAllUsers from '../../API/RatingServices';
import { Scrollbars } from 'react-custom-scrollbars';

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

  const computedColor = (index) => {
    if (index <= 99) return colors.yellow;
    return colors.white;
  };

  const computedVisibility = (id) => {
    if (id === mockId) {
      return 'block';
    }
    return 'none';
  };

  const hiddenMail = (mail) => {
    const name = mail.split('@')[0];
    const first = name.slice(0, 1);
    const last = name.slice(-1);
    const fullname = first + '•••' + last;
    return fullname + '@' + mail.split('@')[1];
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Layout bg={background.green}>
      <div className={styles.RatingTop}>
        <RatingTop />
      </div>
      <div className={styles.RatingBottom}>
        <RatingBottom />
      </div>
      <div className={styles.Rating}>
        <BaseTitle
          first_title='рейтинг'
          style={{ color: colors.yellow, marginBottom: 10 }}
        />

        {error && <h1>{error}</h1>}

        {isLoading && <p>Loading ...</p>}

        <div className={styles.wrapper}>
          {users && (
            <ul className={styles.Rating_users}>
              {mockUsers.map((user, index) => {
                return (
                  <li key={index} className={styles.Rating_user}>
                    <div
                      className={styles.Overlay}
                      style={{ display: computedVisibility(user.user_id) }}
                    ></div>
                    <div
                      style={{ color: computedColor(index) }}
                      className={styles.Rating_usernumber}
                    >
                      {index + 1}
                    </div>
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
        </div>
      </div>
    </Layout>
  );
};

export default Rating;
