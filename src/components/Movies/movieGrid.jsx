import React from "react";
import { useState } from "react";
import { MovieCard } from "./movieCard";

const MovieGrid = ({ movies = [] }) => {
  const moviesPerPage = 8; // quantos filmes por página
  const totalPages = Math.ceil(movies.length / moviesPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;

  const currentMovies = movies.slice(startIndex, endIndex);

  return (
    <div className="justify-between">
      <h2 className="text-xl font-semibold mb-4">
        Popular Movies <span className="text-cyan-600">this week</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <div className="flex items-center justify-center mt-8 gap-3">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className="px-4 py-2 bg-gray-200 rounded-md text-sm hover:bg-cyan-300 disabled:opacity-40 text-black"
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, index) => {
          const pageNum = index + 1;
          return (
            <button
              key={pageNum}
              onClick={() => setCurrentPage(pageNum)}
              className={`px-3 py-1 rounded-md text-sm ${
                currentPage === pageNum
                  ? "bg-cyan-600 text-black font-bold"
                  : "bg-gray-700 hover:bg-cyan-600"
              }`}
            >
              {pageNum}
            </button>
          );
        })}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className="px-4 py-2 bg-gray-200 rounded-md text-sm hover:bg-cyan-300 disabled:opacity-40 text-black"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export { MovieGrid };
