import React from 'react';
import Link from 'next/link';

import styles from './Social.module.scss';

const Social = ({ color, fill = '#F8BB46', background = '#fff' }) => {
  return (
    <>
      <h2 style={{ color: color }} className={styles.About_social_title}>
        Поделиться
      </h2>
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
                <circle cx='20' cy='20' r='20' fill={fill} />
                <path
                  d='M31.7743 26.2256C31.7062 26.1116 31.285 25.1964 29.2582 23.3152C27.1364 21.3454 27.4214 21.6653 29.9771 18.2593C31.5336 16.1849 32.1559 14.9182 31.9611 14.3766C31.7759 13.8604 30.631 13.9966 30.631 13.9966L26.8244 14.0188C26.8244 14.0188 26.5426 13.9808 26.332 14.1059C26.1277 14.2294 25.9963 14.5144 25.9963 14.5144C25.9963 14.5144 25.393 16.12 24.5886 17.4849C22.8927 20.3652 22.2134 20.5173 21.9363 20.3383C21.2918 19.9219 21.4534 18.663 21.4534 17.77C21.4534 14.9783 21.8761 13.8145 20.6284 13.5137C20.2135 13.4139 19.9095 13.3474 18.8502 13.3363C17.4916 13.3221 16.3404 13.3411 15.6896 13.6593C15.2557 13.8715 14.9216 14.345 15.1259 14.3719C15.3777 14.4051 15.9477 14.5255 16.2501 14.9372C16.6412 15.4676 16.627 16.6616 16.627 16.6616C16.627 16.6616 16.8518 19.9472 16.1029 20.3557C15.5883 20.636 14.8836 20.0644 13.3714 17.4501C12.5971 16.1121 12.0112 14.6316 12.0112 14.6316C12.0112 14.6316 11.8988 14.3561 11.6977 14.2088C11.4539 14.0299 11.1118 13.9729 11.1118 13.9729L7.49208 13.995C7.49208 13.995 6.94896 14.0109 6.74944 14.2468C6.57209 14.4574 6.73519 14.8913 6.73519 14.8913C6.73519 14.8913 9.56956 21.5212 12.7776 24.8638C15.7213 27.9278 19.0623 27.7267 19.0623 27.7267H20.5761C20.5761 27.7267 21.0337 27.676 21.2665 27.4243C21.4819 27.1931 21.4739 26.7592 21.4739 26.7592C21.4739 26.7592 21.4439 24.7276 22.3876 24.4284C23.3171 24.1339 24.511 26.3919 25.7762 27.2612C26.7326 27.9183 27.4594 27.7742 27.4594 27.7742L30.8432 27.7267C30.8432 27.7267 32.6135 27.6174 31.7743 26.2256Z'
                  fill={background}
                />
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
                <circle cx='20' cy='20' r='20' fill={fill} />
                <path
                  d='M26.1645 8.00513L22.9664 8C19.3735 8 17.0516 10.3822 17.0516 14.0693V16.8676H13.8361C13.5583 16.8676 13.3333 17.0929 13.3333 17.3707V21.4252C13.3333 21.703 13.5585 21.928 13.8361 21.928H17.0516V32.1588C17.0516 32.4366 17.2766 32.6616 17.5545 32.6616H21.7498C22.0277 32.6616 22.2527 32.4364 22.2527 32.1588V21.928H26.0124C26.2902 21.928 26.5152 21.703 26.5152 21.4252L26.5168 17.3707C26.5168 17.2373 26.4636 17.1095 26.3695 17.0151C26.2753 16.9207 26.147 16.8676 26.0136 16.8676H22.2527V14.4954C22.2527 13.3552 22.5244 12.7764 24.0096 12.7764L26.164 12.7757C26.4416 12.7757 26.6666 12.5504 26.6666 12.2728V8.508C26.6666 8.23065 26.4418 8.00564 26.1645 8.00513Z'
                  fill={background}
                />
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
                  <circle cx='19.9996' cy='20' r='20' fill={fill} />
                  <path
                    d='M31.546 14.0196C31.2318 14.1686 30.9088 14.2943 30.5787 14.3963C30.9695 13.924 31.2674 13.3682 31.4493 12.7601C31.4901 12.6238 31.4478 12.4746 31.343 12.3854C31.2383 12.2962 31.0928 12.2855 30.9775 12.3585C30.2765 12.8029 29.5203 13.1222 28.7273 13.3089C27.9285 12.4747 26.8436 12 25.7221 12C23.3547 12 21.4286 14.0584 21.4286 16.5884C21.4286 16.7877 21.4404 16.9859 21.4638 17.1813C18.526 16.9056 15.7949 15.3624 13.9194 12.9037C13.8526 12.8161 13.7496 12.7689 13.6442 12.7779C13.5387 12.7867 13.4439 12.8503 13.3906 12.948C13.0102 13.6456 12.8091 14.4434 12.8091 15.2551C12.8091 16.3608 13.1785 17.4098 13.831 18.2295C13.6326 18.156 13.4401 18.0642 13.2563 17.9552C13.1577 17.8966 13.0373 17.8975 12.9393 17.9575C12.8412 18.0176 12.7797 18.128 12.7771 18.2488C12.7767 18.2691 12.7767 18.2894 12.7767 18.3101C12.7767 19.9604 13.6078 21.4462 14.8784 22.256C14.7693 22.2444 14.6602 22.2275 14.5518 22.2053C14.44 22.1825 14.3251 22.2244 14.2498 22.3154C14.1743 22.4065 14.1493 22.5333 14.1841 22.6492C14.6544 24.2185 15.8653 25.3728 17.3292 25.7247C16.1151 26.5374 14.7266 26.9631 13.2691 26.9631C12.965 26.9631 12.6591 26.944 12.3597 26.9062C12.211 26.8873 12.0688 26.9811 12.0182 27.1322C11.9675 27.2835 12.0212 27.452 12.1477 27.5387C14.0202 28.8218 16.1853 29.5 18.4088 29.5C22.78 29.5 25.5145 27.297 27.0387 25.449C28.9394 23.1446 30.0294 20.0944 30.0294 17.0807C30.0294 16.9548 30.0276 16.8276 30.024 16.7009C30.7739 16.0971 31.4195 15.3664 31.9448 14.5265C32.0246 14.3989 32.016 14.2303 31.9235 14.1129C31.8312 13.9954 31.6773 13.9574 31.546 14.0196Z'
                    fill={background}
                  />
                </g>
                <defs>
                  <clipPath id='clip0'>
                    <rect
                      width='40'
                      height='40'
                      fill='white'
                      transform='translate(0.000488281)'
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
                  <circle cx='19.9996' cy='20' r='20' fill={fill} />
                  <path
                    d='M18.6889 24.609C16.6232 24.4069 14.7607 23.9296 13.1662 22.7595C12.9683 22.6139 12.764 22.4735 12.5835 22.3109C11.8855 21.682 11.8152 20.9617 12.3675 20.2195C12.8399 19.5843 13.633 19.4143 14.4574 19.7791C14.617 19.8498 14.7691 19.938 14.9148 20.0328C17.8866 21.9486 21.969 22.0015 24.952 20.1189C25.2475 19.9063 25.5634 19.733 25.9295 19.6445C26.6414 19.473 27.3053 19.7183 27.6874 20.3027C28.1238 20.9701 28.1183 21.6216 27.5805 22.1397C26.7556 22.9341 25.7635 23.5088 24.6612 23.9099C23.6189 24.2891 22.4772 24.4799 21.3473 24.6067C21.5178 24.7808 21.5981 24.8664 21.7048 24.9669C23.2391 26.4133 24.7801 27.8536 26.3093 29.3044C26.8304 29.7987 26.9392 30.4116 26.6523 30.9866C26.3386 31.615 25.6365 32.0284 24.9481 31.9842C24.5119 31.9559 24.1717 31.7522 23.8695 31.4666C22.7116 30.3734 21.532 29.3004 20.3976 28.1866C20.0675 27.8628 19.9087 27.924 19.6173 28.2052C18.4525 29.3303 17.2687 30.4381 16.0779 31.5396C15.5432 32.0342 14.907 32.1232 14.2869 31.8407C13.6277 31.5409 13.2083 30.9096 13.2407 30.2752C13.263 29.8461 13.4879 29.5183 13.8019 29.2243C15.3203 27.8017 16.8345 26.3756 18.3493 24.9507C18.4494 24.8559 18.5429 24.7554 18.6889 24.609Z'
                    fill={background}
                  />
                  <path
                    d='M19.9472 19.6539C16.2621 19.6421 13.2404 16.7759 13.2619 13.313C13.2831 9.8118 16.3068 6.99034 20.0281 7.00002C23.757 7.00945 26.75 9.87149 26.7313 13.4091C26.7123 16.8649 23.6697 19.666 19.9472 19.6539ZM23.2963 13.3213C23.2898 11.6019 21.8303 10.2331 20.0013 10.2315C18.157 10.2297 16.6843 11.6234 16.6986 13.3585C16.7123 15.0714 18.1843 16.4306 20.0184 16.4243C21.8468 16.4182 23.3024 15.0405 23.2963 13.3213Z'
                    fill={background}
                  />
                </g>
                <defs>
                  <clipPath id='clip0'>
                    <rect
                      width='40'
                      height='40'
                      fill='white'
                      transform='translate(0.000488281)'
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Social;
