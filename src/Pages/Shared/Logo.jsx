import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="de-flex-col">
      <Link to="/" data-wow-delay=".6s">
        <div id="logo" className="d-flex align-items-center">
          <i className="fa-brands fa-vaadin fs-1"></i>
          <img
            alt="Logo"
            className="logo"
            src="https://i.ibb.co/0ZYWc65/New-Project-1.png"
          />
          <img
            alt="Logo"
            className="logo-2"
            src="https://i.ibb.co/0ZYWc65/New-Project-1.png"
          />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
