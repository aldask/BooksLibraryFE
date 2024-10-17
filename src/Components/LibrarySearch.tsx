import { useState } from "react";

interface SearchProp {
  onSearch: (query: string, type: "name" | "year") => void;
}

const LibrarySearch: React.FC<SearchProp> = ({ onSearch }) => {
  const [lookType, setLookType] = useState<"name" | "year">("name");
  const [searchBar, setSearchBar] = useState("");

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLookType(e.target.value as "name" | "year");
    setSearchBar("");
    onSearch("", e.target.value as "name" | "year");
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchBar(value);
    onSearch(value, lookType);
  };

  return (
    <div className="flex items-center justify-center mb-6 space-x-2">
      <div className="relative w-full max-w-xs">
        <input
          type="text"
          placeholder="Search..."
          className="p-3 pl-10 w-full border border-gray-300 rounded-l-md shadow-sm bg-white focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
          value={searchBar}
          onChange={handleSearch}
        />
      </div>
      <select
        className="p-3 bg-white border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
        value={lookType}
        onChange={handleTypeChange}
      >
        <option value="name">Search by Name</option>
        <option value="year">Search by Year</option>
      </select>
    </div>
  );
};

export default LibrarySearch;
