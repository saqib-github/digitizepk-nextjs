import React, { Component } from "react";
import Link from "next/link";

class News extends Component {
  render() {
    return (
      <section className="news-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Latest Blogs </h2>
            {/* <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
              ipsum fugit temporibus possimus itaque accusamus voluptatibus
              dignissimos nobis eaque.
            </p> */}
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/RemoteDevelopersAndDigitizePK">
                    <a>
                      <img
                        src="/images/blog/remotedevelopers1.jpg"
                        alt="remote developers and digitizepk"
                      />
                    </a>
                  </Link>

                  <div className="dates">
                    <span>15 May</span>
                  </div>
                </div>

                <div className="news-content-wrap">
                  <ul>
                    <li>
                      <Link href="/RemoteDevelopersAndDigitizePK">
                        <a>
                          <i className="flaticon-user"></i> By Mubashar Shahzad
                          (SEO Executive)
                        </a>
                      </Link>
                    </li>
                    {/* <li>
                      <i className="flaticon-conversation"></i> 2 Comments
                    </li> */}
                  </ul>

                  <Link href="/RemoteDevelopersAndDigitizePK">
                    <a>
                      <h3>Remote developers and DigitizePK</h3>
                    </a>
                  </Link>

                  <p>
                    Remote developers are the developers those are working from
                    distance places. After the COVID-19 devastating condition
                    major industries switch offline business model to online.
                  </p>

                  <Link href="/RemoteDevelopersAndDigitizePK">
                    <a className="read-more">
                      Read More <i className="bx bx-plus"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/HowToOptimizeTraining">
                    <a>
                      <img
                        src="/images/blog/remotedevelopers2.jpg"
                        alt=" Remote developers for quick business assistance and Remote Training"
                      />
                    </a>
                  </Link>

                  <div className="dates">
                    <span>14 May</span>
                  </div>
                </div>

                <div className="news-content-wrap">
                  <ul>
                    <li>
                      <Link href="/HowToOptimizeTraining">
                        <a>
                          <i className="flaticon-user"></i> By Mubashar Shahzad
                          (SEO Executive)
                        </a>
                      </Link>
                    </li>
                    {/* <li>
                      <i className="flaticon-conversation"></i> 3 Comments
                    </li> */}
                  </ul>

                  <Link href="/HowToOptimizeTraining">
                    <a>
                      <h3>
                        How to Optimize Employee Training for a Remote workplace
                        in 2022
                      </h3>
                    </a>
                  </Link>

                  <p>
                    <strong>
                      {" "}
                      Remote developers for quick business assistance,
                    </strong>{" "}
                    proposed remote training mechanism. When COVID-19 hit in
                    March 2020, companies quickly responded by
                  </p>

                  <Link href="/HowToOptimizeTraining">
                    <a className="read-more">
                      Read More <i className="bx bx-plus"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/RemoteDevelopersForQuickBusiness">
                    <a>
                      <img
                        src="/images/blog/remotedevelopers3.jpg"
                        alt="Remote developers for quick business assistance and Gateway"
                      />
                    </a>
                  </Link>

                  <div className="dates">
                    <span>13 May</span>
                  </div>
                </div>

                <div className="news-content-wrap">
                  <ul>
                    <li>
                      <Link href="/RemoteDevelopersForQuickBusiness">
                        <a>
                          <i className="flaticon-user"></i> By Mubashar Shahzad
                          (SEO Executive)
                        </a>
                      </Link>
                    </li>
                    {/* <li>
                      <i className="flaticon-conversation"></i> 4 Comments
                    </li> */}
                  </ul>

                  <Link href="/RemoteDevelopersForQuickBusiness">
                    <a>
                      <h3>
                        Remote developers for quick business assistance 2022
                      </h3>
                    </a>
                  </Link>

                  <p>
                    Last week we released new builds of{" "}
                    <strong>
                      {" "}
                      Remote developer’s for quick business assistance{" "}
                    </strong>{" "}
                    and JetBrains Gateway.
                  </p>

                  <Link href="/RemoteDevelopersForQuickBusiness">
                    <a className="read-more">
                      Read More <i className="bx bx-plus"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default News;
