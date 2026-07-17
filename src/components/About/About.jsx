import React from "react";
import "./About.css";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiMysql,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const techStack = [
  { label: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { label: "Express", Icon: SiExpress, color: "#888888" },
  { label: "React", Icon: SiReact, color: "#61DAFB" },
  { label: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { label: "MySQL", Icon: SiMysql, color: "#00758F" },
  { label: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { label: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { label: "CSS3", Icon: SiCss3, color: "#1572B6" },
];

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="section-header">
        <span className="section-label">Skills</span>
        <h2 className="section-title">Tech stack</h2>
      </div>

      <div className="tech-stack">
        {techStack.map(({ label, Icon, color }) => (
          <div key={label} className="tech-stack-item" title={label}>
            <Icon className="tech-stack-icon" style={{ color }} aria-hidden="true" />
            <span className="tech-stack-label">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
