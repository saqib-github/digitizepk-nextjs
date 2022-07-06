import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import AllBlogs from '../components/Common/AllBlogs';
// import HorizentalBlogsScroller from '../components/Common/HorizentalBlogsScroller';
import Footer from '../components/Layouts/Footer';
import Head from "next/head";
import NotFoundPage from './404.js';

class NewsGrid extends Component {
    render() {
        return (
            <>
            <Head>
            <title>Best blogs  Remote developers for quick business assistance </title>
          <meta
            name="description"
            content="Are you worried from  business  , finance  or technical problems ? Remote developers for quick business assistance blogs are not just  providing  guidance but also , help you to better understand  issues through  business , finance and technical experts. Begin your journey with us."
          ></meta>
           <meta property="og:type" content="articles" />
        <meta property="og:title" content="Blogs" />
       
        <meta property="og:description" content="Are you worried from  business  , finance  or technical problems ? Remote developers for quick business assistance blogs are not just  providing  guidance but also , help you to better understand  issues through  business , finance and technical experts. Begin your journey with us." />
        <meta property="og:url" content="https://digitizepk.com/blogs" />
        <meta property="og:site_name" content="DigitizePK Blogs" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@digitize_pk" />
            </Head>
                {/* <Navbar />

                <PageBanner 
                    pageTitle="Blogs" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="blogs" 
                /> 

                <AllBlogs />
                <HorizentalBlogsScroller />
                
                <Footer /> */}
                <NotFoundPage />
            </>
        );
    }
}

export default NewsGrid;