import React from "react";
import { LuGlobe2, LuMail } from "react-icons/lu";

const TitleHeader = () => {
  return (
    <div>
      <div className="py-2 gap-2 text-light-brown border-black border-b-[0.5px] font-Heebo ">
        <p className="text-4xl lg:text-5xl font-semibold text-center md:text-left">
          Tamma Wan Mufti
        </p>
        <p className="text-3xl lg:text-4xl font-normal text-center md:text-left">
          Software Developer
        </p>
      </div>
      <div className="flex flex-row mt-2 font-Heebo">
        <div className="flex flex-row items-center ml-4 mr-12 gap-2">
          <LuGlobe2 />
          <span className="shrink align-middle">Indonesia</span>
        </div>
        <div className="flex flex-row items-center gap-2">
          <LuMail />
          <a
            className="shrink align-middle underline"
            href="mailto:mailbox.mufti@gmail.com"
          >
            mailbox.mufti@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default TitleHeader;
