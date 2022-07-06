import React, { Component } from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import ManagementRemoteDevelopmentWorkers from "../../components/News/ManagementRemoteDevelopmentWorkers";
import Footer from "../../components/Layouts/Footer";
import Head from "next/head";

class NewsDetails extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Management of Remote Development workers 2022: Challenges Analyse</title>
          <meta
            name="description"
            content="The 2020 pandemic ushered within the way forward for work, which lies within the remote. Putting an end to an age-old debate about remote work flexibility, 2020 certainly made remote work a norm."
          ></meta>
        </Head>
        <Navbar />

        <PageBanner
          pageTitle="Management of Remote Development workers 2022: Challenges Analyse"
          homePageUrl="/"
          homePageText="Blogs"
          activePageText=" Management of Remote Development workers 2022: Challenges Analyse"
        />

        <ManagementRemoteDevelopmentWorkers />

        <Footer />
      </>
    );
  }
}

export default NewsDetails;
