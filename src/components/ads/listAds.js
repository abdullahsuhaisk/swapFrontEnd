import React, { Component } from "react";
import AdsListHeader from "./adsListHeader";

class listAds extends Component {
  render() {
    return (
      <div>
        <div className="total-ads main-grid-border">
          <div className="container">
            <AdsListHeader/>
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
                <div className="search-hotel">
                  <h3 className="sear-head">Name contains</h3>
                  <form>
                    <input
                      type="text"
                      value="Product name..."
                      onFocus="this.value = '';"
                      onBlur="if (this.value == '') {this.value = 'Product name...';}"
                      required=""
                    />
                    <input type="submit" value=" " />
                  </form>
                </div>

                <div className="featured-ads">
                  <h2 className="sear-head fer">Featured Ads</h2>
                  <div className="featured-ad">
                    <a href="single.html">
                      <div className="featured-ad-left">
                        <img src="/images/f1.jpg" title="ad image" alt="" />
                      </div>
                      <div className="featured-ad-right">
                        <h4>
                          Lorem Ipsum is simply dummy text of the printing
                          industry
                        </h4>
                        <p>$ 450</p>
                      </div>
                      <div className="clearfix" />
                    </a>
                  </div>
                  <div className="featured-ad">
                    <a href="single.html">
                      <div className="featured-ad-left">
                        <img src="/images/f2.jpg" title="ad image" alt="" />
                      </div>
                      <div className="featured-ad-right">
                        <h4>
                          Lorem Ipsum is simply dummy text of the printing
                          industry
                        </h4>
                        <p>$ 380</p>
                      </div>
                      <div className="clearfix" />
                    </a>
                  </div>
                  <div className="featured-ad">
                    <a href="single.html">
                      <div className="featured-ad-left">
                        <img src="/images/f2.jpg" title="ad image" alt="" />
                      </div>
                      <div className="featured-ad-right">
                        <h4>
                          Lorem Ipsum is simply dummy text of the printing
                          industry
                        </h4>
                        <p>$ 560</p>
                      </div>
                      <div className="clearfix" />
                    </a>
                  </div>
                  <div className="clearfix" />
                </div>
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
                              <a href="single.html">
                                <li>
                                  <img src="/images/fr2.jpg" title="" alt="" />
                                  <section className="list-left">
                                    <h5 className="title">
                                      It is a long established fact that a
                                      reader
                                    </h5>
                                    <span className="adprice">$310</span>
                                    <p className="catpath">
                                      Furniture » Sofa & Dining
                                    </p>
                                  </section>
                                  <section className="list-right">
                                    <span className="date">Today, 17:45</span>
                                    <span className="cityname">City name</span>
                                  </section>
                                  <div className="clearfix" />
                                </li>
                              </a>
                              <a href="single.html">
                                <li>
                                  <img src="/images/fr3.jpg" title="" alt="" />
                                  <section className="list-left">
                                    <h5 className="title">
                                      Contrary to popular belief, Lorem Ipsum is
                                      not
                                    </h5>
                                    <span className="adprice">$190</span>
                                    <p className="catpath">
                                      Furniture » Sofa & Dining
                                    </p>
                                  </section>
                                  <section className="list-right">
                                    <span className="date">Today, 17:30</span>
                                    <span className="cityname">City name</span>
                                  </section>
                                  <div className="clearfix" />
                                </li>
                              </a>
                              <a href="single.html">
                                <li>
                                  <img src="/images/fr4.jpg" title="" alt="" />
                                  <section className="list-left">
                                    <h5 className="title">
                                      The standard chunk of Lorem Ipsum used
                                      since the
                                    </h5>
                                    <span className="adprice">$480</span>
                                    <p className="catpath">
                                      Furniture » Sofa & Dining
                                    </p>
                                  </section>
                                  <section className="list-right">
                                    <span className="date">Today, 17:25</span>
                                    <span className="cityname">City name</span>
                                  </section>
                                  <div className="clearfix" />
                                </li>
                              </a>
                              <a href="single.html">
                                <li>
                                  <img src="/images/fr5.jpg" title="" alt="" />
                                  <section className="list-left">
                                    <h5 className="title">
                                      Sed ut perspiciatis unde omnis iste natus
                                      error sit voluptatem
                                    </h5>
                                    <span className="adprice">$859</span>
                                    <p className="catpath">
                                      Furniture » Sofa & Dining
                                    </p>
                                  </section>
                                  <section className="list-right">
                                    <span className="date">Today, 17:24</span>
                                    <span className="cityname">City name</span>
                                  </section>
                                  <div className="clearfix" />
                                </li>
                              </a>
                              <a href="single.html">
                                <li>
                                  <img src="/images/fr6.jpg" title="" alt="" />
                                  <section className="list-left">
                                    <h5 className="title">
                                      But I must explain to you how all this
                                      mistaken idea of denouncing
                                    </h5>
                                    <span className="adprice">$1299</span>
                                    <p className="catpath">
                                      Furniture » Sofa & Dining
                                    </p>
                                  </section>
                                  <section className="list-right">
                                    <span className="date">Today, 17:22</span>
                                    <span className="cityname">City name</span>
                                  </section>
                                  <div className="clearfix" />
                                </li>
                              </a>
                              <a href="single.html">
                                <li>
                                  <img src="/images/fr1.jpg" title="" alt="" />
                                  <section className="list-left">
                                    <h5 className="title">
                                      At vero eos et accusamus et iusto odio
                                      dignissimos ducimus qui blanditiis
                                    </h5>
                                    <span className="adprice">$1099</span>
                                    <p className="catpath">
                                      Furniture » Sofa & Dining
                                    </p>
                                  </section>
                                  <section className="list-right">
                                    <span className="date">Today, 17:21</span>
                                    <span className="cityname">City name</span>
                                  </section>
                                  <div className="clearfix" />
                                </li>
                              </a>
                              <a href="single.html">
                                <li>
                                  <img src="/images/fr7.jpg" title="" alt="" />
                                  <section className="list-left">
                                    <h5 className="title">
                                      On the other hand, we denounce with
                                      righteous dislike men
                                    </h5>
                                    <span className="adprice">$290</span>
                                    <p className="catpath">
                                      Furniture » Sofa & Dining
                                    </p>
                                  </section>
                                  <section className="list-right">
                                    <span className="date">Today, 17:20</span>
                                    <span className="cityname">City name</span>
                                  </section>
                                  <div className="clearfix" />
                                </li>
                              </a>
                              <a href="single.html">
                                <li>
                                  <img src="/images/fr8.jpg" title="" alt="" />
                                  <section className="list-left">
                                    <h5 className="title">
                                      There are many variations of passages of
                                      Lorem Ipsum
                                    </h5>
                                    <span className="adprice">$899</span>
                                    <p className="catpath">
                                      Furniture » Sofa & Dining
                                    </p>
                                  </section>
                                  <section className="list-right">
                                    <span className="date">Today, 17:05</span>
                                    <span className="cityname">City name</span>
                                  </section>
                                  <div className="clearfix" />
                                </li>
                              </a>
                              <a href="single.html">
                                <li>
                                  <img src="/images/fr9.jpg" title="" alt="" />
                                  <section className="list-left">
                                    <h5 className="title">
                                      ducimus qui blanditiis praesentium
                                      voluptatum deleniti atque corrupti quos
                                      dolores et qua
                                    </h5>
                                    <span className="adprice">$199</span>
                                    <p className="catpath">
                                      Furniture » Sofa & Dining
                                    </p>
                                  </section>
                                  <section className="list-right">
                                    <span className="date">Today, 17:04</span>
                                    <span className="cityname">City name</span>
                                  </section>
                                  <div className="clearfix" />
                                </li>
                              </a>
                              <a href="single.html">
                                <li>
                                  <img src="/images/fr10.jpg" title="" alt="" />
                                  <section className="list-left">
                                    <h5 className="title">
                                      There are many variations of passages of
                                      Lorem Ipsum
                                    </h5>
                                    <span className="adprice">$250</span>
                                    <p className="catpath">
                                      Furniture » Sofa & Dining
                                    </p>
                                  </section>
                                  <section className="list-right">
                                    <span className="date">Today, 17:03</span>
                                    <span className="cityname">City name</span>
                                  </section>
                                  <div className="clearfix" />
                                </li>
                              </a>
                              <a href="single.html">
                                <li>
                                  <img src="/images/fr11.jpg" title="" alt="" />
                                  <section className="list-left">
                                    <h5 className="title">
                                      who are so beguiled and demoralized by the
                                      charms of pleasure of the moment
                                    </h5>
                                    <span className="adprice">$189</span>
                                    <p className="catpath">
                                      Furniture » Sofa & Dining
                                    </p>
                                  </section>
                                  <section className="list-right">
                                    <span className="date">Today, 17:03</span>
                                    <span className="cityname">City name</span>
                                  </section>
                                  <div className="clearfix" />
                                </li>
                              </a>
                              <a href="single.html">
                                <li>
                                  <img src="/images/fr12.jpg" title="" alt="" />
                                  <section className="list-left">
                                    <h5 className="title">
                                      you need to be sure there isn't anything
                                      embarrassing hidden
                                    </h5>
                                    <span className="adprice">$1090</span>
                                    <p className="catpath">
                                      Furniture » Sofa & Dining
                                    </p>
                                  </section>
                                  <section className="list-right">
                                    <span className="date">Today, 17:03</span>
                                    <span className="cityname">City name</span>
                                  </section>
                                  <div className="clearfix" />
                                </li>
                              </a>
                              <a href="single.html">
                                <li>
                                  <img src="/images/fr13.jpg" title="" alt="" />
                                  <section className="list-left">
                                    <h5 className="title">
                                      looked up one of the more obscure Latin
                                      words
                                    </h5>
                                    <span className="adprice">$599</span>
                                    <p className="catpath">
                                      Furniture » Sofa & Dining
                                    </p>
                                  </section>
                                  <section className="list-right">
                                    <span className="date">Today, 17:02</span>
                                    <span className="cityname">City name</span>
                                  </section>
                                  <div className="clearfix" />
                                </li>
                                <div className="clearfix" />
                              </a>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        role="tabpanel"
                        className="tab-pane fade"
                        id="profile"
                        aria-labelledby="profile-tab"
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
                              <a href="single.html">
                                <li>
                                  <img src="/images/fr2.jpg" title="" alt="" />
                                  <section className="list-left">
                                    <h5 className="title">
                                      It is a long established fact that a
                                      reader
                                    </h5>
                                    <span className="adprice">$310</span>
                                    <p className="catpath">
                                      Furniture » Sofa & Dining
                                    </p>
                                  </section>
                                  <section className="list-right">
                                    <span className="date">Today, 17:45</span>
                                    <span className="cityname">City name</span>
                                  </section>
                                  <div className="clearfix" />
                                </li>
                              </a>
                              <a href="single.html">
                                <li>
                                  <img src="/images/fr3.jpg" title="" alt="" />
                                  <section className="list-left">
                                    <h5 className="title">
                                      Contrary to popular belief, Lorem Ipsum is
                                      not
                                    </h5>
                                    <span className="adprice">$190</span>
                                    <p className="catpath">
                                      Furniture » Sofa & Dining
                                    </p>
                                  </section>
                                  <section className="list-right">
                                    <span className="date">Today, 17:30</span>
                                    <span className="cityname">City name</span>
                                  </section>
                                  <div className="clearfix" />
                                </li>
                              </a>
                              <a href="single.html">
                                <li>
                                  <img src="/images/fr4.jpg" title="" alt="" />
                                  <section className="list-left">
                                    <h5 className="title">
                                      The standard chunk of Lorem Ipsum used
                                      since the
                                    </h5>
                                    <span className="adprice">$480</span>
                                    <p className="catpath">
                                      Furniture » Sofa & Dining
                                    </p>
                                  </section>
                                  <section className="list-right">
                                    <span className="date">Today, 17:25</span>
                                    <span className="cityname">City name</span>
                                  </section>
                                  <div className="clearfix" />
                                </li>
                              </a>
                              <a href="single.html">
                                <li>
                                  <img src="/images/fr5.jpg" title="" alt="" />
                                  <section className="list-left">
                                    <h5 className="title">
                                      Sed ut perspiciatis unde omnis iste natus
                                      error sit voluptatem
                                    </h5>
                                    <span className="adprice">$859</span>
                                    <p className="catpath">
                                      Furniture » Sofa & Dining
                                    </p>
                                  </section>
                                  <section className="list-right">
                                    <span className="date">Today, 17:24</span>
                                    <span className="cityname">City name</span>
                                  </section>
                                  <div className="clearfix" />
                                </li>
                              </a>
                              <a href="single.html">
                                <li>
                                  <img src="/images/fr6.jpg" title="" alt="" />
                                  <section className="list-left">
                                    <h5 className="title">
                                      But I must explain to you how all this
                                      mistaken idea of denouncing
                                    </h5>
                                    <span className="adprice">$1299</span>
                                    <p className="catpath">
                                      Furniture » Sofa & Dining
                                    </p>
                                  </section>
                                  <section className="list-right">
                                    <span className="date">Today, 17:22</span>
                                    <span className="cityname">City name</span>
                                  </section>
                                  <div className="clearfix" />
                                </li>
                              </a>
                              <a href="single.html">
                                <li>
                                  <img src="/images/fr1.jpg" title="" alt="" />
                                  <section className="list-left">
                                    <h5 className="title">
                                      At vero eos et accusamus et iusto odio
                                      dignissimos ducimus qui blanditiis
                                    </h5>
                                    <span className="adprice">$1099</span>
                                    <p className="catpath">
                                      Furniture » Sofa & Dining
                                    </p>
                                  </section>
                                  <section className="list-right">
                                    <span className="date">Today, 17:21</span>
                                    <span className="cityname">City name</span>
                                  </section>
                                  <div className="clearfix" />
                                </li>
                              </a>
                              <a href="single.html">
                                <li>
                                  <img src="/images/fr7.jpg" title="" alt="" />
                                  <section className="list-left">
                                    <h5 className="title">
                                      On the other hand, we denounce with
                                      righteous dislike men
                                    </h5>
                                    <span className="adprice">$290</span>
                                    <p className="catpath">
                                      Furniture » Sofa & Dining
                                    </p>
                                  </section>
                                  <section className="list-right">
                                    <span className="date">Today, 17:20</span>
                                    <span className="cityname">City name</span>
                                  </section>
                                  <div className="clearfix" />
                                </li>
                              </a>
                              <a href="single.html">
                                <li>
                                  <img src="/images/fr8.jpg" title="" alt="" />
                                  <section className="list-left">
                                    <h5 className="title">
                                      There are many variations of passages of
                                      Lorem Ipsum
                                    </h5>
                                    <span className="adprice">$899</span>
                                    <p className="catpath">
                                      Furniture » Sofa & Dining
                                    </p>
                                  </section>
                                  <section className="list-right">
                                    <span className="date">Today, 17:05</span>
                                    <span className="cityname">City name</span>
                                  </section>
                                  <div className="clearfix" />
                                </li>
                              </a>
                              <a href="single.html">
                                <li>
                                  <img src="/images/fr9.jpg" title="" alt="" />
                                  <section className="list-left">
                                    <h5 className="title">
                                      ducimus qui blanditiis praesentium
                                      voluptatum deleniti atque corrupti quos
                                      dolores et qua
                                    </h5>
                                    <span className="adprice">$199</span>
                                    <p className="catpath">
                                      Furniture » Sofa & Dining
                                    </p>
                                  </section>
                                  <section className="list-right">
                                    <span className="date">Today, 17:04</span>
                                    <span className="cityname">City name</span>
                                  </section>
                                  <div className="clearfix" />
                                </li>
                              </a>
                              <a href="single.html">
                                <li>
                                  <img src="/images/fr10.jpg" title="" alt="" />
                                  <section className="list-left">
                                    <h5 className="title">
                                      There are many variations of passages of
                                      Lorem Ipsum
                                    </h5>
                                    <span className="adprice">$250</span>
                                    <p className="catpath">
                                      Furniture » Sofa & Dining
                                    </p>
                                  </section>
                                  <section className="list-right">
                                    <span className="date">Today, 17:03</span>
                                    <span className="cityname">City name</span>
                                  </section>
                                  <div className="clearfix" />
                                </li>
                              </a>
                              <a href="single.html">
                                <li>
                                  <img src="/images/fr11.jpg" title="" alt="" />
                                  <section className="list-left">
                                    <h5 className="title">
                                      who are so beguiled and demoralized by the
                                      charms of pleasure of the moment
                                    </h5>
                                    <span className="adprice">$189</span>
                                    <p className="catpath">
                                      Furniture » Sofa & Dining
                                    </p>
                                  </section>
                                  <section className="list-right">
                                    <span className="date">Today, 17:03</span>
                                    <span className="cityname">City name</span>
                                  </section>
                                  <div className="clearfix" />
                                </li>
                              </a>
                              <a href="single.html">
                                <li>
                                  <img src="/images/fr12.jpg" title="" alt="" />
                                  <section className="list-left">
                                    <h5 className="title">
                                      you need to be sure there isn't anything
                                      embarrassing hidden
                                    </h5>
                                    <span className="adprice">$1090</span>
                                    <p className="catpath">
                                      Furniture » Sofa & Dining
                                    </p>
                                  </section>
                                  <section className="list-right">
                                    <span className="date">Today, 17:03</span>
                                    <span className="cityname">City name</span>
                                  </section>
                                  <div className="clearfix" />
                                </li>
                              </a>
                              <a href="single.html">
                                <li>
                                  <img src="/images/fr13.jpg" title="" alt="" />
                                  <section className="list-left">
                                    <h5 className="title">
                                      looked up one of the more obscure Latin
                                      words
                                    </h5>
                                    <span className="adprice">$599</span>
                                    <p className="catpath">
                                      Furniture » Sofa & Dining
                                    </p>
                                  </section>
                                  <section className="list-right">
                                    <span className="date">Today, 17:02</span>
                                    <span className="cityname">City name</span>
                                  </section>
                                  <div className="clearfix" />
                                </li>
                                <div className="clearfix" />
                              </a>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        role="tabpanel"
                        className="tab-pane fade"
                        id="samsa"
                        aria-labelledby="samsa-tab"
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
                              <a href="single.html">
                                <li>
                                  <img src="/images/fr2.jpg" title="" alt="" />
                                  <section className="list-left">
                                    <h5 className="title">
                                      It is a long established fact that a
                                      reader
                                    </h5>
                                    <span className="adprice">$310</span>
                                    <p className="catpath">
                                      Furniture » Sofa & Dining
                                    </p>
                                  </section>
                                  <section className="list-right">
                                    <span className="date">Today, 17:45</span>
                                    <span className="cityname">City name</span>
                                  </section>
                                  <div className="clearfix" />
                                </li>
                              </a>
                              <a href="single.html">
                                <li>
                                  <img src="/images/fr3.jpg" title="" alt="" />
                                  <section className="list-left">
                                    <h5 className="title">
                                      Contrary to popular belief, Lorem Ipsum is
                                      not
                                    </h5>
                                    <span className="adprice">$190</span>
                                    <p className="catpath">
                                      Furniture » Sofa & Dining
                                    </p>
                                  </section>
                                  <section className="list-right">
                                    <span className="date">Today, 17:30</span>
                                    <span className="cityname">City name</span>
                                  </section>
                                  <div className="clearfix" />
                                </li>
                              </a>
                              <a href="single.html">
                                <li>
                                  <img src="/images/fr4.jpg" title="" alt="" />
                                  <section className="list-left">
                                    <h5 className="title">
                                      The standard chunk of Lorem Ipsum used
                                      since the
                                    </h5>
                                    <span className="adprice">$480</span>
                                    <p className="catpath">
                                      Furniture » Sofa & Dining
                                    </p>
                                  </section>
                                  <section className="list-right">
                                    <span className="date">Today, 17:25</span>
                                    <span className="cityname">City name</span>
                                  </section>
                                  <div className="clearfix" />
                                </li>
                              </a>
                              <a href="single.html">
                                <li>
                                  <img src="/images/fr5.jpg" title="" alt="" />
                                  <section className="list-left">
                                    <h5 className="title">
                                      Sed ut perspiciatis unde omnis iste natus
                                      error sit voluptatem
                                    </h5>
                                    <span className="adprice">$859</span>
                                    <p className="catpath">
                                      Furniture » Sofa & Dining
                                    </p>
                                  </section>
                                  <section className="list-right">
                                    <span className="date">Today, 17:24</span>
                                    <span className="cityname">City name</span>
                                  </section>
                                  <div className="clearfix" />
                                </li>
                              </a>
                              <a href="single.html">
                                <li>
                                  <img src="/images/fr6.jpg" title="" alt="" />
                                  <section className="list-left">
                                    <h5 className="title">
                                      But I must explain to you how all this
                                      mistaken idea of denouncing
                                    </h5>
                                    <span className="adprice">$1299</span>
                                    <p className="catpath">
                                      Furniture » Sofa & Dining
                                    </p>
                                  </section>
                                  <section className="list-right">
                                    <span className="date">Today, 17:22</span>
                                    <span className="cityname">City name</span>
                                  </section>
                                  <div className="clearfix" />
                                </li>
                              </a>
                              <a href="single.html">
                                <li>
                                  <img src="/images/fr1.jpg" title="" alt="" />
                                  <section className="list-left">
                                    <h5 className="title">
                                      At vero eos et accusamus et iusto odio
                                      dignissimos ducimus qui blanditiis
                                    </h5>
                                    <span className="adprice">$1099</span>
                                    <p className="catpath">
                                      Furniture » Sofa & Dining
                                    </p>
                                  </section>
                                  <section className="list-right">
                                    <span className="date">Today, 17:21</span>
                                    <span className="cityname">City name</span>
                                  </section>
                                  <div className="clearfix" />
                                </li>
                              </a>
                              <a href="single.html">
                                <li>
                                  <img src="/images/fr7.jpg" title="" alt="" />
                                  <section className="list-left">
                                    <h5 className="title">
                                      On the other hand, we denounce with
                                      righteous dislike men
                                    </h5>
                                    <span className="adprice">$290</span>
                                    <p className="catpath">
                                      Furniture » Sofa & Dining
                                    </p>
                                  </section>
                                  <section className="list-right">
                                    <span className="date">Today, 17:20</span>
                                    <span className="cityname">City name</span>
                                  </section>
                                  <div className="clearfix" />
                                </li>
                              </a>
                              <a href="single.html">
                                <li>
                                  <img src="/images/fr8.jpg" title="" alt="" />
                                  <section className="list-left">
                                    <h5 className="title">
                                      There are many variations of passages of
                                      Lorem Ipsum
                                    </h5>
                                    <span className="adprice">$899</span>
                                    <p className="catpath">
                                      Furniture » Sofa & Dining
                                    </p>
                                  </section>
                                  <section className="list-right">
                                    <span className="date">Today, 17:05</span>
                                    <span className="cityname">City name</span>
                                  </section>
                                  <div className="clearfix" />
                                </li>
                              </a>
                              <a href="single.html">
                                <li>
                                  <img src="/images/fr9.jpg" title="" alt="" />
                                  <section className="list-left">
                                    <h5 className="title">
                                      ducimus qui blanditiis praesentium
                                      voluptatum deleniti atque corrupti quos
                                      dolores et qua
                                    </h5>
                                    <span className="adprice">$199</span>
                                    <p className="catpath">
                                      Furniture » Sofa & Dining
                                    </p>
                                  </section>
                                  <section className="list-right">
                                    <span className="date">Today, 17:04</span>
                                    <span className="cityname">City name</span>
                                  </section>
                                  <div className="clearfix" />
                                </li>
                              </a>
                              <a href="single.html">
                                <li>
                                  <img src="/images/fr10.jpg" title="" alt="" />
                                  <section className="list-left">
                                    <h5 className="title">
                                      There are many variations of passages of
                                      Lorem Ipsum
                                    </h5>
                                    <span className="adprice">$250</span>
                                    <p className="catpath">
                                      Furniture » Sofa & Dining
                                    </p>
                                  </section>
                                  <section className="list-right">
                                    <span className="date">Today, 17:03</span>
                                    <span className="cityname">City name</span>
                                  </section>
                                  <div className="clearfix" />
                                </li>
                              </a>
                              <a href="single.html">
                                <li>
                                  <img src="/images/fr11.jpg" title="" alt="" />
                                  <section className="list-left">
                                    <h5 className="title">
                                      who are so beguiled and demoralized by the
                                      charms of pleasure of the moment
                                    </h5>
                                    <span className="adprice">$189</span>
                                    <p className="catpath">
                                      Furniture » Sofa & Dining
                                    </p>
                                  </section>
                                  <section className="list-right">
                                    <span className="date">Today, 17:03</span>
                                    <span className="cityname">City name</span>
                                  </section>
                                  <div className="clearfix" />
                                </li>
                              </a>
                              <a href="single.html">
                                <li>
                                  <img src="/images/fr12.jpg" title="" alt="" />
                                  <section className="list-left">
                                    <h5 className="title">
                                      you need to be sure there isn't anything
                                      embarrassing hidden
                                    </h5>
                                    <span className="adprice">$1090</span>
                                    <p className="catpath">
                                      Furniture » Sofa & Dining
                                    </p>
                                  </section>
                                  <section className="list-right">
                                    <span className="date">Today, 17:03</span>
                                    <span className="cityname">City name</span>
                                  </section>
                                  <div className="clearfix" />
                                </li>
                              </a>
                              <a href="single.html">
                                <li>
                                  <img src="/images/fr13.jpg" title="" alt="" />
                                  <section className="list-left">
                                    <h5 className="title">
                                      looked up one of the more obscure Latin
                                      words
                                    </h5>
                                    <span className="adprice">$599</span>
                                    <p className="catpath">
                                      Furniture » Sofa & Dining
                                    </p>
                                  </section>
                                  <section className="list-right">
                                    <span className="date">Today, 17:02</span>
                                    <span className="cityname">City name</span>
                                  </section>
                                  <div className="clearfix" />
                                </li>
                                <div className="clearfix" />
                              </a>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <ul className="pagination pagination-sm">
                        <li>
                          <a href="#">Prev</a>
                        </li>
                        <li>
                          <a href="#">1</a>
                        </li>
                        <li>
                          <a href="#">2</a>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                        <li>
                          <a href="#">4</a>
                        </li>
                        <li>
                          <a href="#">5</a>
                        </li>
                        <li>
                          <a href="#">6</a>
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
export default listAds;
