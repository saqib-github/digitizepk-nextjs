import React, { Component } from "react";
import Link from "next/link";

const blogsData = [
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
  },
  {
    imgSrc: "/images/blog-details/business-idea-1.jpg",
    date: "28 May",
    postedBy: "By Mubashar Shahzad (SEO Executive)",
    heading: "5 best Business ideas of 2022",
    description:
      "If  you've got  been asking yourself what business to start, then this list is for you.  consistent with  small business statistics,",
    href: "/blogs/5-best-business-ideas-of-2022"
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
                          style={{ height: "250px", width: "100%" }}
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

                    <p>{blog.description}</p>

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
