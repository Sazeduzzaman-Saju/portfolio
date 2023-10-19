import React from "react";

const TechnologyCard = ({ imageSrc, characterSrc, title, delay }) => (
  <div
    className={`col-lg-3 mb-4 position-relative wow fadeIn tec-section`}
    data-wow-delay={`${0.2 * (delay + 1)}s`}
  >
    <div className="cards">
      <div className="wrappers" data-animate="false">
        <img src={imageSrc} className="cover-image" alt="Cover" width={'250px'} />
      </div>
      <img src={characterSrc} className="character" alt="Character" width={'250px'} />
      <h1 className="character ch-title">{title}</h1>
    </div>
  </div>
);

const Tecnogology = ({ technologies }) => {
  return (
    <>
      {technologies.map((tech, index) => (
        <TechnologyCard
          key={index}
          imageSrc={tech.imageSrc}
          characterSrc={tech.characterSrc}
          title={tech.title}
          delay={index}
        />
      ))}
    </>
  );
};

export default Tecnogology;
