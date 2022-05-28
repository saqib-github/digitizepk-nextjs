import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";

class Community extends Component {
  render() {
    return (
      <>
        <Head>
          <title>DigitizePK Community</title>
          <meta
            name="description"
            content="DigitizePK has vision to work globally with prestigious established brands in the market. So remote developers for quick business assistance want to target the expert from various fields."
          ></meta>
        </Head>
        <Navbar />

        <PageBanner
          pageTitle="Community"
          homePageUrl="/"
          homePageText="Home"
          activePageText="community"
        />
        <div
          className=" text-center"
          style={{ backgroundColor: "#08143c", color: "white" }}
        >
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 col-sm-4 mt-5 mb-5">
              <p>
                Communication is intergroup part of today’s life. So as a{" "}
                <strong> Remote developer for quick business assistance</strong>{" "}
                work for the effective communication as compare to the past.{" "}
              </p>
              <h1 style={{ color: "white" }}>Community</h1>
              <p>
                <strong>DigitizePK</strong> has vision to work globally with
                prestigious established brands in the market. So{" "}
                <strong>remote developers for quick business assistance</strong>{" "}
                want to target the expert from various fields.
              </p>
              <h2 style={{ color: "white" }}>
                <strong>DigitizePK vision of collaboration with brand.</strong>
              </h2>
              <p>
                As a house team <strong>DigitizePK</strong> has another vision
                to collaboration with different brands. Because already
                established brands learn a lot . And we can learn from them
                also.
              </p>
              <h2 style={{ color: "white" }}>
                <strong>DigitizePK believe in community building.</strong>
              </h2>
              <p>
                Community building is indispensable as world turn into global
                Village speedily. Remote developers for speedy aid believe in to
                build immunity which near to our vision and approach.
              </p>
              <h2 style={{ color: "white" }}>
                <strong>DigitizePK Brain leadership</strong>
              </h2>
              <p>
                <strong>DigitizePK</strong> also believe to establish key
                leadership of remote developer’s for quick business assistance
                to different businesses effectively. Leadership play a vital
                role to solve complex problems efficiently and provide effective
                solutions within hours.
              </p>
              <h2 style={{ color: "white" }}>
                <strong>Expand your impact</strong>
              </h2>
              <p>
                Through developing effective Community,{" "}
                <strong> distance developers</strong> easily expand its impact
                towards major industries. And highly influence the biggest
                brands to hire digitize <strong>remote developers </strong> for
                urgent business help.
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default Community;
