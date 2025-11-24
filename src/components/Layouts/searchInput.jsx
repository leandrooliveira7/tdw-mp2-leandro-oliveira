import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const value = e.target.elements.search.value.trim();
        if (value) {
          navigate(`/search/${encodeURIComponent(value)}`);
        }
      }}
    >
      <div className="relative">
        <svg
          className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg>

        <input
          name="search"
          type="search"
          placeholder="Search for a movie..."
          aria-label="Search movies"
          className="w-full bg-white/90 border border-gray-300 rounded-full py-2 pl-10 pr-4 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>
    </form>
  );
};

export { SearchInput };
