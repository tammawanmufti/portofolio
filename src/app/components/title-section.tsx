import React from "react";

const TitleSection = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <div className={`flex flex-col gap-1 items-center ${className}`}>
      <h1 className="text-lg font-semibold">{children}</h1>
      <div className="w-[50%] h-[1px] bg-black" />
    </div>
  );
};

export default TitleSection;
