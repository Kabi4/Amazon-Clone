import React, { Component } from 'react';
import Home from '../Components/Home/Home';

import {Redirect, Route} from 'react-router-dom';

import './App.css';
import Header from './Header/Header';
import Products from './Products/Products';
import classes from './App.css';
import Cart from './Cart/Cart';
import Login from './Login/Login';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/cart">
                <Header />
                <Cart />
            </Route>
            <Route path="/" exact >
              <Header />
              <Home />
              <Products />
            </Route>
            <Redirect to="/"/>
      </div>
    );
  }
}

export default App;
