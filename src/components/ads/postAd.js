import React, { Component } from "react";
import { connect } from 'react-redux';
class postAd extends Component {
  render() {
      console.log(this.state);
    return (
      <div className="submit-ad main-grid-border">
        <div className="container">
          <h2 className="head">Ürün Ekle</h2>
          <div className="post-ad-form">
            <form>
              <label>
                Kategori Seç <span>*</span>
              </label>
              <select className="">
                <option>Select Category</option>
                <option>Mobiles</option>
                <option>Electronics and Appliances</option>
                <option>Cars</option>
                <option>Bikes</option>
                <option>Furniture</option>
                <option>Pets</option>
                <option>Books, Sports and hobbies</option>
                <option>Fashion</option>
                <option>Kids</option>
                <option>Services</option>
                <option>Real, Estate</option>
              </select>
              <div className="clearfix" />
              <label>
                Ad Title <span>*</span>
              </label>
              <input type="text" className="phone" placeholder="" />
              <div className="clearfix" />
              <label>
                Ad Description <span>*</span>
              </label>
              <textarea
                className="mess"
                placeholder="Write few lines about your product"
              />
              <div className="clearfix" />

            </form>
            <div className="personal-details">
              <form>
                <label>
                  Your Name <span>*</span>
                </label>
                <input type="text" className="name" placeholder="" />
                <div className="clearfix" />
                <label>
                  Your Mobile No <span>*</span>
                </label>
                <input type="text" className="phone" placeholder="" />
                <div className="clearfix" />
                <label>
                  Your Email Address<span>*</span>
                </label>
                <input type="text" className="email" placeholder="" />
                <div className="clearfix" />
                <p className="post-terms">
                  By clicking <strong>post Button</strong> you accept our{" "}
                  <a href="terms.html" target="_blank">
                    Terms of Use{" "}
                  </a>{" "}
                  and{" "}
                  <a href="privacy.html" target="_blank">
                    Privacy Policy
                  </a>
                </p>
                <input type="submit" value="Post" />
                <div className="clearfix" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    console.log(state);

    return{
        categories:state.categories
    }
}
export default connect(mapStateToProps)(postAd);
