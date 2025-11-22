import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full items-center justify-between bg-zinc-700 flex rounded-md mb-3 p-3">
      <Link
        to="/"
        className="p-3 font-bold text-white text-2xl hover:text-cyan-600 visited:text-white hover:underline"
      >
        Movie Finder
      </Link>

      <Link
        to="/about"
        className="p-3 font-bold text-white hover:text-cyan-600 visited:text-white hover:underline"
      >
        About
      </Link>
    </nav>
  );
};

export { Navbar };
