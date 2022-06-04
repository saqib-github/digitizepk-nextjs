import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServicesStyleOne from '../components/Services/ServicesStyleOne';
import Footer from '../components/Layouts/Footer';
import HireTopTalent from '../components/HomeOne/HireTopTalent'
import Head from "next/head";

class HireTalent extends Component {
    render() {
        return (
            <>
            <Head>
          <title>Hiring Remote Developers for quick business assistance  </title>
          <meta
            name="description"
            content="Are you looking for business assistance, finance help or technical aid? Remote developers for quick business assistance not just  provide business , finance and technical assistance  , but also at quick remote base mechanism. Acts before it’s too late! Want more information call +92-03059158010"
          ></meta>
           <meta property="og:type" content="page" />
          <meta property="og:title" content="Hire Top Talent" />
       
       <meta property="og:description" content="Are you looking for business assistance, finance help or technical aid? Remote developers for quick business assistance not just  provide business , finance and technical assistance  , but also at quick remote base mechanism. Acts before it’s too late! Want more information call +92-03059158010" />
       <meta property="og:url" content="https://digitizepk.com/hire-top-talent" />
       <meta property="og:site_name" content="Hire Top Talent" />
       <meta property="twitter:card" content="summary_large_image" />
       <meta property="twitter:site" content="@digitize_pk" />
        </Head>
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