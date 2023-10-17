/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";

const Banner = () => {
  // Data Start
  //   For Social Icons
  const socialIcons = [
    { platform: "facebook", iconClass: "fa fa-facebook fa-lg" },
    { platform: "twitter", iconClass: "fa fa-twitter fa-lg" },
    { platform: "instagram", iconClass: "fa fa-instagram fa-lg" },
    { platform: "linkedin", iconClass: "fa fa-linkedin fa-lg" },
    // Add more social icons as needed
  ];
  //   For title Icons
  const [title, setName] = useState("Welcome to My Website");
  const [name, setTitle] = useState("Sazeduzzaman");
  const [roles, setRoles] = useState([
    "Frontend Developer",
    "Freelancer",
    "Web Designer",
    "Mern Developer",
  ]);
  //   For Locations Icons
  const [locations, setLocations] = useState([
    { country: "Present", cities: ["Dhaka", "Khilkhet"] },
    { country: "Permanent", cities: ["Darshana", "Khulna"] },
  ]);

  console.log(setName, setTitle, setRoles, setLocations);
  // Data End
  return (
    <>
      <div id="banner">
        <div className="float-text">
          <div className="de_social-icons">
            {socialIcons.map((socialIcon, index) => (
              <a key={index} href={socialIcon.platform}>
                <i className={socialIcon.iconClass} />
              </a>
            ))}
          </div>
          <span>Follow Me</span>
        </div>
        <div id="de_modal">
          <button className="button-close" />
          <div className="d-modal-loader" />
        </div>
      </div>

      {/* Banner Section Start */}
      <section
        aria-label="section"
        className="jarallax no-top-md no-bottom sm-pt-120 overflow-hidden"
      >
        <img src="images/background/l11.jpg" className="jarallax-img" alt />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h5 className="s1 wow fadeInUp" data-wow-delay=".4s">
                {title}
              </h5>
              <div className="spacer-10" />
              <div className="h1 wow fadeInUp" data-wow-delay=".6s">
                Hi, I'm <span className="id-color">{name}</span>
                <br />a &nbsp;
                <div className="typed-strings">
                  {roles.map((role, index) => (
                    <p key={index}>{role}</p>
                  ))}
                </div>
                <div className="typed" />
              </div>
              <ul className="list_location wow fadeInUp" data-wow-delay=".8s">
                {locations.map((location, index) => (
                  <li key={index}>
                    <span>{location.country}</span>
                    {location.cities.join(", ")}
                  </li>
                ))}
              </ul>
              <div className="spacer-10" />
              <a
                className="btn-main wow fadeInUp"
                data-wow-delay=".6s"
                href="#section-resume"
              >
                My Resume
              </a>
            </div>
            <div className="col-md-6">
              <img
                src="images/misc/8.png"
                className="img-fluid wow fadeInUp"
                data-wow-delay=".8s"
                alt
              />
            </div>
          </div>
        </div>
        <a
          href="#section-about"
          className="mouse-icon-click scroll-to wow fadeInUp"
          data-wow-delay=".8s"
        >
          <span className="mouse fadeScroll relative" data-scroll-speed={10}>
            <span className="scroll" />
          </span>
        </a>
        <div className="de-gradient-edge-bottom" />
      </section>
      {/* Banner Section End */}
    </>
  );
};

export default Banner;
