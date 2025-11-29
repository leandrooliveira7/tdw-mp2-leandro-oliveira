import React from "react";
import { useGetCastbyMovieQuery } from "../../Services/tmdbAPI3.js";

const Cast = ({ movieId }) => {
  const { data, isLoading, error } = useGetCastbyMovieQuery(movieId);

  if (isLoading) return <p>Carregando elenco...</p>;
  if (error) return <p>Erro ao carregar elenco.</p>;

  const castToShow = data?.cast || [];

  return (
    <div className="mt-5">
      <h2 className="text-xl font-semibold mb-2">Elenco</h2>
      {castToShow.length === 0 ? (
        <p>Nenhum ator disponível.</p>
      ) : (
        <ul className="flex flex-wrap justify-between gap-4">
          {castToShow.slice(0, 8).map((actor) => (
            <li key={actor.id} className="w-24 text-center">
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : "https://via.placeholder.com/100x150?text=No+Image"
                }
                alt={actor.name}
                className="w-24 h-36 object-cover rounded-lg mb-1"
              />
              <span className="text-xs text-zinc-900 dark:text-slate-100 block">{actor.name}</span>
              <span className="text-xs text-zinc-500 dark:text-slate-400 block">
                {actor.character}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { Cast };
