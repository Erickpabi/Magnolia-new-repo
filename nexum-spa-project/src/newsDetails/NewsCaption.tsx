import React from "react";

type Props = {
  readonly text: string;
};
export const NewsCaption: React.FC<Props> = ({ text }) => {
  return (
    <div className="flex ml-1 mb-2 font-bold">
      <span> {text} </span>
    </div>
  );
};
