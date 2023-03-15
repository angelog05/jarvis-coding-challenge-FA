import { useEffect, useState } from "react";
import useFetchData from "../hooks/useFetch";

export const List = () => {
  const { fetchData, data, isLoading, error, pagination, setPagination } =
    useFetchData();
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData({ keyword: "cat", limit: 10, offset: 0 });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <h1>Search GIFS</h1>
      <section className="search">
        <input
          type="text"
          id="input-search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="button"
          id="button-search"
          onClick={() => fetchData({ keyword: search, offset: 0, limit: 10 })}
          disabled={!search}
        >
          Search
        </button>
      </section>

      {isLoading && <section className="loader">Loading...</section>}
      {error && <p>Ups! An Error Occurred</p>}
      {data &&
        data.map((gif: any) => {
          return (
            <section key={gif.id}>
              <img
                src={gif.images.downsized.url}
                alt={gif.images.downsized.url}
                width="400"
                height="500"
              />
              <div>{gif.title}</div>
            </section>
          );
        })}

      <section>
        {pagination.count === 0 ? (
          <div>-</div>
        ) : (
          <div>
            <button
              type="button"
              disabled={!search}
              onClick={() => {
                fetchData({
                  keyword: search,
                  limit: pagination.limit,
                  offset: pagination.offset + pagination.limit,
                });
              }}
            >
              Más por favor
            </button>
          </div>
        )}

        {pagination.offset > 0 ? (
          <div>
            <button
              type="button"
              disabled={!search}
              onClick={() => {
                fetchData({
                  keyword: search,
                  limit: pagination.limit,
                  offset: pagination.offset - pagination.limit,
                });
              }}
            >
              Volver
            </button>
          </div>
        ) : (
          <div></div>
        )}

        <select
          name="cars"
          id="cars"
          onChange={(e) =>
            setPagination({ ...pagination, limit: parseInt(e.target.value) })
          }
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </section>
    </section>
  );
};
