import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import AuthService from './auth/AuthService';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import BlogComponent from './components/BlogComponent';
import LoginComponent from './components/LoginComponent';
import SignupComponent from './components/SignupComponent';
import DashboardComponent from './components/DashboardComponent';
import BookComponent from './components/BookComponent';
import ErrorComponent from './error';

class App extends Component {
  render() {
    let Auth = new AuthService();
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={HomeComponent} />
            <Route path="/home" exact component={HomeComponent} />
            <Route path="/about" exact component={AboutComponent} />
            <Route path="/blog" exact component={BlogComponent} />
            <Route path="/login" exact component={LoginComponent} />
            <Route path="/signup" exact component={SignupComponent} />
            <Route path="/dashboard" exact component={DashboardComponent} />
            <Route path="/book" exact component={BookComponent} />
            <Route path="/logout" render={() => {
              Auth.logout();
              return <Redirect to={{ pathname: "/login" }} />;
            }}
            />
            <Route path="*" component={ErrorComponent} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
