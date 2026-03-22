import { type ChangeEvent, type FormEvent } from "react";
import { useCountriesContext } from "../../context/countriesContext";

function SearchBar() {
  const { searchQuery, setSearchQuery } = useCountriesContext();

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      role="search"
      className="flex w-full max-w-[480px] items-center rounded-md bg-white px-8 py-4 shadow-sm transition-colors duration-300 dark:bg-gray-800"
      onSubmit={onSubmitHandler}
    >
      <label htmlFor="country-search" className="sr-only">
        Search for a country
      </label>

      <svg
        className="h-5 w-5 shrink-0 text-gray-400 transition-colors duration-300 dark:text-[#F3F4F6]"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>

      <input
        type="search"
        id="country-search"
        className="ml-6 w-full border-none bg-transparent text-sm font-medium text-gray-900 placeholder-gray-400 outline-none dark:text-white dark:placeholder-gray-400"
        placeholder="Search for a country..."
        value={searchQuery}
        onChange={onSearchChange}
      />
    </form>
  );
}

export default SearchBar;
