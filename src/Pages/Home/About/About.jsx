import React, { useState, useEffect } from "react";
import "./About.css";
import Tecnogology from "./Tecnogology";

const About = () => {
  const [aboutContent, setAboutContent] = useState({
    title: "About Me",
    description:
      "Hey There, I am Sazeduzzaman Web Application Developer armed with proficient knowledge of the entire web development life cycle and react expertise. Adept at using HTML, CSS, JavaScript & React.js to design the user interface 💻 and deploy it effectively in applications.** passionate about learning and working with new tech😃. I love building interesting and amazing products that serve a great deal of purpose.",
  });

  const technologies = [
    {
      title: "HTML",
      imageSrc: "https://i.ibb.co/LZGKnmv/HTML5-Badge-svg.png",
      characterSrc: "https://i.ibb.co/LZGKnmv/HTML5-Badge-svg.png",
    },
    {
      title: "CSS",
      imageSrc: "https://i.ibb.co/GMNN4DG/logo-css-3-768.png",
      characterSrc: "https://i.ibb.co/GMNN4DG/logo-css-3-768.png",
    },
    {
      title: "JS",
      imageSrc: "https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png",
      characterSrc: "https://i.ibb.co/p0hdv2W/ottawa-js-logo-394-DB38073-seeklogo-com.png",
    },
    {
      title: "React",
      imageSrc: "https://i.ibb.co/tMSYB8c/360-F-475014249-y-M9b-Jgvbw-JFpd-KJQO9p-Grr0-FWWCUo-R8z-removebg-preview.png",
      characterSrc: "https://i.ibb.co/tMSYB8c/360-F-475014249-y-M9b-Jgvbw-JFpd-KJQO9p-Grr0-FWWCUo-R8z-removebg-preview.png",
    },
    {
      title: "Bootstrap",
      imageSrc: "https://ph-files.imgix.net/6a529589-3dcf-43c2-8723-bca8307b4f37.png?auto=format",
      characterSrc: "https://i.ibb.co/0KvvMyD/bg-f8f8f8-flat-750x-075-f-pad-750x1000-f8f8f8-removebg-preview.png",
    },
    {
      title: "Tailwind",
      imageSrc: "https://plugins.jetbrains.com/files/15321/418809/icon/pluginIcon.png",
      characterSrc: "https://plugins.jetbrains.com/files/15321/418809/icon/pluginIcon.png",
    },
    {
      title: "Node Js",
      imageSrc: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-1-1174935.png?f=webp",
      characterSrc: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-1-1174935.png?f=webp",
    },
    {
      title: "Firebase",
      imageSrc: "https://global-uploads.webflow.com/6047a9e35e5dc54ac86ddd90/63018721094449d9901f5875_cff297d7.png",
      characterSrc: "https://global-uploads.webflow.com/6047a9e35e5dc54ac86ddd90/63018721094449d9901f5875_cff297d7.png",
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
            </div>
            <div className="spacer-single" />
          </div>
          <div className="row">
            <Tecnogology technologies={technologies} />
          </div>
        </div>
      </section>
      {/* Rest of your component remains unchanged */}
    </>
  );
};

export default About;
