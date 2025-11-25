import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const youtubeAPI = createApi({
  reducerPath: "youtubeAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "/.netlify/functions/" }),
  endpoints: (builder) => ({
    getTrailer: builder.query({
      query: (movieTitle) => `getTrailer?title=${movieTitle}`,
    }),
  }),
});

export const { useGetTrailerQuery } = youtubeAPI;
