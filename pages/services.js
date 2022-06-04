import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ServicesStyleOne from "../components/Services/ServicesStyleOne";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";

class Services extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Best remote Service</title>
          <meta
            name="description"
            content="DigitizePK offer services in three departments, Business , finance and technical.  Remote business analyst understand the business issues , provide most appropriate solution at urgent base. Finance remote experts give most worthy opinions on the base of their vast experiences. Furthermore , technical experts team assist in complex problems."
          ></meta>
           <meta property="og:type" content="page" />
          <meta property="og:title" content="Services" />
       
       <meta property="og:description" content="DigitizePK offer services in three departments, Business , finance and technical.  Remote business analyst understand the business issues , provide most appropriate solution at urgent base. Finance remote experts give most worthy opinions on the base of their vast experiences. Furthermore , technical experts team assist in complex problems." />
       <meta property="og:url" content="https://digitizepk.com/services" />
       <meta property="og:site_name" content="DigitizePK Services" />
       <meta property="twitter:card" content="summary_large_image" />
       <meta property="twitter:site" content="@digitize_pk" />
        </Head>
        <Navbar />

        <PageBanner
          pageTitle="Services"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Services"
        />

        <ServicesStyleOne />

        <Footer />
      </>
    );
  }
}

export default Services;
