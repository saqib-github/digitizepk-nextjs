import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layouts/Footer';
import FormHireTeam from '../components/HomeOne/FormHireTeam';

class HireTalent extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="Hire Top Talented Team" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="hire-team" 
                /> 

                <FormHireTeam />
                <Footer />
            </>
        );
    }
}

export default HireTalent;