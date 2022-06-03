import React, { Component } from "react";
import NewsSidebar from "./NewsSidebar";
import Link from "next/link";
import CommentsArea from "./CommentsArea";

class NewsDetailsContent extends Component {
  render() {
    return (
      <section className="news-details-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  <img
                    width="100%"
                    src="/images/blog-details/blog-details.jpg"
                    alt="Image"
                  />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <span>Posted On:</span>
                        <Link href="news-details/#">
                          <a>May 15 , 2022</a>
                        </Link>
                      </li>
                      <li>
                        <span>Posted By:</span>
                        <Link href="news-details/#">
                          <a>Mubashar Shahzad (SEO Executive)</a>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <h3> What are remote developer’s?</h3>

                  <p>
                    Remote developers are the developers those are working from
                    distance places. After the COVID-19 devastating condition
                    major industries switch offline business model to online. IT
                    , health ,research and education are the industries who take
                    step towards remote business.
                  </p>
                  <h3>Remote developers and DigitizePK</h3>
                  <p>
                    Through the passage of time remote developers demand
                    increases , and they work from home and distance places.
                    Hiring remote developers is the need of hour. DigitizePK is
                    one of it. Who hire software developers from remote areas
                    throughout the world. Hiring developers for DigitizePK is
                    complex but easy mechanism.
                  </p>

                  {/* <blockquote className="flaticon-quote">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Repellendus aliquid praesentium eveniet illum asperiores,
                      quidem, ipsum voluptatum numquam ducimus nisi
                      exercitationem dolorum facilis.
                    </p>
                  </blockquote> */}
                  <h3>
                    Talk to our Remote Business Analyst for urgent business help
                  </h3>
                  <p>
                    <strong>
                      Remote developers for quick business assistance
                    </strong>{" "}
                    believe in to understand and assist policy so, our business
                    analyst expert in our team will work with you to understand
                    your goals, technical needs, and team dynamics.
                  </p>
                  <div className="article-image">
                    <img
                      // height="400px"
                      width="100%"
                      src="/images/blog-details/talk to our business analyst.jpg"
                      alt="Image"
                    />
                  </div>
                  <h3>Work With efficient team</h3>
                  <p>
                    Under effective process remote developers for quick business
                    assistance introduce the right team within days. Average
                    time to match your requirements is under 24 hours
                  </p>
                  <div className="article-image">
                    <img
                      // height="400px"
                      width="100%"
                      src="/images/blog-details/work with efficient team.jpg"
                      alt="Image"
                    />
                  </div>
                  <h3>The High rate of success, Guaranteed</h3>
                  <p>
                    As a distance developers ensure high rate of success,
                    otherwise work with your new team member on a trial basis
                    (pay only if satisfied), we provide you the right people for
                    the job.
                  </p>
                  <h3>Requirements behind hiring team</h3>
                  <p>
                    Business Analyst, technical assistance , software
                    developers, finance experts ,digital marketing head , SEO
                    Expert under the supervision of Mr. Saqib developer
                  </p>
                </div>

                {/* <div className="article-footer">
                  <div className="article-tags">
                    <span>
                      <i className="bx bx-share-alt"></i>
                    </span>
                    <Link href="news-details/#">
                      <a>Share</a>
                    </Link>
                  </div>

                  <div className="article-share">
                    <ul className="social">
                      <li>
                        <Link href="news-details/#">
                          <a target="_blank">
                            <i className="bx bxl-facebook"></i>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="news-details/#">
                          <a target="_blank">
                            <i className="bx bxl-twitter"></i>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="news-details/#">
                          <a target="_blank">
                            <i className="bx bxl-linkedin"></i>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="news-details/#">
                          <a target="_blank">
                            <i className="bx bxl-pinterest-alt"></i>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div> */}

                <div className="post-navigation">
                  <div className="navigation-links">
                    {/* <div className="nav-previous">
                      <Link href="news-details/#">
                        <a>
                          <i className="bx bx-left-arrow-alt"></i> Prev Post
                        </a>
                      </Link>
                    </div> */}

                    <div className="nav-next">
                      <Link href="/blogs/how-to-optimize-training">
                        <a>
                          Next Post <i className="bx bx-right-arrow-alt"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Comments Area */}
                {/* <CommentsArea /> */}
              </div>
            </div>

            {/* <div className="col-lg-4 col-md-12">
              <NewsSidebar />
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default NewsDetailsContent;
