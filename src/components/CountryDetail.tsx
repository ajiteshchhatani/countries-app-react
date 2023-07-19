import { useLocation, useNavigate } from "react-router-dom";
import { CountryType } from "./Countries";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

const CountryDetail = () => {
  const navigate = useNavigate();
  const { state }: { state: CountryType } = useLocation();
  const theme = useContext(ThemeContext);
  const [officialNativeName, setOfficialNativeName] = useState("");
  const [currency, setCurrency] = useState("");
  const [langs, setLangs] = useState("");

  useEffect(() => {
    for (const key in state.nativeName) {
      setOfficialNativeName(state.nativeName[key].official);
    }

    for (const key in state.currencies) {
      setCurrency(state.currencies[key].name);
    }

    for (const key in state.langugages) {
      setLangs(state.langugages[key]);
    }
  }, [state]);

  return (
    <div
      className={`flex flex-col p-2 gap-8 md:p-4 ${
        theme.themeMode === "dark"
          ? "bg-body-dark text-white"
          : "bg-body-light text-black"
      }`}
    >
      <button
        className="border px-2 py-1 shadow-md w-1/6 rounded-md"
        onClick={() => navigate("/")}
      >
        ⬅️ Back
      </button>

      <div className={`flex flex-col gap-4 md:flex-row md:justify-between`}>
        <div className="max-w-lg">
          <img
            src={state.flags.svg}
            alt={`${state.name} flag`}
            className={``}
          />
        </div>
        <div className="flex flex-col gap-4 justify-center md:p-2">
          <p className="text-2xl font-bold">{state.name}</p>
          <div className="flex flex-col md:flex-row md:justify-between">
            <p>
              <span className="font-bold">Native Name: </span>
              {officialNativeName}
            </p>
            <p>
              <span className="font-bold">Top Level Domain: </span>
              {state.tld}
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between">
            <p>
              <span className="font-bold">Population: </span>
              {state.population}
            </p>
            <p>
              <span className="font-bold">Currencies: </span>
              {currency}
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between">
            <p>
              <span className="font-bold">Region: </span>
              {state.region}
            </p>
            <p>
              <span className="font-bold">Languages: </span>
              {langs}
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between">
            <p>
              <span className="font-bold">Capital: </span>
              {state.capital}
            </p>
            <p>
              <span className="font-bold">Sub Region: </span>
              {state.subregion}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
