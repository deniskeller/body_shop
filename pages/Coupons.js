import React from 'react';
import styles from '../styles/Coupons.module.scss';
import { BaseSubtitle, BaseTitle, Layout, Social } from '../components';
import CouponsBot from '../assets/img/CouponsBot';
import CouponsTop from '../assets/img/CouponsTop';
import Avocado from '../assets/img/Avocado';
import Mango from '../assets/img/Mango';

import { Swiper, SwiperSlide } from 'swiper/react';

const Coupons = () => {
  const [promocode, setPromocode] = React.useState(2);

  return (
    <Layout>
      <div className={styles.Coupons_topimg}>
        <CouponsTop />
      </div>

      <div className={styles.Coupons_botimg}>
        <CouponsBot />
      </div>

      <div
        className={` ${styles.Coupons} ${promocode == 1 ? styles.default : ''}`}
      >
        {promocode == 1 ? (
          <div
            className={` ${styles.Coupons_item} ${
              promocode == 1 ? styles.Coupons_item_default : ''
            }`}
          >
            <Avocado className={styles.Avocado} />

            <div className={styles.Coupons_img}></div>
            <BaseTitle style={{ marginBottom: 8 }}>avocado</BaseTitle>

            <BaseSubtitle style={{ marginBottom: 16 }}>
              Промокод на скидку 20% <br /> с 15 сентября по 15 октября
            </BaseSubtitle>

            <div className={styles.Coupons_description}>
              Для получения скидки <br /> назови промокод на кассе
              <br /> или введи AVOCADO в поле
              <br /> «Промокод или купон»
              <br /> на странице оформления
              <br /> заказа в интернет-магазине.
            </div>
          </div>
        ) : (
          <Swiper
            breakpoints={{
              320: {
                width: 320,
                slidesPerView: 1.2,
                spaceBetween: 8,
                slidesOffsetBefore: 15,
                slidesOffsetAfter: 15,
              },
              375: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                width: 620,
                slidesPerView: 2,
                spaceBetween: 20,
                slidesOffsetBefore: 15,
                slidesOffsetAfter: 15,
                allowTouchMove: false,
              },
              768: {
                width: 640,
                slidesPerView: 2,
                spaceBetween: 20,
                slidesOffsetBefore: 20,
                slidesOffsetAfter: 20,
                allowTouchMove: false,
              },
            }}
          >
            <SwiperSlide>
              <div className=''>
                <div className={styles.Coupons_item}>
                  <Avocado className={styles.Avocado} />

                  <div className={styles.Coupons_img}></div>
                  <BaseTitle style={{ marginBottom: 8 }}>avocado</BaseTitle>

                  <BaseSubtitle style={{ marginBottom: 16 }}>
                    Промокод на скидку 20% <br /> с 15 сентября по 15 октября
                  </BaseSubtitle>

                  <div className={styles.Coupons_description}>
                    Для получения скидки <br /> назови промокод на кассе
                    <br /> или введи AVOCADO в поле
                    <br /> «Промокод или купон»
                    <br /> на странице оформления
                    <br /> заказа в интернет-магазине.
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=''>
                <div className={styles.Coupons_item}>
                  <Mango className={styles.Mango} />

                  <div className={styles.Coupons_img}></div>
                  <BaseTitle style={{ marginBottom: 8 }}>MANGO</BaseTitle>

                  <BaseSubtitle style={{ marginBottom: 16 }}>
                    Промокод на скидку 30% <br /> с 15 сентября по 15 октября
                  </BaseSubtitle>

                  <div className={styles.Coupons_description}>
                    Для получения скидки <br /> назови промокод на кассе
                    <br /> или введи AVOCADO в поле
                    <br /> «Промокод или купон»
                    <br /> на странице оформления
                    <br /> заказа в интернет-магазине.
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        )}
        <div className={styles.Coupons_social}></div>
        <Social color='#004236' />
      </div>
    </Layout>
  );
};

export default Coupons;
