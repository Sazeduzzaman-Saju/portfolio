import React from "react";

const Header = () => {
  return (
    <>
      <header className="transparent header-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="de-flex sm-pt10">
                  <div className="de-flex-col">
                    <div className="de-flex-col">
                      <div id="logo">
                        <a href="index.html">
                          <img alt className="logo" src="../../../../public/images/logo-6.png" />
                          <img alt className="logo-2" src="../../../../public/images/logo-6.png" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="de-flex-col header-col-right">
                    <ul id="mainmenu">
                      <li>
                        <a className="active" href="#top">
                          Home
                          <span />
                        </a>
                      </li>
                      <li>
                        <a href="#section-about">
                          About me
                          <span />
                        </a>
                      </li>
                      <li>
                        <a href="#section-services">
                          What I Do
                          <span />
                        </a>
                      </li>
                      <li>
                        <a href="#section-portfolio">
                          Portfolio
                          <span />
                        </a>
                      </li>
                      <li>
                        <a href="#section-resume">
                          My Resume
                          <span />
                        </a>
                      </li>
                      <li>
                        <a href="#section-blog">
                          Blog
                          <span />
                        </a>
                      </li>
                      <li>
                        <a href="#section-contact">
                          Contact Me
                          <span />
                        </a>
                      </li>
                    </ul>
                    <div className="menu_side_area">
                      <span id="menu-btn" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
    </>
  );
};

export default Header;
