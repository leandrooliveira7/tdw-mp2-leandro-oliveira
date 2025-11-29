import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token = process.env.TMDB_TOKEN;
  
export const tmdbApi2 = createApi({
  reducerPath: "tmdbApi2",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMoviesByGenre: builder.query({
      query: (genreId) =>
        `discover/movie?include_adult=false&include_video=false&language=en-US&with_genres=${genreId}`,
    }),
  }),
});

export const { useGetMoviesByGenreQuery } = tmdbApi2;