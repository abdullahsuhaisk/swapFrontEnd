import React from 'react';
import { Link } from 'react-router-dom';
const footer = () => {
  return (
    <footer>
			<div className="footer-top">
				<div className="container">
					<div className="foo-grids">
						<div className="col-md-3 footer-grid">
							<h4 className="footer-head">Neden Takasla</h4>
							<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
							<p>The point of using Lorem Ipsum is that it has a more-or-less normal letters, as opposed to using 'Content here.</p>
						</div>
						<div className="col-md-3 footer-grid">
							<h4 className="footer-head">Help</h4>
							<ul>
								<li><Link to={"/"}>How it Works</Link></li>						
								<li><Link to={"/"}>Sitemap</Link></li>
								<li><Link to={"/"}>Faq</Link></li>
								<li><Link to={"/"}>Feedback</Link></li>
								<li><Link to={"/"}>Contact</Link></li>
								<li><Link to={"/"}>Shortcodes</Link></li>
							</ul>
						</div>
						<div className="col-md-3 footer-grid">
							<h4 className="footer-head">Information</h4>
							<ul>
								<li><Link to={"/"}>Locations Map</Link></li>	
								<li><Link to={"/"}>Terms of Use</Link></li>
								<li><Link to={"/"}>Popular searches</Link></li>	
								<li><Link to={"/"}>Privacy Policy</Link></li>	
							</ul>
						</div>
						<div className="col-md-3 footer-grid">
							<h4 className="footer-head">Contact Us</h4>
							<span className="hq">Our headquarters</span>
							<address>
								<ul className="location">
									<li><span className="glyphicon glyphicon-map-marker"></span></li>
									<li>CENTER FOR FINANCIAL ASSISTANCE TO DEPOSED NIGERIAN ROYALTY</li>
									<div className="clearfix"></div>
								</ul>	
								<ul className="location">
									<li><span className="glyphicon glyphicon-earphone"></span></li>
									<li>+0 561 111 235</li>
									<div className="clearfix"></div>
								</ul>	
								<ul className="location">
									<li><span className="glyphicon glyphicon-envelope"></span></li>
									<li><Link to={"mailto:info@example.com"}>mail@example.com</Link></li>
									<div className="clearfix"></div>
								</ul>						
							</address>
						</div>
						<div className="clearfix"></div>
					</div>						
				</div>	
			</div>	
			<div className="footer-bottom text-center">
			<div className="container">
				<div className="footer-logo">
					<Link to={"/"}><span>Ta</span>kaslaa</Link>
				</div>
				<div className="footer-social-icons">
					<ul>
						<li><Link className="facebook" to="/"><span>Facebook</span></Link></li>
						<li><Link className="twitter" to="/"><span>Twitter</span></Link></li>
						<li><Link className="flickr" to="/"><span>Flickr</span></Link></li>
						<li><Link className="googleplus" to="/"><span>Google+</span></Link></li>
						<li><Link className="dribbble" to="/"><span>Dribbble</span></Link></li>
					</ul>
				</div>
				<div className="copyrights">
					<p> © 2018 Resale. All Rights Reserved | Design by YesilIsikBilisim <a href="http://w3layouts.com/"> W3layouts</a></p>
				</div>
				<div className="clearfix"></div>
			</div>
		</div>
	</footer>
  )
}

export default footer
