import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";

class Contact extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Contact us</title>
          <meta
            name="description"
            content="Contact DigitizePK and get the assistance you need via email or phone number."
          ></meta>
        </Head>
        <Navbar />

        <PageBanner
          pageTitle="Contact"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Contact"
        />

        <ContactInfo />

        <ContactForm />

        <Footer />
      </>
    );
  }
}

export default Contact;
