import React from 'react';
import config from '../config';
import Nav from '../components/Nav';
import FooterComponent from './FooterComponent';
import AuthService from './../auth/AuthService';
import { Link, Redirect } from 'react-router-dom';

class BookComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      contact: '',
      email: '',
      gender: '',
      dob: '',
      area: '',
      city: '',
      pincode: '',
      testID: '',
      responseBackend: '',
      message: '',
      status: null,
      consentChecked: false
    };
    this.domain = config.url;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.Auth = new AuthService();
    if (!this.Auth.loggedIn()) {
      this.props.history.replace('/login')
    }
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
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
    try {
      let res = await this.Auth.book(this.state);
      if (res.status === 401) return <Redirect to='/logout' />;
      return this.setState({
        message: res.message,
        status: res.status
      })
    } catch (e) {
      this.props.history.push({pathname: '/error', state: {status: 500, message: 'Internal Server Error!'}})
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
                  <h3>Register for the Lab test</h3>
                  {this.state.message !== '' && (
                    <div role="alert" className={this.state.status === 200 ? "alert alert-success alert-dismissible": "alert alert-danger alert-dismissible"}>
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span> </button>
                      {this.state.status === 200 ? <Link to='/dashboard'><u>{this.state.message}</u></Link> : this.state.message}
                    </div>
                  )}
                  <form className="form-transparent-grey" onSubmit={this.handleSubmit}>

                    <div className="form-group">
                      <label className="sr-only">TestName</label>
                      <select value={this.state.testID} onChange={this.handleChange} name="testID" required>
                        <option value=''> Select a Test </option>
                        <option value="2500676"> SeroMark-1 </option>
                        <option value="2567592"> Total Prostate Specific Antigen (PSA) </option>
                        <option value="2567593"> Free  Prostate Specific Antigen (PSA) </option>
                      </select>
                    </div>


                    <div className="form-group">
                      <label className="sr-only">Full Name</label>
                      <input type="text" className="form-control" placeholder="Full Name" name="fullName" value={this.state.fullName} onChange={this.handleChange} required />
                    </div>
                    <div className="form-group">
                      <label className="sr-only">Email</label>
                      <input type="email" className="form-control" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} required />
                    </div>
                    <div className="form-group">
                      <label className="sr-only">Contact No. For communication</label>
                      <input type="tel" pattern="[0-9]{10}" className="form-control" placeholder="Contact No. For communication" name="contact" value={this.state.contact} onChange={this.handleChange} required />
                    </div>


                    <div className="form-group">
                      <label className="sr-only">Gender</label>
                      <select value={this.state.gender} onChange={this.handleChange} name="gender" required>
                        <option value=''> Select your gender</option>
                        <option value="Male"> Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>


                    <div className="form-group">
                      <label className="sr-only">Date of Birth</label>
                      <input type="date" className="form-control" placeholder="Date of Birth" name="dob" value={this.state.dob} onChange={this.handleChange} required />
                    </div>
                    <div className="form-group">
                      <label className="sr-only">Area</label>
                      <input type="text" className="form-control" placeholder="Address" name="area" value={this.state.area} onChange={this.handleChange} required />
                    </div>
                    <div className="form-group">
                      <label className="sr-only">City</label>
                      <input type="text" className="form-control" placeholder="City" name="city" value={this.state.city} onChange={this.handleChange} required />
                    </div>
                    <div className="form-group">
                      <label className="sr-only">Pincode</label>
                      <input type="text" className="form-control" placeholder="Pincode" name="pincode" value={this.state.pincode} onChange={this.handleChange} required />
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        checked={this.state.consentChecked}
                        onChange={this.handleCheckbox}
                      />
                      &nbsp; Consent text
                    </div>
                    <div className="form-group">
                      <button type="submit" className={this.state.consentChecked ? "btn btn-block" : "btn btn-block disabled"}>Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <button type="button" className="btn btn-light btn-xs" onClick={this.handleLogout.bind(this)}>Logout</button>
        </section>
        <FooterComponent />
      </div>
    )
  }
}

export default BookComponent;