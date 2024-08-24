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
            <div className='row g-3'>
  <div id="contact-form-container" className='col-12 col-md-6'>
    <form id="contact-form">
      <input id="input-name" name="name" type="text" placeholder="Your Name" />
      <input id="input-email" name="input-email" type="text" required placeholder="Your Email" />
      <textarea id="input-message" name="input-message" rows="2" cols="40" placeholder="Message"></textarea>
      <div className='d-flex justify-content-between flex-column flex-md-row align-items-center'>
  <button className="sub-btn mb-3 mb-md-0 me-2 me-md-0" type="submit">SEND MESSAGE</button>
  <button className="sub-btn mt-md-3" onClick={handleDownload}>DOWNLOAD CV</button>
</div>

    </form>
  </div>
  <div id="my-details-container" className='col-12 col-md-6 text-center'>
    <h3> Get In Touch </h3>
    <h2>Contact Me</h2>
    <div className="my-details-info-container">
      <i className="fas fa-map-marker-alt"></i>
      <span>Lucknow, India</span>
    </div>
    <div className="my-details-info-container">
      <i className="fas fa-mobile-alt"></i>
      <span><strong>+91</strong> 7398688462 </span>
    </div>
    <div className="my-details-info-container">
      <i className="far fa-envelope"></i>
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
