import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styles from './styles.module.css';

export default class MobileNav extends Component {
  state = {
    open: false
  }

  close = () => this.setState({ open: false })

  open = () => this.setState({ open: true })

  render() {
    return (
      <div className={styles.nav_mobile}>
        <div className={styles.nav_openIcon} onClick={this.open}>
          <i class="icofont-navigation-menu"></i>
        </div>
        {this.state.open && <>
          <div className={styles.backdrop_mobile} onClick={this.close} />
          <nav className={styles.sideDrawer}>
            <div className={styles.links_mobile}>
              <Link to="#" className={styles.link} onClick={this.close}>Mission</Link>
              <Link to="#" className={styles.link} onClick={this.close}>Facts</Link>
              <Link to="#" className={styles.link} onClick={this.close}>Gallery</Link>

              <hr className={styles.divider} />

              <Link to="#" className={styles.link} onClick={this.close}>Who we are</Link>
              <Link to="#" className={styles.link} onClick={this.close}>FAQs</Link>
              <Link to="#" className={styles.link} onClick={this.close}>Resources/ Brochures</Link>

              <hr className={styles.divider} />

              <Link to="#" className={styles.link} onClick={this.close}>Services</Link>

              <hr className={styles.divider} />

              <Link to="#" className={styles.link} onClick={this.close}>Contact</Link>

              <hr className={styles.divider} />

              <Link to="#" className={styles.link} onClick={this.close}>Login/ Signup</Link>
            </div>
          </nav>
        </>}
      </div>


    );
  }

}