import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const spotifyApi = createApi({
  reducerPath: "spotifyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/.netlify/functions/" }), // chama a função
  endpoints: (builder) => ({
    getTracklist: builder.query({
      query: (movieTitle) => `getTracklist?title=${movieTitle}`, // só passa o título
    }),
  }),
});

export const { useGetTracklistQuery } = spotifyApi;
