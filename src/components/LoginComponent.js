import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import FooterComponent from './FooterComponent';
import AuthService from '../auth/AuthService';

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      status: null,
      message: '',
      lost: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.lostPassword = this.lostPassword.bind(this);
    this.Auth = new AuthService();
    if (this.Auth.loggedIn()) this.props.history.replace('/dashboard');
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  lostPassword() {
    this.setState({ lost: !this.state.lost })
  }
  async handleSubmit(event) {
    event.preventDefault();
    try {
      let res = await this.Auth.login(this.state.email, this.state.password);
      this.setState({
        message: res.message,
        status: res.status
      })
      if (res.token) this.props.history.replace('/dashboard');
    } catch (e) {
      this.props.history.push({ pathname: '/error', state: { status: 500, message: 'Internal Server Error!' } })
      // alert(e);
    }
  }
  render() {
    return (
      <div>
        <Nav />
        {this.state.lost ? (
          <section className="container">
            <div className="row">
              <div className="col-md-5 center background-white">
                <h3>Forgot your Password?</h3>
                {this.state.message !== '' && (
                  <div role="alert" className="alert alert-danger alert-dismissible">
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span> </button>
                    {this.state.message}
                  </div>
                )}
                <form className="form-transparent-grey" onSubmit={this.handleSubmit}>
                  <div className="form-group m-b-5">
                    <label className="sr-only">Email </label>
                    <input type="email" className="form-control" placeholder="Email registered with our website" id="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                  </div>
                  <div className="form-group form-inline">
                    <Link onClick={this.lostPassword} to='/login' className="right"><small>Go Back to Login</small></Link>
                  </div>
                  <br />
                  <div className="form-group">
                    <button type="submit" className="btn btn-block">Recover Password</button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        ) : (
            <section className="container">
              <div className="row">
                <div className="col-md-5 center background-white">
                  <h3>Login to your Account</h3>
                  {this.state.message !== '' && (
                    <div role="alert" className={this.state.status === 200 ? "alert alert-success alert-dismissible" : "alert alert-danger alert-dismissible"}>
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span> </button>
                      {this.state.message}
                    </div>
                  )}
                  <form className="form-transparent-grey" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label className="sr-only">Email</label>
                      <input type="email" className="form-control" placeholder="Email" id="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                    </div>
                    <div className="form-group m-b-5">
                      <label className="sr-only">Password</label>
                      <input type="password" className="form-control" placeholder="Password" id="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                    </div>
                    <div className="form-group form-inline">
                      <Link onClick={this.lostPassword} to='/login' className="right"><small>Lost your Password?</small></Link>
                    </div>
                    <br />
                    <div className="form-group">
                      <button type="submit" className="btn btn-block">Login</button>
                    </div>
                  </form>
                  <p className="small">Don't have an account yet? &nbsp; <Link to="/signup"> <button type="button" className="btn btn-light btn-xs">Signup</button> </Link>
                  </p>
                </div>
              </div>
            </section>
          )}
        <FooterComponent />
      </div>
    )
  }
}

export default LoginComponent;