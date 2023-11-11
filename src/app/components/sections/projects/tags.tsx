import React from "react";
import Tag from "./tag";
import { TagInfo } from "@/app/api/project/model";

interface Props {
  tags: TagInfo[];
}

const Tags = ({ tags }: Props) => {
  return (
    <div>
      {tags.map((tag, index) => (
        <Tag key={index} href={tag.url}>
          {tag.title}
        </Tag>
      ))}
    </div>
  );
};

export default Tags;
