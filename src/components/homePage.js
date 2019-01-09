import React, { Component } from "react";
//import { Link } from 'react-router-dom';
//import axios from "axios";
import { connect } from "react-redux";

import MainBanner from "./homePage/mainBanner";
import CategoryMenu from "./homePage/categoryMenu";
import TrendingAds from "./homePage/trendingAds";
import MobileApps from "./homePage/mobileAps";
import { fetchCategories } from "./actions/categoryActions";

class homePage extends Component {
  componentDidMount() {
    this.props.getCategories();

  }
  render() {
    const { categories } = this.props;
    console.log(this.state);
    return (
      <div>
        <MainBanner />
        <CategoryMenu categories={categories} />
        <TrendingAds />
        <MobileApps />
      </div>
    );
  }
}
function mapStateToPros(state) {
  return {
    categories: state.categories.data
  };
}
const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => dispatch(fetchCategories())
  };
};
export default connect(
  mapStateToPros,
  mapDispatchToProps
)(homePage);
