export const tmdbApi3 = createApi({
  reducerPath: "tmdbApi3",
  baseQuery: fetchBaseQuery({ baseUrl: "/.netlify/functions/" }),
  endpoints: (builder) => ({
    getMovieDetails: builder.query({
      // alterei o nome para ficar mais claro
      query: (movieId) =>
        `getCastByMovie?movieId=${encodeURIComponent(movieId)}`, // mantém a mesma Netlify Function
    }),
  }),
});

export const { useMovieDetailsQuery } = tmdbApi3;
