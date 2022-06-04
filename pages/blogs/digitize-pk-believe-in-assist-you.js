import React, { Component } from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import DigitizePKBelieveAssistYou from "../../components/News/DigitizePKBelieveAssistYou";
import Footer from "../../components/Layouts/Footer";
import Head from "next/head";

class NewsDetails extends Component {
  render() {
    return (
      <>
        <Head>
          <title>DigitizePK (Believe in assist you)</title>
          <meta
            name="description"
            content="The most successful startups never had it good when they actually started. In fact,  for many  of them,  the merchandise  looked completely different, served  a special  need and market!"
          ></meta>
        </Head>
        <Navbar />

        <PageBanner
          pageTitle="DigitizePK (Believe in assist you)"
          homePageUrl="/"
          homePageText="Blogs"
          activePageText="DigitizePK (Believe in assist you)"
        />

        <DigitizePKBelieveAssistYou />

        <Footer />
      </>
    );
  }
}

export default NewsDetails;
