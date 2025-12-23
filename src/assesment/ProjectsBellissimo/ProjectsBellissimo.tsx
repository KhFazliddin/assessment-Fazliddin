import React from "react";
import "./ProjectsBellissimo.css";

import clientImg from "../../images/logo.png";
// import pulseImg from "../../images/projects/pulse.png";
// import kidsImg from "../../images/projects/kids.png";
// import reviewImg from "../../images/projects/review.png";
// import jobsImg from "../../images/projects/jobs.png";
// import contentImg from "../../images/projects/content.png";
// import markbellImg from "../../images/projects/markbell.png";

const projects = [
  {
    name: "Bellissimo Client Website",
    link: "https://bellissimo.uz",
    image: clientImg,
    description:
      "Customer-facing platform for online orders and brand presence",
  },
  {
    name: "Bellissimo Pulse",
    link: "https://pulse.bpnet.uz",
    image: clientImg,
    description: "Internal system for analytics and operational monitoring",
  },
  {
    name: "Bellissimo Kids",
    link: "https://kids.bpnet..uz",
    image: clientImg,
    description: "Interactive platform for kids-oriented campaigns",
  },
  {
    name: "Bellissimo Review",
    link: "https://rs.bptne.uz",
    image: clientImg,
    description: "Customer feedback and review management system",
  },
  {
    name: "Bellissimo Jobs",
    link: "https://jobs.bellissimo.uz/",
    image: clientImg,
    description: "Recruitment and hiring platform",
  },
  {
    name: "Bellissimo Content",
    link: "https://content.bpnet.uz",
    image: clientImg,
    description: "Internal CMS for managing content and promotions",
  },
  {
    name: "Bellissimo Markbell",
    link: "https://markbell.bpnet.uz",
    image: clientImg,
    
    description: "Marketing and campaign management system",
  },
];

function ProjectsBellissimo() {
  return (
    <section className="projects">
      <h2 className="projects-title">Projects at Bellissimo Pizza</h2>
      <p className="projects-subtitle">
        Production systems and platforms I have contributed to
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <div className="project-image">
              {project.image && <img src={project.image} alt={project.name} />}
            </div>

            <div className="project-content">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <span className="project-link">View project →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default ProjectsBellissimo;
