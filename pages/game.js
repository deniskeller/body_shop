import React from 'react';
import { useRouter } from 'next/router';

import styles from '../styles/Game.module.scss';
import GameTopLeft from '../assets/img/GameTopLeft';
import GameTopRight from '../assets/img/GameTopRight';
import GameBot from '../assets/img/GameBot';

import AvocadoMini from '../assets/img/AvocadoMini';
import Coconut from '../assets/img/Coconut';
import GrapefruitMini from '../assets/img/GrapefruitMini';
import StrawberryMini from '../assets/img/StrawberryMini';
import Orange from '../assets/img/Orange';
import Cat from '../assets/img/Cat';
import Banana from '../assets/img/Banana';

const Game = () => {
  const router = useRouter();
  const [minutes, setMinutes] = React.useState(1);
  const [seconds, setSeconds] = React.useState(0);

  React.useEffect(() => {
    const myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  const computedColor = () => {
    if (seconds <= 30 && minutes != 1) {
      return '#EF8194';
    }
    return '#53998C';
  };

  React.useEffect(() => {
    computedColor();
    if (minutes < 1 && seconds < 1) {
      router.push('/results');
    }
  }, [seconds]);

  return (
    <div className={styles.Game}>
      <GameTopLeft className={styles.GameTopLeft} />
      <GameTopRight className={styles.GameTopRight} />
      <GameBot className={styles.GameBot} />

      <div className={styles.Game_header}>
        <div className={styles.Game_score}>
          <svg
            width='30'
            height='30'
            viewBox='0 0 30 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={styles.Game_score_icon}
          >
            <path
              d='M25.5716 14.9999C25.5716 20.8383 20.8386 25.5713 15.0001 25.5713C9.1617 25.5713 4.42871 20.8383 4.42871 14.9999C4.42871 9.16146 9.1617 4.42847 15.0001 4.42847C20.8386 4.42847 25.5716 9.16146 25.5716 14.9999Z'
              fill='#F8BB46'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30ZM26.5716 14.9999C26.5716 21.3906 21.3909 26.5713 15.0001 26.5713C8.60942 26.5713 3.42871 21.3906 3.42871 14.9999C3.42871 8.60917 8.60942 3.42847 15.0001 3.42847C21.3909 3.42847 26.5716 8.60917 26.5716 14.9999Z'
              fill='#F8BB46'
            />
          </svg>
          1300
        </div>

        {minutes === 0 && seconds === 0 ? (
          <div style={{ color: computedColor() }} className={styles.Game_timer}>
            00:00
          </div>
        ) : (
          <div style={{ color: computedColor() }} className={styles.Game_timer}>
            {'0'}
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </div>
        )}
      </div>

      <div className={styles.Game_content}>
        <div className={styles.Game_item}>
          <AvocadoMini className={styles.Game_item_img} />
        </div>

        <div className={styles.Game_item}>
          <Coconut className={styles.Game_item_img} />
        </div>

        <div className={styles.Game_item}>
          <GrapefruitMini className={styles.Game_item_img} />
        </div>

        <div className={styles.Game_item}>
          <StrawberryMini className={styles.Game_item_img} />
        </div>

        <div className={styles.Game_item}>
          <Orange className={styles.Game_item_img} />
        </div>

        <div className={styles.Game_item}>
          <Cat className={styles.Game_item_img} />
        </div>

        <div className={styles.Game_item}>
          <Banana className={styles.Game_item_img} />
        </div>

        <div className={styles.Game_item}>
          <AvocadoMini className={styles.Game_item_img} />
        </div>

        <div className={styles.Game_item}>
          <Coconut className={styles.Game_item_img} />
        </div>

        <div className={styles.Game_item}>
          <GrapefruitMini className={styles.Game_item_img} />
        </div>

        <div className={styles.Game_item}>
          <StrawberryMini className={styles.Game_item_img} />
        </div>

        <div className={styles.Game_item}>
          <Coconut className={styles.Game_item_img} />
        </div>

        <div className={styles.Game_item}>
          <Cat className={styles.Game_item_img} />
        </div>

        <div className={styles.Game_item}>
          <div className={styles.Game_item_plusscore}>+50</div>
          <Cat className={styles.Game_item_img} />
        </div>

        <div className={styles.Game_item}>
          <Cat className={styles.Game_item_img} />
        </div>

        <div className={styles.Game_item}>
          <Coconut className={styles.Game_item_img} />
        </div>

        <div className={styles.Game_item}>
          <GrapefruitMini className={styles.Game_item_img} />
        </div>

        <div className={styles.Game_item}>
          <StrawberryMini className={styles.Game_item_img} />
        </div>

        <div className={styles.Game_item}>
          <Orange className={styles.Game_item_img} />
        </div>

        <div className={styles.Game_item}>
          <Cat className={styles.Game_item_img} />
        </div>
      </div>
    </div>
  );
};

export default Game;
