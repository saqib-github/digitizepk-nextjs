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
                    src="/images/blog-details/whyremotedevelopers.jpg"
                    alt="Image"
                  />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <span>Posted On:</span>
                        <Link href="news-details/#">
                          <a>May 23 , 2022</a>
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

                  <h3>
                    {" "}
                    Remote developers for quick business assistance introduction{" "}
                  </h3>

                  <p>
                    After Covid anaemic 2021 the whole world shift towards work
                    from home. And Remote work make huge progress. Where remote
                    developers like @toptal and @turing are here to provide a
                    efficient team of remote developers . DigitizePK introduce
                    itself in 2022 to assist business through remote developers
                    for quick business assistance mechanism.
                  </p>
                  <div className="article-image">
                    <img
                      height="400px"
                      width="400px"
                      src="/images/blog-details/whyremotedevelopers.jpg"
                      alt="Image"
                    />
                  </div>
                  <h3>
                    Reason behind Remote developers for quick business
                    assistance{" "}
                  </h3>
                  <p>
                    In the Era of advancement no one have enough time to wait
                    for business solution for days or atleast week. Everyone
                    want urgent base solution. That’s the reason e-commerce is
                    its peak now. Like Alibaba and Amazon generate a huge
                    revenue. So, remote developers for quick business
                    assistance, came with the idea to assist businesses
                    essential at quick mechanism. In which business solution,
                    finance , and technical issues will cover at urgent base.
                  </p>
                  <div className="article-image">
                    <img
                      height="400px"
                      width="400px"
                      src="/images/blog-details/whyremotedevelopers2.jpg"
                      alt="Image"
                    />
                  </div>

                  {/* <blockquote className="flaticon-quote">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Repellendus aliquid praesentium eveniet illum asperiores,
                      quidem, ipsum voluptatum numquam ducimus nisi
                      exercitationem dolorum facilis.
                    </p>
                  </blockquote> */}
                  <h3>
                    Working mechanism of Remote developers for quick business
                    assistance
                  </h3>
                  <p>
                    For this purpose Remote developers for quick business
                    assistance, have proper team for three core departments.
                    Firstly for business issues , We have experts those can
                    understand the business mechanism in depth and able to
                    provide most appropriate solution at urgent base.
                    Simultaneously, DigitizePK have Finance remote experts those
                    provide most worthy opinions on the base of their vast
                    experiences. Furthermore , technical experts team assist in
                    complex problems that are facing by different businesses at
                    quick mechanism.
                  </p>
                  <h3>Hiring Mechanism of Experts for businesses </h3>
                  <p>
                    Remote developers for quick business assistance have proper
                    mechanism of Hiring from home. And have highly success rate
                    of Hiring remote developers. However , hiring team is
                    comprising psychologist, environmental experts ,
                    researchers, international affairs professionals, technical
                    recruits from different countries , solid data from
                    different firms of various countries that help to hire
                    professionally. Additionally , core experts of businesses ,
                    finance and technical are also included in the team to hire
                    a professional for our clients or businesses.
                  </p>
                  <h3>We ensure to minimise any risk to handle project </h3>
                  <p>
                    Remote developers for quick business assistance have
                    mechanism to handle projects that ensure to minimise any
                    risk . For this purpose we have software’s and various
                    useful applications to connect our business clients to our
                    experts. And make them aware of any development during
                    handling the project.
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
                    <div className="nav-previous">
                      <Link href="/search-engine-optimization-in-2022">
                        <a>
                          <i className="bx bx-left-arrow-alt"></i> Prev Post
                        </a>
                      </Link>
                    </div>

                    <div className="nav-next">
                      <Link href="/blogs/best-software-companies-remote-jobs">
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
