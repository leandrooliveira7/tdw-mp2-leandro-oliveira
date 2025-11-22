import { useSelector } from "react-redux";
import { useGetMoviesByGenreQuery } from "../../Services/tmdbAPI2.js";
import { GenreSelector } from "../../components/Movies/genreSelector.jsx";
import { MovieGrid } from "../../components/Movies/movieGrid.jsx";

const Genre = () => {
  const selectedGenre = useSelector((state) => state.genre.selectedGenre);
  const { data, isLoading, error } = useGetMoviesByGenreQuery(selectedGenre?.id);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  return (
    <div>
      <div className="p-5 m-4">
        <h3 className="font-bold text-xl">
          {selectedGenre ? selectedGenre.name : "No genre selected"}
        </h3>

        <GenreSelector className="mb-3" />

        <div className="mt-3">
          <MovieGrid movies={data?.results || []} />
        </div>
      </div>
    </div>
  );
};

export { Genre };
