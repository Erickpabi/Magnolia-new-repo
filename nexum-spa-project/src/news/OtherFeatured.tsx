import React, { useEffect, useState } from "react";
import type { NewsProps } from "@/types/delivery_endpoint_props";
import deliveryEndpointService from "@/services/delivery_endpoint_service";
import envConstants from "@/constants/env_constants";

export const OtherFeaturedNews = () => {
  const [newsData, setNewsData] = useState<NewsProps[]>([]);

  const getNewsData = async () => {
    const nexumNews = await deliveryEndpointService.fetchNewsHighlights();
    const otherFeatured = nexumNews.slice(1, 5)
    setNewsData(otherFeatured);
  };

  useEffect(() => {
    getNewsData();
  }, []);
  return newsData.length > 0 ? (
    <div className="other-featured-news basis-1/2">
      {newsData.map((news, index) => {
        return (
          <div className="mx-auto h-full" key={index+'-other-news'}>
            <img
              src={`${envConstants.mgnlHost}${news.imageLink[0]!["@link"]}`}
              alt="Featured image"
              className="other-featured-image"
            />
            <p className="other-feature-text">{news.title}</p>
          </div>
        );
      })}
    </div>
  ) : null;
};

export default OtherFeaturedNews;
