import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import FooterComponent from './FooterComponent';
import AuthService from '../auth/AuthService';

class SignupComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      password: '',
      repassword: '',
      message: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.Auth = new AuthService();
    if (this.Auth.loggedIn()) this.props.history.replace('/dashboard');
  }
  async handleChange(e) {
    await this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.fullName);
  }

  async handleSubmit(e) {
    e.preventDefault();
    try {
      let res = await this.Auth.login(this.state.email, this.state.password);
      this.setState({
        message: res.message
      })
      if (res.token) this.props.history.replace('/dashboard');
    } catch (e) {
      this.props.history.push({pathname: '/error', state: {status: 500, message: 'Internal Server Error!'}})
      // alert(e);
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
                <h3>Signup for NUTECH</h3>
                <form className="form-transparent-grey" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label className="sr-only">Full Name</label>
                    <input type="text" className="form-control" placeholder="Full Name" name="fullName" value={this.state.fullName} onChange={(e) => this.handleChange(e)} />
                  </div>
                  <div className="form-group">
                    <label className="sr-only">Email</label>
                    <input type="text" className="form-control" placeholder="Email" name="email" value={this.state.email} onChange={(e) => this.handleChange(e)} />
                  </div>
                  <div className="form-group">
                    <label className="sr-only">Password</label>
                    <input type="password" className="form-control" placeholder="Password" name="password" value={this.state.password} onChange={(e) => this.handleChange(e)} />
                  </div>
                  <div className="form-group">
                    <label className="sr-only">Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm Password" name="repassword" value={this.state.repassword} onChange={(e) => this.handleChange(e)} />
                  </div>
                  <div className="form-group">
                    <button type="button" className="btn btn-block">Signup</button>
                  </div>
                </form>
                <p className="small">Already have an account? &nbsp; <Link to="/login"> <button type="button" className="btn btn-light btn-xs">Login</button> </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterComponent/>
      </div>
    )
  }
}

export default SignupComponent;