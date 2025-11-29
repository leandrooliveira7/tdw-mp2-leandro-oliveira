import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tmdbApi3 = createApi({
  reducerPath: "tmdbApi3",
  baseQuery: fetchBaseQuery({ baseUrl: "/.netlify/functions/" }),
  endpoints: (builder) => ({
    getCastByMovie: builder.query({
      query: (movieId) =>
        `getCastByMovie?movieId=${encodeURIComponent(movieId)}`,
    }),
  }),
});

export const { useGetCastByMovieQuery } = tmdbApi3;
