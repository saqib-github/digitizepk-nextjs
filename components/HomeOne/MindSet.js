import Link from "next/link";

const About = () => {
  return (
    <section className="about-area pb-100 mt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="about-img">
              <img
                height="250px"
                width="250px"
                src="/images/mindset.png"
                alt="mind set behind digitizePk"
              />
            </div>
          </div>

          <div className="col-lg-8">
            <div className="about-content">
              <h2>Mindset behind DigitizePK</h2>
              <p>
                After the{" "}
                <a
                  href="https://www.cbsnews.com/amp/news/anthony-fauci-the-takeout-covid-19-positive"
                  target="_blank"
                  rel="noopener"
                >
                  Covid-19
                </a>{" "}
                pandemic, the World shifted towards{" "}
                <a
                  href="https://www.google.com/amp/s/www.nytimes.com/2020/08/20/style/office-culture.amp.html "
                  target="_blank"
                  rel="noopener"
                >
                  {" "}
                  working from home{" "}
                </a>{" "}
                And{" "}
                <a
                  href="https://www.google.com/amp/s/amp.cnn.com/cnn/2022/01/27/success/full-time-remote-decision-pandemic/index.html"
                  target="_blank"
                  rel="noopener"
                >
                  {" "}
                  Remote work{" "}
                </a>{" "}
                makes huge progress. Where remote development companies like{" "}
                <a href="https://www.toptal.com" target="_blank" rel="noopener">
                  Toptal
                </a>{" "}
                and{" "}
                <a
                  href="https://www.turing.com/"
                  target="_blank"
                  rel="noopener"
                >
                  Turing
                </a>{" "}
                are providing an efficient team of{" "}
                <a
                  href="https://www.linkedin.com/jobs/remote-developer-jobs"
                  target="_blank"
                  rel="noopener"
                >
                  remote developers
                </a>{" "}
                . DigitizePK introduced itself as,{" "}
                <a
                  href="https://www.digitizepk.com/blogs/remote-developers-and-digitize-pk"
                  target="_blank"
                  rel="noopener"
                >
                remote developers for quick business assistance in 2022</a>{" "} to
                assist businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
