import React from "react";
import { PressReleaseCard } from "@/components/press/PressReleaseCard";
import type { PressProps } from "@/types/delivery_endpoint_props";

const testNews = [
  {
    id: "2",
    title: "string",
    content: "string",
    image: "string",
    organization: "string",
    dateTime: "string",
    tags: [],
  },
  {
    id: "2",
    title: "string",
    content: "string",
    image: "string",
    organization: "string",
    dateTime: "string",
    tags: [],
  },
];

export const PressSection: React.FC<PressProps[]> = () => {
  return (
    <div className="md:p-10 p-10">
      <div className="flex justify-between mb-5">
        <div className="font-bold text-2xl block">Latest Press</div>
        <div className="border w-20 text-center rounded-md bg-blue-700 text-white p-1 ">
          See All
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {testNews.map((pressItem) => {
          return <PressReleaseCard {...pressItem} />;
        })}
      </div>
    </div>
  );
};

//TODO: Remove fake data
