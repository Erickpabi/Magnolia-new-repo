import React from "react";

interface NewsHeaderItemProps {
  title: string;
  id: string
  callback: (title: string) => void;
}

function NewsHeaderItem({ title, callback, id }: NewsHeaderItemProps) {
  return (
    <div>
      <div onClick={() => callback(id)} className="news-header-item">
        {title.toUpperCase()}
      </div>
    </div>
  );
}

export default NewsHeaderItem;
