import { useEffect, useState } from "react";
import { useCountryListQuery } from "../hooks/useCountryListQuery";
import Card from "./Card";
import SkeletonBox from "./SkeletonBox";
import Filters, { Filter } from "./Filters";

export interface CountryType {
  name: string;
  nativeName: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
  population: number;
  region: string;
  subregion: string;
  flags: {
    alt: string;
    png: string;
    svg: string;
  };
  capital: string[];
  tld: string[];
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  langugages: {
    [key: string]: string;
  };
  borders: string[];
}

const Countries = () => {
  const [filters, setFilters] = useState<Filter>({ countries: "all" });
  const [countriesList, setCountriesList] = useState<any[]>([]);

  const { data, isLoading, isError } = useCountryListQuery(filters);

  useEffect(() => {
    if (data) {
      setCountriesList(data);
    }
  }, [data]);

  const handleAppliedFilters = (filter: Filter) => {
    setFilters(filter);
  };

  const typedCountryInfo: CountryType[] = countriesList!.map((c) => {
    return {
      name: c.name.common,
      nativeName: c.name.nativeName,
      borders: c.borders,
      capital: c.capital,
      currencies: c.currencies,
      flags: c.flags,
      langugages: c.languages,
      population: c.population,
      region: c.region,
      subregion: c.subregion,
      tld: c.tld,
    };
  });
  return (
    <div>
      <Filters handleAppliedFilters={handleAppliedFilters} />
      {isLoading ? (
        <SkeletonBox />
      ) : isError ? (
        <h1>Failed to fetch...</h1>
      ) : (
        <div className="flex flex-col md:flex-row flex-wrap gap-4 lg:gap-6 p-4 overflow-x-hidden">
          {typedCountryInfo.map((i) => (
            <Card key={i.name} country={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Countries;
