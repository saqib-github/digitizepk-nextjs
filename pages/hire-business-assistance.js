import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import FormBusinessAssistance from "../components/HomeOne/FormBusinessAssistance";
import Head from "next/head";

class HireTalent extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Best remote Quick Business assistance</title>
          <meta
            name="description"
            content="Yes I want business assistance do you? Remote developers for quick business assistance provide business assistance at quick remote base mechanism. Our Business experts rightly recommend improvements in your business. Start your journey with DigitizePK."
          ></meta>
          <meta property="og:type" content="page" />
          <meta property="og:title" content="Hire Business Assistance" />
       
       <meta property="og:description" content="Yes I want business assistance do you? Remote developers for quick business assistance provide business assistance at quick remote base mechanism. Our Business experts rightly recommend improvements in your business. Start your journey with DigitizePK." />
       <meta property="og:url" content="https://digitizepk.com/hire-business-assistance" />
       <meta property="og:site_name" content="Hire Business Assistance" />
       <meta property="twitter:card" content="summary_large_image" />
       <meta property="twitter:site" content="@digitize_pk" />
        </Head>
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
