import React, { useState } from "react";
import "./MyWork.css";
import mywork_data from "../../mywork_data.js";
import { IoOpenOutline, IoLogoGithub, IoAddOutline } from "react-icons/io5";

const ProjectCard = ({ project }) => {
  const [imageError, setImageError] = useState(false);
  const isPlaceholder = project.status === "coming-soon" || !project.liveUrl;
  const hasImage = project.image && project.image.length > 0 && !imageError;

  const handleClick = () => {
    if (project.liveUrl) {
      window.open(project.liveUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <article
      className={`project-card ${isPlaceholder ? "project-card--placeholder" : ""}`}
      onClick={!isPlaceholder ? handleClick : undefined}
      role={!isPlaceholder ? "link" : undefined}
      tabIndex={!isPlaceholder ? 0 : undefined}
      onKeyDown={(e) => {
        if (!isPlaceholder && (e.key === "Enter" || e.key === " ")) handleClick();
      }}
    >
      <div className="project-card__image">
        {hasImage ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="project-card__placeholder-img">
            {isPlaceholder ? <IoAddOutline /> : <span>{project.title.charAt(0)}</span>}
          </div>
        )}
        {!isPlaceholder && (
          <div className="project-card__overlay">
            <span className="project-card__view">
              View Live <IoOpenOutline />
            </span>
          </div>
        )}
        {project.status === "live" && (
          <span className="project-card__badge project-card__badge--live">Live</span>
        )}
        {project.status === "coming-soon" && (
          <span className="project-card__badge project-card__badge--soon">Coming Soon</span>
        )}
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>

        {project.tags && project.tags.length > 0 && (
          <div className="project-card__tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-card__tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="project-card__links">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
              onClick={(e) => e.stopPropagation()}
            >
              <IoOpenOutline /> Live Demo
            </a>
          ) : (
            <span className="project-card__link project-card__link--disabled">
              <IoOpenOutline /> Add live URL
            </span>
          )}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
              onClick={(e) => e.stopPropagation()}
            >
              <IoLogoGithub /> Source
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
};

const MyWork = () => {
  const liveProjects = mywork_data.filter((p) => p.status === "live");
  const placeholderProjects = mywork_data.filter((p) => p.status === "coming-soon");

  return (
    <section id="work" className="mywork section">
      <div className="section-header">
        <span className="section-label">Portfolio</span>
        <h2 className="section-title">Featured work</h2>
        <p className="section-subtitle">
          A selection of live projects I've built. Click any card to visit the live site.
        </p>
      </div>

      <div className="mywork-container">
        {liveProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {placeholderProjects.length > 0 && (
        <>
          <div className="mywork-divider">
            <span>Upcoming projects</span>
          </div>
          <div className="mywork-container mywork-container--placeholders">
            {placeholderProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default MyWork;
