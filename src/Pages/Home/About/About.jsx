/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./About.css";
import Tecnogology from "./Tecnogology";

const About = () => {
  const [aboutContent, setAboutContent] = useState({
    title: "About Me",
    description:
      `Hey There, I am Sazeduzzaman Web Application Developer armed with proficient knowledge of the entire web development life cycle and react expertise. Adept at using HTML, CSS, JavaScript & React.js to design the user interface 💻 and deploy it effectively in applications.** passionate about learning and working with new tech😃. I love building interesting and amazing products that serve a great deal of purpose.`,
  });

  const technologies = [
    {
      title: "HTML",
      imageSrc: "https://i.ibb.co/3hDjHS8/HTML.png",
      characterSrc: "https://i.ibb.co/3hDjHS8/HTML.png",
    },
    {
      title: "CSS",
        imageSrc: "https://i.ibb.co/WnGD0Jy/CSS.png",
        characterSrc: "https://i.ibb.co/WnGD0Jy/CSS.png",
    },
    {
      title: "JS",
      imageSrc: "https://i.ibb.co/FXPKC0J/Javascript.png",
      characterSrc: "https://i.ibb.co/FXPKC0J/Javascript.png",
    },
    {
      title: "React",
      imageSrc: "https://i.ibb.co/XJsTLfg/REact.png",
      characterSrc: "https://i.ibb.co/XJsTLfg/REact.png",
    },
    {
      title: "Bootstrap",
      imageSrc: "https://i.ibb.co/FmcGgcK/Bootstrap.png",
      characterSrc: "https://i.ibb.co/FmcGgcK/Bootstrap.png",
    },
    {
      title: "Tailwind",
      imageSrc: "https://i.ibb.co/FXFLst6/Tailwind.png",
      characterSrc: "https://i.ibb.co/FXFLst6/Tailwind.png",
    },
    {
      title: "Node Js",
      imageSrc: "https://i.ibb.co/vJx6MSD/Node.png",
      characterSrc: "https://i.ibb.co/vJx6MSD/Node.png  ",
    },
    {
      title: "Firebase",
      imageSrc: "https://i.ibb.co/LJs2LmX/Firebase.png",
      characterSrc: "https://i.ibb.co/LJs2LmX/Firebase.png",
    },
    {
      title: "Express",
      imageSrc: "https://i.ibb.co/y0520xt/Express.png",
      characterSrc: "https://i.ibb.co/y0520xt/Express.png",
    },
    // Add more technologies as needed
  ];
  
  return (
    <>
      <section id="section-about" className="pb-5">
        <div className="container relative">
          <div className="row gx-1">
            <div className="col-md-12 text-center wow fadeInUp">
              <h2>{aboutContent.title}</h2>
              <div className="space-border" />
            </div>
            <div className="col-md-8 offset-md-2 text-center wow fadeInUp">
              <p>{aboutContent.description}</p>
              <strong>Technology That I know :</strong>
            </div>
            <div className="spacer-single" />
          </div>
          <div className="row justify-content-center" >
            <Tecnogology technologies={technologies} />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
