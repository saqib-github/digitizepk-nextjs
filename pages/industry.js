import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import Industries from "../components/HomeOne/Industries";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>Best remote industry</title>
        <meta
          name="description"
          content="Remote developer for quick business assistance believe in to assist policy. DigitizePK, work remotely under the most reliable professionals and  supervision of experts to assist  businesses and introduce smart technology in various industry."
        ></meta>
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Industry"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Industry"
      />

      <Industries />

      <Footer />
    </>
  );
};

export default Index;
