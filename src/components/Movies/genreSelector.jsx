import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const GenreSelector = () => {
  return (
    //TODO: que não passe para cima dos filmes, e fazer todo o set do género quando há um clique para fazer um segundo pedido à api com o género selecionado
    <Menu as="div" className="relative inline-block text-left w-full mt-5">
      <MenuButton
        className="inline-flex justify-between items-center w-full px-4 py-2 rounded-md 
               text-sm font-medium hover:bg-gray-300 hover:text-black focus:outline-none focus:ring-0 bg-gray-700 text-white"
      >
        Genre
        <ChevronDownIcon
          className="ml-2 -mr-1 h-5 w-5 text-sm font-medium"
          aria-hidden="true"
        />
      </MenuButton>
      <MenuItems className="mt-2 w-full max-h-60 overflow-auto rounded-md focus:outline-none z-20 ">
        <div className="py-2 bg-gray-700 rounded-md">
          {[
            "Action",
            "Adventure",
            "Animation",
            "Comedy",
            "Crime",
            "Documentary",
            "Drama",
            "Fantasy",
            "History",
            "Horror",
            "Music",
            "Mystery",
            "Romance",
            "Science Fiction",
            "Thriller",
            "War",
            "Western",
          ].map((genre) => (
            <MenuItem key={genre}>
              {({ active }) => (
                <button
                  className={`w-full text-left px-4 py-2 text-sm text-white bg-gray-700 hover:bg-cyan-600
                          ${active ? "bg-cyan-700" : ""} 
                          focus:outline-none focus:ring-0`}
                >
                  {genre}
                </button>
              )}
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
};

export { GenreSelector };
