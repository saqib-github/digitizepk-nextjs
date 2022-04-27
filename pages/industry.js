import Navbar from '../components/Layouts/Navbar'
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layouts/Footer'
import Industries from '../components/HomeOne/Industries'


const Index = () => {
    return (
        <>
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
    )
}

export default Index