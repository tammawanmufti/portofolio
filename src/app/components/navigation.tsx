"use client";
import React, { useCallback, useEffect, useState } from "react";

const menu: { id: string; title: string }[] = [
  {
    id: "#about",
    title: "About",
  },
  {
    id: "#experiences",
    title: "Experiences",
  },
  {
    id: "#projects",
    title: "Projects",
  },
];

const Navigation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleNavigation = useCallback(
    (e: any, sections: NodeListOf<HTMLElement>) => {
      const scrollY = window.scrollY;
      sections.forEach((current, index) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 250;
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
          setActiveIndex(index);
      });
    },
    []
  );

  useEffect(() => {
    const query = document.querySelectorAll("section");
    window.addEventListener("scroll", (e) => handleNavigation(e, query));

    return () => {
      window.removeEventListener("scroll", (e) => handleNavigation(e, query));
    };
  }, [handleNavigation]);

  return (
    <ul className="my-16 gap-5">
      {menu.map(({ id, title }, index) => (
        <li key={id} className={`group flex-row h-10 transition-all`}>
          <a
            href={id}
            className={`text-lg group-hover:font-bold border-black  duration-300
                 ${activeIndex === index ? "font-semibold text-2xl pl-2" : ""}`}
          >
            {title}
          </a>
          <div
            className={`${
              activeIndex === index ? "w-52" : "w-40 "
            } h-[2px] bg-black  group-hover:w-48 duration-700`}
          />
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
