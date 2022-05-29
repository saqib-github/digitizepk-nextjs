import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import FormHireTeam from "../components/HomeOne/FormHireTeam";
import Head from "next/head";

class HireTalent extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Hiring Remote Developers for quick business assistance  </title>
          <meta
            name="description"
            content="Are you looking for business assistance, finance help or technical aid? Remote developers for quick business assistance not just  provide business , finance and technical assistance  , but also at quick remote base mechanism. Acts before it’s too late! Want more information call +92-03059158010"
          ></meta>
        </Head>
        <Navbar />

        <PageBanner
          pageTitle="Hire Top Talented Team"
          homePageUrl="/"
          homePageText="Home"
          activePageText="hire-team"
        />

        <FormHireTeam />
        <Footer />
      </>
    );
  }
}

export default HireTalent;
