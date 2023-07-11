import { useQuery } from "@tanstack/react-query";
import { Filter } from "../components/Filters";
import {
  getAllCountriesData,
  getCountriesByRegion,
  getCountryByName,
} from "../api/data";
import { useEffect, useState } from "react";

export const useCountryListQuery = (filter: Filter) => {
  const [queryKey, setQueryKey] = useState("getAllCountriesList");
  const [filterKey, setFilterKey] = useState("");

  useEffect(() => {
    for (const key in filter) {
      if (key === "countries") {
        setQueryKey("getAllCountriesList");
        setFilterKey("all");
      } else if (key === "term") {
        setQueryKey("getCountryByName");
        setFilterKey("term");
      } else {
        setQueryKey("getCountriesByRegion");
        setFilterKey("selectedRegion");
      }
    }
  }, [filter]);

  return useQuery({
    queryKey: [queryKey, filter[filterKey]],
    queryFn:
      queryKey === "getAllCountriesList"
        ? () => getAllCountriesData()
        : queryKey === "getCountryByName"
        ? () => getCountryByName(filter["term"])
        : () => getCountriesByRegion(filter["selectedRegion"]),
    refetchOnWindowFocus: false,
  });
};
