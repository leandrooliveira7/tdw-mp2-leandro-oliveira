import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tmdbApi2 = createApi({
  reducerPath: "tmdbApi2",
  baseQuery: fetchBaseQuery({ baseUrl: "/.netlify/functions/" }),
  endpoints: (builder) => ({
    getMoviesByGenre: builder.query({
      query: (genreId) =>
        `getMoviesByGenre?genreId=${encodeURIComponent(genreId)}`,
    }),
  }),
});

export const { useGetMoviesByGenreQuery } = tmdbApi2;