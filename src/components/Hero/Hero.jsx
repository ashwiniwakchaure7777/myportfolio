import React from "react";
import "./Hero.css";
import "../Contact/Contact.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {
  IoLogoLinkedin,
  IoLogoInstagram,
  IoMail,
  IoCall,
  IoLocation,
  IoArrowForward,
} from "react-icons/io5";
import { HiOutlineDownload } from "react-icons/hi";

export const ReachOut = () => {
  const [result, setResult] = React.useState("");
  const formEndpoint = ["https://api.", "web3forms.com/submit"].join("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", process.env.REACT_APP_WEB3FORMS_KEY);

    const response = await fetch(formEndpoint, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      event.target.reset();
    } else {
      setResult(data.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="section-header">
        <span className="section-label">Contact</span>
        <h2 className="section-title">Let's build something together</h2>
        <p className="section-subtitle">
          Have a project in mind or want to collaborate? Drop me a message — I typically respond within 24 hours.
        </p>
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <div className="contact-details">
            <div className="contact-detail">
              <div className="contact-detail-icon">
                <IoMail />
              </div>
              <div>
                <span className="contact-detail-label">Email</span>
                <p>ashwakchaure@gmail.com</p>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon">
                <IoCall />
              </div>
              <div>
                <span className="contact-detail-label">Phone</span>
                <p>+91 9403918337</p>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon">
                <IoLocation />
              </div>
              <div>
                <span className="contact-detail-label">Location</span>
                <p>Pune, Maharashtra, India</p>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon">
                <IoLogoLinkedin />
              </div>
              <div>
                <span className="contact-detail-label">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/ashwini-wakchaure-6a5b65161"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ashwini Wakchaure
                </a>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon">
                <IoLogoInstagram />
              </div>
              <div>
                <span className="contact-detail-label">Instagram</span>
                <a
                  href="https://www.instagram.com/_ashwini_vw_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @_ashwini_vw_
                </a>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <div className="contact-field">
            <label htmlFor="contact-name">Your Name</label>
            <input id="contact-name" name="name" type="text" placeholder="John Doe" required />
          </div>
          <div className="contact-field">
            <label htmlFor="contact-email">Your Email</label>
            <input id="contact-email" name="email" type="email" placeholder="john@example.com" required />
          </div>
          <div className="contact-field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              placeholder="Tell me about your project..."
              required
            />
          </div>
          <button type="submit" className="btn-primary contact-submit">
            Send Message <IoArrowForward />
          </button>
          {result && <p className="form-result">{result}</p>}
        </form>
      </div>
    </section>
  );
};

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          MERN Stack · AI Assisted Coding
        </div>

        <h1 className="hero__title">
          Hi, I'm <span className="gradient-text">Ashwini Wakchaure</span>
        </h1>
        <p className="hero__role">Full Stack Developer · Pune, India</p>

        <div className="hero__actions">
          <AnchorLink className="btn-primary anchor-link" offset={80} href="#contact">
            Get in touch <IoArrowForward />
          </AnchorLink>
          <a
            className="btn-outline hero__resume"
            href="./Ashwini_Resume.pdf"
            download="Ashwini_Resume.pdf"
          >
            <HiOutlineDownload /> Download Resume
          </a>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-value">MERN</span>
            <span className="hero__stat-label">Stack</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-value gradient-text">AI</span>
            <span className="hero__stat-label">Assisted Coding</span>
          </div>
        </div>
      </div>

      <div className="hero__visual">
        <div className="hero__image-ring">
          <img src="cropped_image.png" alt="Ashwini Wakchaure" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
