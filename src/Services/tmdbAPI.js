import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/.netlify/functions/" }), // chama a função serverless
  endpoints: (builder) => ({
    getMovieBySearch: builder.query({
      query: (searchQuery) =>
        `getTrendingMovies?query=${encodeURIComponent(searchQuery)}`,
    }),
  }),
});

export const { useGetMovieBySearchQuery } = tmdbApi;
