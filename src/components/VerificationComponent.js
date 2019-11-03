import React from 'react';
import Nav from '../components/Nav';
import FooterComponent from './FooterComponent';
import AuthService from '../auth/AuthService';

class VerificationComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      status: null
    };
    this.Auth = new AuthService();
  }
  async componentDidMount() {
    // for query parameter: const token  = this.props.location.search.substring(2)
    const { token } = this.props.match.params;
    try {
      const res = await this.Auth.verification(token);
      return this.setState({ res });
    } catch (e) {
      this.props.history.push({ pathname: '/error', state: { status: 500, message: 'Internal Server Error!' } })
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
                  {
                    this.state.message === '' ?
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