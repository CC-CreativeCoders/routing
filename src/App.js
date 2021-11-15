import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./homes/home"
import Signup from './signup/signup';
import Awareness from './awareness/awareness';
import Login from './login/login';


  export default function App1() {
    return (
      <Router>
        <div>
          <Link to="/">AWARENESS PAGE</Link>
        </div>
        <div>
          <Link to="/sign">SIGN UP PAGE</Link>
        </div>
        <div>
          <Link to="/login">LOGIN PAGE</Link>
        </div>
        <div>
          <Link to="/home">HOME PAGE</Link>
        </div>
  
        <hr />
  
        <Switch>
          <Route exact path="/">
            <Awareness />
          </Route>
          <Route path="/sign">
            <Signup />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
        </Switch>
      </Router>
    );
  }
  
 