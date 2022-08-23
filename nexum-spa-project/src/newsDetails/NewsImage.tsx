import React from "react";

type Props = {
  readonly image: string;
};
export const NewsImage: React.FC<Props> = ({ image }) => {
  return (
    <div className="flex ">
      <img
        src={image}
        width={1200}
        height={500}
        alt="props.Index image"
        className="rounded-lg"
      />
    </div>
  );
};
