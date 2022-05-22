import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import AllBlogs from '../components/Common/AllBlogs';
// import HorizentalBlogsScroller from '../components/Common/HorizentalBlogsScroller';
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

                <AllBlogs />
                {/* <HorizentalBlogsScroller /> */}
                
                <Footer />
            </>
        );
    }
}

export default NewsGrid;