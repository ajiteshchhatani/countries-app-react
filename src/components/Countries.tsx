import Card from "./Card";

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

interface CountriesPropType {
  countries: Array<any>;
}

const Countries = ({ countries }: CountriesPropType) => {
  const typedCountryInfo: CountryType[] = countries.map((c) => {
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
    <div className="flex flex-wrap justify-between gap-4 p-2 md:p-4 overflow-x-hidden">
      {typedCountryInfo.map((i) => (
        <Card key={i.name} country={i} />
      ))}
    </div>
  );
};

export default Countries;
