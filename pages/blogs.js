import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import NewsGridCard from '../components/News/NewsGridCard';
import Footer from '../components/Layouts/Footer';

class NewsGrid extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="Blogs" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="blogs" 
                /> 

                <NewsGridCard />
                
                <Footer />
            </>
        );
    }
}

export default NewsGrid;