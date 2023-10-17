import React from "react";

const About = () => {
  return (
    <>
      <section id="section-about">
        <div className="container relative">
          <div className="row">
            <div className="col-md-12 text-center wow fadeInUp">
              <h2>About Me</h2>
              <div className="space-border" />
            </div>
            <div className="col-md-8 offset-md-2 text-center wow fadeInUp">
              <p>
                I am a website designer from Lousiana, with a strong focus in
                UI/UX design. I love to get new experiences and always learn
                from my surroundings. I've done more than 285 projects. You can
                check it through portfolio section on this website. I looking
                forward to any opportunities and challenges.{" "}
              </p>
            </div>
            <div className="spacer-single" />
            <div
              className="col-lg-3 position-relative wow fadeIn"
              data-wow-delay=".2s"
            >
              <div className="position-relative">
                <div className="progressbar" data-animate="false">
                  <div className="circle" data-percent={90}>
                    <div />
                  </div>
                  <h4>HTML</h4>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 position-relative wow fadeIn"
              data-wow-delay=".4s"
            >
              <div className="position-relative">
                <div className="progressbar" data-animate="false">
                  <div className="circle" data-percent={85}>
                    <div />
                  </div>
                  <h4>CSS</h4>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 position-relative wow fadeIn"
              data-wow-delay=".6s"
            >
              <div className="position-relative">
                <div className="progressbar" data-animate="false">
                  <div className="circle" data-percent={80}>
                    <div />
                  </div>
                  <h4>PHP</h4>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 position-relative wow fadeIn"
              data-wow-delay=".8s"
            >
              <div className="position-relative">
                <div className="progressbar" data-animate="false">
                  <div className="circle" data-percent={75}>
                    <div />
                  </div>
                  <h4>jQuery</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="section-my-quote"
        aria-label="section"
        className="jarallax no-top no-bottom"
      >
        <div className="de-gradient-edge-top" />
        <img src="images/background/l11.jpg" className="jarallax-img" alt />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-10 offset-md-1">
              <blockquote className="q-big wow fadeIn" data-wow-duration="3s">
                <i className="d-big icon_quotations" />
                Do more than is required. What is the distance between someone
                who achieves their goals consistently and those who spend their
                lives and careers merely following? The extra mile.
                <span className="d-quote-by">Kyros Noriaki</span>
              </blockquote>
              <div className="spacer-double" />
            </div>
          </div>
        </div>
        <div className="de-gradient-edge-bottom" />
      </section>
    </>
  );
};

export default About;
