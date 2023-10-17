import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <a href="index.html">
                <span className="copy">© Copyright 2023 - Sazeduzzaman</span>
              </a>
            </div>
            <div className="col-md-6">
              <div className="social-icons">
                <a href="#">
                  <i className="fa fa-facebook fa-lg" />
                </a>
                <a href="#">
                  <i className="fa fa-twitter fa-lg" />
                </a>
                <a href="#">
                  <i className="fa fa-linkedin fa-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
