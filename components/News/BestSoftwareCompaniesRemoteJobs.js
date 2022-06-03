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
                    src="/images/blog-details/top-remote-jobs.jpg"
                    alt="Image"
                  />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <span>Posted On:</span>
                        <Link href="news-details/#">
                          <a>May 24 , 2022</a>
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

                  <h3>Best Software development Companies</h3>

                  <p>
                    Glassdoor shows 3,937 companies within the middle of a
                    hiring surge during Covid-19, 960 of which are in
                    information technology.
                  </p>
                  <p>
                    Leading software companies browsing a hiring surge right now
                    include Aha! Software, Appen, Clevertech, Crowd Strike, Data
                    dog, Dataiku, Fastly, Hashicorp, Leidos, Liveops, Netskope,
                    Proofpoint, Rackspace, Zapier and Zendesk.
                  </p>
                  <p>
                    Modern Tribe, Dataiku, Zapier, PartnerCentric, Slack, Fuse,
                    ScienceLogic and SAP are the very best rated companies by
                    their employees on Glassdoor who offer remote jobs today.
                  </p>
                  <div className="article-image">
                    <img
                      // height="400px"
                      width="100%"
                      src="/images/blog-details/top-remote-jobs.jpg"
                      alt="Image"
                    />
                  </div>
                  <h3>Remote based software technical professional jobs</h3>
                  <p>
                    Between Glassdoor, Indeed, LinkedIn and Monster, there are
                    over 16,500 open remote-based software technical
                    professional jobs available today. Companies with open,
                    remote-based solutions include Aha!, Box, Cloudera, Demand
                    Base, Jobot, Red Hat, NTT Data, Salesforce and lots of
                    others.
                  </p>

                  {/* <blockquote className="flaticon-quote">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Repellendus aliquid praesentium eveniet illum asperiores,
                      quidem, ipsum voluptatum numquam ducimus nisi
                      exercitationem dolorum facilis.
                    </p>
                  </blockquote> */}
                  <h3>GitLab</h3>
                  <div className="article-image">
                    <img
                      // height="400px"
                      width="100%"
                      src="/images/blog-details/gitlab.jpg"
                      alt="Image"
                    />
                  </div>
                  <p>
                    GitLab alone has 79 remote full-time positions open today
                    and is widely considered a pacesetter in creating a
                    productive, positive remote working culture, with 88% of
                    employees saying they might recommend the company to a
                    friend.
                  </p>
                  <h3>Work from home job opportunities</h3>
                  <p>
                    These and lots of other useful insights are based on
                    comparing the leading tech companies who offer remote,
                    work-from-home job positions by their Glassdoor scores.
                    Leading tech companies are ranked on the share of employees
                    who would recommend their company to a friend and the
                    percent of employees who approve of the CEO. the entire
                    number of open job positions by company is in the third
                    column of the table.
                  </p>
                  <div className="article-image">
                    <img
                      // height="400px"
                      width="100%"
                      src="/images/blog-details/top-remote-jobs-2.jpg"
                      alt="Image"
                    />
                  </div>
                  <h3>PowerToFly </h3>
                  <p>
                    PowerToFly has had a powerful growth year and is the go-to
                    remote job search engine for women professionals. the
                    corporate was launched in 2014 by Milena Berry and Katharine
                    Zaleski to connect Fortune 500 companies, startups and
                    growing companies with women looking to figure for
                    businesses that value gender diversity and inclusion.
                    PowerToFly’s number of obtainable remote jobs has soared
                    from 994 earlier this year to over 2,500 open remote
                    positions today. 94% of employees would recommend performing
                    at PowerToFly to a friend and 93% approve of their CEOs.
                  </p>
                  <h3>The best tech companies for remote jobs in 2021</h3>
                  <p>Where to seek out Remote Tech Jobs Today</p>
                  <p>
                    Angelist has 2,700 enterprise software-related remote
                    positions on their website today with companies including
                    Auth0, white wolf Networks, Confluent, Couchbase, HackerOne,
                    Slack, Mind Tickle, MongoDB, Sendoso, Tanium and lots of
                    others.
                  </p>
                  <p>
                    FlexJobs has 5,566 remote-based software jobs that include
                    full-time, part-time and freelance positions. Open positions
                    include Senior Software Engineers, DevOps Engineers, Product
                    Managers, Project Managers, Full Stack Developers and more.
                  </p>
                  <p>
                    Remotive provides a curated list of 192 startups, many of
                    which have open remote-based positions on December 1, 2020.
                  </p>
                  <p>
                    Stack Overflow has 815 open remote-based job positions
                    available today, including Canonical (39 open jobs), Octane
                    AI, Shield AI and lots of others.
                  </p>
                  <p>
                    Torch Capital’s Talent Connect Portal has 980 positions open
                    today, including several from Double Verify, Electric, Lexis
                    Nexis, Nexon America, Shopify, Tesla et al.
                  </p>
                  <p>
                    Working Nomads site currently has 11,216 remote,
                    work-from-home development jobs advertised. There also are
                    2,021 marketing, 1,922 management, 1,873 system
                    administration, 1,592 design and 1,164 sales remote,
                    work-from-home job postings
                  </p>
                  <p>
                    <strong>
                      <a href="https://www.linkedin.com/in/mubashar-shahzad-32b796236">
                        Mubashar Shahzad follow me on LinkedIn
                      </a>
                    </strong>
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
                      <Link href="/why-remote-developers-quick-business-assistance">
                        <a>
                          <i className="bx bx-left-arrow-alt"></i> Prev Post
                        </a>
                      </Link>
                    </div>

                    <div className="nav-next">
                      <Link href="/blogs/5-best-business-ideas-of-2022">
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
