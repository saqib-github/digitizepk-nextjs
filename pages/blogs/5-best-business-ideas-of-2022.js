import React, { Component } from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import BestBusinessIdeas from "../../components/News/BestBusinessIdeas";
import Footer from "../../components/Layouts/Footer";
import Head from "next/head";

class NewsDetails extends Component {
  render() {
    return (
      <>
        <Head>
          <title>5 best Business ideas of 2022</title>
          <meta
            name="description"
            content="If  you've got  been asking yourself what business to start, then this list is for you.  consistent with  small business statistics,  one among  the biggest motivations for opening your own business is being your own boss."
          ></meta>
        </Head>
        <Navbar />

        <PageBanner
          pageTitle=" 5 best Business ideas of 2022"
          homePageUrl="/"
          homePageText="Blogs"
          activePageText="5 best Business ideas of 2022"
        />

        <BestBusinessIdeas />

        <Footer />
      </>
    );
  }
}

export default NewsDetails;
