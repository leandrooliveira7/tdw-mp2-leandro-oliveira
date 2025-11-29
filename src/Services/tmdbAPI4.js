import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tmdbApi4 = createApi({
  reducerPath: "tmdbApi4",
  baseQuery: fetchBaseQuery({ baseUrl: "/.netlify/functions/" }),
  endpoints: (builder) => ({
    getMovieBySearch: builder.query({
      query: (searchQuery) =>
        `getMovieBySearch?query=${encodeURIComponent(searchQuery)}`,
    }),
  }),
});

export const { useGetMovieBySearchQuery } = tmdbApi4;
