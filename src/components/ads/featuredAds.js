import React from 'react'

const featuredAds = () => {
  return (
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
              
  )
}

export default featuredAds;
