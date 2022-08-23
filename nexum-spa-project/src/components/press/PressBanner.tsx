import envConstants from "@/constants/env_constants";
import React from "react";

type Props = {
  readonly image: any;
  readonly Caption: string;
};

export const PressBanner: React.FC<Props> = ({ image, Caption }) => {
  return (
    <div className="h-64">
      <div className="relative">
        <img
          className="w-full md:rounded-xl object-cover h-64 hover:object-scale-up"
          src={envConstants.mgnlHost + image["@link"]}
        />
        <div className="absolute bottom-0 left-0 ">
          <p className="text-6xl text-white p-4">{Caption ? Caption : ""}</p>
        </div>
      </div>{" "}
    </div>
  );
};
