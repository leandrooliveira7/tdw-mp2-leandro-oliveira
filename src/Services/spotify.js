//* este pedido è distinto dos restantes porque requer autenticaçao com client id e secret do spotify antes de efetuar o pedido

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

const basicAuth = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);

const rawBaseQuery = fetchBaseQuery({ baseUrl: "https://api.spotify.com/v1" });

const baseQueryWithToken = async (args, api, extraOptions) => {
  // Fetch a client-credentials token from Spotify
  const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basicAuth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  if (!tokenResponse.ok) {
    const text = await tokenResponse.text();
    return { error: { status: tokenResponse.status, error: text } };
  }

  const { access_token } = await tokenResponse.json();

  // Build request object expected by fetchBaseQuery
  const request =
    typeof args === "string"
      ? { url: args, headers: { Authorization: `Bearer ${access_token}` } }
      : { ...args, headers: { ...(args.headers || {}), Authorization: `Bearer ${access_token}` } };

  return rawBaseQuery(request, api, extraOptions);
};

export const spotifyApi = createApi({
  reducerPath: "spotifyApi",
  baseQuery: baseQueryWithToken, 
  endpoints: (builder) => ({
    getTracklist: builder.query({
      query: (movieTitle) =>
        `/search?q=${encodeURIComponent(movieTitle)} Soundtrack&type=album&limit=1`,
    }),
  }),
});

export const { useGetTracklistQuery } = spotifyApi;
