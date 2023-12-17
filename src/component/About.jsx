import React from "react";
import "../css/about.css";
function About() {
  return (
    <>
      <div id="banner" className="py-5">
      <div id="name-social-container">
        <div className="text-center">
          <h1 id="my-name">Pavan Kumar Singh</h1>
          <h3 className="fw-bold text-white text-center">Software Engineer</h3>
        </div>
        <div className="mb-2">
          <ul className="horizontal-social-list text-center social-icons">
            <li>
              <a href="https://www.linkedin.com/in/pavan-kumar-singh-702087230">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-stack-overflow"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-google-plus-g"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-quora"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  
  );
}
export default About;
