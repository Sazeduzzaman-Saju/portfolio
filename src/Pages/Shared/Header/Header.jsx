import React from "react";
import { Link } from "react-scroll";
import Logo from "../Logo";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="transparent header-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="de-flex sm-pt10">
                <div className="de-flex-col">
                  <Logo></Logo>
                </div>
                <div className="de-flex-col header-col-right">
                  <ul id="mainmenu">
                    <li>
                      <Link
                        activeClass="active"
                        to="section-banner"
                        spy={true}
                        smooth={true}
                        offset={-65}
                        duration={500}
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
                        offset={-65}
                        duration={500}
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
                        offset={-65}
                        duration={500}
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
                        offset={-65}
                        duration={500}
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
                        offset={-65}
                        duration={500}
                      >
                        My Resume
                        <span />
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="section-blog"
                        spy={true}
                        smooth={true}
                        offset={-65}
                        duration={500}
                      >
                        Blog
                        <span />
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="section-contact"
                        spy={true}
                        smooth={true}
                        offset={-65}
                        duration={500}
                      >
                        Contact Me
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
