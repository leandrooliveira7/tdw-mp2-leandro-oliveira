import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/.netlify/functions/" }),
  endpoints: (builder) => ({
    getTrendingMovies: builder.query({
      query: () => `getTrendingMovies`,
    }),
  }),
});

export const { useGetTrendingMoviesQuery } = tmdbApi;
