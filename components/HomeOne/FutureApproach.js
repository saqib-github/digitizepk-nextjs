import Link from "next/link";

const About = () => {
  return (
    <section className="about-area pb-100 mt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="about-content">
              <h2>DigitizePK Future Approach</h2>
              <p>
                Distant developers for urgent business aid, focuses world’s
                major issues, Global warming, Destructive artificial
                intelligence, Biotechnology risk, Environmental disaster, Ocean
                conservation, Food security and Pollution. Work for the
                betterment of business directly, and human beings indirectly is
                another strength of DigitizePk.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="about-img">
              <img src="/images/futurevision.png" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
