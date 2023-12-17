import React from 'react'
import "../css/contact.css"
import resumePDF from "../assets/resume.pdf";
const Contacts = () => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = resumePDF;
        link.download = "Pavan.pdf"; 
        link.click();
      };
  return (
    <>
    <section id="contact">
            <h1 class="section-heading mb50px">
                <span>
                    <i class="far fa-address-card"></i>
                </span>
                <span> Contact </span>
            </h1>
            <div id="contact-container">
                <div id="contact-form-container">
                    <form id="contact-form">
                        <input id="input-name" name="name" type="text" placeholder="Your Name" />
                        <input id="input-email" name="input-email" type="text" required placeholder="Your Email" />
                        <textarea id="input-message" name="input-message" rows="2" cols="40" placeholder="Message"></textarea>
                        <button class="sub-btn" type="submit">SEND MESSAGE</button>
                        <button class="sub-btn ms-5" onClick={handleDownload}>DOWNLOAD CV</button>
                    </form>
                </div>
                <div id="my-details-container">
                    <h3> Get In touch </h3>
                    <h2>Contact Me</h2>
                    {/* <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p> */}
                    {/* <h3> My Address </h3> */}
                    <div class="my-details-info-container">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>Lucknow, India</span>
                    </div>
                    <div class="my-details-info-container">
                        <i class="fas fa-mobile-alt"></i>
                        <span><strong>+91</strong> 7398688462 </span>
                    </div>
                    <div class="my-details-info-container">
                        <i class="far fa-envelope"></i>
                        <span>pavanrnri1818@gmail.com</span>
                    </div>
                </div>
            </div>
            <div class="">
                <ul class="horizontal-social-list text-center social-icons">
                    <li>
                        <a href="https://www.linkedin.com/in/pavan-kumar-singh-702087230">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://stackoverflow.com/users/23117752/pavan-kumar-singh" target="_blank">
                            <i class="fab fa-stack-overflow"></i>
                        </a>
                    </li>
                    <li>
                        <a href="!#" target="_blank">
                            <i class="fab fa-google-plus-g"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/profile.php?id=100031991533493">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.quora.com/profile/Pavan-Kumar-Singh-49" target="_blank">
                            <i class="fab fa-quora"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    </>
  )
};
export default Contacts ;
