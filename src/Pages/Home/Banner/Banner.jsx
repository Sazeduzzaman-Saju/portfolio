import { useState } from "react";
import {
  TbBrandFiverr,
  TbBrandFacebook,
  TbBrandLinkedin,
  TbBrandGithub,
} from "react-icons/tb";

const Banner = () => {
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
    { country: "Present", cities: ["Khilkhet", "Dhaka"] },
    { country: "Permanent", cities: ["Khulna", "Darshana"] },
  ]);

  // Data End
  return (
    <>
      <div id="section-banner">
        <div className="float-text">
          <div className="de_social-icons">
            <a
              href="https://www.linkedin.com/in/szamansaju/"
              target="_blank"
              rel="noreferrer"
            >
              <TbBrandLinkedin size={20} title="Linkedin"></TbBrandLinkedin>
            </a>
            <a
              href="https://www.facebook.com/iamsaju.99/"
              target="_blank"
              rel="noreferrer"
            >
              <TbBrandFacebook size={20} title="Facebook"></TbBrandFacebook>
            </a>
            <a
              href="https://github.com/Sazeduzzaman"
              target="_blank"
              rel="noreferrer"
            >
              <TbBrandGithub size={20} title="Github"></TbBrandGithub>
            </a>
            <a href="https://www.fiverr.com/sazeduzzamansaj" target="_blank" rel="noreferrer">
              <TbBrandFiverr size={20} title="Fiverr"></TbBrandFiverr>
            </a>
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
        <img src="images/background/l11.jpg" className="jarallax-img" alt="" />
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
                src="https://i.ibb.co/GpLJdDR/New-Project-4.png"
                className="img-fluid wow fadeInUp"
                data-wow-delay=".8s"
                alt=""
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
