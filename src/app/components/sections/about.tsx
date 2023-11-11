import Image from "next/image";
import React from "react";
import TitleHeader from "../title-header";
import SocialMediaLinks from "../social-media-links";

const About = () => {
  return (
    <section
      className="flex flex-col items-center justify-center gap-8 h-screen "
      id="about"
    >
      <div className="md:hidden">
        <TitleHeader />
      </div>
      <Image
        src={"/assets/profile-picture.jpeg"}
        alt="profile-picture"
        className="rounded-full shadow-2xl"
        width={240}
        height={240}
      />
      <div className="md:hidden">
        <SocialMediaLinks />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-lg font-semibold">About</h1>
        <div className="w-[50%] h-[1px] bg-black" />
        <p className="text-center text-indigo-950 w-[75%] pb-4 leading-5 text-3">
          {`Passionate Software Developer with 4 years of experience in developing and testing multiple mobile-based and web-based applications incorporating a range of technologies. Easily Adapt to Different technologies and being able to learn new things quickly.`}
        </p>
      </div>
    </section>
  );
};

export default About;
