import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tmdbApiTrending = createApi({
  reducerPath: "tmdbApiTrending",
  baseQuery: fetchBaseQuery({ baseUrl: "/.netlify/functions/" }),
  endpoints: (builder) => ({
    getTrendingMovies: builder.query({
      query: () => `getTrendingMovies`,
    }),
  }),
});

export const { useGetTrendingMoviesQuery } = tmdbApiTrending;
