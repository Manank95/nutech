import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import FooterComponent from './FooterComponent';

class SignupComponent extends React.Component {
  render() {
    return (
      // <Redirect to={{
      //   pathname: '/error',
      //   state: {status: '500', message: "Hello there"}
      // }} />
      <div>
      <Nav />
      <section className="fullscreen">
        <div className="container container-fullscreen">
          <div className="text-middle">
            <div className="row">
              <div className="col-md-4 center p-30 background-white b-r-6">
                <h3>Signup for NUTECH</h3>
                <form className="form-transparent-grey">
                  <div className="form-group">
                    <label className="sr-only">Full Name</label>
                    <input type="text" className="form-control" placeholder="Full Name" />
                  </div>
                  <div className="form-group">
                    <label className="sr-only">Email</label>
                    <input type="text" className="form-control" placeholder=" Email" />
                  </div>
                  <div className="form-group">
                    <label className="sr-only">Password</label>
                    <input type="password" className="form-control" placeholder="Password" />
                  </div>
                  <div className="form-group">
                    <label className="sr-only">Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm Password" />
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