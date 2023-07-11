interface SearchInputType {
  term: string;
  setTerm: (term: string) => any;
}

const SearchInput = ({ term, setTerm }: SearchInputType) => {
  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search for a country..."
      className="w-1/4 h-[50px] px-2 rounded-md border border-gray-400"
      value={term}
      onChange={onSearchChange}
    />
  );
};

export default SearchInput;
