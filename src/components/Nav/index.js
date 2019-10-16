import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styles from './styles.module.css';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

export default function Nav() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link to="/home">
            <img src="images/logo.png" alt="NUTECH Logo" height='55px' />
          </Link>
        </div>
        <DesktopNav />
        <MobileNav />
      </header>
      <div className={styles.placeholder} />
    </>
  );
}
