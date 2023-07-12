import { useContext } from "react";
import { CountryType } from "./Countries";
import { ThemeContext } from "../providers/ThemeProvider";

interface CardPropType {
  key: string;
  country: CountryType;
}

const Card = ({ country }: CardPropType) => {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={`flex flex-col flex-wrap gap-2 w-[22%] rounded-md ${
        theme.themeMode === "dark" ? `bg-card-body-dark` : "bg-white"
      }`}
    >
      <div className="h-[60%]">
        <img
          src={country.flags.svg}
          className="w-full h-full object-cover"
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
  );
};

export default Card;
