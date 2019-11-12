import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styles from './styles.module.css';
import AuthService from './../../auth/AuthService';

export default class MobileNav extends Component {
  state = {
    open: false
  }
  Auth = new AuthService();
  close = () => this.setState({ open: false })

  open = () => this.setState({ open: true })

  render() {
    return (
      this.Auth.loggedIn() ?
      (<div className={styles.nav_mobile}>
        <div className={styles.nav_openIcon} onClick={this.open}>
          <i className="icofont-navigation-menu"></i>
        </div>
        {this.state.open && <>
          <div className={styles.backdrop_mobile} onClick={this.close} />
          <nav className={styles.sideDrawer}>
            <div className={styles.links_mobile}>
              <Link to="/home#mission" className={styles.link} onClick={this.close}>Mission</Link>
              <Link to="/home#facts" className={styles.link} onClick={this.close}>Facts</Link>
              <Link to="/home#gallery" className={styles.link} onClick={this.close}>Gallery</Link>
              <Link to="/home#services" className={styles.link} onClick={this.close}>Services</Link>

              <hr className={styles.divider} />

              <Link to="/about#whoweare" className={styles.link} onClick={this.close}>Who we are</Link>
              <Link to="/about#faqs" className={styles.link} onClick={this.close}>FAQs</Link>
              <Link to="/about#resources" className={styles.link} onClick={this.close}>Resources/ Brochures</Link>
              <Link to="/home#contact" className={styles.link} onClick={this.close}>Contact</Link>

              <hr className={styles.divider} />

              <Link to="/dashboard" className={styles.link} onClick={this.close}>Dashboard</Link>

              <hr className={styles.divider} />

              <Link to="/book" style={{margin:"0px 20px"}} onClick={this.close}>
                <button type="button" style={{margin: "0px"}} className="btn btn-rounded btn-reveal btn-sm btn-success">
                  <span>Book Test</span><i className="fa fa-arrow-right"></i>
                </button>
              </Link>

              <hr className={styles.divider} />

              <Link to="/profile" className={styles.link} onClick={this.close}>Profile</Link>
              <Link to="/logout" className={styles.link} onClick={this.close}>Logout</Link>
            </div>
          </nav>
        </>}
      </div>)
      : 
      (<div className={styles.nav_mobile}>
        <div className={styles.nav_openIcon} onClick={this.open}>
          <i className="icofont-navigation-menu"></i>
        </div>
        {this.state.open && <>
          <div className={styles.backdrop_mobile} onClick={this.close} />
          <nav className={styles.sideDrawer}>
            <div className={styles.links_mobile}>
              <Link to="/book" style={{margin:"0px 20px"}} onClick={this.close}>
                <button type="button" style={{margin: "0px"}} className="btn btn-rounded btn-reveal btn-sm btn-success">
                  <span>Book Test</span><i className="fa fa-arrow-right"></i>
                </button>
              </Link>
              <Link to="/home#mission" className={styles.link} onClick={this.close}>Mission</Link>
              <Link to="/home#facts" className={styles.link} onClick={this.close}>Facts</Link>
              <Link to="/home#gallery" className={styles.link} onClick={this.close}>Gallery</Link>

              <hr className={styles.divider} />

              <Link to="/about#whoweare" className={styles.link} onClick={this.close}>Who we are</Link>
              <Link to="/about#faqs" className={styles.link} onClick={this.close}>FAQs</Link>
              <Link to="/about#resources" className={styles.link} onClick={this.close}>Resources/ Brochures</Link>

              <hr className={styles.divider} />

              <Link to="/home#services" className={styles.link} onClick={this.close}>Services</Link>

              <hr className={styles.divider} />

              <Link to="/home#contact" className={styles.link} onClick={this.close}>Contact</Link>

              <hr className={styles.divider} />

              <Link to="/login" className={styles.link} onClick={this.close}>Login/ Signup</Link>
            </div>
          </nav>
        </>}
      </div>)
    );
  }

}