import React from 'react';

const MovieCard = ({ movie = {} }) => {
    const posterSrc = movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : "https://via.placeholder.com/500x750?text=No+Image";
    
    return (
        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img
                src={posterSrc}
                alt={movie.original_title}
                className=" object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">{movie.original_title}</h3>
                <h5 className="text-sm text-gray-500 dark:text-gray-400 mb-3">Release: {movie.release_date}</h5>

                <div className="flex items-center justify-between text-sm">
                    <div className="w-2/3">
                        <span className="text-xs text-gray-600 dark:text-gray-300">Popularity</span>
                        <div className="mt-1 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                            <div
                                title={`${movie.popularity}`}
                            />
                        </div>
                    </div>

                    <div className="w-1/3 flex flex-col items-end">
                        <span className="text-xs text-gray-600 dark:text-gray-300">Vote</span>
                        <div className="mt-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-semibold text-gray-900 dark:text-gray-100">
                            {movie.vote_average}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export { MovieCard };