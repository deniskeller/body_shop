import React from 'react';
import { BaseTitle, Layout } from '../../components';
import styles from './Rating.module.scss';
import { background, colors } from '../../utils/global';
import RatingTop from '../../assets/img/RatingTop';
import RatingBottom from '../../assets/img/RatingBottom';
import RatingServices from '../../API/RatingServices';

const users = [
  { user_id: 1, user_mail: 'dentean@mail.ru', user_score: 1300 },
  { user_id: 1, user_mail: 'dentean@mail.ru', user_score: 1300 },
];

const Rating = () => {
  // const fetchUsers = async () => {
  //   const [isLoading, setIsLoading] = React.useState(false);
  //   const [error, setError] = React.useState('');

  // try {
  //   setIsLoading(true);
  //   const response = await axios.get(
  //     'https://jsonplaceholder.typicode.com/users'
  //   );
  //   console.log('response: ', response);
  // } catch (e) {
  //   setError(e.message);
  // } finally {
  //   setIsLoading(false);
  // }
  // };

  React.useEffect(() => {
    // fetchUsers();
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
          style={{ color: colors.yellow, marginBottom: 24 }}
        />
        <ul className={styles.Rating__users}>
          {users ? (
            <p>Загрузка рейтинга...</p>
          ) : (
            users.map((user) => {
              <li key={user.id} className={styles.Rating__user}></li>;
            })
          )}
        </ul>
      </div>
    </Layout>
  );
};

export default Rating;
