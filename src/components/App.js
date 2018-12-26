import React, { Component } from "react";
//import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from "./navbar";
import homePage from "./homePage";
import Footer from './footer';
import authentication from "./auth/authentication";
import Register from './auth/signUp';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>

            <Navbar />
            <Route exact path="/" component={homePage} />
            <Route exact path="/auth" component = {authentication} />
            <Route exact path="/auth/Register" component = {Register} />

            <Footer />
          
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
