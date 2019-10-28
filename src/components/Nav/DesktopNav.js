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
          { to: "/home#mission", tag: "Mission" },
          { to: "/home#facts", tag: "Facts" },
          { to: "/home#gallery", tag: "Gallery" }
        ]} />
      <Dropdown
        title="About Us"
        links={[
          { to: "/about#whoweare", tag: "Who we are" },
          { to: "/about#faqs", tag: "FAQs" },
          { to: "/about#resources", tag: "Resources" }
        ]} />
      <Link to="/home#services" className={styles.link}>Services</Link>
      <Link to="/home#contact" className={styles.link}>Contact</Link>
      <Link to="/login" className={styles.link}>Login <i className="fa fa-user"></i></Link>
    </nav>
  );
}
