import React from "react";
import "./Footer.css";
import { IoLogoLinkedin, IoLogoInstagram, IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copy">
        &copy; {new Date().getFullYear()} Ashwini Wakchaure
      </p>
      <div className="footer__social">
        <a
          href="https://www.linkedin.com/in/ashwini-wakchaure-6a5b65161"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <IoLogoLinkedin />
        </a>
        <a
          href="https://www.instagram.com/_ashwini_vw_"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <IoLogoInstagram />
        </a>
        <a href="mailto:ashwakchaure@gmail.com" aria-label="Email">
          <IoMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
