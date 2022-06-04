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
        <meta property="og:type" content="page" />
          <meta property="og:title" content="Industry" />
       
       <meta property="og:description" content="Remote developer for quick business assistance believe in to assist policy. DigitizePK, work remotely under the most reliable professionals and  supervision of experts to assist  businesses and introduce smart technology in various industry." />
       <meta property="og:url" content="https://digitizepk.com/industry" />
       <meta property="og:site_name" content="DigitizePK Industry" />
       <meta property="twitter:card" content="summary_large_image" />
       <meta property="twitter:site" content="@digitize_pk" />
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
