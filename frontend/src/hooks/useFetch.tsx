import { useState } from "react";
import axios from "axios";

interface Params {
  keyword: string;
  limit:  number;
  offset: number;
}

const URL = process.env.REACT_URL_API_GIPHY || "http://localhost:8001/gifs";

const useFetchData = () => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    total_count: 0,
    count: 0,
    offset: 0,
    limit: 10,
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (params: Params) => {
    if (!params.keyword) params.keyword = "cat"
    const urlParams = `${URL}?keyword=${params.keyword}&limit=${params.limit}&offset=${params.offset}`;

    await axios
      .get(urlParams)
      .then((result) => {
        setData(result.data.results);
        setPagination({
          total_count: result.data.pagination.total_count,
          count: result.data.pagination.count,
          offset: result.data.pagination.offset,
          limit: params.limit || 10
        });
        setIsLoading(false);
      })
      .catch((error) => setError(error));

    return {
      done: true,
    };
  };

  return {
    fetchData,
    data,
    isLoading,
    error,
    pagination,
    setPagination
  };
};

export default useFetchData;
