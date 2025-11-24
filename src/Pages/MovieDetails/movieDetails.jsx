import { useSelector } from "react-redux";
import { MovieDetail } from "../../components/Movies/movieDetail.jsx";

const MovieDetails = () => {
  const movie = useSelector((state) => state.movie.selectedMovie);
  return (
    <article className="p-5 m-4">
      <MovieDetail />
    </article>
    
  );
};

export { MovieDetails };
