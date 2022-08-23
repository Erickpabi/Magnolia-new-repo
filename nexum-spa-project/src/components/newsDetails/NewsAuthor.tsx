import React from "react";

type Props = {
  readonly author: string;
};
export const NewsAuthor: React.FC<Props> = ({ author }) => {
  return (
    <div className="flex ml-1 my-2 font-bold">
      <span> {author} </span>
    </div>
  );
};
