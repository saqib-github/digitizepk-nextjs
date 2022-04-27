import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Apply from '../components/HomeOne/Apply';
import Footer from '../components/Layouts/Footer';

class Services extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="Apply" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="apply" 
                /> 

                <Apply />
                
                <Footer />
            </>
        );
    }
}

export default Services;