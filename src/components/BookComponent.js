import React from 'react';
import config from '../config';
import Nav from './Nav';
import FooterComponent from './FooterComponent';
import AuthService from './../auth/AuthService';
import { Link } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import Steps, { Step } from 'rc-steps';
import Modal from './Modal/Modal';

class BookComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      contact: '',
      email: '',
      gender: 'Male',
      dob: '',
      area: '',
      city: '',
      istate: '',
      pincode: '',
      testID: '',
      testAmount: null,
      couponCode: '',
      couponMessage: '',
      discountPercent: 0,
      discountAmount: 0,
      totalAmount: null,
      isLoadingCoupon: false,
      couponStatus: null,
      message: '',
      status: null,
      consentChecked: false
    };
    this.domain = config.url;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.checkCoupon = this.checkCoupon.bind(this);
    this.handleChangeTest = this.handleChangeTest.bind(this);
    this.Auth = new AuthService();
    if (!this.Auth.loggedIn()) {
      this.props.history.replace('/login')
    }
  }

  componentDidMount() {
    window.updateUIAfterReact();
    if (!this.Auth.loggedIn()) return this.props.history.replace('/login');
    let decoded = jwt.decode(this.Auth.getToken());
    this.setState({
      fullName: decoded.fullName,
      email: decoded.email
    });
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleChangeTest(event) {
    const test = config.services.find(ele=>ele.testID===event.target.value);
    this.setState({
      testID: test.testID,
      testAmount: test.testAmount
    });
  }

  async checkCoupon() {
    this.setState({
      isLoadingCoupon: true
    })
    let couponCode = this.state.couponCode;
    try{
      let res = await this.Auth.checkCoupon(couponCode);
      console.log(res);
      if (res.status === 401) return this.props.history.replace('/logout');
      if (res.status !== 200) return this.setState({
        isLoadingCoupon: false,
        couponMessage: res.message,
        couponStatus: res.status
      });
      return this.setState({
        isLoadingCoupon: false,
        discountPercent: res.discountPercent,
        discountAmount: this.state.testAmount * (res.discountPercent)/100,
        totalAmount: this.state.testAmount * (100-res.discountPercent)/100,
        couponStatus: res.status
      });
    } catch(e) {
      this.setState({
        couponMessage: "Something went wrong! Please try again.",
        isLoadingCoupon: false
      })
    }
  }

  handleCheckbox(event) {
    this.setState({ consentChecked: !this.state.consentChecked });
  }

  handleLogout() {
    this.Auth.logout()
    this.props.history.replace('/login');
  }

  async handleSubmit(event) {
    event.preventDefault();
    let obj = this.state;
    obj.city = obj.city + ', ' + obj.istate;
    try {
      let res = await this.Auth.book(obj);
      if (res.status === 401) return this.props.history.replace('/logout');
      return this.setState({
        message: res.message,
        status: res.status
      })
    } catch (e) {
      this.props.history.push({ pathname: '/error', state: { status: 500, message: 'Internal Server Error!' } })
    }
  }
  render() {
    return (
      <div>
        <Nav />
        <section className="container" style={{paddingTop:'25px'}}>
          <div className="row">
            <div style={{padding:'30px 0px'}} className="text-left">
              <Steps
                current={0}
                status='process'
              >
                <Step title="Book a Test" />
                <Step title="Make Payment" icon={<i className="fa fa-warning" style={{color:'#a94442'}}/>} />
                <Step title="Sit Back and Relax" icon={<i className="fa fa-clock-o" style={{color: '#31708f'}} />} />
                <Step title="Download Report" icon={<i className="fa fa-check-circle" style={{color:'#3c763d'}} />} />
              </Steps>
            </div>
          </div>
          <div className="row">
            <form className="form-transparent-grey" onSubmit={this.handleSubmit}>
              <div className="col-md-6 text-left">
                <div className="col-md-12 m-b-20">
                  <h3>Register for the Lab test</h3>
                  {this.state.message !== '' && (
                    <div role="alert" className={this.state.status === 200 ? "alert alert-success alert-dismissible m-b-0" : "alert alert-danger alert-dismissible  m-b-0"}>
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span> </button>
                      {this.state.status === 200 ? <Link to='/dashboard'><u>{this.state.message}</u></Link> : this.state.message}
                    </div>
                  )}
                </div>


                <div className="col-md-12 form-group">
                  <label className="sr-only">TestName</label>
                  <select className="form-control" value={this.state.testID} onChange={this.handleChangeTest} name="testID" required>
                    <option value='' disabled hidden> Select a Test </option>
                    {config.services.map((item, index)=>{
                      return <option key={index} value={item.testID}>{item.testName}</option>
                    })}
                  </select>
                </div>


                <div className="col-md-12 form-group">
                  <label className="sr-only">Full Name</label>
                  <input type="text" className="form-control" placeholder="Full Name" name="fullName" value={this.state.fullName} onChange={this.handleChange} required />
                </div>
                <div>
                  <div className="col-md-6 form-group m-b-0">
                    <label className="sr-only">Email</label>
                    <input type="email" className="form-control" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} required />
                  </div>
                  <div className="col-md-6 form-group m-b-0">
                    <label className="sr-only">Phone No. For communication</label>
                    <input type="tel" pattern="[0-9]{10}" className="form-control" placeholder="Phone No. For communication" name="contact" value={this.state.contact} onChange={this.handleChange} required />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="col-md-4 text-left">
                    <div className="radio">
                      <label> <input type="radio" name="gender" id="optionsRadios1" defaultValue="male" defaultChecked /> Male </label>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="radio">
                      <label> <input type="radio" name="gender" id="optionsRadios2" defaultValue="female" /> Female </label>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 form-group">
                  <label className="sr-only">Date of Birth</label>
                  <input type="date" className="form-control" placeholder="Date of Birth" name="dob" value={this.state.dob} onChange={this.handleChange} required />
                </div>
                <div className="col-md-6 form-group">
                  <label className="sr-only">Address</label>
                  <input type="text" className="form-control" placeholder="Address" name="area" value={this.state.area} onChange={this.handleChange} required />
                </div>
                <div className="col-md-6 form-group">
                  <label className="sr-only">City</label>
                  <input type="text" className="form-control" placeholder="City" name="city" value={this.state.city} onChange={this.handleChange} required />
                </div>

                <div className="col-md-6 form-group m-b-0">
                  <label className="sr-only">State</label>
                  <select className="form-control" value={this.state.istate} onChange={this.handleChange} name="istate" required>
                    <option value>State</option>
                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                    <option value="Daman and Diu">Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Orissa">Orissa</option>
                    <option value="Pondicherry">Pondicherry</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttaranchal">Uttaranchal</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="West Bengal">West Bengal</option>
                  </select>
                </div>

                <div className="col-md-6 form-group m-b-0">
                  <label className="sr-only">Pincode</label>
                  <input type="text" pattern="[0-9]{6}" className="form-control" placeholder="6 digits Pincode" name="pincode" value={this.state.pincode} onChange={this.handleChange} required />
                </div>
              </div>

              <div className="col-md-6 text-left">
                <div className="m-b-20">
                  <h3>Order Summary</h3>
                  {this.state.couponStatus !== null && (
                    <div role="alert" className={this.state.couponStatus === 200 ? "alert alert-success alert-dismissible m-b-0" : "alert alert-danger alert-dismissible  m-b-0"}>
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span> </button>
                      {this.state.couponStatus === 200 ? "Coupon applied successfully!" : this.state.couponMessage}
                    </div>
                  )}
                </div>
                <div className="row m-b-10">
                  <div className="col-md-7">
                    <label className="sr-only">Coupon Code</label>
                    <input type="text" className="form-control" placeholder="Coupon Code" name="couponCode" value={this.state.couponCode} onChange={this.handleChange} />
                  </div>
                  <div className="col-md-3">
                    <button type="button" onClick={this.checkCoupon} className="btn btn-block">Apply</button>
                  </div>
                  {this.state.isLoadingCoupon && (<div className="text-center col-md-2 loader-inner line-scale-pulse-out-rapid">
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                  </div>)}
                </div>
                <div className="table-responsive">
                  <table className="table" style={{marginBottom:0}}>
                    <tbody>
                      <tr>
                        <td className="cart-product-name">
                          <strong>Order Subtotal</strong>
                        </td>
                        <td className="cart-product-name text-right">
                          <span className="amount">₹{this.state.testAmount}</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="cart-product-name">
                          <strong>Coupon</strong>
                        </td>
                        <td className="cart-product-name  text-right">
                          <span className="amount">{this.state.discountPercent}%</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="cart-product-name">
                          <strong>Discount</strong>
                        </td>
                        <td className="cart-product-name  text-right">
                          <span className="amount">₹{this.state.discountAmount}</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="cart-product-name">
                          <strong>Total</strong>
                        </td>
                        <td className="cart-product-name text-right">
                          <span className="amount color lead">
                            <strong>₹{this.state.totalAmount!==null? this.state.totalAmount : this.state.testAmount}</strong>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="form-group m-b-0">
                  <div className="checkbox">
                    <label>
                      <input
                        type="checkbox"
                        checked={this.state.consentChecked}
                        onChange={this.handleCheckbox}
                      />I consent with all the <a href='#modalConsent' data-lightbox="inline"><u>terms and conditions</u></a>
                      </label>
                  </div>
                </div>

                <div id="modalConsent" className="modal" data-delay={1000} style={{ maxWidth: '75%', height: '75%' }}>
                  <h5>Prostate Cancer Screening. Patient Consent Details</h5>
                  <hr />
                  <Modal fullName={this.state.fullName} area={this.state.area} city={this.state.city} istate={this.state.istate} pincode={this.state.pincode} />
                </div>
                <div className="form-group">
                  <button type={this.state.consentChecked ? "submit" : "button"} className={this.state.consentChecked ? "btn btn-block" : "btn btn-block disabled"}>Submit</button>
                </div>
              </div>
            </form>
          </div>
        </section>
        <FooterComponent />
      </div>
    )
  }
}

export default BookComponent;