import React from "react";

const WhatIdo = () => {
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
              <div className="col-lg-4 wow fadeIn" data-wow-delay=".2s">
                <div className="de-card-v1">
                  <div className="d-inner">
                    <i className="icon_genius id-color" />
                    <div className="text">
                      <h3>Branding</h3>
                      Ex velit cupidatat magna voluptate deserunt quis et dolor
                      adipisicing elit culpa ad exercitation proident irure
                      deserunt irure.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 wow fadeIn" data-wow-delay=".4s">
                <div className="de-card-v1">
                  <div className="d-inner">
                    <i className="icon_tools id-color" />
                    <div className="text">
                      <h3>Development</h3>
                      Ex velit cupidatat magna voluptate deserunt quis et dolor
                      adipisicing elit culpa ad exercitation proident irure
                      deserunt irure.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 wow fadeIn" data-wow-delay=".6s">
                <div className="de-card-v1">
                  <div className="d-inner">
                    <i className="icon_camera_alt id-color" />
                    <div className="text">
                      <h3>Photography</h3>
                      Ex velit cupidatat magna voluptate deserunt quis et dolor
                      adipisicing elit culpa ad exercitation proident irure
                      deserunt irure.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatIdo;
