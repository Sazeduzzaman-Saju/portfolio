import React, { useState } from "react";
import { Outlet } from "react-router-dom";
// import Footer from "../../Pages/Shared/Footer/Footer";
// import AdminHeader from "../../Pages/Shared/Header/AdminHeader";
import "./DashboardLayout.css";
import { NavLink } from "react-router-dom";

const DashboardLayout = () => {
  const [isSidebarToggled, setSidebarToggled] = useState(false);

  const toggleSidebar = () => {
    setSidebarToggled(!isSidebarToggled);
  };

  return (
    <div>
      {/* <AdminHeader /> */}
      <div id="wrappers" className={isSidebarToggled ? "toggled" : ""}>
        <aside id="sidebar-wrappers">
          <div className="sidebar-brand">
            <h2>
              <i className="fa-brands fa-vaadin me-4"></i>
              Mr. Perfect
            </h2>
          </div>
          <ul className="sidebar-nav">
            <li>
              <NavLink to="/admin/overview">
                <i className="fa-solid fa-house-user me-4" /> Overview
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/project-all">
                <i className="fa-solid fa-grip me-4" /> Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/experience-all">
                <i className="fa-solid fa-user me-4" /> Experience
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/education-all">
                <i className="fa-solid fa-user me-4" /> Education
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/blogs-all">
                <i className="fa-brands fa-microblog me-4" /> All Blogs
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/contact-all">
                <i className="fa-brands fa-microblog me-4" /> All Contact
              </NavLink>
            </li>

            <li>
              <NavLink to="/">
                <i className="fa-solid fa-house-user me-4" /> Frontend
              </NavLink>
            </li>
          </ul>
        </aside>
        <div id="navbar-wrappers">
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header ms-3">
                <a href="#" className="navbar-brand" onClick={toggleSidebar}>
                  <i className="fa fa-bars" />
                </a>
              </div>
            </div>
          </nav>
        </div>
        <section id="content-wrappers" style={{ height: "100vh" }}>
          <Outlet></Outlet>
        </section>
      </div>
    </div>
  );
};

export default DashboardLayout;
