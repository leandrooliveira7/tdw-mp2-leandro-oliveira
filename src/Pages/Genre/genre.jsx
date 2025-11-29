import { useSelector } from "react-redux";
import { useGetMoviesByGenreQuery } from "../../Services/tmdbAPI2.js";
import { GenreSelector } from "../../components/Movies/genreSelector.jsx";
import { MovieGrid } from "../../components/Movies/movieGrid.jsx";
import { SearchInput } from "../../components/Layouts/searchInput.jsx";

const Genre = () => {
  const selectedGenre = useSelector((state) => state.genre.selectedGenre);
  const { data, isLoading, error } = useGetMoviesByGenreQuery(
    selectedGenre?.id
  );

  if (isLoading) return (
    <p className="p-3 rounded-lg dark:bg-zinc-800 bg-slate-200">Loading...</p>
  );
  if (error) return (
    <p className="p-3 rounded-lg dark:bg-zinc-800 bg-slate-200">
      Something went wrong!
    </p>
  );

  return (
    <div className="p-5 m-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-bold text-xl">
          {selectedGenre ? selectedGenre.name : "No genre selected"}
        </h1>

        <div className="flex">
          <SearchInput />
        </div>
      </div>

      <div className="mb-6">
        <GenreSelector />
      </div>

      <MovieGrid movies={data?.results || []} />
    </div>
  );
};

export { Genre };
