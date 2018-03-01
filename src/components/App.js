import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

import UserCard from './UserCard.js';
import Clock from './Clock.js' ;
import ReactiveConsole from './ReactiveConsole';
import Bitcoin from './Bitcoin';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <UserCard name="Jayne" birth="1996-10-29"/>
          <UserCard name="Shelly" birth="1997-03-04"/>

          <Clock />

          <ReactiveConsole/>

          <Bitcoin/>
      </div>
    );
  }
}

export default App;
