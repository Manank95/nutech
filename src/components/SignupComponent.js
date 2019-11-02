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
      message: '',
      color: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.Auth = new AuthService();
    if (this.Auth.loggedIn()) this.props.history.replace('/dashboard');
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleSubmit(e) {
    e.preventDefault();
    let pregex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^)(_])[A-Za-z\d@$!%*?&#^)(_]{8,}$/g);
    if (this.state.password !== this.state.repassword) return this.setState({ message: 'Passwords don\'t match' });
    else if (!pregex.test(this.state.password))
      return this.setState({ message: 'Password must have atleast 8 characters, 1 Upper case, 1 Lowercase, 1 Number and 1 Special Character.' })
    else {
      try {
        let res = await this.Auth.signup(this.state.fullName, this.state.email, this.state.password);
        if (res.message.startsWith('Signup Successful'))
          return this.setState({
            message: res.message,
            color: 'green'
          })

        return this.setState({
          message: res.message
        })
      } catch (e) {
        this.props.history.push({ pathname: '/error', state: { status: 500, message: 'Internal Server Error!' } })
        // alert(e);
      }
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
                  {this.state.color === 'green' ? <h3>Verification Email Sent <i className="fa fa-check-circle"></i></h3> :<h3>Signup for NUTECH</h3>}
                  {this.state.message !== '' && (
                    <div role="alert" className={this.state.color === 'green' ? "alert alert-success alert-dismissible" : "alert alert-danger alert-dismissible"}>
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span> </button>
                      {this.state.message}
                    </div>
                  )}
                  <form className="form-transparent-grey" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label className="sr-only">Full Name</label>
                      <input type="text" className="form-control" placeholder="Full Name" name="fullName" value={this.state.fullName} onChange={(e) => this.handleChange(e)} required />
                    </div>
                    <div className="form-group">
                      <label className="sr-only">Email</label>
                      <input type="email" className="form-control" placeholder="Email" name="email" value={this.state.email} onChange={(e) => this.handleChange(e)} required />
                    </div>
                    <div className="form-group">
                      <label className="sr-only">Password</label>
                      <input type="password" className="form-control" placeholder="Password" name="password" value={this.state.password} onChange={(e) => this.handleChange(e)} required />
                    </div>
                    <div className="form-group">
                      <label className="sr-only">Confirm Password</label>
                      <input type="password" className="form-control" placeholder="Confirm Password" name="repassword" value={this.state.repassword} onChange={(e) => this.handleChange(e)} required />
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-block">Signup</button>
                    </div>
                  </form>
                  <p className="small">Already have an account? &nbsp; <Link to="/login"> <button type="button" className="btn btn-light btn-xs">Login</button> </Link>
                  </p>
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

export default SignupComponent;