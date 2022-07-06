import React, { Component } from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import HowToHireRemoteDevelopers from "../../components/News/HowToHireRemoteDevelopers";
import Footer from "../../components/Layouts/Footer";
import Head from "next/head";

class NewsDetails extends Component {
  render() {
    return (
      <>
        <Head>
          <title>
          How to Hire Remote Developers?: Right Strategy 
          </title>
          <meta
            name="description"
            content="There is no longer any doubt that remote work can be as productive and successful as on-site work in the office. And in some cases, hiring  a foreign  team looks like a reasonable option and the best possible decision."
          ></meta>
        </Head>
        <Navbar />

        <PageBanner
          pageTitle="  How to Hire Remote Developers?: Right Strategy"
          homePageUrl="/"
          homePageText="Blogs"
          activePageText="   How to Hire Remote Developers?: Right Strategy"
        />

        <HowToHireRemoteDevelopers />

        <Footer />
      </>
    );
  }
}

export default NewsDetails;
