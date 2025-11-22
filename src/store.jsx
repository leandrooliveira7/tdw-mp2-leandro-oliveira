import { configureStore, createSlice } from "@reduxjs/toolkit";
import { tmdbApi } from "./Services/tmdbAPI.js";
import { tmdbApi2 } from "./Services/tmdbAPI2.js";

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

export const { setGenero } = genreSlice.actions;

export const store = configureStore({
  reducer: {
    genre: genreSlice.reducer,
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    [tmdbApi2.reducerPath]: tmdbApi2.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware).concat(tmdbApi2.middleware),
});

