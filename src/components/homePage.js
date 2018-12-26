import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import MainBanner from './homePage/mainBanner';
import CategoryMenu from './homePage/categoryMenu';
import TrendingAds from './homePage/trendingAds';
import MobileApps from './homePage/mobileAps';

class homePage extends Component {
    render() {
        return(
            <div>
            <MainBanner />
            <CategoryMenu />
            <TrendingAds />
            <MobileApps />
            </div>
        )
    }
}

export default homePage;