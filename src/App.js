import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import BlogComponent from './components/BlogComponent';
import LoginComponent from './components/LoginComponent';
import SignupComponent from './components/SignupComponent';
import DashboardComponent from './components/DashboardComponent'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/home" exact component={HomeComponent} />
            <Route path="/about" exact component={AboutComponent} />
            <Route path="/blog" exact component={BlogComponent} />
            <Route path="/login" exact component={LoginComponent} />
            <Route path="/signup" exact component={SignupComponent} />
            <Route path="/dashboard" exact component={DashboardComponent} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
