import React from 'react';
import Nav from '../components/Nav';
import FooterComponent from './FooterComponent';
import AuthService from '../auth/AuthService';

class VerificationComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
    this.Auth = new AuthService();
  }
  async componentDidMount() {
    // for query parameter: const  token  = this.props.location.search.substring(2)
    const { token } = this.props.match.params;
    console.log(token);
    // this.setState({
    //   token
    // });
    try {
      const res = await this.Auth.verification(token);
      console.log('myres', res);
      return this.setState({ message: res.message });
    } catch (e) {
      console.log(e);
    }
  }
  // async handleChange(event) {
  //   await this.setState({ [event.target.name]: event.target.value });
  // }

  // async handleSubmit(event) {
  //   event.preventDefault();
  //   try {
  //     let res = await this.Auth.login(this.state.email, this.state.password);
  //     this.setState({
  //       message: res.message
  //     })
  //     if (res.token) this.props.history.replace('/dashboard');
  //   } catch (e) {
  //     this.props.history.push({pathname: '/error', state: {status: 500, message: 'Internal Server Error!'}})
  //     // alert(e);
  //   }
  // }
  render() {
    return (
      <div>
        <Nav />
        <section className="fullscreen">
          <div className="container container-fullscreen">
            <div className="text-middle">
              <div className="row">
                <div className="col-md-4 center p-30 background-white b-r-6">
                  {
                    this.state.message !== '' ?
                      (
                        <div>
                          <br /><br /><br /><br />
                          <div className="loader" style={{ transform: 'translateX(50%)' }}>
                            <div className="loader-inner ball-scale-multiple">
                              <div />
                              <div />
                              <div />
                            </div>
                          </div>
                          <br /><br />
                          <p>Loading...</p>
                        </div>
                      ): 
                      <h3>{this.state.message}</h3>
                  }
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

export default VerificationComponent;