import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../actions/adsActions";
import AdsListHeader from "./adsListHeader";
import SearchAds from "./searchAds";
import FeaturedAds from "./featuredAds";

class stateAdsList extends Component {
  componentDidMount() {
    const stateId = this.props.match.params.StateId;
    console.log(stateId); //Get Route value
    this.props.stateAds(stateId);
  }
  render() {
    console.log(this.props);
    const Ads = this.props.advertise.data.Ads;
    console.log(Ads);
    return (
      <div>
        <div className="total-ads main-grid-border">
          <div className="container">
            <AdsListHeader />
            <ol className="breadcrumb" style={{ marginBottom: "5px" }}>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="categories.html">Categories</a>
              </li>
              <li className="active">Furniture</li>
            </ol>
            <div className="ads-grid">
              <div className="side-bar col-md-3">
                <SearchAds />
                <FeaturedAds />
              </div>
              <div className="ads-display col-md-9">
                <div className="wrapper">
                  <div
                    className="bs-example bs-example-tabs"
                    role="tabpanel"
                    data-example-id="togglable-tabs"
                  >
                    <ul
                      id="myTab"
                      className="nav nav-tabs nav-tabs-responsive"
                      role="tablist"
                    >
                      <li role="presentation" className="active">
                        <a
                          href="#home"
                          id="home-tab"
                          role="tab"
                          data-toggle="tab"
                          aria-controls="home"
                          aria-expanded="true"
                        >
                          <span className="text">All Ads</span>
                        </a>
                      </li>
                      <li role="presentation" className="next">
                        <a
                          href="#profile"
                          role="tab"
                          id="profile-tab"
                          data-toggle="tab"
                          aria-controls="profile"
                        >
                          <span className="text">Ads with Photos</span>
                        </a>
                      </li>
                      <li role="presentation">
                        <a
                          href="#samsa"
                          role="tab"
                          id="samsa-tab"
                          data-toggle="tab"
                          aria-controls="samsa"
                        >
                          <span className="text">Company</span>
                        </a>
                      </li>
                    </ul>
                    <div id="myTabContent" className="tab-content">
                      <div
                        role="tabpanel"
                        className="tab-pane fade in active"
                        id="home"
                        aria-labelledby="home-tab"
                      >
                        <div>
                          <div id="container">
                            <div
                              className="view-controls-list"
                              id="viewcontrols"
                            >
                              <label>view :</label>
                              <a className="gridview">
                                <i className="glyphicon glyphicon-th" />
                              </a>
                              <a className="listview active">
                                <i className="glyphicon glyphicon-th-list" />
                              </a>
                            </div>
                            <div className="sort">
                              <div className="sort-by">
                                <label>Sort By : </label>
                                <select>
                                  <option value="">Most recent</option>
                                  <option value="">
                                    Price: Rs Low to High
                                  </option>
                                  <option value="">
                                    Price: Rs High to Low
                                  </option>
                                </select>
                              </div>
                            </div>
                            <div className="clearfix" />
                            <ul className="list">
                              <a href="single.html">
                                <li>
                                  <img src="/images/fr1.jpg" title="" alt="" />
                                  <section className="list-left">
                                    <h5 className="title">
                                      There are many variations of passages of
                                      Lorem Ipsum
                                    </h5>
                                    <span className="adprice">$290</span>
                                    <p className="catpath">
                                      Furniture » Sofa & Dining
                                    </p>
                                  </section>
                                  <section className="list-right">
                                    <span className="date">Today, 17:55</span>
                                    <span className="cityname">City name</span>
                                  </section>
                                  <div className="clearfix" />
                                </li>
                              </a>
                              {Ads ? (
                                Ads.map(ad => {
                                  return (
                                    <Link to={'/Ads/showAd/'+ad.id} key={ad.id}>
                                      <li>
                                        <img
                                          src="/images/fr2.jpg"
                                          title=""
                                          alt=""
                                        />
                                        <section className="list-left">
                                          <h5 className="title">{ad.title}</h5>
                                          <span className="adprice">$310</span>
                                          <p className="catpath">
                                            {ad.category_id}
                                          </p>
                                        </section>
                                        <section className="list-right">
                                          <span className="date">
                                            {ad.created_at}
                                          </span>
                                          <span className="cityname">
                                            City name
                                          </span>
                                        </section>
                                        <div className="clearfix" />
                                      </li>
                                    </Link>
                                  );
                                })
                              ) : (
                                <p>Bekleyiniz...</p>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        role="tabpanel"
                        className="tab-pane fade"
                        id="profile"
                        aria-labelledby="profile-tab"
                      />
                      <ul className="pagination pagination-sm">
                        <li>
                          <a href="">Prev</a>
                        </li>
                        <li>
                          <a href="">1</a>
                        </li>
                        <li>
                          <a href="">2</a>
                        </li>
                        <li>
                          <a href="">3</a>
                        </li>
                        <li>
                          <a href="">4</a>
                        </li>
                        <li>
                          <a href="">5</a>
                        </li>
                        <li>
                          <a href="">6</a>
                        </li>
                        <li>
                          <a href="#">7</a>
                        </li>
                        <li>
                          <a href="#">8</a>
                        </li>
                        <li>
                          <a href="#">Next</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    advertise: state.advertise
  };
}
export default connect(
  mapStateToProps,
  actions
)(stateAdsList);
