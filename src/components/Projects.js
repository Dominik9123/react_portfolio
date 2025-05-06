import React from "react";
import "./Projects.css";

import project1Image from "../assets/projects/project1.jpg";
import project2Image from "../assets/projects/project2.jpg";
// import project3Image from "../assets/projects/project3.jpg";

const projects = [
{
    name: "Construction Services",
    image: project2Image,
    link: "https://github.com/Dominik9123/szkieletor",
},
{
  name: "Developer Portfolio",
  image: project1Image,
  link: "https://github.com/Dominik9123/react_portfolio",
},
{
  name: "E-commerce Platform",
  image: project2Image,
  link: "https://github.com/example/ecommerce",
},
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h1>My Projects</h1>
      <p>Clicking on the thumbnail will take you to GitHub 👨‍💻</p>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.name} className="project-image" />
              <p>{project.name}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;