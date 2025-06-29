import { debounce } from "lodash";
import { useState, useMemo, useEffect } from "react";
import { ImSearch } from "react-icons/im";

type SearchInputProps = {
  onSearch: (query: string) => void;
};

function Navbar({ onSearch }: SearchInputProps) {
  const [, setValue] = useState("");

  const debouncedSearch = useMemo(() => debounce(onSearch, 500), [onSearch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    debouncedSearch(newValue);
  };

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <ul className="flex w-full h-12 bg-teal-300 items-center justify-between">
      <a
        href="/"
        className="text-md font-bold text-gray-600 uppercase pl-10 cursor-pointer"
      >
        Home
      </a>

      <li className="flex pr-10 items-center gap-3">
        <input
          className="p-1 w-72 bg-white rounded-2xl text-black"
          type="text"
          placeholder="Buscar filme..."
          onChange={handleChange}
        />
        <ImSearch className="cursor-pointer" color="#4a5565" />
      </li>
    </ul>
  );
}

export default Navbar;
