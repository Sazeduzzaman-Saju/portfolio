import React, { useEffect, useState } from "react";

const Education = () => {
  const [education, setEducation] = useState([
    {
      id: 1,
      title: "Master in Design",
      school: "New York University",
      duration: "2004 - 2008",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.",
    },
    {
      id: 2,
      title: "Bachelor of Arts",
      school: "University of London",
      duration: "2008 - 2012",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.",
    },
    {
      id: 3,
      title: "Artist of College",
      school: "University of Sydney",
      duration: "2002 - 2004",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.",
    },
  ]);

  return (
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
  );
};

export default Education;
