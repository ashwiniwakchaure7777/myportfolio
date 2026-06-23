import React from "react";
import "./Hero.css";
import "../Contact/Contact.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { IoLogoLinkedin, IoLogoInstagram, IoMail, IoCall, IoLocation } from "react-icons/io5";

export const ReachOut = () => {
  const [result, setResult] = React.useState("");
  const formEndpoint = ["https://api.", "web3forms.com/submit"].join("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", process.env.REACT_APP_WEB3FORMS_KEY);

    const response = await fetch(formEndpoint, {
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
          <label htmlFor="contact-name">Your Name</label>
          <input id="contact-name" type="text" placeholder="Enter your name" />
          <label htmlFor="contact-email">Your Email</label>
          <input id="contact-email" type="email" placeholder="Enter your email" />
          <label htmlFor="contact-message">Write your message here</label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            placeholder="Enter your message"
          />
          <button type="submit" className="contact-submit">
            Submit now
          </button>
          {result && <p className="form-result">{result}</p>}
        </form>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src="cropped_image.png" alt="profile" />
      <h1>
        <span>I'm Ashwini Wakchaure, </span>
        Full Stack Developer Based in India.
      </h1>
      <p>
        I am a Full Stack Developer from India, turning ideas into reality with
        code and design{" "}
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <a
          className="hero-resume"
          href="./Ashwini_Resume.pdf"
          download="Ashwini_Resume.pdf"
        >
          My resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
