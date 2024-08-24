import React from "react";
import "../css/experience.css";
const Experience = () => {
  return (
    <>
      <section id="experience">
        <h1 class="section-heading mb75px">
          <span>
            <i class="fas fa-briefcase"></i>
          </span>
          <span> Work Experience </span>
        </h1>
        <div class="timeline">
          <div class="timeline-box ">
            <div class="timeline-container">
              <div class="timeline-logo">
                {/* <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000030_1550710829_ninjasicon.png" /> */}
              </div>
              <h3 class="experience-designation  m0 m-blue">
                {" "}
                Associate Software Engineer{" "}
              </h3>
              <h4 class="experience-company-name"> IPH Technologies </h4>
              <h5 class="experience-duration m0"> 05 2023 - Present </h5>
              <p class="experience-description text-align-justify">
                {" "}
                I'm currently working as a Software Engineer at IPH
                Technologies, where I contribute to the dynamic field of web
                development. My responsibilities involve tackling industry
                challenges and leveraging innovative technologies to create
                meaningful solutions.{" "}
              </p>
            </div>
          </div>
          <div class="timeline-box right ">
            <div class="timeline-container">
              <div class="timeline-logo">
                {/* <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000030_1550710829_ninjasicon.png" /> */}
              </div>
              <h3 class="experience-designation  m0 m-blue"> Internship </h3>
              <h4 class="experience-company-name">
                {" "}
                Infinisia Software Pvt Ltd.{" "}
              </h4>
              <h5 class="experience-duration m0"> 06 2022 - 09 2022 </h5>
              <p class="experience-description text-align-justify">
                {" "}
                I dedicated this period to learning backend development with
                Node.js technology, earning a certificate as a Full Stack
                Developer. During my internship at Infinisia Software Pvt Ltd.,
                I delved into the intricacies of the printing and typesetting
                industry, gaining hands-on experience that enriched my skill
                set.{" "}
              </p>
            </div>
          </div>
          <div id="timeline-divider">
            <div class="timeline-traveller">
              <div>
                <i class="fas fa-plane"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Experience;
