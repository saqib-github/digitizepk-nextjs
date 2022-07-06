import React, { Component } from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import RemoteDevelopersAndDigitizePK from "../../components/News/RemoteDevelopersAndDigitizePK";
import Footer from "../../components/Layouts/Footer";
import Head from "next/head";

class NewsDetails extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Remote developers and DigitizePK</title>
          <meta
            name="description"
            content="Remote developers are the developers those are working from distance places. After the COVID-19 devastating condition major industries switch offline business model to online. IT , health ,research and education are the industries who take step towards remote business."
          ></meta>
        </Head>
        <Navbar />

        <PageBanner
          pageTitle=" Remote developers and DigitizePK"
          homePageUrl="/"
          homePageText="Blogs"
          activePageText=" Remote developers and DigitizePK"
        />

        <RemoteDevelopersAndDigitizePK />

        <Footer />
      </>
    );
  }
}

export default NewsDetails;
