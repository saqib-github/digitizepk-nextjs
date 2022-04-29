import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layouts/Footer';
import FormFinanceAssistance from '../components/HomeOne/FormFinanceAssistance';

class HireTalent extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="Hire Top Finance Assistance" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="hire-finance-assistance" 
                /> 

                <FormFinanceAssistance />
                <Footer />
            </>
        );
    }
}

export default HireTalent;1