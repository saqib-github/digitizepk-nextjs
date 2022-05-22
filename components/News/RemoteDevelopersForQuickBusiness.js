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
                    src="/images/blog-details/rider.jpg"
                    alt="Image"
                  />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <span>Posted On:</span>
                        <Link href="news-details/#">
                          <a>May 13 , 2022</a>
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
                  <h3>Remote developers for quick business assistance</h3>
                  <p>
                    Last week we released new builds of{" "}
                    <strong>
                      Remote developer’s for quick business assistance
                    </strong>{" "}
                    and JetBrains Gateway. During this release cycle, our team
                    has focused on the general solution quality and bug fixes.
                    additionally to the standard improvements, the newest
                    version has several noticeable new features, which we’ll
                    highlight during this blog post.
                  </p>
                  <h3>
                    Remote developers for quick business assistance and Gateway
                  </h3>
                  <p>
                    <strong>
                      Remote developers for quick business assistance
                    </strong>{" "}
                    with Gateway introduce a feature that permits you to use
                    JetBrains IDEs hosted on a foreign server. you'll install a
                    JetBrains IDE as a backend service and connect via the
                    JetBrains Client, an area application that gives a
                    well-known , full-featured, customizable UI for the remote
                    IDE.{" "}
                    <strong>
                      Remote developers for quick business assistance
                    </strong>{" "}
                    remains in Beta – you'll read more here.
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
                    Remote developers for quick business assistance meets Rider
                  </h3>
                  <p>
                    Rider 2022.1 supports a Beta version of the{" "}
                    <strong>
                      Remote developers for quick business assistance
                    </strong>{" "}
                    functionality. you'll initiate the workflow from the Welcome
                    screen within the IDE or use the JetBrains Gateway
                    application. It takes just a couple of clicks to line up the{" "}
                    <strong>SSH connection,</strong>
                    select your .NET solution on a foreign machine, and begin
                    performing on it via the JetBrains Client. Learn more about
                    Rider 2022.1 during this blog post.
                  </p>
                  <div className="article-image">
                    <img
                      height="400px"
                      width="400px"
                      src="/images/blog-details/rider.jpg"
                      alt="Image"
                    />
                  </div>
                  <h3>New settings for remote servers and business </h3>
                  <p>
                    <strong>
                      Remote developers for quick business assistance,
                    </strong>{" "}
                    now features a Backend center widget, which shows CPU load,
                    memory, disk capacity, and other parameters you'll got to
                    monitor the backend status and manage basic settings
                    together with your remote machine.
                  </p>
                  <p>
                    The new security setting now allows you to use SSH key
                    forwarding to authenticate access to git repositories from
                    your remote machine without storing private keys on a
                    foreign server. Alternatively, you'll use the SSH agent
                    helper to try to this.
                  </p>
                  <p>
                    Starting from build 2022.1, you'll specify the download path
                    and exact locations of your IDE backend on your remote
                    machine.
                  </p>
                  <h3>
                    Local thin client adds new features as remote developers{" "}
                  </h3>
                  <p>
                    The JetBrains Client now supports more file editors, so
                    you'll work not only with text-based files, but also with
                    <strong>
                      {" "}
                      PNG images, UML diagrams, Jupyter Notebook files, and
                      Android layout resources.
                    </strong>
                  </p>
                  <p>
                    We’ve also improved the debugging functionality and made
                    multiple actions available so you'll effortlessly examine
                    your code when developing remotely.
                  </p>
                  <p>
                    Run with coverage and a Profiler are available from the
                    gutter menu. The context menu now includes Maven and Gradle
                    tool windows, and more helpful submenu items are added.
                  </p>
                  <p>
                    A new bug fix makes backwards and forwards navigation
                    function correctly during remote development sessions.
                  </p>
                  <h3>Several UI updates for quick business assistance </h3>
                  <p>
                    The IDE main menu has been refreshed, helping you discover
                    the remote development functionality even faster: File
                    Status Colors within the project view may be a minor, but
                    nice, visual addition during this release.
                  </p>
                  <div className="article-image">
                    <img
                      height="400px"
                      width="400px"
                      src="/images/blog-details/ui.jpg"
                      alt="Image"
                    />
                  </div>
                  <h3>Availability Ensure</h3>
                  <p>
                    <strong>
                      {" "}
                      Remote developers for quick business assistance, is out
                      there within the built-in functionality in IntelliJ IDEA
                      Ultimate, PyCharm Professional, GoLand, PhpStorm, CLion,
                      RubyMine, and now Rider.
                    </strong>{" "}
                    The Gateway standalone application is compatible with
                    WebStorm.
                  </p>
                  <p>
                    <strong>
                      Remote developers for quick business assistance
                    </strong>{" "}
                    is free if you've got a license for any IDE listed above.
                  </p>
                  <ul>
                    <li>Download the Gateway app.</li>
                    <li>Read the way to start guide.</li>
                    <li>
                      Check the regularly updated FAQ to seek out answers to the
                      foremost common questions.
                    </li>
                    <li>
                      If you see any problems, please submit your feedback (logs
                      are always helpful) via the bug tracker.
                    </li>
                    <li>
                      Explore the Deep Dive Into JetBrains Gateway blog post.
                    </li>
                  </ul>
                  <p>
                    If you've got any questions otherwise you would really like
                    to share your feedback, be happy to go away a comment below,
                    contact us by email, or share this post together with your
                    colleagues.
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
                      <Link href="/blogs/how-to-optimize-training/">
                        <a>
                          <i className="bx bx-left-arrow-alt"></i> Prev Post
                        </a>
                      </Link>
                    </div>

                    <div className="nav-next">
                      <Link href="/blogs/management-of-remote-development-workers">
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
