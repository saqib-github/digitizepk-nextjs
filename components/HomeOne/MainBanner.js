import React, { Component } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false
});

class MainBanner extends Component {
  state = {
    isOpen: false
  };
  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <>
        <div className="main-banner-area main-banner-area-four">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="banner-text">
                  <h1>Hire the top remote developers Talent</h1>
                  <p style={{ fontSize: "20px" }}>
                    DigitizePK, is an exclusive network of the top remote
                    developers, business analyst, web software designers, SEO
                    experts, finance experts and project managers in the world.
                    Top companies hire digitize remote developers for their most
                    important projects.
                  </p>

                  <div className="banner-btn">
                    <Link href="/hire-top-talent">
                      <a className="default-btn">
                        <strong style={{ fontSize: "20px" }}>
                          Hire Top Talent
                        </strong>
                      </a>
                    </Link>

                    {/* <div
                      onClick={(e) => {
                        e.preventDefault();
                        this.openModal();
                      }}
                      className="default-btn active popup-youtube"
                    >
                      <i className="bx bx-play"></i> How it work?
                    </div> */}
                  </div>
                </div>
              </div>

              <div className="col-lg-6 pr-0">
                <div className="banner-four-main-img">
                  <img
                    className="animate__animated animate__fadeInRight animate__fast"
                    src="/images/home-four/main-img4.png"
                    alt="Image"
                  />
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
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="_ysd-zHamjk"
          onClose={() => this.setState({ isOpen: false })}
        />
      </>
    );
  }
}

export default MainBanner;
