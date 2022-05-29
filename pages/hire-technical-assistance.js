import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import FormTechnicalAssistance from "../components/HomeOne/FormTechnicalAssistance";
import Head from "next/head";

class HireTalent extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Best Technical Quick finance assistance </title>
          <meta
            name="description"
            content="Facing Technical problems? Remote developers for quick business assistance not just  provide technical  assistance , but also at quick remote base mechanism. Our Technical  experts rightly suggest solutions & improvements in your business. Acts before it’s too late!"
          ></meta>
        </Head>
        <Navbar />

        <PageBanner
          pageTitle="Hire Top Tecnical Assistance"
          homePageUrl="/"
          homePageText="Home"
          activePageText="hire-technical-assistance"
        />

        <FormTechnicalAssistance />
        <Footer />
      </>
    );
  }
}

export default HireTalent;
