import ProjectCard from "../../../components/Cards/ProjectCard";
import React, { useState } from "react";
import ProjectModal from "../../../components/Modals/ProjectModal";
import SectionTitle from "../../../components/Typography/SectionTitle";
import SectionHead from "../../../components/Typography/SectionHead";
import { Link } from "react-router-dom";
import { mobileProjectData } from "./data";

const MobileProjects = () => {
  const [modal, setModal] = useState([]);
  const projects = mobileProjectData;
  const props = {
    img: "https://cdn.lordicon.com/fpmskzsv.json",
    text: "My Projects",
  };
  return (
    <section id="projects" className="mb-20">
      <SectionTitle props={props} />
      <SectionHead>
        My<span className="text-primary"> Projects</span>
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
      <div className="mt-16 flex justify-end">
        <Link
          to="/projects/mobile"
          className="text-xl flex items-center gap-2 icon hover:text-primary transition duration-300"
        >
          All Web Projects
          <lord-icon
            target="a"
            src="https://cdn.lordicon.com/zmkotitn.json"
            trigger="hover"
            class="current-color"
            style={{ width: "25px", height: "25px", margintTop: "4px" }}
          ></lord-icon>
        </Link>
      </div>
      <ProjectModal data={modal} setModal={setModal} />
    </section>
  );
};

export default MobileProjects;
