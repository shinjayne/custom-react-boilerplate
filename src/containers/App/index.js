import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';


import Header from '../../components/Header';
import Home from '../HomePage/index';
import About from '../AboutPage/index';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>

          <Switch>
              <Route exact path="/" render={(props)=>(<Home {...props}/>)}/>
              <Route exact path="/about" render={(props)=>(<About {...props}/>)}/>
          </Switch>
      </div>
    );
  }
}

export default App;
