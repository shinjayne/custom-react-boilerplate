import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Welcome from '../components/Welcome';
import UserCard from '../components/UserCard.js';
import Clock from '../components/Clock.js' ;
import ReactiveConsole from '../components/ReactiveConsole';
import Bitcoin from '../components/Bitcoin';

import {Route, Switch, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

          <h3>Links</h3>
          <ul>
            <li><Link to="/">Welcome</Link></li>
            <li><Link to="/usercard">UserCard</Link></li>
            <li><Link to="/clock">Clock</Link></li>
          </ul>
          <Switch>
              <Route exact path="/" render={(props)=>(<Welcome {...props} name="Jayne"/>)}/>
              <Route exact path="/usercard" render={(props)=>(<UserCard {...props} name='Shelly' birth="1997-03-04"/>)} />
              <Route exact path="/clock" component={Clock} />
              <Route exact path="/console" component={ReactiveConsole} />
              <Route exact path="/bitcoin" component={Bitcoin} />
          </Switch>
      </div>
    );
  }
}

export default App;
