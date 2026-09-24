import ProjectCard from "../../../components/Cards/ProjectCard";
import React, { useState } from "react";
import ProjectModal from "../../../components/Modals/ProjectModal";
import SectionHead from "../../../components/Typography/SectionHead";
import { projectData } from "./data";

const Projects = () => {
  const [modal, setModal] = useState(null);
  const projects = projectData;

  return (
    <section className="mb-20">
      <SectionHead>
        <span className="text-primary">Collaborations</span>
      </SectionHead>
      <div className="projects">
        {projects?.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            setModal={setModal}
          />
        ))}
      </div>
      <ProjectModal data={modal} setModal={setModal} />
    </section>
  );
};

export default Projects;
