import React, { ReactNode } from "react";

const Tag = ({ children, href }: { children: ReactNode; href?: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="
    center 
    relative 
    inline-block 
    select-none 
    whitespace-nowrap 
    rounded-lg 
    bg-[#6C6464]
    py-2 
    px-3.5 
    align-baseline 
    font-sans 
    text-xs 
    font-bold 
    uppercase 
    leading-none 
    text-white
    m-2"
    >
      {children}
    </a>
  );
};

export default Tag;
