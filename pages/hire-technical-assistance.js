import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layouts/Footer';
import FormTechnicalAssistance from '../components/HomeOne/FormTechnicalAssistance';

class HireTalent extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="Hire Top Tecnical Assistance" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="hire-technical-assistance" 
                /> 

                <FormTechnicalAssistance />
                <Footer />
            </>
        );
    }
}

export default HireTalent;