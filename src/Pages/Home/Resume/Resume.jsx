import React, { useState, useEffect } from "react";

const Resume = () => {
  const [experiences, setExperiences] = useState([]);
  const [education, setEducation] = useState([]);

  useEffect(() => {
    // Simulate dynamic data fetching or any async operation
    // You can replace this with actual API calls or other data fetching logic
    const fetchData = async () => {
      // Simulate an API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Update the state with dynamic experiences
      setExperiences([
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

      // Update the state with dynamic education
      setEducation([
        {
          id: 1,
          title: "Master in Design",
          school: "New York University",
          duration: "2004 - 2008",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.",
        },
        {
          id: 2,
          title: "Bachelor of Arts",
          school: "University of London",
          duration: "2004 - 2008",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.",
        },
        {
          id: 3,
          title: "Artist of College",
          school: "University of Sydney",
          duration: "2006 - 2004",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.",
        },
      ]);
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once on mount

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
              <div className="p-4">
                <h3 className="s_border">Education</h3>
                <ul className="d_timeline">
                  {education.map((edu) => (
                    <li key={edu.id} className="d_timeline-item">
                      <h3 className="d_timeline-title">{edu.duration}</h3>
                      <p className="d_timeline-text">
                        <span className="d_title">{edu.title}</span>
                        <span className="d_company">{edu.school}</span>
                        {edu.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
