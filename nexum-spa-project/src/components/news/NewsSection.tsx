import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "@/components/news/NewsCard";
import NewsHeader from "@/components/common/NewsHeader";
import type { NewsProps } from "@/types/delivery_endpoint_props";
import deliveryEndpointService from "@/services/delivery_endpoint_service";

type Props = {
  readonly image: any;
  readonly text: string;
  readonly details: string;
};
export const NewsSection: React.FC<Props> = () => {
  const [newsData, setNewsData] = useState<NewsProps[]>([]);
  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    const news = await deliveryEndpointService.fetchNews();
    setNewsData(news);
  };

  const fetchNewsByCategory = async (categoryName: string) => {
    const news = await deliveryEndpointService.fetchNews(categoryName);
    // const filteredNews: NewsProps[] = []
    // newsData.map(newsItem => {
    //   const hasCategory = newsItem.categories.filter(cat => cat['@name'] === categoryName)
    //   if (hasCategory.length !== 0) {
    //     filteredNews.push(newsItem)
    //   }
    // })
    setNewsData(news)

  };

  const handleCallback = async (categoryName: string) => {
    if (categoryName === "see all") {
      await fetchNews();
    } else {
      await fetchNewsByCategory(categoryName);
    }
  };

  return (
    <div className="md:container md:mx-auto">
      <NewsHeader callback={handleCallback} />
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
