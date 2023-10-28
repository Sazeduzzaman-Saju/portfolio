import React from "react";
import { Link } from "react-router-dom";
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
          <div className="text-center">
            <Link
              to="/projects"
              className="btn-main wow fadeInUp"
              data-wow-delay=".6s"
            >
              See More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
