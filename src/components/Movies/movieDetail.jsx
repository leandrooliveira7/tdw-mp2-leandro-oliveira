import React from "react";
import { useSelector } from "react-redux";
import { Cast } from "../Movies/cast.jsx";
import { Tracklist } from "../Media/soundtrack.jsx";
import { setCast } from "../../store.jsx";
import { Trailer } from "../Media/trailer.jsx";

const MovieDetail = () => {
  const movie = useSelector((state) => state.movie.selectedMovie);

  if (!movie) {
    return (
      <div className="p-5">
        <h2 className="text-xl font-bold">Erro</h2>
        <p>Nenhum filme foi selecionado. Volta atrás e escolhe um filme.</p>
      </div>
    );
  }

  const posterSrc = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/300x450?text=No+Image";

  return (
    <article>
      <div className="p-5 m-4 flex flex-col md:flex-row items-start gap-6">
        <div className="flex-none">
          <img
            src={posterSrc}
            alt={movie.title}
            className="w-72 rounded-lg object-cover"
          />
        </div>

        <div className="flex-1">
          <h1 className="mb-2 text-2xl font-semibold text-zinc-900 dark:text-slate-100">
            {movie.title}
          </h1>
          <p className="mb-3 text-zinc-900 dark:text-slate-100">
            {movie.overview}
          </p>
          <div className="mt-6">
            <div className="flex items-center gap-4 text-sm text-zinc-700 dark:text-slate-200">
              {movie.release_date && (
                <span className="px-2 py-1 bg-zinc-300 dark:bg-zinc-600 rounded-md">
                  {new Date(movie.release_date).getFullYear()}
                </span>
              )}
              {movie.runtime && (
                <span className="px-2 py-1 bg-white/5 rounded-md">
                  {movie.runtime} min
                </span>
              )}
              <span className="px-2 py-1 bg-zinc-300 dark:bg-zinc-600 rounded-md">
                <span className="dark:text-violet-400 text-blue-500 font-semibold">
                  {movie.vote_average ? movie.vote_average.toFixed(1) : "—"}
                </span>
                <span className="ml-2 text-xs text-gray-400">
                  ({movie.vote_count ?? 0})
                </span>
              </span>
            </div>

            {movie.genres && movie.genres.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {movie.genres.map((g) => (
                  <span
                    key={g.id || g.name}
                    className="text-xs px-3 py-1 bg-indigo-600/20 text-indigo-100 rounded-full"
                  >
                    {g.name}
                  </span>
                ))}
              </div>
            )}

            <Cast movieId={movie.id} />

            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={() => window.history.back()}
                className="px-4 py-2 rounded-md dark:bg-violet-400 dark:hover:bg-violet-500 bg-blue-500 hover:bg-blue-600 text-white text-sm shadow"
              >
                Voltar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6">
          <div className="h-full bg-white/5 dark:bg-gray-800 rounded-lg shadow flex flex-col">
            <Tracklist movie={movie} />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="h-full bg-white/5 dark:bg-gray-800 rounded-lg shadow flex flex-col">
            <Trailer movieTitle={movie.title} />
          </div>
        </div>
      </div>
    </article>
  );
};

export { MovieDetail };
