import React from "react";
import ExperienceItem from "./experience-item";
import Link from "next/link";
import TitleSection from "../../title-section";
import { experiences } from "@/app/api/experience/data";

const Experiences = () => {
  return (
    <section
      className="flex flex-col gap-4 pb-16 scroll-smooth"
      id="experiences"
    >
      <TitleSection className="md:hidden">Experience</TitleSection>
      {experiences.map((item) => (
        <ExperienceItem key={item.title} data={item} />
      ))}
      <div className="pl-4">
        <Link
          href="/assets/resume.pdf"
          download="TAMMA-RESUME.pdf"
          target="_blank"
          className="border-bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow1"
        >
          Download Full Resume
        </Link>
      </div>
    </section>
  );
};

export default Experiences;
