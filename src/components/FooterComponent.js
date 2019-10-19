import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

class FooterComponent extends React.Component {
  render() {
    return (
      <footer id="footer" className="footer-light">
          <div className="footer-content">
            <div className="container">
              <div className="row text-left">
                <div className="col-md-4">
                  {/* Footer widget area 1 */}
                  <div className="widget clearfix widget-contact-us" style={{ backgroundImage: 'url("images/world-map-dark.png")', backgroundPosition: '50% 20px', backgroundRepeat: 'no-repeat' }}>
                    <h4>About NUTECH CANCER BIOMARKERS</h4>
                    <ul className="list-icon">
                      <li><i className="fa fa-map-marker" /> Office#4, Green Meadows 5F,
                    <br /> Lokhandwala Township,
                    <br /> Kandivali(E), Mumbai-400101</li>
                      <li><i className="fa fa-phone" /> +91 88986-64466</li>
                      <li><i className="fa fa-fax" />+91-22-2966 3990</li>
                      <li><i className="fa fa-envelope" /> <a href="mailto:tushar@ncbiprivatelimited.com">tushar@ncbiprivatelimited.com</a>
                      </li>
                      <li>
                        <br /><i className="fa fa-clock-o" />Monday - Friday: <strong>09:00 - 17:00</strong>
                        <br />Saturday - Sunday: <strong>Closed</strong>
                      </li>
                    </ul>
                    {/* Social icons */}
                    <div className="social-icons social-icons-border float-left m-t-20">
                      <ul>
                        <li className="social-facebook"><a href="https://www.facebook.com/nutechbiomarkers/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" /></a></li>
                        <li className="social-youtube"><a href="https://www.youtube.com/user/kelavkar" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube" /></a></li>
                        <li className="social-linkedin"><a href="https://www.linkedin.com/company/nutechcancerbiomarkers/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" /></a></li>
                      </ul>
                    </div>
                    {/* end: Social icons */}
                  </div>
                  {/* end: Footer widget area 1 */}
                </div>
                <div className="col-md-2">
                  {/* Footer widget area 2 */}
                  <div className="widget">
                    <h4>Quick LInks</h4>
                    <ul className="list-icon list-icon-arrow">
                      <li><Link to="/home#slider">Home</Link></li>
                      <li><Link to="/about#whoweare" className="scroll-to">About</Link></li>
                      <li><Link to="/home#services" className="scroll-to">Services</Link></li>
                      <li><Link to="/home#facts" className="scroll-to">Facts</Link></li>
                      <li><Link to="/home#gallery" className="scroll-to">Gallery</Link></li>
                      <li><Link to="/home#contact" className="scroll-to">Contact</Link></li>
                    </ul>
                  </div>
                  {/* end: Footer widget area 2 */}
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-content">
            <div className="container">
              <div className="copyright-text text-center">© 2019 NUTECH CANCER BIOMARKERS INDIA PRIVATE LIMITED.
								All Rights
            Reserved.</div>
            </div>
          </div>
        </footer>
    );
  }
}

export default FooterComponent;