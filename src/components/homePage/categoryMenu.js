import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCategories } from "../actions/categoryActions";

class categoryMenu extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    const { categories } = this.props;
    console.log(categories);
    return (
      <div className="content">
        <div className="categories">
          <div className="container">
            {categories &&
              categories.map(cat => {
                return (
                  <div className="col-md-2 focus-grid" key={cat.name}>
                    <Link to={'/CategorysAds/'+cat.id}>
                      <div className="focus-border">
                        <div className="focus-layout">
                          <div className="focus-image">
                            <i className={cat.pic_url} />
                          </div>
                          <h4 className="clrchg"> {cat.name}</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            <div className="clearfix" />
          </div>
        </div>
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
)(categoryMenu);

/*
 <div className="content">
			<div className="categories">
				<div className="container">
					<div className="col-md-2 focus-grid">
						<a href="categories.html">
							<div className="focus-border">
								<div className="focus-layout">
									<div className="focus-image"><i className="fa fa-mobile"></i></div>
									<h4 className="clrchg">Mobiles</h4>
								</div>
							</div>
						</a>
					</div>
					<div className="col-md-2 focus-grid">
						<a href="categories.html#parentVerticalTab2">
							<div className="focus-border">
								<div className="focus-layout">
									<div className="focus-image"><i className="fa fa-laptop"></i></div>
									<h4 className="clrchg"> Electronics & Appliances</h4>
								</div>
							</div>
						</a>
					</div>
					<div className="col-md-2 focus-grid">
						<a href="categories.html#parentVerticalTab3">
							<div className="focus-border">
								<div className="focus-layout">
									<div className="focus-image"><i className="fa fa-car"></i></div>
									<h4 className="clrchg">Cars</h4>
								</div>
							</div>
						</a>
					</div>	
					<div className="col-md-2 focus-grid">
						<a href="categories.html#parentVerticalTab4">
							<div className="focus-border">
								<div className="focus-layout">
									<div className="focus-image"><i className="fa fa-motorcycle"></i></div>
									<h4 className="clrchg">Bikes</h4>
								</div>
							</div>
						</a>
					</div>	
					<div className="col-md-2 focus-grid">
						<a href="categories.html#parentVerticalTab5">
							<div className="focus-border">
								<div className="focus-layout">
									<div className="focus-image"><i className="fa fa-wheelchair"></i></div>
									<h4 className="clrchg">Furnitures</h4>
								</div>
							</div>
						</a>
					</div>
					<div className="col-md-2 focus-grid">
						<a href="categories.html#parentVerticalTab6">
							<div className="focus-border">
								<div className="focus-layout">
									<div className="focus-image"><i className="fa fa-paw"></i></div>
									<h4 className="clrchg">Pets</h4>
								</div>
							</div>
						</a>
					</div>	
					<div className="col-md-2 focus-grid">
						<a href="categories.html#parentVerticalTab7">
							<div className="focus-border">
								<div className="focus-layout">
									<div className="focus-image"><i className="fa fa-book"></i></div>
									<h4 className="clrchg">Books, Sports & Hobbies</h4>
								</div>
							</div>
						</a>
					</div>	
					<div className="col-md-2 focus-grid">
						<a href="categories.html#parentVerticalTab8">
							<div className="focus-border">
								<div className="focus-layout">
									<div className="focus-image"><i className="fa fa-asterisk"></i></div>
									<h4 className="clrchg">Fashion</h4>
								</div>
							</div>
						</a>
					</div>	
					<div className="col-md-2 focus-grid">
						<a href="categories.html#parentVerticalTab9">
							<div className="focus-border">
								<div className="focus-layout">
									<div className="focus-image"><i className="fa fa-gamepad"></i></div>
									<h4 className="clrchg">Kids</h4>
								</div>
							</div>
						</a>
					</div>	
					<div className="col-md-2 focus-grid">
						<a href="categories.html#parentVerticalTab10">
							<div className="focus-border">
								<div className="focus-layout">
									<div className="focus-image"><i className="fa fa-shield"></i></div>
									<h4 className="clrchg">Services</h4>
								</div>
							</div>
						</a>
					</div>
					<div className="col-md-2 focus-grid">
						<a href="categories.html#parentVerticalTab11">
							<div className="focus-border">
								<div className="focus-layout">
									<div className="focus-image"><i className="fa fa-at"></i></div>
									<h4 className="clrchg">Jobs</h4>
								</div>
							</div>
						</a>
					</div>
					<div className="col-md-2 focus-grid">
						<a href="categories.html#parentVerticalTab12">
							<div className="focus-border">
								<div className="focus-layout">
									<div className="focus-image"><i className="fa fa-home"></i></div>
									<h4 className="clrchg">Real Estate</h4>
								</div>
							</div>
						</a>
					</div>
					<div className="clearfix"></div>
				</div>
            </div>
        </div>
*/
