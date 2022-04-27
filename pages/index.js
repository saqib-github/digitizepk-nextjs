import Navbar from '../components/Layouts/Navbar'
import MainBanner from '../components/HomeOne/MainBanner'
import Features from '../components/HomeOne/Features'
import MindSet from '../components/HomeOne/MindSet'
import FutureApproach from '../components/HomeOne/FutureApproach'
import HiringMechanism from '../components/HomeOne/HiringMechanism'
import FutureVision from '../components/HomeOne/FutureVision'
import WhyChooseUs from '../components/HomeOne/WhyChooseUs'
import Services from '../components/HomeOne/Services'
import MakeYourBusiness from '../components/Common/MakeYourBusiness'
import WhatWeOffer from '../components/HomeOne/WhatWeOffer'
import Testimonials from '../components/Common/Testimonials'
import News from '../components/Common/News'
import Footer from '../components/Layouts/Footer'

const Index = () => {
    return (
        <>
            <Navbar />
            
            <MainBanner />

            {/* <Features /> */}

            <MindSet />

            <FutureApproach />

            <HiringMechanism />


            <FutureVision />

            <WhyChooseUs />




            <Testimonials />

            <News />
            
            <Footer />
        </>
    )
}

export default Index