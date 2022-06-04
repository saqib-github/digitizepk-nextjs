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
                    src="/images/blog-details/digitizepk-1.jpg"
                    alt="Image"
                  />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <span>Posted On:</span>
                        <Link href="news-details/#">
                          <a>Jun 4 , 2022</a>
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

                  <h3> DigitizePK (Believe in assist you)</h3>

                  <p>
                    DigitizePK, is an exclusive network of the top remote
                    developers for quick business assistance, business analyst,
                    finance experts and technical specialists in the world. Top
                    companies{" "}
                    <a
                      href="https://www.digitizepk.com/hire-top-talent/"
                      target="_blank"
                      rel="noopener"
                    >
                      hire
                    </a>{" "}
                    digitize remote developers for their most important
                    projects.
                  </p>
                  <h3>Background </h3>
                  <p>
                    After the Covid-19 pandemic, the World shifted towards
                    working from home. And Remote work makes huge progress.
                    DigitizePK introduced itself as, provide assistance to
                    businesses at quick rate.
                  </p>
                  <div className="article-image">
                    <img
                      // height="400px"
                      width="100%"
                      src="/images/blog-details/digitizepk-1.jpg"
                      alt="remote developers for quick business assistance, background"
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
                  <h3>Hiring Mechanism</h3>
                  <p>
                    Remote developers for quick business assistance,{" "}
                    <a
                      href="https://www.digitizepk.com/hire-top-talent/"
                      target="_blank"
                      rel="noopener"
                    >
                      hire remote developers
                    </a>{" "}
                    with an effective mechanism.
                  </p>
                  <div className="article-image">
                    <img
                      // height="400px"
                      width="100%"
                      src="/images/blog-details/digitizepk-2.png"
                      alt="hiring mechanism"
                    />
                  </div>
                  <h4 className="mt-4">
                    Talk to our Remote Business Analyst for urgent business help
                  </h4>
                  <p>
                    Remote developers for quick business assistance believe in
                    to understand and assist policy so, our business analyst
                    expert in our team will work with you to understand your
                    goals, technical needs, and team dynamics.
                  </p>
                  <h4>Work With an efficient team</h4>
                  <p>
                    Under effective process, remote developers for quick
                    business assistance introduce the right team within days.
                    the average time to match your requirements is under 24
                    hours
                  </p>
                  <h4>The High rate of success, Guaranteed</h4>
                  <p>
                    As a distance developers ensure high rate of success,
                    otherwise work with your new team member on a trial basis
                    (pay only if satisfied), we provide you the right people for
                    the job.
                  </p>
                  <h3>Why Business Organizations’ Choose DigitizePK</h3>
                  <p>
                    In the era of advancement, no one has enough time to wait
                    for a business solution for days or at least a week.
                    Everyone wants an urgent base solution. That’s the reason
                    e-commerce is at its peak now. Like Alibaba and Amazon
                    generate huge revenue. So, remote developers for quick
                    business assistance, came with the idea to assist businesses
                    essential at quick mechanism. In which business solution,
                    finance, and technical issues will cover at urgent base.
                  </p>
                  <h4>The Enormous rate of Success</h4>
                  <p>
                    Our highly professional selective mechanism generates 98%
                    hire success rate. DigitizePK have proper mechanism of
                    hiring from home. And have highly success rate of{" "}
                    <a
                      href="https://www.digitizepk.com/hire-top-talent/"
                      target="_blank"
                      rel="noopener"
                    >
                      Hiring remote developers
                    </a>{" "}
                    .
                  </p>
                  <p>
                    Hiring team is comprising psychologist, researchers’
                    international affairs professionals’ technical recruits from
                    different countries, solid data from different firms of
                    various countries that help to hire professionally.
                    Additionally, core experts of businesses, finance technical
                    are also included in the team to hire a professional for our
                    clients or businesses.
                  </p>
                  <h4>Efficient remote developers</h4>
                  <p>
                    We are working as development team so, every single remote
                    developer in our global network has the highest levels of
                    expert integrity, professionalism, and communication.
                  </p>
                  <h4>We Ensure to minimize any risk to handle project</h4>
                  <p>
                    Remote developers for quick business assistance have an
                    efficient mechanism to handle projects that ensure to
                    minimize any risk. For this purpose, we have software’s and
                    various useful applications to connect our business clients
                    to our experts. And make them aware of any development
                    during handling the project.
                  </p>
                  <h4>Highly Professional Team Work</h4>
                  <p>
                    For this purpose, Remote developers for quick business
                    assistance, have proper team for three core departments.
                    Firstly, for business issues, we have experts those can
                    understand the business mechanism in depth and able to
                    provide most appropriate solution at urgent base.
                    Simultaneously, DigitizePK have Finance remote experts those
                    provide most worthy opinions on the base of their vast
                    experiences. Furthermore, technical experts team assist in
                    complex problems that are facing by different businesses at
                    quick mechanism.
                  </p>
                  <h4>Effective Communication System</h4>
                  <p>
                    Remote developers for quick business assistance have an
                    efficient communication system. We respond quickly for any
                    client’s query. And always willing to a provide technical,
                    finance, and business assistance.
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
                      <Link href="/blogs/how-become-effective-remote-developer-2022">
                        <a>
                          <i className="bx bx-left-arrow-alt"></i> Prev Post
                        </a>
                      </Link>
                    </div>

                    {/* <div className="nav-next">
                      <Link href="/blogs/how-to-optimize-training">
                        <a>
                          Next Post <a className="bx bx-right-arrow-alt" />
                        </a>
                      </Link>
                    </div> */}
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
