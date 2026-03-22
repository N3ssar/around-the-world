import { createSafeContext } from "../hooks/createSafeContext";
import { type CountryCardData } from "../types";


interface CountriesContextType {
  countries: CountryCardData[];
  setSelectedRegion: (region: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const [countriesContext, useCountriesContext] =
  createSafeContext<CountriesContextType>();
