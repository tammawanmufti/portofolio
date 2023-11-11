import { Experience } from "@/app/api/experience/model";
import { calculateTimeDiff, formatDateToMonthYear } from "@/app/utils";
import React from "react";

export interface Props {
  data: Experience;
}

const ExperienceItem = ({
  data: { title, description, startedAt, endedAt },
}: Props) => {
  return (
    <div className="flex flex-col gap-1 hover:bg-[#EDEDED] rounded-md p-4">
      <p className="font-bold text-dark-brown text-xl">{title}</p>
      <p className="font-semibold text-light-brown">
        {calculateTimeDiff(startedAt, endedAt).toUpperCase()}
      </p>
      <p className="font-normal text-light-brown">
        {`${formatDateToMonthYear(startedAt).toUpperCase()} - ${
          endedAt ? formatDateToMonthYear(endedAt).toUpperCase() : "Present"
        }`}
      </p>
      <div className="w-full h-[1px] bg-black my-1" />
      <p className="">{description}</p>
    </div>
  );
};

export default ExperienceItem;
