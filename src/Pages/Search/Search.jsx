import { MovieGrid } from "../../components/Movies/movieGrid.jsx";

const Search = ({ movies }) => {
    return (
        <div className="p-5 m-4">
            <MovieGrid movies={movies} />
        </div>
    );
}

export { Search };