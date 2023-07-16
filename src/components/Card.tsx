import { useContext } from "react";
import { CountryType } from "./Countries";
import { ThemeContext } from "../providers/ThemeProvider";
import { Link } from "react-router-dom";

interface CardPropType {
  key: string;
  country: CountryType;
}

const Card = ({ country }: CardPropType) => {
  const theme = useContext(ThemeContext);
  return (
    <Link
      to={`country/${country.name}`}
      state={country}
      className={`flex flex-col flex-wrap gap-2 rounded-md md:w-[30%] lg:w-[21%] md:flex-grow ${
        theme.themeMode === "dark" ? `bg-card-body-dark` : "bg-white"
      }`}
    >
      <div>
        <div className="h-1/2">
          <img
            src={country.flags.svg}
            className="w-full h-full object-cover rounded-t-md"
            alt="Flag image"
          />
        </div>
        <div className="p-4">
          <h2 className="mb-2 font-bold">{country.name}</h2>
          <p>Population:{country.population}</p>
          <p>Region:{country.region}</p>
          <p>Capital:{country.capital}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
