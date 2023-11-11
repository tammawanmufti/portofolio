import {
  LinkedinOutlined,
  GithubOutlined,
  GitlabOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import React, { ReactNode } from "react";

const SocialMediaLinks = () => {
  const socialMedias: { link: string; icon: ReactNode }[] = [
    {
      icon: <LinkedinOutlined />,
      link: "https://www.linkedin.com/in/tammawanmufti/",
    },
    {
      icon: <GithubOutlined />,
      link: "https://github.com/tammawanmufti",
    },
    {
      icon: <GitlabOutlined />,
      link: "https://gitlab.com/tammawanmufti",
    },
    {
      icon: <InstagramOutlined />,
      link: "https://www.instagram.com/tammawanmufti",
    },
  ];

  return (
    <div className={`flex flex-row gap-4 mt-8  `}>
      {socialMedias.map((item) => (
        <Link
          key={item.link}
          href={item.link}
          target="_blank"
          className={`hover:bg-[#EDEDED] px-3 pb-3 rounded-md text-3xl  text-light-brown `}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
