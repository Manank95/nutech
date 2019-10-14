import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import BlogComponent from './components/BlogComponent';
import LoginComponent from './components/LoginComponent';

class App extends Component {
  componentDidMount(){
		console.log('app mount');
  }
  componentDidUpdate(){
    console.log('app update');
  }
  render() {
    return (
      <Router>
          <div className="App">
            <Switch>
              <Route path="/home" exact={true} component={HomeComponent} />
              <Route path="/about" exact={true} component={AboutComponent} />
              <Route path="/blog" exact={true} component={BlogComponent} />
              <Route path="/login" exact={true} component={LoginComponent} />
            </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
