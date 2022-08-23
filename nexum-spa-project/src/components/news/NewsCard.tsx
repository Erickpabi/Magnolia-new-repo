import React, {useEffect, useState} from "react";
import Link from "next/link";
import moment from "moment";
import envConstants from "@/constants/env_constants";
import type {ImageLink} from "@/types/page-helper-types";
import type {NewsProps} from "@/types/delivery_endpoint_props";

function NewsCard(props: any) {
  const [imageLink, setImageLink] = useState<ImageLink>();
  const getImageLink = () => {
    setImageLink(props.news?.imageLink[0])
  }
  useEffect(() => {
    getImageLink()
  }, [])
  return (
    <div>
      <div className="w-full h-full bg-white rounded-lg border-2  p-2 mb-3 cursor-pointer">
        <img
          src={`${envConstants.mgnlHost}${imageLink?.renditions?.["240x180"].link}`}
          alt="props.Index image"
          className="object-cover rounded-lg h-40 w-full"
        />
        <div className="text-blue-700 font-medium capitalize mb-1 hover:underline  truncate ...">
          {props.news.title}
        </div>
        <div className="font-medium capitalize mb-3 ">
          {moment(`${props.news.date}`).format("Do MMM YYYY")}
        </div>
        <div className="text-sm h-10">
          <p
            className="Paragraph"
            dangerouslySetInnerHTML={{
              __html:
                props?.news?.content?.length < 124
                  ? props?.news?.content
                  : props?.news?.content?.slice(0, 124) + `...`,
            }}
          />
        </div>

        <Link
          href={`/news/news-details?id=${props.news["@id"]}`}
          as={`/news/news-details?id=${props.news["@id"]}`}
          passHref
        >
          <div className="text-blue-700 font-bold hover:underline cursor-pointer mt-10">
            Read More
          </div>
        </Link>
        <div className="font-semibold cursor-pointer mt-3">
          <div className="border rounded-md flex justify-center bg-blue-700 text-white">
            {" "}
            By: {props.news.author}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
