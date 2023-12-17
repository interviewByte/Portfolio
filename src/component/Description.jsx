import React, { useEffect } from "react";
import "../css/description.css";

function Description() {
  // Use useEffect to add a scroll event listener when the component mounts
  useEffect(() => {
    const progressBars = document.querySelectorAll(".skill-progress > div");

    function fillBar(bar) {
      const targetWidth = bar.getAttribute("data-bar-width");
      bar.style.width = `${targetWidth}%`;
    }

    function checkScroll() {
      for (let bar of progressBars) {
        const barCoordinates = bar.getBoundingClientRect();
        if (
          bar.getAttribute("data-visited") === "false" &&
          barCoordinates.top <= window.innerHeight - barCoordinates.height
        ) {
          bar.setAttribute("data-visited", true);
          fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
          bar.setAttribute("data-visited", false);
        }
      }
    }

    window.addEventListener("scroll", checkScroll);

    // Cleanup: remove event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="container section" style={{border:'1px solid red'}}>
      <div className="row" style={{border:"1px solid green"}}>
        <section id="skills">
          <h1 className="section-heading mb75px text-center">
            <span>
              <i className="fas fa-chalkboard-teacher"></i>
            </span>
            <span> SKILLS </span>
          </h1>
              <div
                className="skill-bar fifty-percent mb-blue col-md-3"
                data-bar-width="50"
               >
                <div className="skill-name" style={{border:"1px solid red"}}>
                  <span style={{color:"green"}}> C++ </span>
                </div>
            </div>
            {/* Add more skill-progress elements here */}
        </section>
      </div>
    </div>
  );
}

export default Description;
