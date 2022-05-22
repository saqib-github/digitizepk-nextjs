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
                {/* <div className="article-image">
                  <img
                    src="/images/blog-details/blog-details.jpg"
                    alt="Image"
                  />
                </div> */}

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <span>Posted On:</span>
                        <Link href="news-details/#">
                          <a>May 21 , 2022</a>
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

                  <h1 className="mt-3 mb-3"> Successful startups and history </h1>

                  <p>
                    The most successful startups never had it good when they
                    actually started. In fact, for many of them, the merchandise
                    looked completely different, served a special need and
                    market!
                  </p>
                  <p>
                    Now, if you’re watching building your app with a custom
                    software development company, take a look at the software
                    requirements document template to request for proposals.
                  </p>
                  <p>
                    We have compiled the inside stories of 10 most successful
                    startups today. all of them began with a simple idea and
                    look where they are.
                  </p>
                  <h3>Tip: </h3>
                  <p>
                    If you’re looking to urge your idea off the ground, Arkenea
                    may be a top rated healthcare software development company
                    trusted by healthcare organizations and HealthTech
                    entrepreneurs across the country to develop their HealthTech
                    startups.
                  </p>

                  {/* <blockquote className="flaticon-quote">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Repellendus aliquid praesentium eveniet illum asperiores,
                      quidem, ipsum voluptatum numquam ducimus nisi
                      exercitationem dolorum facilis.
                    </p>
                  </blockquote> */}
                  <h2>1 AirBnB</h2>
                  <p>
                    This is a story of 3 guys and how they went from renting
                    mattresses to a $10 billion company. In 2007, designers
                    Brian Chesky and Joe Gebbia, couldn’t afford the rent on
                    their San Francisco apartment.
                  </p>
                  <p>
                    There was a design conference coming to San Francisco and
                    the city’s hotels were fully booked, in order that they came
                    up with the idea of renting out three airbeds on their
                    living-room floor and cooking their guests breakfast.
                  </p>
                  <p>
                    They founded a simple blog and got three renters (two guys,
                    one girl) for $80 each.
                  </p>
                  <p>
                    After a little success and product market fit, they enlisted
                    a former flatmate and a computing graduate, Nathan
                    Blecharczyk, to develop the web site and join the venture
                  </p>
                  <h2>2 Instagram</h2>
                  <p>
                    This is a story of two guys who made an app in flat 8 weeks.
                    Kevin Systrom, a Stanford graduate who worked on Google’s
                    Gmail and company development, spent his weekends developing
                    an app that allowed location-aware photo and note-sharing,
                    dubbing it Burbn.
                  </p>
                  <p>
                    That’s how Kevin met Mike Krieger, an early Burbn user and
                    Instagram’s co-founder. Later, Burbn was reduced to photos
                    only and dubbed named Instagram.
                  </p>
                  {/* <div className="article-image">
                    <img
                      height="400px"
                      width="400px"
                      src="/images/blog-details/instagram.jpg"
                      alt="Image"
                    />
                  </div> */}
                  <h2>3 Pinterest</h2>
                  <p>
                    Raised by doctor parents, Ben Silbermann assumed he would
                    follow the identical path. He attended Yale University
                    starting in 1999 and soon realized that he didn’t want to be
                    doctor. After a consulting gig in Washington DC, working for
                    Google, and a failed app, he came up with the another idea.
                  </p>
                  <p>
                    In 2009, Ben and a university friend, Paul Sciarra, together
                    with Evan Sharp, started performing on a site on which
                    people could show collections of things they were interested
                    in, on an interactive pin-board format.
                  </p>
                  <p>
                    Ben personally wrote to the site’s first 7,000 users
                    offering his personal telephone number and even meeting with
                    some of its users. Over Thanksgiving dinner, Ben’s
                    girlfriend thought of a reputation for it: Pinterest.
                  </p>
                  <h2>4 Angry Birds</h2>
                  <p>
                    Just what percentage times the founders of Angry Birds tried
                    to build a successful one. Moral of the story is that
                    whether or not you fail 51 times, you simply need to succeed
                    once!
                  </p>
                  <h2>5 LinkedIn</h2>
                  <p>
                    In late 2002, Reid Hoffman recruited a team of old
                    colleagues from SocialNet and PayPal to figure on a new
                    idea. By May 2003, Reid launched LinkedIn out of his front
                    room , inviting 350 of his contacts to hitch his network and
                    create their own profiles.
                  </p>
                  <p>
                    The business started with a slow growth at first—as few as
                    20 signups on some days—but, by the autumn , it showed
                    enough promise to draw in an investment from Sequoia
                    Capital.
                  </p>
                  <h2>6 Uber</h2>
                  <p>
                    After a conference in Paris, Travis Kalanick and Garrett
                    Camp were complaining about the various crappy things we all
                    have to deal with in life, including finding a cab. the
                    subsequent thing you know, the 2 were already brainstorming,
                    brooding about ways to find cars at the right place, at the
                    proper time.
                  </p>
                  <h2>7 Snapchat</h2>
                  <p>
                    Evan Spiegel, Reggie Brown, and Bobby Murphy, three friends
                    from college were testing out their entrepreneurial skills.
                    During an off-the-cuff chat Reggie said, “I wish these
                    photos I’m sending this girl would disappear.”
                  </p>
                  <p>
                    Soon after, Evan mentioned as a ‘million dollar idea.’ They
                    worked on the app and launched within the name of Picaboo.
                    But later after a clash between with Reggie, Evan and Bobby
                    asked him to go away and changed the name to Snapchat.
                  </p>
                  <h2>8 WhatsApp</h2>
                  <p>
                    Jan Koum and Brian Acton, two friends and colleagues from
                    Yahoo were frustrated with the thought of having so many
                    advertisements on any page. In 2007, both left Yahoo and
                    took a year to decompress. Both applied, and failed, to
                    figure at Facebook.
                  </p>
                  <p>
                    After plenty of ups and downs they launched WhatsApp in
                    2009, with a transparent purpose that their service would
                    definitely not carry any advertising and would maintain a
                    relentless focus on delivering a gimmickless, reliable,
                    friction-free user experience.
                  </p>
                  <h2>9 Twitter</h2>
                  <p>
                    Twitter’s origins dwell a day long brainstorming session
                    held by board members of the podcasting company Odeo.
                  </p>
                  <p>
                    Jack Dorsey, then an undergraduate student at my University,
                    introduced the thought of an individual using an SMS service
                    to communicate with a small group.
                  </p>
                  <h2>10 Facebook</h2>
                  <p>
                    A 19-year-old lad and a second-year Harvard student, Mark
                    Zuckerberg launched an indoor social networking site for
                    Harvard students.
                  </p>
                  <p>
                    Soon after the location got popular among students, it
                    expanded its reach to other universities. In 2004, the
                    location moved its operations base to Palo Alto, California
                    and received its first investment from PayPal co-founder
                    Peter Thiel.
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

                {/* <div className="post-navigation">
                  <div className="navigation-links">
                    <div className="nav-previous">
                      <Link href="news-details/#">
                        <a>
                          <i className="bx bx-left-arrow-alt"></i> Prev Post
                        </a>
                      </Link>
                    </div>

                    <div className="nav-next">
                      <Link href="news-details/#">
                        <a>
                          Next Post <i className="bx bx-right-arrow-alt"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div> */}

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
