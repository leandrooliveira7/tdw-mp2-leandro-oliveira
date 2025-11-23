import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useDispatch } from "react-redux";
import { setGenero } from "../../store.jsx";
import { useNavigate } from "react-router-dom";

const GenreSelector = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    //!AQUI DEPOIS DE SELECIONAR O GÉNERO FAZ A NAVEGAÇÃO!
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
            { name: "Action", id: 28 },
            { name: "Adventure", id: 12 },
            { name: "Animation", id: 16 },
            { name: "Comedy", id: 35 },
            { name: "Crime", id: 80 },
            { name: "Documentary", id: 99 },
            { name: "Drama", id: 18 },
            { name: "Fantasy", id: 14 },
            { name: "History", id: 36 },
            { name: "Horror", id: 27 },
            { name: "Music", id: 10402 },
            { name: "Mystery", id: 9648 },
            { name: "Romance", id: 10749 },
            { name: "Science Fiction", id: 878 },
            { name: "Thriller", id: 53 },
            { name: "War", id: 10752 },
            { name: "Western", id: 37 },
          ].map((genre) => (
            <MenuItem key={genre.name}>
              {({ active }) => (
                <button
                  className={`w-full text-left px-4 py-2 text-sm text-white bg-gray-700 hover:bg-cyan-600
                          ${
                            active ? "bg-cyan-700" : ""
                          } focus:outline-none focus:ring-0`}
                  onClick={() => {
                    dispatch(setGenero({ id: genre.id, name: genre.name }));
                    navigate("/genre");
                  }}
                >
                  {genre.name}
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
