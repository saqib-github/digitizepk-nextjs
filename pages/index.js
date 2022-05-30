import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeOne/MainBanner";
// import Features from '../components/HomeOne/Features'
import MindSet from "../components/HomeOne/MindSet";
import FutureApproach from "../components/HomeOne/FutureApproach";
import HiringMechanism from "../components/HomeOne/HiringMechanism";
import FutureVision from "../components/HomeOne/FutureVision";
import WhyChooseUs from "../components/HomeOne/WhyChooseUs";
// import WhatWeOffer from '../components/HomeOne/WhatWeOffer'
// import Testimonials from '../components/Common/Testimonials'
import News from "../components/Common/News";
import Footer from "../components/Layouts/Footer";
import Head from 'next/head';

const Index = () => {
  return (
    <>
     <Head>
      <title>Best remote developers for quik business assistance</title>
      <meta
          name="description"
          content="DigitizePK, is an exclusive network of the top remote
          developers, business analyst, web software designers, SEO
          experts, finance experts and project managers in the world.
          Top companies hire digitize remote developers for their most
          important projects."
        ></meta>
      </Head>
      <Navbar />

      <MainBanner />

      {/* <Features /> */}

      <MindSet />

      <FutureApproach />

      <HiringMechanism />

      {/* <FutureVision /> */}

      <WhyChooseUs />

      {/* <Testimonials /> */}

      <News />

      <Footer />
    </>
  );
};

export default Index;
