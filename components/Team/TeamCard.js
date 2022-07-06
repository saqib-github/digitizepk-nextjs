import React, { Component } from "react";
import Link from "next/link";

class TeamCard extends Component {
  render() {
    return (
      <section className="team-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-team active">
                <div className="team-single-img">
                  <img
                    height="160px"
                    width="150px"
                    src="/images/team/team1.jpeg"
                    alt="Image"
                  />

                  <div className="team-img">
                    <img src="/images/team/team-shape.png" alt="Image" />
                  </div>
                </div>

                <div className="team-content">
                  <h3>Saqib Javed</h3>
                  <span>CEO and Founder</span>

                  <ul>
                    <li>
                      <Link href="https://www.facebook.com/saqibjaved0786/">
                        <a target="_blank">
                          <i className="bx bxl-facebook" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://github.com/saqib-github">
                        <a target="_blank">
                          <i className="bx bxl-github" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.linkedin.com/in/saqib-javed-316511114">
                        <a target="_blank">
                          <i className="bx bxl-linkedin" />
                        </a>
                      </Link>
                    </li>
                    {/* <li>
                      <Link href="/team/#">
                        <a target="_blank">
                          <i className="bx bxl-website" />
                        </a>
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-team active">
                <div className="team-single-img">
                  <img
                    height="160px"
                    width="150px"
                    src="/images/team/team2.jpg"
                    alt="Image"
                  />

                  <div className="team-img">
                    <img src="/images/team/team-shape.png" alt="Image" />
                  </div>
                </div>

                <div className="team-content">
                  <h3>Mubashar Shahzad</h3>
                  <span>CEO</span>

                  <ul>
                    {/* <li>
                      <Link href="https://web.facebook.com/profile.php?id=100080901503476">
                        <a target="_blank">
                          <i className="bx bxl-facebook" />
                        </a>
                      </Link>
                    </li> */}
                    {/* <li>
                      <Link href="/team/#">
                        <a target="_blank">
                          <i className="bx bxl-twitter" />
                        </a>
                      </Link>
                    </li> */}
                    {/* <li>
                      <Link href="https://www.linkedin.com/in/mubashar-shahzad-32b796236">
                        <a target="_blank">
                          <i className="bx bxl-linkedin" />
                        </a>
                      </Link>
                    </li> */}
                    {/* <li>
                      <Link href="/team/#">
                        <a target="_blank">
                          <i className="bx bxl-pinterest-alt" />
                        </a>
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-team active">
                <div className="team-single-img">
                  <img
                    height="160px"
                    width="150px"
                    src="/images/team/jawad.jpeg"
                    alt="Image"
                  />

                  <div className="team-img">
                    <img src="/images/team/team-shape.png" alt="Image" />
                  </div>
                </div>

                <div className="team-content">
                  <h3>Mumshad Jawad</h3>
                  <span>Flutter | Dart | PHP</span>

                  <ul>
                    {/* <li>
                      <Link href="https://web.facebook.com/profile.php?id=100080901503476">
                        <a target="_blank">
                          <i className="bx bxl-facebook" />
                        </a>
                      </Link>
                    </li> */}
                    {/* <li>
                      <Link href="/team/#">
                        <a target="_blank">
                          <i className="bx bxl-twitter" />
                        </a>
                      </Link>
                    </li> */}
                    <li>
                      <Link href="https://www.linkedin.com/in/mumshad-jawad-465826221">
                        <a target="_blank">
                          <i className="bx bxl-linkedin" />
                        </a>
                      </Link>
                    </li>
                    {/* <li>
                      <Link href="/team/#">
                        <a target="_blank">
                          <i className="bx bxl-pinterest-alt" />
                        </a>
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>

            {/* <div className="col-lg-3 col-sm-6">
              <div className="single-team active">
                <div className="team-single-img">
                  <img src="/images/team/team3.png" alt="Image" />

                  <div className="team-img">
                    <img
                      height="160px"
                      width="150px"
                      src="/images/team/jawad.jpeg"
                      alt="Image"
                    />
                  </div>
                </div>

                <div className="team-content">
                  <h3>Alisa Maria</h3>
                  <span>Developer</span>

                  <ul>
                    <li>
                      <Link href="/team/#">
                        <a target="_blank">
                          <i className="bx bxl-facebook" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/team/#">
                        <a target="_blank">
                          <i className="bx bxl-twitter" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/team/#">
                        <a target="_blank">
                          <i className="bx bxl-linkedin" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/team/#">
                        <a target="_blank">
                          <i className="bx bxl-pinterest-alt" />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}

            {/* <div className="col-lg-3 col-sm-6">
              <div className="single-team active">
                <div className="team-single-img">
                  <img src="/images/team/team4.png" alt="Image" />

                  <div className="team-img">
                    <img src="/images/team/team-shape.png" alt="Image" />
                  </div>
                </div>

                <div className="team-content">
                  <h3>Peter Jack</h3>
                  <span>UI/UX Designer</span>

                  <ul>
                    <li>
                      <Link href="/team/#">
                        <a target="_blank">
                          <i className="bx bxl-facebook" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/team/#">
                        <a target="_blank">
                          <i className="bx bxl-twitter" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/team/#">
                        <a target="_blank">
                          <i className="bx bxl-linkedin" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/team/#">
                        <a target="_blank">
                          <i className="bx bxl-pinterest-alt" />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}

            {/* <div className="col-lg-3 col-sm-6">
              <div className="single-team active">
                <div className="team-single-img">
                  <img src="/images/team/team5.png" alt="Image" />

                  <div className="team-img">
                    <img src="/images/team/team-shape.png" alt="Image" />
                  </div>
                </div>

                <div className="team-content">
                  <h3>Anna Dew</h3>
                  <span>React Developer</span>

                  <ul>
                    <li>
                      <Link href="/team/#">
                        <a target="_blank">
                          <i className="bx bxl-facebook" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/team/#">
                        <a target="_blank">
                          <i className="bx bxl-twitter" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/team/#">
                        <a target="_blank">
                          <i className="bx bxl-linkedin" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/team/#">
                        <a target="_blank">
                          <i className="bx bxl-pinterest-alt" />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}

            {/* <div className="col-lg-3 col-sm-6">
              <div className="single-team active">
                <div className="team-single-img">
                  <img src="/images/team/team6.png" alt="Image" />

                  <div className="team-img">
                    <img src="/images/team/team-shape.png" alt="Image" />
                  </div>
                </div>

                <div className="team-content">
                  <h3>Zeck Keath</h3>
                  <span>Angular Developer</span>

                  <ul>
                    <li>
                      <Link href="/team/#">
                        <a target="_blank">
                          <i className="bx bxl-facebook" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/team/#">
                        <a target="_blank">
                          <i className="bx bxl-twitter" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/team/#">
                        <a target="_blank">
                          <i className="bx bxl-linkedin" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/team/#">
                        <a target="_blank">
                          <i className="bx bxl-pinterest-alt" />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}

            {/* <div className="col-lg-3 col-sm-6">
              <div className="single-team active">
                <div className="team-single-img">
                  <img src="/images/team/team7.png" alt="Image" />

                  <div className="team-img">
                    <img src="/images/team/team-shape.png" alt="Image" />
                  </div>
                </div>

                <div className="team-content">
                  <h3>Zeet Pew</h3>
                  <span>Wed Developer</span>

                  <ul>
                    <li>
                      <Link href="/team/#">
                        <a target="_blank">
                          <i className="bx bxl-facebook" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/team/#">
                        <a target="_blank">
                          <i className="bx bxl-twitter" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/team/#">
                        <a target="_blank">
                          <i className="bx bxl-linkedin" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/team/#">
                        <a target="_blank">
                          <i className="bx bxl-pinterest-alt" />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}

            {/* <div className="col-lg-3 col-sm-6">
              <div className="single-team active">
                <div className="team-single-img">
                  <img src="/images/team/team8.png" alt="Image" />

                  <div className="team-img">
                    <img src="/images/team/team-shape.png" alt="Image" />
                  </div>
                </div>

                <div className="team-content">
                  <h3>Peter Jack</h3>
                  <span>Web Developer</span>

                  <ul>
                    <li>
                      <Link href="/team/#">
                        <a target="_blank">
                          <i className="bx bxl-facebook" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/team/#">
                        <a target="_blank">
                          <i className="bx bxl-twitter" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/team/#">
                        <a target="_blank">
                          <i className="bx bxl-linkedin" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/team/#">
                        <a target="_blank">
                          <i className="bx bxl-pinterest-alt" />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}

            {/* Pagination */}
            {/* <div className="col-lg-12">
              <div className="page-navigation-area">
                <nav aria-label="Page navigation example text-center">
                  <ul className="pagination">
                    <li className="page-item">
                      <Link href="/team/#">
                        <a className="page-link page-links">
                          <i className="bx bx-chevrons-left" />
                        </a>
                      </Link>
                    </li>

                    <li className="page-item active">
                      <Link href="/team/#">
                        <a className="page-link">1</a>
                      </Link>
                    </li>

                    <li className="page-item">
                      <Link href="/team/#">
                        <a className="page-link">2</a>
                      </Link>
                    </li>

                    <li className="page-item">
                      <Link href="/team/#">
                        <a className="page-link">3</a>
                      </Link>
                    </li>

                    <li className="page-item">
                      <Link href="/team/#">
                        <a className="page-link">
                          <i className="bx bx-chevrons-right" />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default TeamCard;
