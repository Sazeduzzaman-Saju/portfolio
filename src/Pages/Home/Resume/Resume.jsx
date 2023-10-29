import React, { useState, useEffect } from "react";
import Education from "./Education";

const Resume = () => {
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      title: "Founder & Creative Director",
      company: "Kyros Studio",
      duration: "2014 - now",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.",
    },
    {
      id: 2,
      title: "Senior UI / UX Designer",
      company: "Google Inc",
      duration: "2010 - 2014",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.",
    },
    {
      id: 3,
      title: "Graphic Designer",
      company: "Kyros Studio",
      duration: "2008 - 2010",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.",
    },
  ]);

  return (
    <>
      <section id="section-resume">
        <div className="container relative">
          <div className="row">
            <div className="col-md-12 text-center wow fadeInUp">
              <h2>My Resume</h2>
              <div className="space-border" />
            </div>
          </div>
          <div className="row gh-5">
            <div className="col-lg-6 wow fadeInUp">
              <div className="p-4">
                <h3 className="s_border">Experiences</h3>
                <ul className="d_timeline">
                  {experiences.map((experience) => (
                    <li key={experience.id} className="d_timeline-item">
                      <h3 className="d_timeline-title">{experience.duration}</h3>
                      <p className="d_timeline-text">
                        <span className="d_title">{experience.title}</span>
                        <span className="d_company">{experience.company}</span>
                        {experience.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp">
              <Education />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
