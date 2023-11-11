import React from "react";
import About from "./sections/about";
import Experiences from "./sections/experiences";
import Projects from "./sections/projects";

const Content = () => {
  return (
    <div className="flex flex-1 flex-col px-8 mt-20 mb-24">
      <About />
      <Experiences />
      <Projects />
    </div>
  );
};

export default Content;
