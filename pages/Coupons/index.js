import React from 'react';
import Avocado from '../../assets/img/Avocado';
import CouponsBot from '../../assets/img/CouponsBot';
import CouponsTop from '../../assets/img/CouponsTop';
import Mango from '../../assets/img/Mango';
import { BaseSubtitle, BaseTitle, Layout } from '../../components';
import styles from './Coupons.module.scss';

const Coupons = () => {
  return (
    <Layout>
      <div className={styles.Coupons_topimg}>
        <CouponsTop />
      </div>
      <div className={styles.Coupons_botimg}>
        <CouponsBot />
      </div>
      <div className={styles.Coupons}>
        {/* <div className={styles.Coupons_item}>
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
        </div> */}

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
    </Layout>
  );
};

export default Coupons;
