import React from "react";
import TitleHeader from "./title-header";
import Navigation from "./navigation";
import SocialMediaLinks from "./social-media-links";

const FixedNavigation = () => {
  return (
    <div className="fixed flex-1 hidden md:block md:px-16 lg:px-28 xl:px-40 h-screen ">
      <div className="flex flex-col justify-center h-screen">
        <TitleHeader />
        <Navigation />
        <SocialMediaLinks />
      </div>
    </div>
  );
};

export default FixedNavigation;
