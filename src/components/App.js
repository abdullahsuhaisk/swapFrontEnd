import React, { Component } from "react";
//import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from "./navbar";
import homePage from "./homePage";
import Footer from './footer';
import authentication from "./auth/authentication";
import Register from './auth/signUp';
import listAds from "./ads/listAds";
import showAd from './ads/showAd';
import postAd from './ads/postAd';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>

            <Navbar />
            <Route exact path="/" component={homePage} />
            <Route exact path="/auth" component = {authentication} />
            <Route exact path="/auth/Register" component = {Register} />
            <Route exact path="/Ads/ListCategory/:id" component = {listAds} />
            <Route exact path="/Ads/showAd/:id" component = {showAd} />
            <Route exact path="/Ads/postAd" component = { postAd } />



            <Footer />
          
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
