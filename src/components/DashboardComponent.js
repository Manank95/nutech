import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Nav from '../components/Nav';
import FooterComponent from './FooterComponent';

class DashboardComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        email:'',
        fullName:'',
        contact:'',
        responseBackend: '',
        error: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
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
            email: this.state.email,
            fullName: this.state.fullName
        },
        withCredentials: true
    }
    try{
    let response = await axios(options);
        let responseOK = response && response.status === 200 && response.statusText === 'OK';
        if (responseOK) {
            let data = await response.data;
            // do something with data
            //console.log("data from node response",data);
            if(data.error !== ''){
              this.setState({error: data.error});
              console.log(data.error);
            }
        }
    }catch(e){
        console.log(e);
    }
  }
  render() {
    return(
      <div>
      <Nav />
      <section className="fullscreen">
        <div className="container container-fullscreen">
          <div className="text-middle">
            <div className="row">
              <div className="col-md-3 center p-30 background-white b-r-6">
                <h3>Register for the Lab test</h3>
                <form className="form-transparent-grey" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label className="sr-only">Full Name</label>
                    <input type="text" className="form-control" placeholder="Full Name" name="fullName" value={this.state.fullName} onChange={this.handleChange} required />
                  </div>
                  <div className="form-group">
                    <label className="sr-only">Email</label>
                    <input type="text" className="form-control" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} required/>
                  </div>
                  <div className="form-group">
                    <label className="sr-only">Contact No. For communication</label>
                    <input type="text" className="form-control" placeholder="Contact No. For communication" name="contact" value={this.state.contact} onChange={this.handleChange} required/>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-block">Submit</button>
                  </div>
                </form>
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

export default DashboardComponent;