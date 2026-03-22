import { useState, useEffect } from "react";
import { ShowMessage, Spinner } from "../components/common";
import FilterBar from "../components/FilterSection";
import CountryList from "../components/ResultSection";
import { countriesContext } from "../context/countriesContext";

import { type CountryCardData } from "../types";
import { getAllCountries } from "../services/api";

function HomePage() {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [countries, setCountries] = useState<CountryCardData[]>([]);

  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getAllCountries();
        setCountries(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredCountries = countries.filter((country) => {
    const matchRegion = selectedRegion
      ? country.region === selectedRegion
      : true;

    const matchSearch = searchQuery
      ? country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    return matchRegion && matchSearch;
  });

  return (
    <main>
      {isLoading && (
        <ShowMessage className="flex h-screen items-center justify-center">
          <Spinner />
        </ShowMessage>
      )}
      {error && (
        <ShowMessage className="flex h-screen items-center justify-center">
          Failed to load countries. Please try again later.
        </ShowMessage>
      )}

      <countriesContext.Provider
        value={{
          countries: filteredCountries,
          setSelectedRegion,
          searchQuery,
          setSearchQuery,
        }}
      >
        {!isLoading && !error && (
          <>
            <FilterBar />
            <CountryList />
          </>
        )}
      </countriesContext.Provider>
    </main>
  );
}

export default HomePage;
