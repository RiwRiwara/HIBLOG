import React from "react";
import logo from "../../../logo.svg";
import "./navbar.css";

function Navbar() {
  return (
    <div >
    <nav className="navbar navbar-expand-lg navbar-white bg-white custom-nav ">
      <div className="container-fluid">
        <a className="navbar-brand custom-color" href="/">
          <img src={logo} className="logo" alt="logo" />
        </a>
        <button
          className="navbar-toggler custom-color"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#myNavbar"
          aria-controls="myNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon custom-color"></span>
        </button>
        <div className="collapse navbar-collapse " id="myNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown custom-color">
              <a
                className="nav-link dropdown-toggle custom-color"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Home
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item custom-color" href="/">
                    Search
                  </a>
                </li>
                <li>
                  <a className="dropdown-item custom-color" href="/blogs">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="dropdown-item custom-color" href="/">
                    News
                  </a>
                </li>

              </ul>
            </li>
            <li className="nav-item dropdown custom-color">
              <a
                className="nav-link dropdown-toggle custom-color"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Admin Panel
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item custom-color" href="/">
                    User Request
                  </a>
                </li>
                <li>
                  <a className="dropdown-item custom-color" href="/">
                    Card Manager
                  </a>
                </li>
                <li>
                  <a className="dropdown-item custom-color" href="/">
                    Deck Manager
                  </a>
                </li>
                <li>
                  <a className="dropdown-item custom-color" href="/">
                    User Manager
                  </a>
                </li>
                <li>
                  <a className="dropdown-item custom-color" href="/">
                    News
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-color" href="/">
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-color" href="/">
                My Collections
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-color" href="/">
                Request
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link custom-color" href="/">
                <i className="bi bi-box-arrow-in-right custom-color"></i> Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  


  );
}
export default Navbar
