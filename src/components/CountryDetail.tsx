import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import { CountryType } from "./Countries";
import { useEffect, useState } from "react";

const CountryDetail = () => {
    const navigate = useNavigate();
    const { state }: { state: CountryType } = useLocation();
    const [officialNativeName, setOfficialNativeName] = useState("");
    const [currency, setCurrency] = useState("");
    const [langs, setLangs] = useState("");

    useEffect(() => {
        for(const key in state.nativeName) {
            setOfficialNativeName(state.nativeName[key].official)
        }

        for(const key in state.currencies) {
            setCurrency(state.currencies[key].name)
        }

        for(const key in state.langugages) {
            setLangs(state.langugages[key])
        }
    }, [state])

    console.log("state in detail component", state);
    return (
        <div className={`flex flex-col p-2 gap-8 md:p-4`}>
            <div>
                <button className="border px-2 py-1 shadow-md" onClick={() => navigate("/")}>Back</button>
            </div>

            <div className={`flex flex-col gap-4 md:flex-row`}>
                <div className="md:w-1/2">
                    <img src={state.flags.svg} alt={`${state.name} flag`} />
                </div>
                <div className="flex flex-col gap-4 md:w-1/2 md:p-2">
                    <p className="text-2xl font-bold">{state.name}</p>
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <p><span className="font-bold">Native Name: </span>{officialNativeName}</p>
                        <p><span className="font-bold">Top Level Domain: </span>{state.tld}</p>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <p><span className="font-bold">Population: </span>{state.population}</p>
                        <p><span className="font-bold">Currencies: </span>{currency}</p>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <p><span className="font-bold">Region: </span>{state.region}</p>
                        <p><span className="font-bold">Languages: </span>{langs}</p>
                    </div>
                    <div>
                        <p><span className="font-bold">Capital: </span>{state.capital}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CountryDetail;