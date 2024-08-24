import React from "react";
import img1 from "../assets/portfolio_img.JPG";
import "../css/intro-and-img.css";
const IntroAndImage = () => {
  return (
    <>
      <section id="about">
        <div id="my-image">
          <img src={img1} alt="" />
        </div>
        <div id="about-para">
          <p>
            <span className="text-highlight">Welcome</span> to my digital space!
            <span className="text-highlight">I'm Associate Software Engineer</span>{" "}
            passionate about crafting seamless user experiences. With a
            background in{" "}
            <span className="text-highlight">web development, </span>I thrive on
            challenges and stay updated on the latest technologies.{""}I'm
            highly skilled in{" "}
            <span className="text-highlight">
              HTML, CSS, JavaScript, TypeScript, React, Angular, Electron.js, Node.js, Express.js, MongoDB, Bootstrap, and Material-UI. 
            </span>
            <span className="text-highlight"> My coding journey</span> began with
            curiosity and has evolved into a pursuit of problem-solving and
            continuous learning. Crafting efficient and clean code is my
            strength, and
            <span className="text-highlight">
              I enjoy transforming ideas into user-friendly
            </span>{" "}
            digital solutions.{" "}
            <span className="text-highlight">
              React's dynamic nature captivates me,
            </span>{" "}
            and I stay ahead with emerging trends and methodologies.
          </p>
        </div>
      </section>
    </>
  );
};
export default IntroAndImage;
