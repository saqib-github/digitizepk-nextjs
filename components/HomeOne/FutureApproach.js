import Link from "next/link";

const About = () => {
  return (
    <section className="about-area pb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="about-content">
              <h2>Future Approach</h2>
              <p>
                Remote developers for quick business assistance, focus world’s
                major issues, like,{" "}
                <a
                  href="https://www.who.int/health-topics/climate-change"
                  target="_blank"
                  rel="noopener"
                >
                  Global warmin
                </a>
                ,
                {" "}<a
                  href="https://builtin.com/artificial-intelligence/risks-of-artificial-intelligence"
                  target="_blank"
                  rel="noopener"
                >
                  Destructive artificial intelligence
                </a>
                ,
                {" "}<a
                  href="https://www.biotechnologynotes.com/biotechnology/modern-agriculture/4-major-risks-of-modern-biotechnology/881"
                  target="_blank"
                  rel="noopener"
                >
                  Biotechnology risk
                </a> {" "}
                Environmental disaster ,{" "}
                <a href="https://www.wfp.org/" target="_blank" rel="noopener">
                  Food security{" "}
                </a>{" "}
                and
                {" "}<a
                  href="https://www.unep.org/explore-topics/chemicals-waste/what-we-do/environment-health-and-pollution"
                  target="_blank"
                  rel="noopener"
                >
                  Pollution
                </a> {" "}
                Working for the betterment of business directly, and human
                beings indirectly is another strength of {" "}
                <a
                  href="https://www.digitizepk.com/blogs/why-remote-developers-quick-business-assistance/"
                  target="_blank"
                  rel="noopener"
                >
                  DigitizePK.
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="about-img">
              <img
                height="250px"
                width="250px"
                src="/images/futurevision.png"
                alt="Image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
