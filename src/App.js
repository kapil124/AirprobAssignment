import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Switch} from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";

function App() {
  return (
    <Router>
       <Switch>
       <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/log-in"}>KapilWagh</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/log-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          
            <Route exact path='/' component={Login} />
            <Route path="/log-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          
        </div>
      </div>
    </div>
      </Switch>
    </Router>
  );
}

export default App;