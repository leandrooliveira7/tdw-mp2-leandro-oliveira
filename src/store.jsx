import { configureStore, createSlice } from "@reduxjs/toolkit";
import { tmdbApi } from "./Services/tmdbAPI.js";
import { tmdbApi2 } from "./Services/tmdbAPI2.js";
import { tmdbApi3 } from "./Services/tmdbAPI3.js";
import { spotifyApi } from "./Services/spotify.js";
import { youtubeAPI } from "./Services/youtube.js";
import { tmdbApi4 } from "./Services/tmdbAPI4.js";

const genreSlice = createSlice({
  name: "genre",
  initialState: {
    selectedGenre: null,
  },
  reducers: {
    setGenero: (state, action) => {
      state.selectedGenre = action.payload;
    },
  },
});

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    selectedMovie: null,
  },
  reducers: {
    setSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
  },
});

const castSlice = createSlice({
  name: "cast",
  initialState: {
    casts: {},
  },
  reducers: {
    setCast: (state, action) => {
      const { movieId, cast } = action.payload;
      state.casts[movieId] = cast;
    },
  },
});

const TracklistSlice = createSlice({
  name: "tracklist",
  initialState: {
    tracklists: {},
  },
  reducers: {
    setTracklist: (state, action) => {
      const { movieId, tracklists } = action.payload;
      state.tracklists[movieId] = tracklists;
    },
  },
});

const TrailerSlice = createSlice({
  name: "trailer",
  initialState: {
    trailers: {},
  },
  reducers: {
    setTrailers: (state, action) => {
      const { movieId, trailers } = action.payload;
      state.trailers[movieId] = trailers;
    },
  },
});

const SearchSlice = createSlice({
  name: "search",
  initialState: {
    results: {},
  },
  reducers: {
    setResults: (state, action) => {
      const { movieId, trailers } = action.payload;
      state.results[movieId] = results;
    },
  },
});

export const { setGenero } = genreSlice.actions;
export const { setSelectedMovie } = movieSlice.actions;
export const { setCast } = castSlice.actions;
export const { setTracklist } = TracklistSlice.actions;
export const { setTrailers } = TrailerSlice.actions;
export const { setResults } = SearchSlice.actions;

export const store = configureStore({
  reducer: {
    genre: genreSlice.reducer,
    movie: movieSlice.reducer,
    tracklist: TracklistSlice.reducer,
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    [tmdbApi2.reducerPath]: tmdbApi2.reducer,
    [tmdbApi3.reducerPath]: tmdbApi3.reducer,
    [spotifyApi.reducerPath]: spotifyApi.reducer,
    [youtubeAPI.reducerPath]: youtubeAPI.reducer,
    [tmdbApi4.reducerPath]: tmdbApi4.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(tmdbApi.middleware)
      .concat(tmdbApi2.middleware)
      .concat(tmdbApi3.middleware)
      .concat(spotifyApi.middleware)
      .concat(youtubeAPI.middleware)
      .concat(tmdbApi4.middleware),
});
