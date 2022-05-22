import React, { Component } from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Top10SuccessStoriesStartups from "../../components/News/Top10SuccessStoriesStartups";
import Footer from "../../components/Layouts/Footer";
import Head from "next/head";

class NewsDetails extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Top 10 Success Stories of Startups</title>
          <meta
            name="description"
            content="The most successful startups never had it good when they actually started. In fact,  for many  of them,  the merchandise  looked completely different, served  a special  need and market!"
          ></meta>
        </Head>
        <Navbar />

        <PageBanner
          pageTitle=" Top 10 Success Stories of Startups"
          homePageUrl="/"
          homePageText="Blogs"
          activePageText=" Top 10 Success Stories of Startups"
        />

        <Top10SuccessStoriesStartups />

        <Footer />
      </>
    );
  }
}

export default NewsDetails;
