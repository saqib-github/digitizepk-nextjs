import React, { Component } from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import WhyRemoteDevelopersQuickBusinessAssistance from "../../components/News/WhyRemoteDevelopersQuickBusinessAssistance";
import Footer from "../../components/Layouts/Footer";
import Head from "next/head";

class NewsDetails extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Why remote developers for quick business assistance?</title>
          <meta
            name="description"
            content="Remote developers for quick business assistance introduction 
            After Covid anaemic 2021 the whole world shift towards work from home. And Remote work make huge progress. Where remote developers like @toptal and @turing are here to provide a efficient team of remote developers."
          ></meta>
        </Head>
        <Navbar />

        <PageBanner
          pageTitle=" Why remote developers for quick business assistance?"
          homePageUrl="/"
          homePageText="Blogs"
          activePageText=" Why remote developers for quick business assistance?"
        />

        <WhyRemoteDevelopersQuickBusinessAssistance />

        <Footer />
      </>
    );
  }
}

export default NewsDetails;
