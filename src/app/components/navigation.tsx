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
        <li key={id} className={`group`}>
          <a
            href={id}
            className={`text-lg pt-4 group-hover:font-bold
                 ${activeIndex === index ? "font-semibold " : ""}`}
          >
            {title}
          </a>
          <div
            className={`w-40 bg-black h-[${
              activeIndex === index ? 2 : 1
            }px] group-hover:h-[3px]`}
          />
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
