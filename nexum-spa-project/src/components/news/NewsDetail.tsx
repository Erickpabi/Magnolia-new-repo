import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import { NewsHeading } from "@/components/newsDetails/NewsTitle";
import { DatePosted } from "@/components/newsDetails/DatePosted";
import { NewsImage } from "@/components/newsDetails/NewsImage";
import { NewsAuthor } from "@/components/newsDetails/NewsAuthor";
import { NewsContent } from "@/components/newsDetails/NewsContent";
import NewsCard from "@/components/news/NewsCard";
import type { NewsProps } from "@/types/delivery_endpoint_props";
import envConstants from "@/constants/env_constants";
import deliveryEndpointService from "@/services/delivery_endpoint_service";
import type {ImageLink} from "@/types/page-helper-types";

export const NewsDetails = () => {
  const router = useRouter();
  const id = router.query["id"] as string;

  const [newsData, setNewsData] = useState<NewsProps | null>();
  const [authorNews, setAuthorNews] = useState<NewsProps[]>([]);

  const [imageLink, setImageLink] = useState<ImageLink>();
  const getImageLink = (singleNews: NewsProps | null) => {
    setImageLink(singleNews?.imageLink[0])
  }

  const getNewsData = async () => {
    let filteredNews: NewsProps[] = [];
    const nexumNews = await deliveryEndpointService.getSingleNewsData(id);
    getImageLink(nexumNews)
    if (nexumNews) {
      filteredNews = await deliveryEndpointService.getAuthorNewsData(nexumNews);
    }
    setNewsData(nexumNews);


    setAuthorNews(filteredNews);
  };

  useEffect(() => {
    getNewsData();
  }, []);
  {
    return (
      <>
        <div className="md:p-10 p-10">
          {!newsData ? (
            <p>Loading</p>
          ) : (
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-10 ipad-pro:gap-4 mb-10 mx-4 ipad-pro:grid-cols-3 ipad:grid-cols-1 ipad:gap-0">
              <div className="col-span-2 mt-14">
                <NewsHeading title={newsData.title} />
                <DatePosted date={newsData.date} />
                <NewsImage
                  image={`${envConstants.mgnlHost}${imageLink?.renditions?.["1200x500"].link}`}
                />
                <NewsAuthor author={newsData.author} />
                <div className="w-[30%] mx-[35%] mt-[15px] bg-black">
                  <hr className="bg-black" />
                </div>
                <NewsContent content={newsData.content} />
              </div>
              <div className="mt-14 ">
                <h1 className="font-semibold text-[35px]">Related News</h1>
                {authorNews.length > 0 ? (
                  authorNews?.map((news: NewsProps, index) => {
                    return <NewsCard news={news} key={index} />;
                  })
                ) : (
                  <h5>No Related News Found</h5>
                )}
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
};
