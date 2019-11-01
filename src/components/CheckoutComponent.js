import React from 'react';
import Nav from '../components/Nav';
import FooterComponent from './FooterComponent';
import AuthService from '../auth/AuthService';
import { Redirect } from 'react-router-dom';

class CheckoutComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      email: '',
      password: '',
      message: '',
      details: this.props.location.state,
    };
    this.razorpayCallback = this.razorpayCallback.bind(this);
    this.handlePayment = this.handlePayment.bind(this);
    this.Auth = new AuthService();
    if (!this.Auth.loggedIn()) this.props.history.replace('/login');
  }
  async componentDidMount() {
    // initiate payment call ( "userEmailId": "dharmikbshah@gmail.com", "id": "order_1ahjhu63kk2493q7s")
    // response = orderid from razorpay
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }
  async razorpayCallback(res) {
    console.log(res);
  }
  async handlePayment(e) {
    e.preventDefault();
    const self = this;
    let options = {
      key: "rzp_test_rYV3I2H5tbvoQn", // Enter the Key ID generated from the Dashboard
      amount: "200", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise or INR 500.
      currency: "INR",
      name: "NUTECH BIOMARKERS INDIA PVT. LTD.",
      description: "Seromark 1 Test",
      image: "https://i.ibb.co/HX7Vz3r/outputnusym.png",
      order_id: "order_DaYLpdh4EVS2sk",//This is a sample Order ID. Create an Order using Orders API. (https://razorpay.com/docs/payment-gateway/orders/integration/#step-1-create-an-order). Refer the Checkout form table given below
      handler: function (response) {
        console.log('response', response, 'token', self.Auth.getToken());
      },
      prefill: {
        name: this.state.details.fullName,
        email: this.state.details.email,
        contact: this.state.details.contact
      },
      notes: {
        address: "note value"
      },
      theme: {
        color: "#F37254"
      }
    };
    let rzp1 = new window.Razorpay(options);
    rzp1.open();
  }


  render() {
    if (this.state.details === undefined) return <Redirect to='/dashboard' />
    return (
      <div>
        <Nav />
        <div className="container">
          <br />
          <h3 style={{ marginBottom: 0 }}>Your Test Details</h3>
          <div className="row">
            <div className="seperator"><i className="fa fa-credit-card"></i><i className="fa fa-cc-visa"></i>
              <i className="fa fa-cc-mastercard"></i><i className="fa fa-cc-amex"></i><i className="fa fa-cc-diners-club"></i>
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="table-responsive">
                <h4>Order Total</h4>
                <table className="table text-left">
                  <tbody>
                    <tr>
                      <td className="cart-product-name">
                        <strong>Test Name:</strong>
                      </td>
                      <td className="cart-product-name text-right">
                        <span className="amount">{this.state.details.testName}</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="cart-product-name">
                        <strong>Patient Name:</strong>
                      </td>
                      <td className="cart-product-name  text-right">
                        <span className="amount">{this.state.details.fullName}</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="cart-product-name">
                        <strong>Gender:</strong>
                      </td>
                      <td className="cart-product-name  text-right">
                        <span className="amount">{this.state.details.gender}</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="cart-product-name">
                        <strong>Email:</strong>
                      </td>
                      <td className="cart-product-name  text-right">
                        <span className="amount">{this.state.details.email}</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="cart-product-name">
                        <strong>Contact:</strong>
                      </td>
                      <td className="cart-product-name  text-right">
                        <span className="amount">{this.state.details.contact}</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="cart-product-name">
                        <strong>DOB:</strong>
                      </td>
                      <td className="cart-product-name  text-right">
                        <span className="amount">{this.state.details.dob}</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="cart-product-name">
                        <strong>Address:</strong>
                      </td>
                      <td className="cart-product-name  text-right">
                        <span className="amount">{this.state.details.area}</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="cart-product-name">
                        <strong>City:</strong>
                      </td>
                      <td className="cart-product-name  text-right">
                        <span className="amount">{this.state.details.city}</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="cart-product-name">
                        <strong>Pincode:</strong>
                      </td>
                      <td className="cart-product-name  text-right">
                        <span className="amount">{this.state.details.pincode}</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="cart-product-name">
                        <strong>Total</strong>
                      </td>
                      <td className="cart-product-name text-right">
                        <span className="amount color lead"><strong>₹{this.state.details.amount}</strong></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
          <button type="button" className="btn" onClick={this.handlePayment} ><i className="fa fa-lock" />Secure Pay</button>
        </div>
        <br />
        <FooterComponent />
      </div>
    )
  }
}

export default CheckoutComponent;