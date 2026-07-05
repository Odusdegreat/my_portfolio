import ProjectCard from "../../../components/Cards/ProjectCard";
import React, { useState } from "react";
import SectionHead from "../../../components/Typography/SectionHead";
import { projectData } from "./data";

const Projects = () => {
  const [, setModal] = useState([]);
  const projects = projectData;

  return (
    <section id="projects" className="mb-20">
      <SectionHead>
        <span className="text-primary">Collaborations</span>
      </SectionHead>
      <div className="projects">
        {projects?.slice(0, 4).map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            setModal={setModal}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
