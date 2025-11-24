import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const youtubeAPI = createApi({
  reducerPath: "youtubeAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.googleapis.com/youtube/v3/",
  }),
  endpoints: (builder) => ({
    getTrailer: builder.query({
      query: (movieTitle) =>
        `search?part=snippet&q=${encodeURIComponent(
          movieTitle + " trailer"
        )}&key=${API_KEY}&type=video&maxResults=1`,
    }),
  }),
});

export const { useGetTrailerQuery } = youtubeAPI;
