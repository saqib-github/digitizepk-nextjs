import React, { Component } from 'react';
import Link from 'next/link';

class HireTopTalent extends Component {
    render() {
        return (
            <section className="features-area features-area-inner-style ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-features">
                                <i className="flaticon-cloud-computing-1"></i>
                                <h3>Hire Technical Assistance</h3>
                                {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p> */}

                                <Link href="/hire-technical-assistance">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow"></span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-features">
                                <i className="flaticon-engineer"></i>
                                <h3>Hire Finance Assistance</h3>
                                {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p> */}

                                <Link href="/hire-finance-assistance">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow"></span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-features">
                                <i className="flaticon-success"></i>
                                <h3>Hire Business Support</h3>
                                {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p> */}

                                <Link href="/hire-business-assistance">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow"></span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-features">
                                <i className="flaticon-success"></i>
                                <h3>Hire Team</h3>
                                {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p> */}

                                <Link href="/hire-team">
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

export default HireTopTalent;