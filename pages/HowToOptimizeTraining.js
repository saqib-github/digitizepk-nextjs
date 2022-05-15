import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import HowToOptimizeTraining from '../components/News/HowToOptimizeTraining';
import Footer from '../components/Layouts/Footer';

class NewsDetails extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle=" How to Optimize Employee Training for a Remote workplace in 2022" 
                    homePageUrl="/" 
                    homePageText="Blogs" 
                    activePageText=" How to Optimize Employee Training for a Remote workplace in 2022" 
                /> 

                <HowToOptimizeTraining />
                
                <Footer />
            </>
        );
    }
}

export default NewsDetails;