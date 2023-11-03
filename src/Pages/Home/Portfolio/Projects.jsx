import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination, EffectFade } from "swiper/modules";
import "./Projects.css";
import { useQuery } from "@tanstack/react-query";

const Projects = () => {
  const {
    data: projects,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const response = await fetch("https://portfolio-server-osbt6h8tz-sazeduzzzaman.vercel.app/projects");
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
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination, EffectFade]}
        className="mySwiper"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="blog-slider">
              <div className="blog-slider__wrp swiper-wrapper">
                <div className="blog-slider__item swiper-slide">
                  <div className="blog-slider__img">
                    <img src={project.projectImage} alt="" />
                  </div>
                  <div className="blog-slider__content">
                    <span className="blog-slider__code fs-6">
                      {project.project_start_date}
                    </span>
                    <div className="blog-slider__title mt-1">
                      {project.project_title}
                    </div>
                    <div className="blog-slider__text">
                      {project.project_description
                        ? project.project_description.slice(0, 150)
                        : ""}
                    </div>
                    <div className="mb-3">
                      <span className="badge bg-dark me-2">React</span>
                      <span className="badge bg-dark me-2">React</span>
                      <span className="badge bg-dark me-2">React</span>
                      <span className="badge bg-dark me-2">React</span>
                    </div>
                    <div className="d-flex mt-5">
                      <div className="button_cont">
                        <a
                          className="example_f me-3"
                          href={project.project_live_link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span>Live Website</span>
                        </a>
                      </div>
                      <div className="button_cont">
                        <a
                          className="example_f"
                          href={project.project_git_link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span>Git Repository</span>
                        </a>
                      </div>
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
