import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
 class showAd extends Component {
  render() {
    return (
	<div className="single-page main-grid-border">
		<div className="container">
			<ol className="breadcrumb" style={{marginBottom: '5px'}}>
				<li><a href="index.html">Home</a></li>
				<li><a href="all-classNameifieds.html">All Ads</a></li>
				<li className="active"><a href="mobiles.html">Mobiles</a></li>
				<li className="active">Mobile Phone</li>
			</ol>
			<div className="product-desc">
				<div className="col-md-7 product-view">
					<h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h2>
					<p> <i className="glyphicon glyphicon-map-marker"></i><a href="/">state</a>, <a href="/">city</a>| Added at 06:55 pm, Ad ID: 987654321</p>
					<div className="flexslider">
						<ul className="slides">
                            <Carousel>
                                <Carousel.Item>
								    <img src="/images/ss1.jpg" />
                                </Carousel.Item>
                                <Carousel.Item>
								    <img src="/images/ss2.jpg" />
                                </Carousel.Item>
                                <Carousel.Item>
								    <img src="/images/ss3.jpg" />
                                </Carousel.Item>
                            </Carousel>
						</ul>
					</div>

					<div className="product-details">
						<h4>Brand : <a href="#">Company name</a></h4>
						<h4>Views : <strong>150</strong></h4>
						<p><strong>Display </strong>: 1.5 inch HD LCD Touch Screen</p>
						<p><strong>Summary</strong> : It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
					
					</div>
				</div>
				<div className="col-md-5 product-details-grid">
					<div className="item-price">
						<div className="product-price">
							<p className="p-price">Price</p>
							<h3 className="rate">$ 259</h3>
							<div className="clearfix"></div>
						</div>
						<div className="condition">
							<p className="p-price">Condition</p>
							<h4>Good</h4>
							<div className="clearfix"></div>
						</div>
						<div className="itemtype">
							<p className="p-price">Item Type</p>
							<h4>Phones</h4>
							<div className="clearfix"></div>
						</div>
					</div>
					<div className="interested text-center">
						<h4>Interested in this Ad?<small> Contact the Seller!</small></h4>
						<p><i className="glyphicon glyphicon-earphone"></i>00-85-9875462655</p>
					</div>
						<div className="tips">
						<h4>Safety Tips for Buyers</h4>
							<ol>
								<li><a href="#">Contrary to popular belief.</a></li>
								<li><a href="#">Contrary to popular belief.</a></li>
								<li><a href="#">Contrary to popular belief.</a></li>
								<li><a href="#">Contrary to popular belief.</a></li>
								<li><a href="#">Contrary to popular belief.</a></li>
								<li><a href="#">Contrary to popular belief.</a></li>
								<li><a href="#">Contrary to popular belief.</a></li>
								<li><a href="#">Contrary to popular belief.</a></li>
								<li><a href="#">Contrary to popular belief.</a></li>
							</ol>
						</div>
				</div>
			<div className="clearfix"></div>
			</div>
		</div>
	</div>
    )
  }
  /* 					<!-- FlexSlider -->
					  <script defer src="js/jquery.flexslider.js"></script>
					<link rel="stylesheet" href="css/flexslider.css" type="text/css" media="screen" />

						<script>
					// Can also be used with $(document).ready()
					$(window).load(function() {
					  $('.flexslider').flexslider({
						animation: "slide",
						controlNav: "thumbnails"
					  });
					});
					</script>
					<!-- //FlexSlider -->*/
}

export default showAd
