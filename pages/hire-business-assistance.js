import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layouts/Footer';
import FormBusinessAssistance from '../components/HomeOne/FormBusinessAssistance';

class HireTalent extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="Hire Top Business Assistance" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="hire-business-assistance" 
                /> 

                <FormBusinessAssistance />
                <Footer />
            </>
        );
    }
}

export default HireTalent;