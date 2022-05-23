import React, { Component } from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import  SearchEngineOptimization2022 from "../../components/News/ SearchEngineOptimization2022";
import Footer from "../../components/Layouts/Footer";
import Head from "next/head";

class NewsDetails extends Component {
  render() {
    return (
      <>
        <Head>
          <title> Search engine Optimization in 2022</title>
          <meta
            name="description"
            content="Today , the  very fact  is that many older strategies are not only ineffective in today’s SEO landscape, but some outdated tactics  like  keyword stuffing can even negatively impact SEO. This makes it imperative  that you simply  continually adapt your SEO strategies to the latest trends."
          ></meta>
        </Head>
        <Navbar />

        <PageBanner
          pageTitle="Search engine Optimization in 2022"
          homePageUrl="/"
          homePageText="Blogs"
          activePageText=" Search engine Optimization in 2022"
        />

        < SearchEngineOptimization2022 />

        <Footer />
      </>
    );
  }
}

export default NewsDetails;
