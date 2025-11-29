import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token = process.env.TMDB_TOKEN;
  
export const tmdbApi3 = createApi({
  reducerPath: "tmdbApi3",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCastbyMovie: builder.query({
      query: (movieId) =>
        `movie/${movieId}/credits?language=en-US`,
    }),
  }),
});

export const { useGetCastbyMovieQuery } = tmdbApi3;