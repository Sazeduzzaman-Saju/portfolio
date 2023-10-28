import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination, EffectFade } from "swiper/modules";
import "./Projects.css";

const Projects = () => {
  let [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("https://my-portfolio-server-xi.vercel.app/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);
  console.log(projects);
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination, EffectFade]}
        // effect="fade"
        className="mySwiper"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="blog-slider">
              <div className="blog-slider__wrp swiper-wrapper">
                <div className="blog-slider__item swiper-slide">
                  <div className="blog-slider__img">
                    <img src={project.img} alt />
                  </div>
                  <div className="blog-slider__content">
                    <span className="blog-slider__code fs-6">
                      26 December 2019
                    </span>
                    <div className="blog-slider__title mt-1">
                      {project.title}
                    </div>
                    <div className="blog-slider__text">
                      {project.description.slice(0, 150)}
                    </div>
                    <div className="mb-3">
                      <span className="badge bg-dark me-2">React</span>
                      <span className="badge bg-dark me-2">React</span>
                      <span className="badge bg-dark me-2">React</span>
                      <span className="badge bg-dark me-2">React</span>
                    </div>
                    <div className="d-flex">
                      {/* <a href="#" className="blog-slider__button">
                        Live
                      </a> */}


                      <div className="button_cont">
                       <a className="example_f me-3" href={project.live_link}>
                          <span>Live Website</span>
                        </a>
                      </div>
                      <div className="button_cont">
                        <a
                          className="example_f"
                          href={project.live_link}
                        >
                          <span>Git Repository</span>
                        </a>
                      </div>

                      {/* <a href="#" className="blog-slider__button ms-2">
                        Git Repository
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-slider__pagination" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Projects;
