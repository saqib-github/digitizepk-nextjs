import React, { Component } from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import BestSoftwareCompaniesRemoteJobs from "../../components/News/BestSoftwareCompaniesRemoteJobs";
import Footer from "../../components/Layouts/Footer";
import Head from "next/head";

class NewsDetails extends Component {
  render() {
    return (
      <>
        <Head>
          <title>The Best Software  Companies For Remote Jobs In 2021</title>
          <meta
            name="description"
            content="Leading software companies  browsing  a hiring surge right now include Aha! Software, Appen, Clevertech, Crowd Strike, Data dog, Dataiku, Fastly, Hashicorp, Leidos, Liveops, Netskope, Proofpoint, Rackspace, Zapier and Zendesk."
          ></meta>
        </Head>
        <Navbar />

        <PageBanner
          pageTitle=" The Best Software  Companies For Remote Jobs In 2021"
          homePageUrl="/"
          homePageText="Blogs"
          activePageText=" The Best Software  Companies For Remote Jobs In 2021"
        />

        <BestSoftwareCompaniesRemoteJobs />

        <Footer />
      </>
    );
  }
}

export default NewsDetails;
