import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import FormFinanceAssistance from "../components/HomeOne/FormFinanceAssistance";
import Head from "next/head";

class HireTalent extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Best remote Quick finance assistance</title>
          <meta
            name="description"
            content="Are you looking for finance assistance? Remote developers for quick business assistance not just  provide finance  assistance , but at quick remote base mechanism. Our finance  experts rightly recommend improvements in your business. Don’t miss out!"
          ></meta>
          <meta property="og:type" content="page" />
          <meta property="og:title" content="Hire Finance Assistance" />
       
       <meta property="og:description" content="Are you looking for finance assistance? Remote developers for quick business assistance not just  provide finance  assistance , but at quick remote base mechanism. Our finance  experts rightly recommend improvements in your business. Don’t miss out!" />
       <meta property="og:url" content="https://digitizepk.com/hire-finance-assistance" />
       <meta property="og:site_name" content="Hire Finance Assistance" />
       <meta property="twitter:card" content="summary_large_image" />
       <meta property="twitter:site" content="@digitize_pk" />
        </Head>
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

export default HireTalent;
1;
