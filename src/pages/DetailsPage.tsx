import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getCountryByCode, getBorderCountries } from "../services/api";
import { type Country, type BorderCountry } from "../types";
import { Container, ShowMessage, Spinner } from "../components/common";

function DetailsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [countryDetails, setCountryDetails] = useState<Country | null>(null);
  const [borders, setborders] = useState<BorderCountry[]>([]);

  const { countryName } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      if (!countryName) return;

      try {
        setIsLoading(true);
        setError(false);
        const countries = await getCountryByCode(countryName);
        setCountryDetails(countries);

        if (countries.borders && countries.borders.length > 0) {
          const bordersCountries = await getBorderCountries(countries.borders);
          setborders(bordersCountries);
        } else {
          setborders([]);
        }
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDetails();
  }, [countryName]);

  if (isLoading) {
    return (
      <ShowMessage className="flex h-[70vh] items-center justify-center text-xl font-semibold">
        <Spinner message="Loading Details..." />
      </ShowMessage>
    );
  }

  if (error || !countryDetails) {
    return (
      <ShowMessage className="flex h-[70vh] items-center justify-center text-xl font-semibold text-red-500">
        Failed to fetch country details.
      </ShowMessage>
    );
  }

  const nativeName = countryDetails.name.nativeName
    ? Object.values(countryDetails.name.nativeName)[0].common
    : countryDetails.name.common;

  const currencies = countryDetails.currencies
    ? Object.values(countryDetails.currencies)
        .map((c) => c.name)
        .join(", ")
    : "N/A";

  const languages = countryDetails.languages
    ? Object.values(countryDetails.languages).join(", ")
    : "N/A";

  return (
    <Container>
      <div className="py-10">
        <Link
          to="/"
          className="group inline-flex items-center gap-3 rounded-md bg-white px-8 py-2 text-sm font-medium text-gray-900 shadow-[0_0_7px_0_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-105 dark:bg-[#2B3844] dark:text-white"
          title="Back to home"
        >
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back
        </Link>

        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-28">
          <img
            src={countryDetails.flags.svg}
            alt={`Flag of ${countryDetails.name.common}`}
            className="max-h-[400px] w-full rounded-lg object-cover shadow-md"
          />

          <div className="text-gray-900 dark:text-white">
            <h1 className="mb-8 text-3xl font-extrabold lg:text-4xl">
              {countryDetails.name.common}
            </h1>

            <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
              <div className="flex flex-col gap-3 text-sm lg:text-base">
                <p>
                  <span className="font-semibold">Native Name:</span>{" "}
                  {nativeName}
                </p>

                <p>
                  <span className="font-semibold">Population:</span>{" "}
                  {countryDetails.population.toLocaleString()}
                </p>
                <p>
                  <span className="font-semibold">Region:</span>{" "}
                  {countryDetails.region}
                </p>
                <p>
                  <span className="font-semibold">Sub Region:</span>{" "}
                  {countryDetails.subregion || "N/A"}
                </p>
                <p>
                  <span className="font-semibold">Capital:</span>{" "}
                  {countryDetails.capital
                    ? countryDetails.capital.join(", ")
                    : "N/A"}
                </p>
              </div>

              <div className="flex flex-col gap-3 text-sm lg:text-base">
                <p>
                  <span className="font-semibold">Top Level Domain:</span>{" "}
                  {countryDetails.tld ? countryDetails.tld.join(", ") : "N/A"}
                </p>
                <p>
                  <span className="font-semibold">Currencies:</span>{" "}
                  {currencies}
                </p>
                <p>
                  <span className="font-semibold">Languages:</span> {languages}
                </p>
              </div>
            </div>

            <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center">
              <span className="text-lg font-semibold whitespace-nowrap">
                Border Countries:
              </span>
              <div className="flex flex-wrap gap-3">
                {borders && borders.length > 0 ? (
                  borders.map((border) => (
                    <Link
                      key={border.cca3}
                      to={`/${border.cca3}`}
                      className="rounded-sm bg-white px-6 py-1.5 text-sm shadow-[0_0_5px_0_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-1 dark:bg-[#2B3844] dark:text-gray-300"
                    >
                      {border.name.common}
                    </Link>
                  ))
                ) : (
                  <span className="text-gray-500 dark:text-gray-400">None</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default DetailsPage;
