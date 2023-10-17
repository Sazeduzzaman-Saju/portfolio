import React, { useState, useEffect } from "react";

const About = () => {
  const [aboutContent, setAboutContent] = useState({
    title: "About Me",
    description:
      "I am a website designer from Louisiana, with a strong focus in UI/UX design. I love to get new experiences and always learn from my surroundings. I've done more than 285 projects. You can check it through the portfolio section on this website. I looking forward to any opportunities and challenges.",
  });

  const [skills, setSkills] = useState([
    { name: "HTML", percent: 90 },
    { name: "CSS", percent: 85 },
    { name: "PHP", percent: 80 },
    { name: "jQuery", percent: 75 },
  ]);

  useEffect(() => {
    // Simulate dynamic data fetching or any async operation
    // You can replace this with actual API calls or other data fetching logic
    const fetchData = async () => {
      // Simulate an API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Update the state with dynamic content
      setAboutContent({
        title: "About Me",
        description:
          "This content is dynamically loaded. You can update it based on actual data.",
      });

      // Update the state with dynamic skills
      setSkills([
        { name: "React", percent: 95 },
        { name: "JavaScript", percent: 90 },
        { name: "Node.js", percent: 85 },
        { name: "Sass", percent: 80 },
      ]);
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <>
      <section id="section-about">
        <div className="container relative">
          <div className="row">
            <div className="col-md-12 text-center wow fadeInUp">
              <h2>{aboutContent.title}</h2>
              <div className="space-border" />
            </div>
            <div className="col-md-8 offset-md-2 text-center wow fadeInUp">
              <p>{aboutContent.description}</p>
            </div>
            <div className="spacer-single" />
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`col-lg-3 position-relative wow fadeIn`}
                data-wow-delay={`${0.2 * (index + 1)}s`}
              >
                <div className="position-relative">
                  <div className="progressbar" data-animate="false">
                    <div className="circle" data-percent={skill.percent}>
                      <div />
                    </div>
                    <h4>{skill.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Rest of your component remains unchanged */}
    </>
  );
};

export default About;
