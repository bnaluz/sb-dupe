import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <div className="w-auto flex px-2 ml-4">
      <BsSearch className="text-green-600 text-xl mt-1 font-bold " />
      <input
        className="px-8 py-1 rounded-lg mx-1"
        placeholder="Search..."
      ></input>
    </div>
  );
};

export default SearchBar;
