export const getAllCountriesData = async (): Promise<Array<any>> => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export const getCountryByName = async (name: string): Promise<Array<any>> => {
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export const getCountriesByRegion = async (
  region: string
): Promise<Array<any>> => {
  const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
