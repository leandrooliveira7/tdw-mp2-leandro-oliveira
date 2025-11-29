import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token = process.env.TMDB_TOKEN;
    
export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Bearer ${token}`
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: () => `trending/movie/week`,
    }),
  }),
});

export const { useGetPopularMoviesQuery } = tmdbApi;
