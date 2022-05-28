import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Apply from "../components/HomeOne/Apply";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";

class Services extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Apply as  remote developer</title>
          <meta
            name="description"
            content="To apply as remote developer for DigitizePK, a candidate must have 3 years of experience , English proficiency, strong grip on technical skill, solid loyalty with the company. Effective Communication System is another requirement for apply as remote developer for urgent business help."
          ></meta>
        </Head>
        <Navbar />

        <PageBanner
          pageTitle="Apply"
          homePageUrl="/"
          homePageText="Home"
          activePageText="apply"
        />

        <Apply />

        <Footer />
      </>
    );
  }
}

export default Services;
