import React, { useState, useEffect } from "react";
import Education from "./Education";
import { useQuery } from "@tanstack/react-query";

const Resume = () => {
  const {
    data: experiences,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["experiences"],
    queryFn: async () => {
      const response = await fetch("http://localhost:5000/experiences");
      return response.json();
    },
    refetchInterval: 1000, // Auto refetch every 60 seconds (adjust the interval as needed)
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: Failed to fetch data</div>;
  }

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
                  {experiences.map((experience,index) => (
                    <li key={index} className="d_timeline-item">
                       <h3 className="d_timeline-title">{experience.start_date} <strong className="text-black px-2"> To</strong>{experience.end_date}</h3>
                      <p className="d_timeline-text">
                        <span className="d_title">{experience.company_name}</span>
                        <span className="d_company">{experience.designation}</span>
                        {experience.job_description}
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
