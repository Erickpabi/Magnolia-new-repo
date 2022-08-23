import React, { useEffect, useState } from "react";
import NewsCard from "@/components/news/NewsCard";
import type { NewsProps } from "@/types/delivery_endpoint_props";
import deliveryEndpointService from "@/services/delivery_endpoint_service";

type Props = {
  readonly image: any;
  readonly text: string;
  readonly details: string;
};
export const NewsHighlights: React.FC<Props> = () => {
  const [newsData, setNewsData] = useState<NewsProps[]>([]);
  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    const news = await deliveryEndpointService.fetchNewsHighlights();
    const slicedNews = news.slice(0, 4)
    setNewsData(slicedNews);
  };


  return (
    <div className="md:container md:mx-auto">
      <div className="grid md:grid-cols-4 gap-3">
        {newsData.map((news: any, index) =>
          news.title ? (
            <NewsCard news={news} key={index + "-single-news"} />
          ) : null
        )}
      </div>
    </div>
  );
};
