import axios from "axios";
import { DefaultPaginationOptions } from "../types";

const API_URL: string =
  process.env.URL_API_GIPHY || "https://api.giphy.com/v1/gifs/search";

const defaultOptions: DefaultPaginationOptions = {
  limit: 10,
  offset: 0,
};

interface ResponseData {
  results: any;
  pagination: any;
}

class GifsService {
  /**
   * 
   * Service to search gifs by keyword
   *
   * @param keyword Keyword by search gifs.
   * @param limit Max number of object to return.
   * @param offset Specific the initial position of the results.
   * @returns A object with search results and the pagination.
   */
  async getGifsByKeyword(
    keyword: string,
    limit: string,
    offset: string
  ): Promise<ResponseData> {
    const API_KEY = process.env.APIKEYGIPHY as string;

    const headers: any = {
      "Content-Type": "application",
      "User-Agent": "request",
      Accept: "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      Connection: "keep-alive",
    };

    const response: any = await axios
      .get(API_URL, {
        headers: headers,
        params: {
          api_key: API_KEY,
          q: keyword,
          limit: limit || defaultOptions.limit,
          offset: offset || defaultOptions.offset,
        },
      })
      .catch((error) => {
        throw new Error(error);
      });

    return {
      results: response.data.data,
      pagination: response.data.pagination,
    };
  }
}

export default GifsService;
