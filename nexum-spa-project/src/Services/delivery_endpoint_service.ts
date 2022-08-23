import envConstants from "@/constants/env_constants";
import type { NewsProps, PressReleaseProps } from "@/types/delivery_endpoint_props";
import type { AuthorProps } from "@/types/page-helper-types";
import axios from "axios";

class DeliveryEndpointService {
  pagesApi = `${envConstants.authorInstance}/${envConstants.pagesEndpoint}`;
  templateAnnotationsApi = `${envConstants.authorInstance}/${envConstants.templatesEndpoint}`;




  async getSinglePressData(id: string): Promise<PressReleaseProps | null> {
    try {
      const { data } = await axios.get(
        `${envConstants.authorInstance}/${envConstants.pressReleaseEndpoint}?@jcr:uuid=${id}`
      );

      if (data.results.length > 0) {
        return {
          id: data.results[0]["@id"],
          title: data.results[0].title,
          content: data.results[0].content,
          organization: data.results[0].organization,
          imageLink: data.results[0].imageLink[0],
          date: data.results[0].date,
          highlight: data.highlight
        };
      }
      return null;
    } catch (error) {


      return null;
    }

  }

  async getPressData(): Promise<PressReleaseProps[]> {
    try {
      const { data } = await axios.get(
        `${envConstants.authorInstance}/${envConstants.pressReleaseEndpoint}`
      );


      return data.results.map((press: any) => {
        return {
          id: press["@id"],
          title: press.title,
          content: press.content,
          organization: press.organization,
          imageLink: press.imageLink[0],
          date: press.date,
        }
      })


    } catch (error) {


      return [];
    }

  }
  async getPressHiglightsData(): Promise<PressReleaseProps[]> {
    try {
      const { data } = await axios.get(
        `${envConstants.authorInstance}/${envConstants.pressReleaseEndpoint}/?highlight=true&limit=4`
      );


      return data.results.map((press: any) => {
        return {
          id: press["@id"],
          title: press.title,
          content: press.content,
          organization: press.organization,
          imageLink: press.imageLink[0],
          highlight: press.highlight,
          date: press.date
        }
      })


    } catch (error) {
      return [];
    }

  }

  async getSingleNewsData(id: string): Promise<NewsProps | null> {
    try {
      const { data } = await axios.get(
        `${envConstants.authorInstance}/${envConstants.newsEndpoint}`, {
        params: {
          "@jcr": `uuid=${id}`
        }
      }
      );

      if (data.results.length > 0) {
        return {
          id: data.results[0]["@id"],
          title: data.results[0].title,
          content: data.results[0].content,
          imageLink: data.results[0].imageLink,
          author: data.results[0].author,
          date: data.results[0].date,
          tag: data.results[0].tag,
          highlight: data.highlight,
          categories: []

        };
      }
      return null;
    } catch (error) {


      return null;
    }

  }

  /**
 * @description get page content, template annotations from magnolia author instance (rest endpoint)
 */
  async getAuthorPageData(path: string): Promise<AuthorProps | null> {
    try {
      let modifiedPath: string;
      if (path === "/") {
        modifiedPath = path + "homepage";
      } else {
        modifiedPath = "/homepage/" + path;
      }

      const { data: pageContent } = await axios.get(`${this.pagesApi}${modifiedPath}`);
      const { data: templateAnnotations } = await axios.get(
        `${this.templateAnnotationsApi}${modifiedPath}`
      );

      return { pageContent, templateAnnotations };
    } catch (error) {
      return null
    }

  };

  async fetchBanner(): Promise<any[]> {
    try {
      const { data } = await axios.get(
        `${envConstants.authorInstance}/${envConstants.bannerEndpoint}`
      );
      return data.results
    } catch (e: any) {
      return []
    }
  };
  async fetchNewsHighlights(categoryName?: string, limit?: number): Promise<NewsProps[]> {
    try {
      const url = `${envConstants.authorInstance}/${envConstants.newsEndpoint}?highlight=true?limit=5`
      const { data } = await axios.get(
        url, { params: { categoryName, limit } }
      );
      return data.results
    } catch (e: any) {
      return []
    }
  };

  async getCategories(): Promise<[]> {
    try {
      const url = `${envConstants.authorInstance}/${envConstants.categoryEndpoint}`
      const { data } = await axios.get(url);
      return data.results
    } catch (e: any) {
      return []
    }
  };

  async fetchNews(category: string = 'see all', limit?: number): Promise<NewsProps[]> {
    try {
      const url = `${envConstants.authorInstance}/${envConstants.newsEndpoint}`
      const filterUrl = `${envConstants.authorInstance}/${envConstants.newsEndpoint}?categories=${category}`
      const { data } = await axios.get(
        category === 'see all' ? url : filterUrl
      );
      return data.results
    } catch (e: any) {
      return []
    }
  };

  async getAuthorNewsData(news: NewsProps): Promise<NewsProps[]> {
    try {
      const { data } = await axios.get(
        `${envConstants.authorInstance}/${envConstants.newsEndpoint}`, {
        params: { author: news.author }
      }
      );
      const filteredData = data.results.filter((newsData: any) => {
        return newsData["@id"] !== news.id;
      })
      return filteredData.map((singleNews: any) => {
        return {
          id: singleNews["@id"],
          title: singleNews.title,
          content: singleNews.content,
          imageLink: singleNews.imageLink,
          author: singleNews.author,
          date: singleNews.date,
          tag: singleNews.tag,
        };
      });


    } catch (error) {


      return []
    }

  };
}
const deliveryEndpointService = new DeliveryEndpointService()

export default deliveryEndpointService