import React from "react";
import { Link } from 'react-scroll';

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
                      <Link 
                        activeClass="active"
                          to="banner"
                          spy={true}
                          smooth={true}
                          offset={50} duration={500}
                          >
                          Home
                          <span />
                        </Link>
                      </li>
                      <li>
                        <Link 
                        activeClass="active"
                          to="section-about"
                          spy={true}
                          smooth={true}
                          offset={50} duration={500}
                          >
                          About me
                          <span />
                        </Link>
                      </li>
                      <li>
                        <Link 
                        activeClass="active"
                          to="section-services"
                          spy={true}
                          smooth={true}
                          offset={50} duration={500}
                          >
                          What I Do
                          <span />
                        </Link>
                      </li>
                      <li>
                      <Link 
                        activeClass="active"
                          to="section-portfolio"
                          spy={true}
                          smooth={true}
                          offset={50} duration={500}
                          >
                           Portfolio
                          <span />
                        </Link>
                      </li>
                      <li>
                      <Link 
                        activeClass="active"
                          to="section-resume"
                          spy={true}
                          smooth={true}
                          offset={50} duration={500}
                          >
                           My Resume
                          <span />
                        </Link>
                      </li>
                      <li>
                        <Link href="#section-blog">
                          Blog
                          <span />
                        </Link>
                      </li>
                      <li>
                        <Link href="#section-contact">
                          Contact Me
                          <span />
                        </Link>
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
