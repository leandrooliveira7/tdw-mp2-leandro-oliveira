import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/.netlify/functions/" }), // chama a função serverless
  endpoints: (builder) => ({
    getMoviesByGenre: builder.query({
      query: (genreId) =>
        `getMoviesByGenre?genreId=${encodeURIComponent(genreId)}`,
    }),
  }),
});

export const { useGetMoviesByGenreQuery } = tmdbApi;
