import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCategories } from "../actions/categoryActions";
import { addAd } from '../actions/adsActions';
class postAd extends Component {
  state = {
    showImageAdd: 0
  };
  componentDidMount() {
    this.props.getCategories();
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleClick = e => {
    e.preventDefault();
    this.setState({
      showImageAdd: 1
    });
  };
  handleBack = e => {
    e.preventDefault();
    this.setState({
      showImageAdd: 0
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addAd(this.state);
  }
  renderContent(categories) {
    return (
      <div>
        <h2 className="head">Ürün Ekle</h2>
        <div className="post-ad-form">
          <form>
            <label>
              Kategori Seç <span>*</span>
            </label>
            <select className="" onChange={this.handleChange} id="category_id">
              <option>Select Category</option>
              {categories &&
                categories.map(item => {
                  return (
                    <option value={item.id} key={item.id}>
                      {item.name}
                    </option>
                  );
                })}
            </select>
            <div className="clearfix" />
            <label>
              İlan Başlığı <span>*</span>
            </label>
            <input
              type="text"
              className="phone"
              placeholder="aaaa"
              onChange={this.handleChange}
              id="title"
            />
            <div className="clearfix" />
            <label>
              İlan açıklaması <span>*</span>
            </label>
            <textarea
              className="mess"
              placeholder="Write few lines about your product"
              onChange={this.handleChange}
              id="description"
            />
            <div className="clearfix" />
          </form>
          <div className="personal-details">
            <form>
              <div className="clearfix" />
              <p className="post-terms">
                By clicking <strong>post Button</strong> you accept our
                <Link to="/">Terms of Use</Link>
                and
                <Link to="/">Privacy Policy</Link>
              </p>
              <button onClick={this.handleClick}>
                Resim Ekleme Aşamasına Geç{" "}
              </button>
              <div className="clearfix" />
            </form>
          </div>
        </div>
      </div>
    );
  }
  renderImageAdd() {
    return (
      <div className="post-ad-form">
        <form>
          <div className="upload-ad-photos">
            <label>Photos for your ad :</label>
            <div className="photos-upload-view">
              <input
                type="hidden"
                id="MAX_FILE_SIZE"
                name="MAX_FILE_SIZE"
                value="300000"
              />

              <div>
                <input
                  type="file"
                  id="fileselect"
                  name="fileselect[]"
                  multiple="multiple"
                />
                <div id="filedrag" style={{ display: "block" }}>
                  or drop files here
                </div>
              </div>

              <div id="submitbutton" style={{ display: "none" }}>
                <button type="submit">Upload Files</button>
              </div>
              <div id="messages">
                <p>Status Messages</p>
              </div>
          <button onClick={this.handleSubmit}>İlanı Ver</button>
          <button style={{float:'left'}} onClick={this.handleBack}>Geri</button>
            </div>
            <div className="clearfix" />
          </div>
        </form>
      </div>
    );
  }
  render() {
    const { categories } = this.props;
    console.log(this.props);
    return (
      <div className="submit-ad main-grid-border">
        <div className="container">
          {this.state.showImageAdd === 0
            ? this.renderContent(categories)
            : this.renderImageAdd()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories.data,
    Ads:state.advertise
  };
};
function mapDispachToProps(dispatch) {
  return {
    getCategories: () => dispatch(fetchCategories()),
    addAd: (Ad) => dispatch(addAd(Ad))
  };
}
export default connect(
  mapStateToProps,
  mapDispachToProps
)(postAd);
