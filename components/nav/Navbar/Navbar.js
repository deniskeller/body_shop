import React from 'react';
import { BaseButton, NavbarLink } from '../..';
import Burger from '../../../assets/img/Burger';
import LogoImg from '../../../assets/img/LogoImg';
import LogoText from '../../../assets/img/LogoText';
import styled from './Navbar.module.scss';

const Navbar = () => {
  const links = [
    { id: 1, href: '/Coupons', title: 'Мои купоны' },
    { id: 2, href: '/Rating', title: 'рейтинг игроков' },
    { id: 3, href: '/About', title: 'Об игре' },
  ];
  const [burgerActive, setBurgerActive] = React.useState(false);

  return (
    <div className={styled.Navbar}>
      {!burgerActive ? (
        <div className={styled.NavbarDefault}>
          <div className={styled.Navbar__logo}>
            <div className={styled.Navbar__logoText}>
              <LogoText />
            </div>
            <div className={styled.Navbar__logoImg}>
              <LogoImg />
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
                  <NavbarLink
                    href={link.href}
                    title={link.title}
                    style={{ marginBottom: 16 }}
                  />
                </span>
              );
            })}
          </div>
          <BaseButton type='clear' style={{ marginBottom: 40 }}>
            Выйти
          </BaseButton>

          <p className={styled.NavbarActive__text}>
            Политика обработки <br /> персональных данных
          </p>
          <p className={styled.NavbarActive__text}>
            © 2021. The Body Shop.
            <br /> Все права защищены.
          </p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
