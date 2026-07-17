import React from "react";
import "./Services.css";
import Services_Data from "../../services_data.js";
import { HiOutlineGlobeAlt, HiOutlineDesktopComputer, HiOutlineServer } from "react-icons/hi";

const icons = [HiOutlineGlobeAlt, HiOutlineDesktopComputer, HiOutlineServer];

const Services = () => {
  return (
    <section id="services" className="services section">
      <div className="section-header">
        <span className="section-label">Services</span>
        <h2 className="section-title">What I can do for you</h2>
        <p className="section-subtitle">
          From concept to deployment — I handle the full development lifecycle.
        </p>
      </div>

      <div className="services-container">
        {Services_Data.map((service, index) => {
          const Icon = icons[index] || HiOutlineGlobeAlt;
          return (
            <div key={index} className="services-card">
              <div className="services-card__icon">
                <Icon />
              </div>
              <span className="services-card__number">{service.s_no}</span>
              <h3 className="services-card__title">{service.s_name}</h3>
              <p className="services-card__desc">{service.s_desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
