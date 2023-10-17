import React from "react";

const Facts = () => {
  return (
    <div>
      <section
        id="section-fun-facts"
        aria-label="section"
        className="jarallax no-top no-bottom"
      >
        <div className="de-gradient-edge-top" />
        <img src="images/background/l11.jpg" className="jarallax-img" alt />
        <div className="container">
          <div className="row">
            <div className="col-md-3 wow fadeIn" data-wow-delay={0}>
              <div className="de_count text-center">
                <h3 className="timer" data-to={8240} data-speed={2500}>
                  0
                </h3>
                <span>Hours of Works</span>
              </div>
            </div>
            <div className="col-md-3 wow fadeIn" data-wow-delay=".25s">
              <div className="de_count text-center">
                <h3 className="timer" data-to={315} data-speed={2500}>
                  0
                </h3>
                <span>Projects Done</span>
              </div>
            </div>
            <div className="col-md-3 wow fadeIn" data-wow-delay=".5s">
              <div className="de_count text-center">
                <h3 className="timer" data-to={250} data-speed={2500}>
                  0
                </h3>
                <span>Satisfied Customers</span>
              </div>
            </div>
            <div className="col-md-3 wow fadeIn" data-wow-delay=".75s">
              <div className="de_count text-center">
                <h3 className="timer" data-to={32} data-speed={2500}>
                  0
                </h3>
                <span>Awards Winning</span>
              </div>
            </div>
          </div>
        </div>
        <div className="de-gradient-edge-bottom" />
      </section>
    </div>
  );
};

export default Facts;
