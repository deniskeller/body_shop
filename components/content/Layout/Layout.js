import React from 'react';
import { Cookie, Navbar } from '../..';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  const [isCookie, setIsCookie] = React.useState(false);

  const showCookie = () => {
    setTimeout(() => {
      setIsCookie(true);
    }, 3000);
  };

  const hiddenCookie = () => {
    setIsCookie(false);
  };

  React.useEffect(() => {
    showCookie();
  }, []);

  return (
    <>
      <div className={styles.layout}>
        <Navbar />
        <div>{children}</div>
        {isCookie && <Cookie handlerCookie={hiddenCookie} />}
      </div>
    </>
  );
};

export default Layout;
