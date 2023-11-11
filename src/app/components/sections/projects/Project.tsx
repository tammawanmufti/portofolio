import Image from "next/image";
import React from "react";
import Tags from "./tags";
import { ProjectInfo } from "@/app/api/project/model";
import { formatDateToMonthYear } from "@/app/utils";

export interface Props {
  info: ProjectInfo;
}

const Project = ({
  info: {
    title,
    description,
    imageSrc,
    tags,
    startedAt,
    finishedAt,
    contributedAs,
  },
}: Props) => {
  return (
    <div className="flex flex-col gap-1 hover:bg-[#EDEDED] rounded-md p-4 border-t">
      <div className="flex gap-1 justify-between">
        {imageSrc ? (
          <Image
            className="flex-1 self-top "
            src={imageSrc}
            alt={title}
            width={250}
            height={250}
            style={{
              width: 100,
              minHeight: 100,
              minWidth: 100,
              objectFit: "contain",
            }}
          />
        ) : null}
        <div className={imageSrc ? "pl-2" : ""}>
          <h1 className="text-xl font-bold">{title} </h1>
          <p className="text-sm text-light-brown">{contributedAs}</p>
          <p className="text-sm text-light-brown">
            {`${formatDateToMonthYear(startedAt).toUpperCase()} - ${
              finishedAt
                ? formatDateToMonthYear(finishedAt).toUpperCase()
                : "PRESENT"
            }`}
          </p>
          <p className="text-justify">{description}</p>
        </div>
      </div>

      <div className="relative">
        <Tags tags={tags} />
      </div>
    </div>
  );
};

export default Project;
