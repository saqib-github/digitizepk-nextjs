import '../styles/bootstrap.min.css';
import 'animate.css'
import '../styles/boxicons.min.css';
import '../styles/flaticon.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import '../styles/style.css';
import '../styles/responsive.css';

import App from 'next/app';
import Head from 'next/head';
import Loader from '../components/Shared/Loader';
import GoTop from '../components/Shared/GoTop';
import { useEffect, useState } from 'react'
import Script from 'next/script'
import * as gtag from '../lib/gtag'
import { useRouter } from 'next/router'

const MyApp = ({ Component, pageProps }) => {
    const [loading, setState] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const timerHandle = () => setTimeout(() => setState(false), 2000);
    timerHandle();
    // if (timerHandle) {
    //     clearTimeout(timerHandle);
    //     timerHandle = 0;
    // }
  }, [])
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events]);

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Head>
                    {/* <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Best remote developers for quik business assistance</title>
                    <meta property="og:type" content="website" />
        <meta property="og:title" content="DigitizePK" />
       
        <meta property="og:description" content="DigitizePK, is an exclusive network of the top remote developers, business analyst, web software designers, SEO experts, finance experts and project managers." />
        <meta property="og:url" content="https://digitizepk.com" />
        <meta property="og:site_name" content="DigitizePK" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@digitize_pk" /> */}
                </Head>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
        <Component {...pageProps} />
                
                {/* Preloader */}
                <Loader loading={loading} />

                {/* Go Top Button */}
                <GoTop scrollStepInPx="100" delayInMs="10.50" />
    </>
  )
}

export default MyApp;