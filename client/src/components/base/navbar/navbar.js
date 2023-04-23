import React from "react";
import logo from "../../../logo.svg";
import "./navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg custom-nav ">
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
              <li className="nav-item">
                <a className="nav-link custom-color" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-color" href="/profile">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-color" href="/create">
                  Create Blog
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link custom-color" href="/login">
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
