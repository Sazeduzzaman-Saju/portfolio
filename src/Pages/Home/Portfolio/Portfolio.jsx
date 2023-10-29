import React from "react";
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <>
      <section id="section-portfolio" className="no-bottom">
        <div className="container relative">
          <div className="row">
            <div className="col-md-12 text-center wow fadeInUp">
              <h2>Portfolio</h2>
              <div className="space-border" />
            </div>
          </div>
          <Projects></Projects>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
