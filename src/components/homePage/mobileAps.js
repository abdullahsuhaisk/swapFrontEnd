import React from 'react'

const mobileAps = () => {
  return (
			<div className="mobile-app">
				<div className="container">
					<div className="col-md-5 app-left">
						<a href="mobileapp.html"><img src="images/app.png" alt=""/></a>
					</div>
					<div className="col-md-7 app-right">
						<h3>Resale App is the <span>Easiest</span> way for Selling and buying second-hand goods</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor Sed bibendum varius euismod. Integer eget turpis sit amet lorem rutrum ullamcorper sed sed dui. vestibulum odio at elementum. Suspendisse et condimentum nibh.</p>
						<div className="app-buttons">
							<div className="app-button">
								<a href="/"><img src="images/1.png" alt=""/></a>
							</div>
							<div className="app-button">
								<a href="/"><img src="images/2.png" alt=""/></a>
							</div>
							<div className="clearfix"> </div>
						</div>
					</div>
					<div className="clearfix"></div>
				</div>
			</div>
  )
}
export default mobileAps;
