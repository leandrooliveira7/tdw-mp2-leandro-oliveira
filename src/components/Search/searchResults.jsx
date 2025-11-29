import { useGetMoviebySearchQuery } from "../../Services/tmdbAPI4.js";
import { useParams } from "react-router-dom";
import { MovieGrid } from "../Movies/movieGrid.jsx";
import { SearchInput } from "../Layouts/searchInput.jsx";

const SearchResults = () => {
  const { query } = useParams();
  const { data, isLoading, error } = useGetMoviebySearchQuery(query);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Ocorreu um erro ao pesquisar.</p>;

  return (
    <div className="p-4 m-5">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Resultados para: "{query}"</h1>
        </div>

        <div className="flex">
          <SearchInput />
        </div>
      </div>

      <MovieGrid movies={data?.results ?? []} />
    </div>
  );
};

export { SearchResults };
