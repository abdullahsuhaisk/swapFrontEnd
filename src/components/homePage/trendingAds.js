import React from 'react'

const trendingAds = () => {
  return (
			<div className="trending-ads">
				<div className="container">
				<div className="trend-ads">
					<h2>En Çok Takaslanmak Istenilenler</h2>
							<ul id="flexiselDemo3">
								<li>
									<div className="col-md-3 biseller-column">
										<a href="single.html">
											<img src="images/p1.jpg" alt=""/>
											<span className="price">&#36; 450</span>
										</a> 
										<div className="ad-info">
											<h5>There are many variations of passages</h5>
											<span>1 hour ago</span>
										</div>
									</div>
									<div className="col-md-3 biseller-column">
										<a href="single.html">
											<img src="images/p2.jpg" alt=""/>
											<span className="price">&#36; 399</span>
										</a> 
										<div className="ad-info">
											<h5>Lorem Ipsum is simply dummy</h5>
											<span>3 hour ago</span>
										</div>
									</div>
									<div className="col-md-3 biseller-column">
										<a href="single.html">
											<img src="images/p3.jpg" alt=""/>
											<span className="price">&#36; 199</span>
										</a> 
										<div className="ad-info">
											<h5>It is a long established fact that a reader</h5>
											<span>8 hour ago</span>
										</div>
									</div>
									<div className="col-md-3 biseller-column">
										<a href="single.html">
											<img src="images/p4.jpg" alt=""/>
											<span className="price">&#36; 159</span>
										</a> 
										<div className="ad-info">
											<h5>passage of Lorem Ipsum you need to be</h5>
											<span>19 hour ago</span>
										</div>
									</div>
								</li>
						</ul>
					</div>   
			</div>
            </div>				
  )
}
export default trendingAds;

/*
					<script type="text/javascript">
						 $(window).load(function() {
							$("#flexiselDemo3").flexisel({
								visibleItems:1,
								animationSpeed: 1000,
								autoPlay: true,
								autoPlaySpeed: 5000,    		
								pauseOnHover: true,
								enableResponsiveBreakpoints: true,
								responsiveBreakpoints: { 
									portrait: { 
										changePoint:480,
										visibleItems:1
									}, 
									landscape: { 
										changePoint:640,
										visibleItems:1
									},
									tablet: { 
										changePoint:768,
										visibleItems:1
									}
								}
							});
							
						});
					   </script>
					   <script type="text/javascript" src="js/jquery.flexisel.js"></script>
*/
