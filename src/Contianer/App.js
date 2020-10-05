import React, { Component } from 'react';
import Home from '../Components/Home/Home';

import {Route} from 'react-router-dom';

import './App.css';
import Header from './Header/Header';
import Products from './Products/Products';
import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
          <Route path="/" >
            <Header />
            <Home />
            <Products />
          </Route>
      </div>
    );
  }
}

export default App;
