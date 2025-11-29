import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full items-center justify-between dark:bg-zinc-800 bg-zinc-300 flex rounded-md mb-3 p-3">
      <Link
        to="/"
        className="p-3 font-bold text-zinc-900 dark:text-slate-100 text-2xl hover:text-blue-500 hover:underline dark:hover:text-violet-400"
      >
        Movie Finder
      </Link>

      <Link
        to="/about"
        className="p-3 font-bold text-zinc-900 dark:text-slate-100 hover:text-blue-500 hover:underline dark:hover:text-violet-400"
      >
        About
      </Link>
    </nav>
  );
};

export { Navbar };
