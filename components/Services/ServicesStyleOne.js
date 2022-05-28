import React, { Component } from 'react';
import Link from 'next/link';

class ServicesStyleOne extends Component {
    render() {
        return (
            <section className="features-area features-area-inner-style ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6" style={{cursor: "pointer"}}>
                            <div className="single-features">
                                <i className="flaticon-cloud-computing-1"></i>
                                <h3>Technical Assistance</h3>
                                {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p> */}

                                <Link href="/hire-top-talent">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow"></span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6" style={{cursor: "pointer"}}>
                            <div className="single-features">
                                <i className="flaticon-engineer"></i>
                                <h3>Finance Assistance</h3>
                                {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p> */}

                                <Link href="/hire-top-talent">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow"></span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6" style={{cursor: "pointer"}}>
                            <div className="single-features">
                                <i className="flaticon-success"></i>
                                <h3>Business Support</h3>
                                {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p> */}

                                <Link href="/hire-top-talent">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow"></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServicesStyleOne;