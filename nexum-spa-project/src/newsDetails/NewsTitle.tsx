import React from "react";

type Props = {
  readonly title: string;
};
export const NewsHeading: React.FC<Props> = ({ title }) => {
  return (
    <div className="flex">
      <h1 className="text-[35px] leading-[30px]">{title}</h1>
    </div>
  );
};
