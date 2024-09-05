import { IoIosSearch } from "react-icons/io";
import { useState } from "react";

function Search() {
    const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div
      className="flex gap-2 items-center bg-white rounded-lg  px-4 w-full sm:w-1/3 shadow-md"    >
      <IoIosSearch className="text-gray-500 mt-1 size-5" />
      <input
          className="flex-1 p font-nunito-sans border-none outline-none bg-transparent "
          placeholder="Search"
          onChange={handleChange}
        />
    </div>
  );
}

export default Search;