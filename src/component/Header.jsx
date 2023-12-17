import React from "react";
import "../css/header.css";
import resumePDF from "../assets/resume.pdf";
import Portfolio from "../assets/portfolio.png"
const Header = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Pavan.pdf"; 
    link.click();
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg Mynav">
        <div className="container py-2">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/">
            <img src={Portfolio} alt="Portfolio_img" />
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 horizontal-list">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="!#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#education">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <button
                className="btn fw-bolder sub-btn"
                type="submit"
                onClick={handleDownload}
              >
                DOWNLOAD CV
              </button>
             </form> 
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
