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
                    src="/images/blog-details/seo1.jpg"
                    alt="Image"
                  />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <span>Posted On:</span>
                        <Link href="news-details/#">
                          <a>May 22 , 2022</a>
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

                  <h3> Search engine Optimization in 2022</h3>

                  <p>
                    Today , the very fact is that many older strategies are not
                    only ineffective in today’s SEO landscape, but some outdated
                    tactics like keyword stuffing can even negatively impact
                    SEO. This makes it imperative that you simply continually
                    adapt your SEO strategies to the latest trends.
                  </p>
                  <p>
                    Yet, staying on top of the newest SEO strategies can often
                    feel like an overwhelming prospect. to assist you stay on
                    top of the latest evolutions in SEO, and to make sure that
                    you see positive results from your SEO strategy, here may be
                    a look at the SEO trends that will have the biggest impact
                    in 2022.
                  </p>
                  <h3>1. Artificial Intelligence Play a key Role in SEO</h3>
                  <p>
                    As AI (AI) continues to change how people interact with
                    content online, AI also will begin to play a key role in SEO
                    strategy. Particularly noteworthy is Google’s AI algorithm
                    Rank Brain, as this may likely become one of the most
                    important ranking factors for Google’s search engine results
                    pages (SERPs) in 2022. Since Google revealed Rank Brain,
                    many businesses have wondered how this may affect SEO. How
                    are you able to cater your content strategy to an AI
                    algorithm?
                  </p>
                  <p>
                    While Google has not shared details on the inner workings of
                    how Rank Brain learns and analyses content, experts believe
                    that user experience is one among its primary ranking
                    factors. this suggests that click-through rate and the
                    amount of time users spend on a website will be key factors
                    that Rank Brain will use when prioritizing content. When
                    re-evaluating your SEO strategy, it's then critical that you
                    create content that is well-organized and useful so that you
                    captivate and engage readers.
                  </p>
                  <div className="article-image">
                    <img
                      height="400px"
                      width="400px"
                      src="/images/blog-details/seo1.jpg"
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
                  <h3>2. A Shift to Long narrative -Form Content</h3>
                  <p>
                    In order to ensure that you captivate and engage readers who
                    visit your website, you'll need to shift to a long-form
                    content strategy. Long-form content of three ,000 words or
                    more has been shown to urge more traffic and more shares
                    than short-form content. Shifting your focus to making
                    quality long-form content can then greatly improve your
                    search rankings. However, so as for long-form content to be
                    successful, it must be ready to keep readers engaged.To keep
                    readers engaged, it's important that you break up your
                    content into multiple sub-sections using H2 and H3
                    subheadings, as this may make it more scannable.
                  </p>
                  <p>
                    The goal is to form your content easy for readers to browse,
                    particularly on mobile devices, as big chunks of text are
                    often seen as intimidating to many readers, and it can
                    overwhelm a little screen. you ought to also make sure that
                    your content is easy to share in order to further improve
                    SEO. Include obvious sharing links at the start and end of
                    your content so that readers can share it with a click of a
                    button.
                  </p>
                  <h3>3. Mobile-Friendliness is crucial for Google Rankings</h3>
                  <p>
                    Mobile-friendliness has been a cornerstone of SEO ever since
                    Google officially made it a ranking think about 2015.
                    However, it's more critical than ever that you optimize your
                    content for mobile devices, as Google unrolled mobile-first
                    indexing in 2019.
                  </p>
                  <p>
                    This suggests that the search engine looks primarily at the
                    mobile version of a website when ranking content, as this is
                    often considered the “primary” version instead of the
                    desktop version. This switch wasn't a surprise to many
                    people, because it is estimated that nearly 75% of internet
                    users will access the internet solely via mobile devices by
                    2025.
                  </p>
                  <h4>Google Roles in making mobile friendliness </h4>
                  <p>
                    Fortunately, Google makes it easy to test how effective your
                    mobile site is with their free mobile-friendly test. you'll
                    also use Google’s Mobile Usability Report to find out if
                    there are problems with your mobile website and what you can
                    do to fix these issues.
                  </p>
                  <p>
                    Using these tools are often critical in helping you find and
                    fix mobile usability issues in your website that could be
                    negatively affecting your SEO. the very fact is that as more
                    internet use comes from mobile devices, you'll need to
                    ensure that your content is optimized with these users in
                    mind.
                  </p>
                  <div className="article-image">
                    <img
                      height="400px"
                      width="400px"
                      src="/images/blog-details/seo2.jpg"
                      alt="Image"
                    />
                  </div>
                  <h3>
                    4. Content Should Manage according to Google EAT Principle
                  </h3>
                  <p>
                    Google has repeatedly emphasized that content quality is
                    critical for ranking success. However, this often leaves
                    businesses wondering what Google means by “quality content”.
                    When trying to enhance the quality of your content for SEO
                    purposes, it's important to refer to the EAT principle; EAT
                    stands for expertise, authoritativeness, and
                    trustworthiness. Google uses these factors to work out if a
                    web page provides quality content, and it's something
                    businesses need to be aware of when developing content for
                    their website.
                  </p>
                  <p>
                    In order to ensure that you are creating quality content,
                    it's important that you create buyer personas, which may
                    help you to better understand what kind of content your
                    target audience values. Buyer personas became integral to
                    successful SEO, as they will help businesses to create
                    content that is interesting to their readers and is
                    formatted in a way that their target audience finds
                    appealing.
                  </p>
                  <p>
                    It's also important that you keep EAT in mind when you
                    develop your content. ensure that you back up claims that
                    you make with statistics and facts, and ensure that you link
                    to reputable sources. Having authoritative links in your
                    content may be a great way to fulfil all of the criteria
                    within the EAT principle.
                  </p>
                  <h3>5. Video become an effective part of SEO</h3>
                  <p>
                    If you've got not done so already, it's imperative that you
                    develop an SEO strategy that includes video. the very fact
                    is that online video platforms have exploded in the last few
                    years, and you'll even have seen for yourself how many
                    businesses have begun to use platforms like YouTube and
                    TikTok to engage with customers and expand their reach.
                  </p>
                  <p>
                    Creating optimized video content should then be an integral
                    a part of your SEO strategy moving forward. Yet, how are you
                    able to optimize video content? One way that you can do this
                    is to make sure that you optimize your video channel
                    description by including a user-friendly overview of what
                    your channel is about. Keywords also will play a critical
                    role in optimizing your video content. While you are doing
                    not want to cram your video descriptions with keywords, some
                    useful keywords and hashtags can help direct your content to
                    its intended audience.
                  </p>
                  <h3>Conclusion</h3>
                  <p>
                    SEO continues to play a critical role in how your content is
                    ranked, however, it's continually evolving and growing more
                    complex. maintaining with current trends will require you to
                    do more than stuff your content with keywords; you need to
                    be deliberate and create quality content that will rank well
                    in Google’s algorithms. If staying up-to-date with the
                    newest SEO trends feels overwhelming, be happy to contact us
                    for advice on how you can best optimize your content for
                    SEO.
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
                      <Link href="/blogs/top-10-success-stories-of-startups">
                        <a>
                          <i className="bx bx-left-arrow-alt"></i> Prev Post
                        </a>
                      </Link>
                    </div>

                    <div className="nav-next">
                      <Link href="/blogs/why-remote-developers-quick-business-assistance">
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
