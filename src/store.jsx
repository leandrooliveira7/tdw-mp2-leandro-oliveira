import { configureStore, createSlice } from "@reduxjs/toolkit";
import { tmdbApi } from "./Services/tmdbAPI.js";
import { tmdbApi2 } from "./Services/tmdbAPI2.js";
import { tmdbApi3 } from "./Services/tmdbAPI3.js";

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

export const { setGenero } = genreSlice.actions;
export const { setSelectedMovie } = movieSlice.actions;
export const { setCast } = castSlice.actions;

export const store = configureStore({
  reducer: {
    genre: genreSlice.reducer,
    movie: movieSlice.reducer,
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    [tmdbApi2.reducerPath]: tmdbApi2.reducer,
    [tmdbApi3.reducerPath]: tmdbApi3.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware).concat(tmdbApi2.middleware).concat(tmdbApi3.middleware),
});

