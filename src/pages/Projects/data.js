import ProjectCard from "../../../components/Cards/ProjectCard";
import React, { useState } from "react";
import ProjectModal from "../../../components/Modals/ProjectModal";
import SectionHead from "../../../components/Typography/SectionHead";
import { projectData } from "./data";

const Projects = () => {
  const [modal, setModal] = useState(null); // fixed from []

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
            setModal={setModal} // assumes ProjectCard calls setModal(project)
          />
        ))}
      </div>

      {/* SHOW MODAL IF ACTIVE */}
      {modal && (
        <>
          <input
            type="checkbox"
            id="project-modal"
            className="modal-toggle"
            checked
            readOnly
          />
          <ProjectModal data={modal} setModal={setModal} />
        </>
      )}
    </section>
  );
};

export default Projects;
