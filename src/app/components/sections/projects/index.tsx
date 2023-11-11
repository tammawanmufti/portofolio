import React from "react";
import TitleSection from "../../title-section";
import Project from "./Project";
import { projects } from "@/app/api/project/data";

const Projects = () => {
  fetch;

  return (
    <section id="projects">
      <TitleSection className="px-4 md:hidden">Projects</TitleSection>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <Project key={project.title} info={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
