import React from "react";

type Props = {
  readonly title: string;
  readonly url: string;
};

function Links({ title, url }: Props) {
  return (
    <div className="">
      <a href={url}>{title}</a>
    </div>
  );
}

export default Links;
