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
