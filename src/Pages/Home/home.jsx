import React from "react";
import { useGetMovieBySearchQuery } from "../../Services/tmdbAPI.js";
import { GenreSelector } from "../../components/Movies/genreSelector.jsx";
import { MovieGrid } from "../../components/Movies/movieGrid.jsx";
import { SearchInput } from "../../components/Layouts/searchInput.jsx";

const Home = () => {
  const { data, error, isLoading } = useGetMovieBySearchQuery();

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao buscar os filmes.</p>;

  const movies = data?.results ?? [];

  return (
    <div>
      <div className="p-5 m-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-bold">Welcome</h1>
            <h3 className="text-xl">
              Let's find a movie for{" "}
              <span className="text-blue-500 dark:text-violet-400 font-bold">you!</span>
            </h3>
          </div>
          <div className="flex">
            <SearchInput  />
          </div>
        </div>

        <div className="mt-4">
          <GenreSelector />
        </div>
      </div>

      <div className="p-5 m-4">
        <MovieGrid movies={movies} />
      </div>
    </div>
  );
};

export default Home;
