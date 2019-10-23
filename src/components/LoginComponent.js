import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import FooterComponent from './FooterComponent';

class LoginComponent extends React.Component {
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
                <form className="form-transparent-grey">
                  <div className="form-group">
                    <label className="sr-only">Email</label>
                    <input type="text" className="form-control" placeholder="Email" />
                  </div>
                  <div className="form-group m-b-5">
                    <label className="sr-only">Password</label>
                    <input type="password" className="form-control" placeholder="Password" />
                  </div>
                  <div className="form-group form-inline">
                    <a href="#" className="right"><small>Lost your Password?</small></a>
                  </div>
                  <br />
                  <div className="form-group">
                    <Link to="/dashboard"> <button type="button" className="btn btn-block">Login</button> </Link>
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