import React from 'react';
import './App.css';

import logo from "../src/img/site/logo.png";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './Navigation/Navigation';
import Articles from './Articles/Articles';
import Blog from './Blog/Blog';
import Footer from './Footer/Footer';
import Identity from './Identity/Identity';

function App() {
  return (
    <>
      
      <img src={logo} alt="logo" />
      <Identity />
      
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" component={Articles} exact />
          <Route path="/blog" component={Blog} />
        </Switch>
        <Footer />
      
      </Router>
    </>
  );
}

export default App;
