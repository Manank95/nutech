import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styles from './styles.module.css';
import Dropdown from './Dropdown';
import jwt from 'jsonwebtoken';
import AuthService from './../../auth/AuthService';

let Auth = new AuthService();

export default function DesktopNav() {
  let decoded = jwt.decode(Auth.getToken());
  return (
    Auth.loggedIn() ?
    (<nav className={styles.nav}>
      <Link to="/book"><button type="button" style={{margin: "0px"}} className="btn btn-rounded btn-reveal btn-sm btn-success"><span>Book Test</span><i className="fa fa-arrow-right"></i></button></Link>
      <Link to="/dashboard" className={styles.link}>Dashboard</Link>
      <Dropdown
        title="Company"
        links={[
          { to: "/home#mission", tag: "Mission" },
          { to: "/home#facts", tag: "Facts" },
          { to: "/home#gallery", tag: "Gallery" },
          { to: "/home#services", tag: "Services"}
        ]} />
      <Dropdown
        title="About Us"
        links={[
          { to: "/about#whoweare", tag: "Who we are" },
          { to: "/about#faqs", tag: "FAQs" },
          { to: "/about#resources", tag: "Resources" },
          { to: "/home#contact", tag: "Contact"}
        ]} />
      <Dropdown
        title={decoded.fullName.split(' ')[0] }
        custom={true}
        isLast
        links={[
          { to: "/changepassword", tag: "Password" },
          { to: "/logout", tag: "Logout" }
        ]} />
    </nav>)
    :
    (<nav className={styles.nav}>
      <Link to="/book"><button type="button" style={{margin: "0px"}} className="btn btn-rounded btn-reveal btn-sm btn-success"><span>Book Test</span><i className="fa fa-arrow-right"></i></button></Link>
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
          { to: "/about#resources", tag: "Resources" },
          { to: "/home#contact", tag:"Contact"}
        ]} />
      <Link to="/home#services" className={styles.link}>Services</Link>
      <Link to="/login" className={styles.link}>Login <i className="fa fa-user"></i></Link>
    </nav>)
  );
}
