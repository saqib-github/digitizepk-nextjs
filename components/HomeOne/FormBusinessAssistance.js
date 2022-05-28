import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";

const alertContent = () => {
  MySwal.fire({
    title: "Thank You!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  type: 'Short Term',
  service: "Business Assistance",
  bModel: "",
  issue1: "",
  issue2: "",
  issue3: "",
  cDetail: "",
  email: "",
  nTeam: "2-5",
};

const FormBusinessAssistance = () => {
  const [contact, setContact] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${baseUrl}/api/business`;
      const { type, service, email, issue1, issue2, issue3, cDetail, bModel, nTeam } = contact;
      const payload = { type, service, email, issue1, issue2, issue3, cDetail, bModel, nTeam };
      const response = await axios.post(url, payload);
      console.log(response);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="main-contact-area pb-100">
      <div className="container">
        <div className="contact-wrap contact-pages mb-0">
          <div className="contact-form">
            <div className="section-title">
              <h2>What kind of business assistance you want ?</h2>
              <select
                name="type"
                value={contact.type}
                onChange={handleChange}
                className="form-select mt-3"
                aria-label="Default select example"
                required
              >
                <option selected value="*Short Term">Short Term</option>
                <option value="Long Term">Long Term</option>
                <option value="Instant">Instant </option>
                <option value="Other">Other</option>
              </select>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-12 col-sm-12">
                  <div className="form-group">
                    <h2>Your Business Model</h2>
                    <input
                      type="text"
                      name="bModel"
                      placeholder="Your Business Model"
                      className="form-control"
                      value={contact.bModel}
                      onChange={handleChange}
                      // required
                    />
                  </div>
                </div>
                <h2>Major Three Issues</h2>
                <div className="col-lg-4 col-sm-4">
                  <div className="form-group">
                    <input
                      type="text"
                      name="issue1"
                      placeholder="*Issue No. 1"
                      className="form-control"
                      value={contact.issue1}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-sm-4">
                  <div className="form-group">
                    <input
                      type="text"
                      name="issue2"
                      placeholder="Issue No. 2"
                      className="form-control"
                      value={contact.issue2}
                      onChange={handleChange}
                      // required
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-sm-4">
                  <div className="form-group">
                    <input
                      type="text"
                      name="issue3"
                      placeholder="Issue No. 3"
                      className="form-control"
                      value={contact.issue3}
                      onChange={handleChange}
                      // required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                  <h2>How many people are you want  to hire ?</h2>
                    <select
                      className="form-select mt-3"
                      aria-label="Default select example"
                    >
                      <option value="2-5" selected>2-5</option>
                      <option value="5-9">5-9</option>
                      <option value="9-15">9-15 </option>
                      <option value="15-20">15-20</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <h2>Please Enter Your contact details ?</h2>
                    <div className="form-group">
                      <input
                        type="text"
                        name="cDetail"
                        placeholder="*Email/Phone Number"
                        className="form-control"
                        value={contact.cDetail}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <h2>Your Email Address ?</h2>
                    <div className="form-group">
                      <input
                        type="text"
                        name="email"
                        placeholder="*Email"
                        className="form-control"
                        value={contact.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-sm-12">
                  <button type="submit" className="default-btn btn-two">
                    Send Query
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormBusinessAssistance;
