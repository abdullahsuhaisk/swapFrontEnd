import React from 'react'
import { Link } from 'react-router-dom';

const mainBanner = () => {
  return (
	<div className="main-banner banner text-center">
	  <div className="container">    
			<h1>Artık ihtiyacın olmayan  <span className="segment-heading">     eşyaların mı var </span> ozaman Takaslaa </h1>
			<p>Yakınlarındaki ürünleri görmek ve takaslamak çok kolay </p>
			<Link to={'/Ads/postAd'}>Eşya Ekle</Link>
	  </div>
	</div>
  )
}

export default mainBanner
