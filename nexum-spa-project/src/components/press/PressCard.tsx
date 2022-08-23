import React from "react";
import Link from "next/link";

import moment from "moment";
import envConstants from "@/constants/env_constants";

export const PressCard = ({ pressData }: any) => {
  return (
    <div className="">
      <div className="w-full md:w-72 h-full bg-white rounded-lg border-2 mb-3">
        <img
          src={`${envConstants.mgnlHost}${pressData.imageLink["@link"]}`}
          alt="Index image"
          className="object-cover rounded-lg  h-52 w-full"
        />
        <div className="mb-2 mt-2 px-2 ">
          <div className=" text-blue-700 font-bold uppercase text-center">
            {pressData.title.length > 24
              ? pressData.title.slice(0, 24) + "..."
              : pressData.title}
          </div>
        </div>
        <div className="text-sm h-10 p-2">
          <p
            className="Paragraph"
            dangerouslySetInnerHTML={{
              __html:
                pressData.content && pressData.content.length > 124
                  ? pressData.content.slice(0, 124)
                  : pressData.content,
            }}
          />
        </div>
        <div className=" text-sm text-right mt-6 p-2">
          {moment(`${pressData.date}`).format("Do MMM YYYY")}
        </div>
        <div className="text-blue-700 ml-3 font-bold hover:underline cursor-pointer mt-2">
          <Link
            href={`/press-release/press-details?id=${pressData["@id"]}`}
            as={`/press-release/press-details?id=${pressData["@id"]}`}
            passHref
          >
            Read More
          </Link>
        </div>
      </div>
      {/*</div>*/}
    </div>
  );
};
