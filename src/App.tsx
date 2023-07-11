import { useContext, useState } from "react";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./providers/ThemeProvider";
import Filters, { Filter } from "./components/Filters";
import Countries from "./components/Countries";
import { useCountryListQuery } from "./hooks/useCountryListQuery";

function App() {
  const theme = useContext(ThemeContext);
  const [filters, setFilters] = useState<Filter>({ countries: "all" });

  const {
    data: countriesList,
    isLoading,
    isError,
  } = useCountryListQuery(filters);

  const handleAppliedFilters = (filter: Filter) => {
    setFilters(filter);
  };

  return (
    <div
      className={`flex flex-col gap-4 ${
        theme.theme === "dark"
          ? "bg-body-dark text-white"
          : "bg-body-light text-black"
      }`}
    >
      <Navbar />
      <Filters handleAppliedFilters={handleAppliedFilters} />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : isError ? (
        <h1>Failed to fetch...</h1>
      ) : (
        <Countries countries={countriesList as any[]} />
      )}
      <h1>Some headlines text</h1>
    </div>
  );
}

export default App;
