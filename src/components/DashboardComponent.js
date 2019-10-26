import React from 'react';
import axios from 'axios';
import Nav from '../components/Nav';
import FooterComponent from './FooterComponent';
import AuthService from './../auth/AuthService';

class DashboardComponent extends React.Component {
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
      error: '',
      concentChecked: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.Auth = new AuthService();
    if (!this.Auth.loggedIn()) {
      this.props.history.replace('/login')
    }
    else {
      try {
        console.log('hello getuser')
      }
      catch (err) {
        this.Auth.logout()
        this.props.history.replace('/login')
      }
    }
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleCheckbox(event) {
    this.setState({ concentChecked: !this.state.concentChecked });
  }
  handleLogout() {
    this.Auth.logout()
    this.props.history.replace('/login');
  }
  async handleSubmit(event) {
    event.preventDefault();
    let options = {
      method: 'POST',
      url: 'http://localhost:3001/test',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      data: {
        fullName: this.state.fullName,
        email: this.state.email,
        contact: this.state.contact,
        gender: this.state.gender,
        dob: this.state.dob,
        area: this.state.area,
        city: this.state.city,
        pincode: this.state.pincode,
        testID: this.state.testID,
      },
      withCredentials: true
    }
    try {
      let response = await axios(options);
      let responseOK = response && response.status === 200 && response.statusText === 'OK';
      if (responseOK) {
        let data = await response.data;
        // do something with data
        //console.log("data from node response",data);
        if (data.error !== '') {
          this.setState({ error: data.error });
          console.log(data.error);
        }
      }
    } catch (e) {
      console.log(e);
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
                  <form className="form-transparent-grey" onSubmit={this.handleSubmit}>

                    <div className="form-group">
                      <label className="sr-only">TestName</label>
                      <select value={this.state.testID} onChange={this.handleChange} name="testID">
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
                      <select value={this.state.gender} onChange={this.handleChange} name="gender">
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
                        checked={this.state.concentChecked}
                        onChange={this.handleCheckbox}
                      />
                      &nbsp; Concent text
                    </div>
                    <div className="form-group">
                      <button type="submit" className={this.state.concentChecked ? "btn btn-block" : "btn btn-block disabled"}>Submit</button>
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

export default DashboardComponent;