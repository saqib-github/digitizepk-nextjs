import React, { Component } from 'react';
import Link from 'next/link';

class Industries extends Component {
    render() {
        return (
            <section className="offer-area gray-bg ptb-100">
			    <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12">
                            <div className="service-card">
                                <h3>
                                    <Link href="#">
                                        <a>Healthcare </a>
                                    </Link>
                                </h3>
                                <p><strong>Remote developer for quick business assistance</strong> believe in to assist policy. DigitizePK, work remotely under the most reliable professional supervision of experts to assist and introduce smart technology in healthcare industry.</p>
                            </div>
                        </div>

                        <div className="col-lg-12 col-sm-12">
                            <div className="service-card">
                                <h3>
                                    <Link href="#">
                                        <a>Agriculture </a>
                                    </Link>
                                </h3>
                                <p><strong>Hiring developers</strong> for the introducing mechanism to preserve food in a better way is another goal of DigitizePK. Agriculture is directly link with food security and indispensable for human beings all over the world. <strong> DigitizePK </strong> came to assist business to grow and connect with right customers.</p>
                            </div>
                        </div>

                        <div className="col-lg-12 col-sm-12">
                            <div className="service-card">
                                <h3>
                                    <Link href="#">
                                        <a>Non-Profit Companies</a>
                                    </Link>
                                </h3>
                                <p><strong>Remote Developers for urgent business help</strong> work with non-profit companies to improve their mechanism to serve their plan efficiently.</p>
                            </div>
                        </div>

                        <div className="col-lg-12 col-sm-12">
                            <div className="service-card">
                                <h3>
                                    <Link href="#">
                                        <a>Research</a>
                                    </Link>
                                </h3>
                                <p>Research is another field where <strong>DigitizePK</strong> aim to serve. <strong>Distance software developers for speedy business assistance</strong> work with different research firms to promote their research and make it efficiently.</p>
                            </div>
                        </div>

                        <div className="col-lg-12 col-sm-12">
                            <div className="service-card">
                                <h3>
                                    <Link href="#">
                                        <a>Education</a>
                                    </Link>
                                </h3>
                                <p><strong>Remote software developers</strong> also aim to serve in education. Make this field more effective, efficient and smart with the passage of time.</p>
                            </div>
                        </div>

                        <div className="col-lg-12 col-sm-12">
                            <div className="service-card">
                                <h3>
                                    <Link href="#">
                                        <a>Information Technology</a>
                                    </Link>
                                </h3>
                                <p>DigitizePK also believe in information technology.<strong> Remote developers for urgent business assistance</strong> have future vision to work with different IT industries to promote them. <strong>DigitizePK</strong> believe in to introduce new innovations and modernity. </p>
                            </div>
                        </div>


                        <div className="col-lg-12 col-sm-12">
                            <div className="service-card">
                                <h3>
                                    <Link href="#">
                                        <a>Finance Industry </a>
                                    </Link>
                                </h3>
                                <p>Finance is another field which targeted by <strong>DigitizePK.</strong>  We have financial experts who understand the financial needs of an industry. And assist them in right direction.</p>
                            </div>
                        </div>

                        <div className="col-lg-12 col-sm-12">
                            <div className="service-card">
                                <h3>
                                    <Link href="#">
                                        <a>B2B/B2C</a>
                                    </Link>
                                </h3>
                                <p><strong>DigitizePk</strong> strive to work with business and customers relatively.We belive in to provide assistance to variuos businesses,and promote their relationship with customers at the same time.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="offer-shape">
                    <img src="/images/shape/services-shape/1.png" alt="Image" />
                    <img src="/images/shape/services-shape/2.png" alt="Image" />
                    <img src="/images/shape/services-shape/3.png" alt="Image" />
                    <img src="/images/shape/services-shape/4.png" alt="Image" />
                    <img src="/images/shape/services-shape/5.png" alt="Image" />
                    <img src="/images/shape/services-shape/6.png" alt="Image" />
                </div>
            </section>
        );
    }
}

export default Industries;