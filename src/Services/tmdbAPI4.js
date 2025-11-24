import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTQ1MDZmYWI4YzNkOGQwZmZiNTdhNjUyZGU2ZTY2MyIsIm5iZiI6MTcyOTMzNDU2MC42NzUsInN1YiI6IjY3MTM4ZDIwMGNiNjI1MmY5OTA4NDA3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Us1O5vY34bX__8fB6HNzL6gDXEBQHvRXJjqE25shLBY";

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
