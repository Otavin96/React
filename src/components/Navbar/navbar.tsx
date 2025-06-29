import { useState } from "react";
import { ImSearch } from "react-icons/im";

type NavBarProps = {
  handleSearch(query: string): void;
};

function Navbar({ handleSearch }: NavBarProps) {
  const [search, setSearch] = useState("");

  return (
    <ul className="flex w-full h-12 bg-teal-400 items-center justify-between">
      <span className="text-md font-bold uppercase pl-10 cursor-pointer">
        Home
      </span>

      <li>{search}</li>

      <li className="flex pr-10 items-center gap-3">
        <input
          className="p-1 w-72 bg-white rounded-2xl text-black"
          type="text"
          placeholder="Pesquisar"
          onChange={(e) => setSearch(e.target.value)}
        />
        <ImSearch
          onClick={() => handleSearch(search)}
          className="cursor-pointer"
        />
      </li>
    </ul>
  );
}

export default Navbar;
