interface SearchProp {
  onSearch: (query: string) => void;
}

const LibrarySearch: React.FC<SearchProp> = ({ onSearch }) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search through book list"
        onChange={handleSearch}
      />
    </div>
  );
};

export default LibrarySearch;
