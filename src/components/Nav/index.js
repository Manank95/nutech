import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styles from './styles.module.css';

export default class Nav extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link to="/home">
            <img src="images/logo.png" alt="NUTECH Logo" height='55px' />
          </Link>
        </div>

        <nav className={styles.nav}>
          <Link to="/home" className={styles.link}>Home</Link>
          <Link to="/about" className={styles.link}>About Us</Link>
          <Link to="#" className={styles.link}>Facts</Link>
          <Link to="#" className={styles.link}>Gallery</Link>
          <Link to="#" className={styles.link}>Services</Link>
          <Link to="#" className={styles.link}>Contact</Link>
          <Link to="/login" className={styles.link}>Login</Link>
        </nav>

      </header>
    );
  }
}
