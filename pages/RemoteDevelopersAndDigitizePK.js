import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import RemoteDevelopersAndDigitizePK from '../components/News/RemoteDevelopersAndDigitizePK';
import Footer from '../components/Layouts/Footer';

class NewsDetails extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle=" Remote developers and DigitizePK" 
                    homePageUrl="/" 
                    homePageText="Blogs" 
                    activePageText=" Remote developers and DigitizePK" 
                /> 

                <RemoteDevelopersAndDigitizePK />
                
                <Footer />
            </>
        );
    }
}

export default NewsDetails;