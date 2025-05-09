import React from "react";
import "./Contact.css";
import { IoLogoLinkedin, IoLogoInstagram, IoMail, IoCall, IoLocation } from "react-icons/io5";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a5d93b79-ef34-44d4-bb46-7e0e739b8d3a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src="./theme_pattern.svg" alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <IoMail className="contact-icon" />
              <p>ashwakchaure@gmail.com</p>
            </div>
            <div className="contact-detail">
              <IoLogoLinkedin className="contact-icon" />
              <a href="https://www.linkedin.com/in/ashwini-wakchaure-6a5b65161?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                Ashwini Wakchaure
              </a>
            </div>
            <div className="contact-detail">
              <IoLogoInstagram className="contact-icon" />
              <a href="https://www.instagram.com/_ashwini_vw_?igsh=dGljYW91cm44a3Zh">
                _ashwini_vw_
              </a>
            </div>
            <div className="contact-detail">
              <IoCall className="contact-icon" />
              <p>+91 9403918337</p>
            </div>
            <div className="contact-detail">
              <IoLocation className="contact-icon" />
              <p>Pune, Maharashtra, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name"></input>
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email"></input>
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows={4}
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
