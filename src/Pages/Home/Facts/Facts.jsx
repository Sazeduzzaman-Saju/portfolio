import React from "react";

const Facts = () => {
  const factsData = [
    { value: 8240, label: "Hours of Works" },
    { value: 315, label: "Projects Done" },
    { value: 3250, label: "Satisfied Customers" },
    { value: 32, label: "Awards Winning" },
  ];

  return (
    <div>
      <section
        id="section-fun-facts"
        aria-label="section"
        className="jarallax no-top no-bottom"
      >
        <div className="de-gradient-edge-top" />
        <img src="images/background/l11.jpg" className="jarallax-img" alt="" />
        <div className="container">
          <div className="row">
            {factsData.map((fact, index) => (
              <div key={index} className="col-md-3 wow fadeIn" data-wow-delay={`${0.25 * index}s`}>
                <div className="de_count text-center">
                  <h3 className="timer" data-to={fact.value} data-speed={2500}>
                    {fact.value}
                  </h3>
                  <span>{fact.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="de-gradient-edge-bottom" />
      </section>
    </div>
  );
};

export default Facts;
