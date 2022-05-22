import React, { Component } from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import HowToOptimizeTraining from "../../components/News/HowToOptimizeTraining";
import Footer from "../../components/Layouts/Footer";
import Head from "next/head";

class NewsDetails extends Component {
  render() {
    return (
      <>
        <Head>
          <title>
            How to Optimize Employee Training for a Remote workplace in 2022
          </title>
          <meta
            name="description"
            content="Remote developers for quick business assistance, proposed remote training mechanism. When COVID-19 hit in March 2020, companies quickly responded by switching over to a foreign workplace, allowing employees to figure from home to make sure their safety and wellbeing."
          ></meta>
        </Head>
        <Navbar />

        <PageBanner
          pageTitle=" How to Optimize Employee Training for a Remote workplace in 2022"
          homePageUrl="/"
          homePageText="Blogs"
          activePageText=" How to Optimize Employee Training for a Remote workplace in 2022"
        />

        <HowToOptimizeTraining />

        <Footer />
      </>
    );
  }
}

export default NewsDetails;
