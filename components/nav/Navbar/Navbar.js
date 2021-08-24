import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  BaseButton,
  BasePopup,
  BaseSubtitle,
  BaseTitle,
  NavbarLink,
} from '../..';
import styled from './Navbar.module.scss';
import Burger from '../../../assets/img/Burger';
import LogoText from '../../../assets/img/LogoText';
import NavbarTop from '../../../assets/img/NavbarTop';
import NavbarBotLeft from '../../../assets/img/NavbarBotLeft';
import NavbarBotRight from '../../../assets/img/NavbarBotRight';

const Navbar = ({ fill }) => {
  const auth = true;
  const router = useRouter();

  const links = [
    { id: 1, href: '/coupons', title: 'Мои купоны' },
    { id: 2, href: '/rating', title: 'рейтинг игроков' },
    { id: 3, href: '/about', title: 'Об игре' },
  ];

  const [burgerActive, setBurgerActive] = React.useState(false);
  const [modal, setModal] = React.useState(false);

  return (
    <>
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
        <BaseButton method={() => setModal(false)} type='clear'>
          Не выходить
        </BaseButton>
      </BasePopup>

      <div className={styled.Navbar}>
        {!burgerActive ? (
          <div className={styled.NavbarDefault}>
            <div className={styled.NavbarDefault__logo}>
              <LogoText
                className={styled.NavbarDefault__logoText}
                fill={fill}
              />
              <div
                className={styled.NavbarDefault__burger}
                onClick={() => setBurgerActive(!burgerActive)}
              >
                <Burger open={burgerActive} fill={fill} />
              </div>
            </div>
          </div>
        ) : (
          <div className={styled.NavbarActive}>
            <div className={styled.wrapper}>
              <NavbarTop className={styled.NavbarTop} />
              <NavbarBotLeft className={styled.NavbarBotLeft} />
              <NavbarBotRight className={styled.NavbarBotRight} />

              <div className={styled.NavbarActive__logo}>
                <LogoText className={styled.NavbarActivet__logoText} />
                <div
                  className={styled.NavbarActive__burger}
                  onClick={() => setBurgerActive(!burgerActive)}
                >
                  <Burger open={burgerActive} />
                </div>
              </div>

              {auth ? (
                <div className={styled.NavbarActive__userinfo}>
                  <div className={styled.NavbarActive__usermail}>
                    konstantinopol@gmail.com
                  </div>
                  <div className={styled.NavbarActive__userplace}>
                    103 место
                  </div>
                  <div className={styled.NavbarActive__userrecorde}>
                    Рекорд за неделю: 1300
                  </div>
                </div>
              ) : (
                <div className={styled.NavbarActive__userinfo}>
                  <p className={styled.NavbarActive__text}>
                    Ты не вошёл в аккаунт
                  </p>
                  <BaseButton
                    type='secondary'
                    method={() => router.push('/auth')}
                  >
                    Войти
                  </BaseButton>
                </div>
              )}

              {auth ? (
                <div className={styled.NavbarActive__nav}>
                  {links.map((link) => {
                    return (
                      <span key={link.id}>
                        <NavbarLink href={link.href} title={link.title} />
                      </span>
                    );
                  })}
                </div>
              ) : (
                <div className={styled.NavbarActive__nav}>
                  <span style={{ marginBottom: 142 }}>
                    <NavbarLink href={links[2].href} title={links[2].title} />
                  </span>
                </div>
              )}

              {auth ? (
                <BaseButton
                  method={() => setModal(true)}
                  type='clear'
                  style={{ marginBottom: 40 }}
                >
                  Выйти
                </BaseButton>
              ) : (
                ''
              )}

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
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
