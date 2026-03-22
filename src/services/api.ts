import type { BorderCountry, CountryCardData } from "../types";
import type { Country } from "../types";

export async function getAllCountries(): Promise<CountryCardData[]> {
  try {
    const cachedCountries = localStorage.getItem("allCountries");

    if (cachedCountries) {
      return JSON.parse(cachedCountries);
    }
    const url =
      "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,cca3";

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch countries!");
    }

    const data: CountryCardData[] = await response.json();
    localStorage.setItem("allCountries", JSON.stringify(data));
    return data;
  } catch {
    console.error("Failed to fetch countries", Error);
    throw Error;
  }
}

export const getCountryByCode = async (code: string): Promise<Country> => {
  try {
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch country details");
    }

    const data = await response.json();
    return data[0];
  } catch (error) {
    console.error("Error in getCountryByCode:", error);
    throw error;
  }
};

export async function getBorderCountries(
  codes: string[],
): Promise<BorderCountry[]> {
  try {
    const url = `https://restcountries.com/v3.1/alpha?codes=${codes.join(",")}&fields=name,cca3`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch borders!");
    }
    const data = await response.json();
    return data;
  } catch {
    console.error("Error fetching borders:", Error);
    return [];
  }
}
