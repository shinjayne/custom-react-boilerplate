import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';


import Header from '../../components/Header/index';
import Home from '../HomePage/Loadable';
import About from '../AboutPage/Loadable';
import Todo from '../TodoPage/Loadable';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>

          <Switch>
              <Route exact path="/" render={(props)=>(<Home {...props}/>)}/>
              <Route exact path="/about" render={(props)=>(<About {...props}/>)}/>
              <Route exact path="/todo" render={(props)=>(<Todo {...props} />)} />
          </Switch>
      </div>
    );
  }
}

export default App;
