import React, { useState, useEffect } from "react";

const WhatIdo = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Simulate dynamic data fetching or any async operation
    // You can replace this with actual API calls or other data fetching logic
    const fetchData = async () => {
      // Simulate an API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Update the state with dynamic services
      setServices([
        {
          id: 1,
          icon: "icon_genius id-color",
          title: "Branding",
          description:
            "Ex velit cupidatat magna voluptate deserunt quis et dolor adipisicing elit culpa ad exercitation proident irure deserunt irure.",
        },
        {
          id: 2,
          icon: "icon_tools id-color",
          title: "Development",
          description:
            "Ex velit cupidatat magna voluptate deserunt quis et dolor adipisicing elit culpa ad exercitation proident irure deserunt irure.",
        },
        {
          id: 3,
          icon: "icon_camera_alt id-color",
          title: "Photography",
          description:
            "Ex velit cupidatat magna voluptate deserunt quis et dolor adipisicing elit culpa ad exercitation proident irure deserunt irure.",
        },
      ]);
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <>
      <section id="section-services" className="no-bottom">
        <div className="container relative">
          <div className="row">
            <div className="col-md-12 text-center wow fadeInUp">
              <h2>What I Do</h2>
              <div className="space-border" />
            </div>
            <div className="spacer-single" />
            <div className="row">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="col-lg-4 wow fadeIn"
                  data-wow-delay=".2s"
                >
                  <div className="de-card-v1">
                    <div className="d-inner">
                      <i className={service.icon} />
                      <div className="text">
                        <h3>{service.title}</h3>
                        {service.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatIdo;
