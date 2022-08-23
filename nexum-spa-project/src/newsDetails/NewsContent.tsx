import React from "react";

type Props = {
  readonly content: string;
};
export const NewsContent: React.FC<Props> = ({ content }) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};
