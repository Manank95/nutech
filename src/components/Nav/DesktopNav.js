import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styles from './styles.module.css';
import Dropdown from './Dropdown';

export default function DesktopNav() {

  return (
    <nav className={styles.nav}>
      <Dropdown
        title="Company"
        links={[
          { to: "/home", tag: "Mission" },
          { to: "#", tag: "Facts" },
          { to: "#", tag: "Gallery" }
        ]} />
      <Dropdown
        title="About Us"
        links={[
          { to: "#", tag: "Who we are" },
          { to: "#", tag: "FAQs" },
          { to: "#", tag: "Resources" }
        ]} />
      <Link to="#" className={styles.link}>Services</Link>
      <Link to="#" className={styles.link}>Contact</Link>
      <Link to="/login" className={styles.link}>Login/ Signup</Link>
    </nav>
  );
}
