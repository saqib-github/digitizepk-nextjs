import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServicesStyleOne from '../components/Services/ServicesStyleOne';
import Footer from '../components/Layouts/Footer';
import HireTopTalent from '../components/HomeOne/HireTopTalent'

class HireTalent extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="Hire Top Talent" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="hire-top-talent" 
                /> 

                <HireTopTalent />
                
                <Footer />
            </>
        );
    }
}

export default HireTalent;