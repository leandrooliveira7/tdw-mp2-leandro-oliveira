import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token = process.env.TMDB_TOKEN;

export const tmdbApi4 = createApi({
  reducerPath: "tmdbApi4",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMoviebySearch: builder.query({
      query: (query) =>
        `/search/movie?query=${query}&include_adult=false&include_video=false&language=en-US`,
    }),
  }),
});

export const { useGetMoviebySearchQuery } = tmdbApi4;
