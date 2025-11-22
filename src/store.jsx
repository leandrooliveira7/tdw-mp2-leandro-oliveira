import { configureStore, createSlice } from "@reduxjs/toolkit";
import { tmdbApi } from "./Services/tmdbAPI.js";

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
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});

