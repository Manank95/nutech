import React from 'react';
import Nav from '../components/Nav';
import FooterComponent from './FooterComponent';
import AuthService from '../auth/AuthService';

class ChangePasswordComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      status: null,
      token: null,
      password: '',
      repassword: ''
    };
    this.Auth = new AuthService();
  }
  componentDidMount() {
    // for query parameter: const token  = this.props.location.search.substring(2)
    const { token } = this.props.match.params;
    this.setState({token}, ()=> console.log(this.state.token));
  }

  async handleSubmit(e){
    e.preventDefault();
    let pregex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^)(_])[A-Za-z\d@$!%*?&#^)(_]{8,}$/g);
    if (this.state.password !== this.state.repassword) return this.setState({ message: 'Passwords don\'t match' });
    else if (!pregex.test(this.state.password))
      return this.setState({ message: 'Password must have atleast 8 characters, 1 Upper case, 1 Lowercase, 1 Number and 1 Special Character.' })
    else {
      try {
        let res = await this.Auth.changePassword(this.state.token, this.state.password);
        if(res.status===401) return this.props.history.replace('/logout');
      } catch (e) {
        this.props.history.push({ pathname: '/error', state: { status: 500, message: 'Internal Server Error!' } })
        // alert(e);
      }
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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
                  <form className="form-transparent-grey" onSubmit={this.handleSubmit}>
                    <div className="form-group m-b-5">
                      <label className="sr-only">Password</label>
                      <input type="password" className="form-control" placeholder="Password" id="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                    </div>
                    <div className="form-group m-b-5">
                      <label className="sr-only">Confirm Password</label>
                      <input type="password" className="form-control" placeholder="Confirm Password" id="repassword" name="repassword" value={this.state.password} onChange={this.handleChange} required />
                    </div>
                    <br />
                    <div className="form-group">
                      <button type="submit" className="btn btn-block">Change Password</button>
                    </div>
                  </form>
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

export default ChangePasswordComponent;