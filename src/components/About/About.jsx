import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src="./theme_pattern.svg" alt="theme_pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src="./resized.jpg" alt="about-profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Self-motivated professional with more than three years of
              experience in a manufacturing environment. Seeking a career
              opportunity in a software company as a Full Stack Developer where
              I can use my extensive knowledge of programming languages and
              frameworks to develop efficient web applications.
            </p>
            <p>
              Passionate Full Stack Developer | Ready to Innovate and Build
              Comprehensive Web Solutions
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div className="about-skill">
              <p>Node JS</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>MongoDB</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>BEGINNER</h1>
          <p>BY EXPEREINCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>SEVERAL</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>ACTIVELY</h1>
          <p>LOOKING FOR THE JOB</p>
        </div>
      </div>
    </div>
  );
};

export default About;
