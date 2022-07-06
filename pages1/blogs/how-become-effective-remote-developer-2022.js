import React, { Component } from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import HowBecomeEffectiveRemoteDeveloper2022 from "../../components/News/HowBecomeEffectiveRemoteDeveloper2022";
import Footer from "../../components/Layouts/Footer";
import Head from "next/head";

class NewsDetails extends Component {
  render() {
    return (
      <>
        <Head>
          <title>How to become an effective remote developer 2022?</title>
          <meta
            name="description"
            content="In this age of connectivity, working remotely has become the dream  of the many .  having the ability  to work with the world’s top companies regardless of your location is a benefit a lot of developers find more suitable for their lifestyle."
          ></meta>
        </Head>
        <Navbar />

        <PageBanner
          pageTitle=" How to become an effective remote developer 2022?"
          homePageUrl="/"
          homePageText="Blogs"
          activePageText=" How to become an effective remote developer 2022?"
        />

        <HowBecomeEffectiveRemoteDeveloper2022 />

        <Footer />
      </>
    );
  }
}

export default NewsDetails;
