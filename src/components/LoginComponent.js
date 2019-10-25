import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import FooterComponent from './FooterComponent';
import AuthService from './AuthService';

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.Auth = new AuthService();
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }


  async handleSubmit(event) {
    event.preventDefault();
    try{
      let res = await this.Auth.login(this.state.email, this.state.password);
    console.log(res);
    this.props.history.replace('/dashboard');
    } catch(e){
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
                  <h3>Login to your Account</h3>
                  <form className="form-transparent-grey" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label className="sr-only">Email</label>
                      <input type="text" className="form-control" placeholder="Email" id="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                    </div>
                    <div className="form-group m-b-5">
                      <label className="sr-only">Password</label>
                      <input type="password" className="form-control" placeholder="Password" id="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                    </div>
                    <div className="form-group form-inline">
                      <a href="#" className="right"><small>Lost your Password?</small></a>
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
            </div>
          </div>
        </section>
        <FooterComponent />
      </div>
    )
  }
}

export default LoginComponent;