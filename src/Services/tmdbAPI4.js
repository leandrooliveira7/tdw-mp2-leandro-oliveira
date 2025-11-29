import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/.netlify/functions/" }),
  endpoints: (builder) => ({
    getMovieBySearch: builder.query({
      query: (searchQuery) =>
        `getMovieBySearch?query=${encodeURIComponent(searchQuery)}`,
    }),
  }),
});

export const { useGetMovieBySearchQuery } = tmdbApi;
