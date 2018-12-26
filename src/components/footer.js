import React from 'react'

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
								<li><a href="howitworks.html">How it Works</a></li>						
								<li><a href="sitemap.html">Sitemap</a></li>
								<li><a href="faq.html">Faq</a></li>
								<li><a href="feedback.html">Feedback</a></li>
								<li><a href="contact.html">Contact</a></li>
								<li><a href="typography.html">Shortcodes</a></li>
							</ul>
						</div>
						<div className="col-md-3 footer-grid">
							<h4 className="footer-head">Information</h4>
							<ul>
								<li><a href="regions.html">Locations Map</a></li>	
								<li><a href="terms.html">Terms of Use</a></li>
								<li><a href="popular-search.html">Popular searches</a></li>	
								<li><a href="privacy.html">Privacy Policy</a></li>	
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
									<li><a href="mailto:info@example.com">mail@example.com</a></li>
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
					<a href="index.html"><span>Ta</span>kaslaa</a>
				</div>
				<div className="footer-social-icons">
					<ul>
						<li><a className="facebook" href="/"><span>Facebook</span></a></li>
						<li><a className="twitter" href="/"><span>Twitter</span></a></li>
						<li><a className="flickr" href="/"><span>Flickr</span></a></li>
						<li><a className="googleplus" href="/"><span>Google+</span></a></li>
						<li><a className="dribbble" href="/"><span>Dribbble</span></a></li>
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
