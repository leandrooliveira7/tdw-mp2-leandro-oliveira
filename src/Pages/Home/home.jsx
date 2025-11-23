import React from "react";
import { useGetPopularMoviesQuery } from "../../Services/tmdbAPI.js";
import { GenreSelector } from "../../components/Movies/genreSelector.jsx";
import { MovieGrid } from "../../components/Movies/movieGrid.jsx";

const Home = () => {
  const { data, error, isLoading } = useGetPopularMoviesQuery();

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao buscar os filmes.</p>;

  const movies = data?.results ?? [];

  return (
    <div>
      <div className="p-5 m-4">
        <h1 className="font-bold">Welcome</h1>
        <h3 className="text-xl">
          Let's find a movie for{" "}
          <span className="text-cyan-600 font-bold">you!</span>
        </h3>
        <GenreSelector />
      </div>

      <div className="p-5 m-4">
        <MovieGrid movies={movies} />
      </div>
    </div>
  );
};

export default Home;
