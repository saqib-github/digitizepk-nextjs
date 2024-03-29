import React, { Component, Fragment } from "react";
import Link from "next/link";

import ChatwootWidget from "../../components/ChatwootWidget";

class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear();
    return (
      <>
        <Fragment>
          <ChatwootWidget />
          <footer className="footer-top-area pt-100 pb-70">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="single-widget">
                    <a href="/" className="logo">
                      <img
                        width="176px"
                        height="36px"
                        src="/images/logo-white.png"
                        alt="logo"
                      />
                    </a>

                    <p>
                      DigitizePK, is an exclusive network of the top remote
                      developers, business analyst, web software designers, SEO
                      experts, finance experts and project managers in the
                      world. Top companies hire digitize remote developers for
                      their most important projects.
                    </p>

                    <ul className="social-icon">
                      <li>
                        <a
                          href="https://www.facebook.com/Digitizepk-105830458797349/"
                          target="_blank"
                          rel="noopener"
                        >
                          <i className="bx bxl-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/digitize_pk"
                          target="_blank"
                          rel="noopener"
                        >
                          <i className="bx bxl-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://youtube.com/channel/UCStzuqwTOKOuZQnyxrIDV-A"
                          target="_blank"
                          rel="noopener"
                        >
                          <i className="bx bxl-youtube"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/company/digitizepk/"
                          target="_blank"
                          rel="noopener"
                        >
                          <i className="bx bxl-linkedin"></i>
                        </a>
                      </li>
                      {/* <li>
                                            <a href="https://www.pinterest.com/" target="_blank" rel='noopener'>
                                                <i className="bx bxl-pinterest-alt"></i>
                                            </a>
                                        </li> */}
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="single-widget">
                    <h3>Services</h3>
                    <ul>
                      <li>
                        <Link href="#">
                          <a>
                            <i className="right-icon bx bx-chevrons-right"></i>
                            Big Data
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <i className="right-icon bx bx-chevrons-right"></i>
                            UI/UX Design
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <i className="right-icon bx bx-chevrons-right"></i>
                            Desktop Application
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/service-details">
                          <a>
                            <i className="right-icon bx bx-chevrons-right"></i>
                            Mobile Application
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <i className="right-icon bx bx-chevrons-right"></i>
                            Product Engineering
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <i className="right-icon bx bx-chevrons-right"></i>
                            Machine Learning
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="single-widget">
                    <h3>Important Links</h3>

                    <ul>
                      <li>
                        <Link href="/services">
                          <a>
                            <i className="right-icon bx bx-chevrons-right"></i>
                            Services
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/community">
                          <a>
                            <i className="right-icon bx bx-chevrons-right"></i>
                            Community
                          </a>
                        </Link>
                      </li>
                      {/* <li>
                                            <Link href="/blogs">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Blog
                                                </a>
                                            </Link>
                                        </li> */}
                      <li>
                        <Link href="/contact">
                          <a>
                            <i className="right-icon bx bx-chevrons-right"></i>
                            Support
                          </a>
                        </Link>
                      </li>
                      {/* <li>
                                            <Link href="/case-study">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Case Study
                                                </a>
                                            </Link>
                                        </li> */}
                      <li>
                        <Link href="/apply">
                          <a>
                            <i className="right-icon bx bx-chevrons-right"></i>
                            Apply
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="single-widget">
                    <h3>Information</h3>

                    <ul className="information">
                      <li className="address">
                        <i className="flaticon-call"></i>
                        <span>Phone</span>
                        +92 304 6970271
                      </li>
                      <li className="address">
                        <i className="flaticon-call"></i>
                        <span>Mobile</span>
                        +92 305 9158010
                      </li>

                      <li className="address">
                        <i className="flaticon-envelope"></i>
                        <span>Email</span>
                        info@digitizepk.com
                      </li>

                      <li className="address">
                        <i className="flaticon-maps-and-flags"></i>
                        We are completely work remotely
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-shape">
              <img src="/images/shape/footer-shape-one.png" alt="Image" />
              <img src="/images/shape/footer-shape-two.png" alt="Image" />
            </div>
          </footer>

          {/* Footer Bottom Area   */}
          <footer className="footer-bottom-area">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <div className="copy-right">
                    <p>
                      Copyright &copy; {currentYear} DigitizePK. All Rights
                      Reserved
                    </p>
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="privacy">
                    <ul>
                      <li>
                        <Link href="/terms-conditions">
                          <a>Terms & Conditions</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/privacy-policy">
                          <a>Privacy Policy</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="designed">
                    <p>
                      Designed By <i className="bx bx-heart"></i>{" "}
                      <a href="https://digitizepk.com/" target="_blank">
                        DigitizePK
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </Fragment>
      </>
    );
  }
}

export default Footer;
