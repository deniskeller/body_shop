import React from 'react';
import { Cookie, Navbar } from '../..';
import { background } from '../../../utils/global';
import styles from './Layout.module.scss';

const Layout = ({ children, bg }) => {
  const [isCookie, setIsCookie] = React.useState(false);

  const [bgcolor, setBgcolor] = React.useState(background.beige);

  const showCookie = () => {
    // setTimeout(() => {
    setIsCookie(true);
    // }, 3000);
  };

  const hiddenCookie = () => {
    setIsCookie(false);
  };

  React.useEffect(() => {
    showCookie();
  }, []);

  React.useEffect(() => {
    setBgcolor(bg);
  }, [bgcolor]);

  return (
    <>
      <div className={styles.layout} style={{ background: `${bgcolor}` }}>
        <Navbar />
        <div>{children}</div>
        {isCookie && <Cookie handlerCookie={hiddenCookie} />}
      </div>
    </>
  );
};

export default Layout;
