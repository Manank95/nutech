import React from 'react';
import Nav from '../components/Nav';
import FooterComponent from './FooterComponent';
import AuthService from '../auth/AuthService';

class CheckoutComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      email: '',
      password: '',
      message: ''
    };
    this.razorpayCallback = this.razorpayCallback.bind(this);
    this.Auth = new AuthService();
    if (!this.Auth.loggedIn()) this.props.history.replace('/login');
    if (!this.props) this.props.history.replace('/dashboard');
  }
  async razorpayCallback(res) {
    try {
      console.log(res)
    } catch (e) {
      alert(e);
    }
  }
  render() {
    return (
      <div>
        <Nav />
        <section className="fullscreen">
          <div className="container container-fullscreen">
            <div className="text-middle">
              <div className="row">
                <div className="col-md-4 center p-30 background-white b-r-6">
                  <h3>Your Test Details</h3>
                  <div className="seperator"><i className="fa fa-credit-card"></i>
                  </div>
                  <div className="col-md-6">
                    <div className="table-responsive">
                      <h4>Order Total</h4>
                      <table className="table">
                        <tbody>
                          <tr>
                            <td className="cart-product-name">
                              <strong>Order Subtotal</strong>
                            </td>
                            <td className="cart-product-name text-right">
                              <span className="amount">$125.96</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="cart-product-name">
                              <strong>Shipping</strong>
                            </td>
                            <td className="cart-product-name  text-right">
                              <span className="amount">Free Shipping</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="cart-product-name">
                              <strong>Coupon</strong>
                            </td>
                            <td className="cart-product-name  text-right">
                              <span className="amount">-20%</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="cart-product-name">
                              <strong>Total</strong>
                            </td>
                            <td className="cart-product-name text-right">
                              <span className="amount color lead"><strong>$100.76</strong></span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FooterComponent />
      </div>
    )
  }
}

export default CheckoutComponent;