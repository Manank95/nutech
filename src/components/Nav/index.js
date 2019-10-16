import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styles from './styles.module.css';
import Dropdown from './Dropdown';

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
          <Dropdown title="Company ">
            <Link to="/home" className={styles.link}>Mission</Link>
            <Link to="#" className={styles.link}>Facts</Link>
            <Link to="#" className={styles.link}>Gallery</Link>
          </Dropdown>
          <Dropdown title="About Us ">
            <Link to="/home" className={styles.link}>Who we are</Link>
            <Link to="#" className={styles.link}>FAQs</Link>
            <Link to="#" className={styles.link}>Resources/ Brochures</Link>
          </Dropdown>
          <Link to="#" className={styles.link}>Services</Link>
          <Link to="#" className={styles.link}>Contact</Link>
          <Link to="/login" className={styles.link}>Login/ Signup</Link>
        </nav>

      </header>
    );
  }
}
