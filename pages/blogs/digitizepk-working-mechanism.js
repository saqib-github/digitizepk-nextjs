import React, { Component } from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import DigitizePKWorkingMechanism from "../../components/News/DigitizePKWorkingMechanism";
import Footer from "../../components/Layouts/Footer";
import Head from "next/head";

class NewsDetails extends Component {
  render() {
    return (
      <>
        <Head>
          <title>DigitizePK Working Mechanism</title>
          <meta
            name="description"
            content="DigitizePk Work remotely to assist business at quick rate. We help business, finance, and technical fields. For this purpose, we hire remote business, finance and technical experts to assist you."
          ></meta>
        </Head>
        <Navbar />

        <PageBanner
          pageTitle="DigitizePK Working Mechanism"
          homePageUrl="/"
          homePageText="Blogs"
          activePageText="DigitizePK Working Mechanism"
        />

        <DigitizePKWorkingMechanism />

        <Footer />
      </>
    );
  }
}

export default NewsDetails;
