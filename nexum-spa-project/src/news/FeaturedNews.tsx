import React, { useEffect, useState } from "react";
import axios from "axios";
import type { NewsProps } from "@/types/delivery_endpoint_props";
import deliveryEndpointService from "@/services/delivery_endpoint_service";
import envConstants from "@/constants/env_constants";
import type {ImageLink} from "@/types/page-helper-types";

type Props = {
  readonly text: string;
};

export const FeaturedNews: React.FC<Props> = () => {
  const [newsData, setNewsData] = useState<NewsProps[]>([]);
  const [imageLink, setImageLink] = useState<ImageLink>();
  const getImageLink = (singleNews: NewsProps | undefined) => {
    setImageLink(singleNews?.imageLink[0])
  }
  const getNewsData = async () => {
    const nexumNews: NewsProps[] = await deliveryEndpointService.fetchNewsHighlights();
    setNewsData(nexumNews);
    getImageLink(nexumNews[0])
  };

  useEffect(() => {
    getNewsData();
  }, []);

  return newsData.length > 0 ? (
    <div className="featured-news basis-1/2">
      <img
        src={`${envConstants.mgnlHost}${
            imageLink?.renditions?.["1366x1024"].link
        }`}
        alt="Featured image"
        className="object-cover rounded-lg h-full w-full"
      />
      <p className="main-feature-text">{newsData[0]?.title}</p>
    </div>
  ) : null;
};
