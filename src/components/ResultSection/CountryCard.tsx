import { type CountryCardData } from "../../types";
function CounteryCard({ country }: { country: CountryCardData }) {
  return (
    <div className="block h-full w-full cursor-pointer overflow-hidden rounded-md bg-white shadow-md transition-transform duration-300 hover:scale-105 dark:bg-gray-800">
      <img
        src={country.flags.svg}
        alt="Country flag"
        className="h-40 w-full object-cover"
        loading="lazy"
      />

      <div className="p-6 pb-9">
        <h2 className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white">
          {country.name.common}
        </h2>
        <div className="flex flex-col gap-2 text-sm text-gray-900 dark:text-white">
          <p>
            <span className="font-semibold">Population: </span>
            <span className="font-light">
              {country.population.toLocaleString()}
            </span>
          </p>
          <p>
            <span className="font-semibold">Region: </span>
            <span className="font-light">{country.region}</span>
          </p>
          <p>
            <span className="font-semibold">Capital: </span>
            <span className="font-light">{country.capital}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CounteryCard;
