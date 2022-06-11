import React, { Component } from 'react';

class ContactInfo extends Component {
    render() {
        return (
            <div className="contact-info-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-6">
                            <div className="single-contact-info">
                                <i className="bx bx-envelope"></i>
                                <h3>Email Us:</h3>
                                <p><a href="mailto:hello@digitizepk.com">hello@digitizepk.com</a></p>
                                <p><a href="mailto:info@digitizepk.com">info@digitize.com</a></p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-sm-6">
                            <div className="single-contact-info">
                                <i className="bx bx-phone-call"></i>
                                <h3>Call Us:</h3>
                                <p>Tel. + <a href="tel:+923046970271">(+92) 304-6970271</a></p>
                                <p>Tel. + <a href="tel:+923338138826">(+92) 333-8138826</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactInfo;