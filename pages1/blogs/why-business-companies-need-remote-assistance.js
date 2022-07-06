import React, { Component } from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import WhyBusinessCompaniesNeedRemoteAssistance from "../../components/News/WhyBusinessCompaniesNeedRemoteAssistance";
import Footer from "../../components/Layouts/Footer";
import Head from "next/head";

class NewsDetails extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Why business companies need remote assistance? 2022</title>
          <meta
            name="description"
            content=" Business dimensions was shifted towards remote base. Toptal, Turing are one of major examples of it."
          ></meta>
        </Head>
        <Navbar />

        <PageBanner
          pageTitle="Why business companies need remote assistance? 2022"
          homePageUrl="/"
          homePageText="Blogs"
          activePageText=" Why business companies need remote assistance ?2022"
        />

        <WhyBusinessCompaniesNeedRemoteAssistance />

        <Footer />
      </>
    );
  }
}

export default NewsDetails;
