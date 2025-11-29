import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tmdbApi = createApi({
  reducerPath: "tmdbApi2",
  baseQuery: fetchBaseQuery({ baseUrl: "/.netlify/functions/" }), // chama a função serverless
  endpoints: (builder) => ({
    getMovieByGenre: builder.query({
      query: (genreId) =>
        `getMoviesByGenre?genreId=${encodeURIComponent(genreId)}`,
    }),
  }),
});

export const { useGetMovieByGenreQuery } = tmdbApi2;
