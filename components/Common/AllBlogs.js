import React, { Component } from "react";
import Link from "next/link";

const blogsData = [
  {
    imgSrc: "/images/blog/remotedevelopers1.jpg",
    date: "15 May",
    postedBy: "By Mubashar Shahzad (SEO Executive)",
    heading: "Remote developers and DigitizePK",
    description:
      " Remote developers are the developers those are working from distance places. After the COVID-19 devastating condition major industries switch offline business model to online.",
    href: "/blogs/remote-developers-and-digitize-pk"
  },
  {
    imgSrc: "/images/blog/remotedevelopers2.jpg",
    date: "14 May",
    postedBy: "By Mubashar Shahzad (SEO Executive)",
    heading: " How to Optimize Employee Training for a Remote workplace in 2022",
    description:
      "   Remote developers for quick business assistance, proposed remote training mechanism. When COVID-19 hit in March 2020, companies quickly responded by",
    href: "/blogs/how-to-optimize-training"
  },
  {
    imgSrc: "/images/blog/remotedevelopers3.jpg",
    date: "13 May",
    postedBy: "By Mubashar Shahzad (SEO Executive)",
    heading: " Remote developers for quick business assistance 2022",
    description:
      "  Last week we released new builds of Remote developer’s for quick business assistance and JetBrains Gateway.",
    href: "/blogs/remote-developers-for-quick-business"
  },
  {
    imgSrc: "/images/blog-details/PandemiRemoteDevelopment.jpg",
    date: "17 May",
    postedBy: "By Mubashar Shahzad (SEO Executive)",
    heading: "Management of Remote Development workers 2022: Challenges Analyse",
    description:
      " The 2020 pandemic ushered within the way forward for work, which lies within the remote. Putting an end to an age-old debate about remote work flexibility,",
    href: "/blogs/management-of-remote-development-workers"
  },
  {
    imgSrc: "/images/blog/how-to-hire-remote-developers.jpg",
    date: "18 May",
    postedBy: "By Mubashar Shahzad (SEO Executive)",
    heading: "How to Hire Remote Developers?: Right Strategy",
    description:
      " There is no longer any doubt that remote work can be as productive and successful as on-site work in the office. And in some cases,",
    href: "/blogs/how-to-hire-remote-developers"
  },
  {
    imgSrc: "/images/blog/social-media.png",
    date: "21 May",
    postedBy: "By Mubashar Shahzad (SEO Executive)",
    heading: "Top 10 Success Stories of Startups",
    description:
      " The most successful startups never had it good when they actually started. In fact, for many of them, the merchandise looked completely different,",
    href: "/blogs/top-10-success-stories-of-startups"
  },
  {
    imgSrc: "/images/blog-details/seo1.jpg",
    date: "22 May",
    postedBy: "By Mubashar Shahzad (SEO Executive)",
    heading: "Search engine Optimization in 2022",
    description:
      " Today , the  very fact  is that many older strategies are not only ineffective in today’s SEO landscape,",
    href: "/blogs/search-engine-optimization-in-2022"
  },
  {
    imgSrc: "/images/blog-details/whyremotedevelopers.jpg",
    date: "23 May",
    postedBy: "By Mubashar Shahzad (SEO Executive)",
    heading: "Why remote developers for quick business assistance?",
    description:
      " Remote developers for quick business assistance introduction After Covid anaemic 2021 the whole world shift towards work from home.",
    href: "/blogs/why-remote-developers-quick-business-assistance"
  },
  {
    imgSrc: "/images/blog-details/top-remote-jobs.jpg",
    date: "24 May",
    postedBy: "By Mubashar Shahzad (SEO Executive)",
    heading: "The Best Software  Companies For Remote Jobs In 2021",
    description:
      "Glassdoor shows 3,937 companies  within the  middle of a hiring surge during Covid-19, 960 of which are in information technology.",
    href: "/blogs/best-software-companies-remote-jobs"
  }
];

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
            {blogsData.map((blog) => (
              <div className="col-lg-4 col-md-6">
                <div className="single-news">
                  <div className="blog-img">
                    <Link href={blog.href}>
                      <a>
                        <img
                          src={blog.imgSrc}
                          alt="remote developers and digitizepk"
                        />
                      </a>
                    </Link>

                    <div className="dates">
                      <span>{blog.date}</span>
                    </div>
                  </div>

                  <div className="news-content-wrap">
                    <ul>
                      <li>
                        <Link href={blog.href}>
                          <a>
                            <i className="flaticon-user"></i> {blog.postedBy}
                          </a>
                        </Link>
                      </li>
                      {/* <li>
                      <i className="flaticon-conversation"></i> 2 Comments
                    </li> */}
                    </ul>

                    <Link href={blog.href}>
                      <a>
                        <h3>{blog.heading}</h3>
                      </a>
                    </Link>

                    <p>
                      {blog.description}
                    </p>

                    <Link href={blog.href}>
                      <a className="read-more">
                        Read More <i className="bx bx-plus"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    );
  }
}

export default News;
