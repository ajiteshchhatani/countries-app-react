import { useCallback, useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import Select from "./Select";
import { useDebounce } from "usehooks-ts";

export interface Filter {
  [key: string]: string;
}

interface FilterPropType {
  handleAppliedFilters: (filter: Filter) => void;
}

const Filters = ({ handleAppliedFilters }: FilterPropType) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");
  const debouncedFilter = useDebounce(searchTerm, 2000);

  const regions = ["All", "Asia", "Europe", "Africa", "America", "Oceania"];

  const handleSearchTerm = useCallback(
    (term: string) => {
      setSearchTerm(term);
      setRegion("");
    },
    [searchTerm]
  );

  const handleSearchRegion = useCallback(
    (selectedRegion: string) => {
      setRegion(selectedRegion);
      setSearchTerm("");
      handleAppliedFilters({ selectedRegion });
    },
    [region]
  );

  useEffect(() => {
    if (debouncedFilter === "") {
      handleAppliedFilters({ countries: "all" });
    }
    if (debouncedFilter !== "") {
      handleAppliedFilters({ term: debouncedFilter });
    }
  }, [debouncedFilter]);

  return (
    <div className="flex justify-between p-4">
      <SearchInput term={searchTerm} setTerm={handleSearchTerm} />
      <Select regions={regions} setRegion={handleSearchRegion} />
    </div>
  );
};

export default Filters;
