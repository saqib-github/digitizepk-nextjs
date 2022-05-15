import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import RemoteDevelopersForQuickBusiness from '../components/News/RemoteDevelopersForQuickBusiness';
import Footer from '../components/Layouts/Footer';

class NewsDetails extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle=" Remote developers for quick business assistance" 
                    homePageUrl="/" 
                    homePageText="Blogs" 
                    activePageText=" Remote developers for quick business assistance" 
                /> 

                <RemoteDevelopersForQuickBusiness />
                
                <Footer />
            </>
        );
    }
}

export default NewsDetails;