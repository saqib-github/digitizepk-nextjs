import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

class MainBanner extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <>
                <div className="main-banner-area main-banner-area-four">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="banner-text">
                                    <h1>Turn Your Documents Into Data With AI</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida risus commodo</p>
                                    
                                    <div className="banner-btn">
                                        <Link href="/about-1">
                                            <a className="default-btn">
                                                Learn More
                                            </a>
                                        </Link>

                                        <div
                                            onClick={e => {e.preventDefault(); this.openModal()}}
                                            className="default-btn active popup-youtube"
                                        > 
                                            <i className="bx bx-play"></i> How it work?
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 pr-0">
                                <div className="banner-four-main-img">
                                    <img className="animate__animated animate__fadeInRight animate__fast" src="/images/home-four/main-img4.png" alt="Image" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Shape Images */}
                    <div className="over-shape">
                        <img src="/images/home-one/shape/animate1.png" alt="Image" />
                        <img src="/images/home-one/shape/animate1.png" alt="Image" />
                        <img src="/images/home-one/shape/animate2.png" alt="Image" />
                        <img src="/images/home-one/shape/animate2.png" alt="Image" />
                        <img src="/images/home-one/shape/animate3.png" alt="Image" />
                    </div>
                </div>
            
                {/* If you want to change the video need to update below videoID */}
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='_ysd-zHamjk' 
                    onClose={() => this.setState({isOpen: false})} 
                />
            </>
        );
    }
}

export default MainBanner;