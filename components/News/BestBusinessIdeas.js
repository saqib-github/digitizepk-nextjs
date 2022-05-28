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
                    src="/images/blog-details/business-idea-1.jpg"
                    alt="Image"
                  />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <span>Posted On:</span>
                        <Link href="news-details/#">
                          <a>May 28 , 2022</a>
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

                  <h3> Make your own Boss </h3>

                  <p>
                    If you've got been asking yourself what business to start,
                    then this list is for you. consistent with small business
                    statistics, one among the biggest motivations for opening
                    your own business is being your own boss. Owning a business
                    gives you the liberty to work when, where, or how you would
                    like.
                  </p>
                  <strong>
                    Let’s take a glance at the list of business ideas that’ll
                    make you money in 2022:
                  </strong>
                  <h3>1. Drop shipping E-Commerce </h3>
                  <p>
                    Are you looking to sell products online but don’t have the
                    cash to buy and store inventory? Consider drop shipping!
                    Drop shipping is an ecommerce business model in which you
                    don’t have to manage any physical products.
                  </p>
                  <h4>Set-up Online Store </h4>
                  <p>
                    All you've got to do is set up an online store and partner
                    with suppliers who are ready to store, package, and ship
                    orders to your customers. There’s no have to spend hours on
                    product research, because you'll use drop shipping apps like
                    Automizely to find awesome products to sell.
                  </p>
                  <div className="article-image">
                    <img
                      height="400px"
                      width="400px"
                      src="/images/blog-details/business-idea-2.jpg"
                      alt="Image"
                    />
                  </div>
                  <h4>Drop Shipping Course and Shopify </h4>
                  <p>
                    Check out this drop shipping course from Shopify to learn
                    more about selling online without inventory. If you’re
                    looking for easy online business ideas to pursue, it might
                    be hard to find something that tops drop shipping. It’s one
                    among the simplest businesses to start if you have access to
                    the right tools and resources.
                  </p>
                  <h4>
                    The Biggest reason behind inclination towards drop shipping{" "}
                  </h4>
                  <p>
                    The biggest reason people are often drawn to drop shipping
                    is that you don’t have to hold inventory. However, if
                    holding inventory isn’t a problem (maybe there’s enough room
                    in that spare closet), you'll consider sourcing products
                    wholesale.
                  </p>
                  <p>
                    Online marketplaces like Handshake enable small business
                    owners to seek out unique, high-quality products and build
                    long-lasting relationships with suppliers. It’s worth
                    testing as a supplement to drop shipping if you already know
                    what you want to sell.
                  </p>

                  {/* <blockquote className="flaticon-quote">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Repellendus aliquid praesentium eveniet illum asperiores,
                      quidem, ipsum voluptatum numquam ducimus nisi
                      exercitationem dolorum facilis.
                    </p>
                  </blockquote> */}
                  <h3>2. Print on Demand</h3>
                  <p>
                    <p>
                      If you’re trying to find proven business ideas to execute,
                      try print on demand.{" "}
                    </p>
                    Print on demand (POD) is once you sell your own custom
                    designs on items like phone cases, mugs, and t-shirts, but
                    you don’t actually print the artwork. Instead, you
                    collaborate with suppliers who print your design on the
                    product—they even package and ship the item to your
                    customer, so you don’t need to worry about logistics. Also,
                    you simply pay once you have sold the products. No sales
                    equals no costs.
                  </p>
                  <h4>Shopify Store </h4>
                  <p>
                    One of the quickest ways to get started is to create a
                    Shopify store and install a POD app like Printify. In terms
                    of selling , partnering with Instagram influencers to market
                    your POD items is an effective way to reach audiences. to
                    gauge whether print on demand is the right option for you,
                    watch our video where we get into a healthy debate with
                    Wholesale Ted (a print-on-demand company).
                  </p>
                  <div className="article-image">
                    <img
                      height="400px"
                      width="400px"
                      src="/images/blog-details/business-idea-1.jpg"
                      alt="Image"
                    />
                  </div>
                  <h3>3. Translation</h3>
                  <p>
                    Multilingual people are always in demand, so if you'll speak
                    two or more languages, consider starting a little business
                    where you can monetize those skills.
                  </p>
                  <h4>Freelance Platform </h4>
                  <p>
                    You can look for clients on Upwork and Flex jobs and slowly
                    build your portfolio. As you're employed successfully with
                    more and more companies, you'll hire more translators who
                  </p>
                  <p>
                    specialize in other languages to take things off your plate.
                    It’s also an honest idea to market your business on social
                    media websites, because it can help you reach a wider
                    audience.
                  </p>
                  <p>
                    Got only some hours to spare each day? Translation is one of
                    the best side business ideas to pursue, because it lets you
                    schedule your clients based on when you are available to
                    work.
                  </p>
                  <h3>4. Website Flipping</h3>
                  <p>
                    Website flipping is among the new business ideas that have
                    gotten everyone from work-at-home parents to recent
                    graduates excited. It involves buying an already running
                    website, improving its design and content, then selling it
                    for a profit.
                  </p>
                  <h4>Platforms for purchase and sell websites </h4>
                  <p>
                    There are quite few places where you can buy and sell
                    websites to earn a profit. Shopify’s marketplace, Exchange,
                    for instance , allows you to shop for ecommerce websites
                    that you can further improve via content marketing, SEO, and
                    other tactics. Once your site begins to get more revenue
                    than when you acquired it, you'll list it for sale on the
                    marketplace.
                  </p>
                  <div className="article-image">
                    <img
                      height="400px"
                      width="400px"
                      src="/images/blog-details/business-idea-3.jpg"
                      alt="Image"
                    />
                  </div>
                  <h3>5. Home-based Catering</h3>
                  <p>
                    If you've got a knack for cooking and see it as a creative
                    outlet, you'll make a decent income by opening a home-based
                    catering business.
                  </p>
                  <p>
                    The initial investment depends on how big you would like the
                    setup to be. for instance , if you begin with smaller events
                    that you can manage on your own, you ought to be able to
                    start your business for less.
                  </p>
                  <p>
                    Most home-based caterers start by creating an internet site
                    , experimenting with local food markets, or joining
                    platforms that allow cooking experts to squeeze some profits
                    from their culinary skills.
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
                      <Link href="/blogs/best-software-companies-remote-jobs">
                        <a>
                          <i className="bx bx-left-arrow-alt"></i> Prev Post
                        </a>
                      </Link>
                    </div>

                    {/* <div className="nav-next">
                      <Link href="/blogs/how-to-optimize-training">
                        <a>
                          Next Post <i className="bx bx-right-arrow-alt"></i>
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
