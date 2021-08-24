import React from 'react';
import {
  BaseButton,
  BasePopup,
  BaseSubtitle,
  BaseTitle,
  Layout,
  NavbarLink,
} from '../..';
import Burger from '../../../assets/img/Burger';
import LogoText from '../../../assets/img/LogoText';
import Link from 'next/link';
import styled from './Navbar.module.scss';

const Navbar = () => {
  const links = [
    { id: 1, href: '/coupons', title: 'Мои купоны' },
    { id: 2, href: '/rating', title: 'рейтинг игроков' },
    { id: 3, href: '/about', title: 'Об игре' },
    // { id: 4, href: '/', title: 'Выйти' },
  ];
  const [burgerActive, setBurgerActive] = React.useState(false);

  const [modal, setModal] = React.useState(false);

  return (
    <Layout>
      <BasePopup visible={modal} setVisible={setModal}>
        <BaseTitle style={{ marginBottom: 10 }}>выйти?</BaseTitle>

        <BaseSubtitle style={{ marginBottom: 24 }}>
          Ты сможешь вернуться <br /> и продолжить игру <br /> в любой момент
        </BaseSubtitle>

        <BaseButton
          style={{ marginBottom: 16 }}
          method={() => router.push('/')}
        >
          Да
        </BaseButton>
        <BaseButton type='clear'>Не выходить</BaseButton>
      </BasePopup>

      <div className={styled.Navbar}>
        {!burgerActive ? (
          <div className={styled.NavbarDefault}>
            <div className={styled.Navbar__logo}>
              <div className={styled.Navbar__logoText}>
                <LogoText />
              </div>
              <div
                className={styled.Navbar__burger}
                onClick={() => setBurgerActive(!burgerActive)}
              >
                <Burger open={burgerActive} />
              </div>
            </div>
          </div>
        ) : (
          <div className={styled.NavbarActive}>
            <div className={styled.NavbarActive__logo}>
              <div className={styled.NavbarActive__logoText}>
                <LogoText />
              </div>
              <div
                className={styled.NavbarActive__burger}
                onClick={() => setBurgerActive(!burgerActive)}
              >
                <Burger open={burgerActive} />
              </div>
            </div>

            <div className={styled.NavbarActive__userinfo}>
              <div className={styled.NavbarActive__usermail}>
                konstantinopol@gmail.com
              </div>
              <div className={styled.NavbarActive__userplace}>103 место</div>
              <div className={styled.NavbarActive__userrecorde}>
                Рекорд за неделю: 1300
              </div>
            </div>

            <div className={styled.NavbarActive__nav}>
              {links.map((link) => {
                return (
                  <span key={link.id}>
                    <NavbarLink href={link.href} title={link.title} />
                  </span>
                );
              })}
            </div>

            <BaseButton type='clear' style={{ marginBottom: 40 }}>
              Выйти
            </BaseButton>

            <Link href='/politics'>
              <p className={styled.NavbarActive__text}>
                Политика обработки <br /> персональных данных
              </p>
            </Link>

            <p className={styled.NavbarActive__text}>
              © 2021. The Body Shop.
              <br /> Все права защищены.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Navbar;
