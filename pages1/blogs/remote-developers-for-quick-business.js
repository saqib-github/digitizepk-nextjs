import React, { Component } from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import RemoteDevelopersForQuickBusiness from "../../components/News/RemoteDevelopersForQuickBusiness";
import Footer from "../../components/Layouts/Footer";
import Head from "next/head";

class NewsDetails extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Remote developers for quick business assistance</title>
          <meta
            name="description"
            content="Last week we released new builds of Remote developer’s for quick business assistance and JetBrains Gateway. During this release cycle, our team has focused on the general solution quality and bug fixes."
          ></meta>
        </Head>
        <Navbar />

        <PageBanner
          pageTitle=" Remote developers for quick business assistance"
          homePageUrl="/"
          homePageText="Blogs"
          activePageText=" Remote developers for quick business assistance"
        />

        <RemoteDevelopersForQuickBusiness />

        <Footer />
      </>
    );
  }
}

export default NewsDetails;
