import Select, { type SingleValue } from "react-select";
import { type RegionOption } from "../../types";
import { useCountriesContext } from "../../context/countriesContext";

const options: RegionOption[] = [
  { value: "all regions", label: "All Regions" },
  { value: "Africa", label: "Africa" },
  { value: "Americas", label: "Americas" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

function RegionMenu() {
  const { setSelectedRegion } = useCountriesContext();
  const handleChange = (newValue: SingleValue<RegionOption>) => {
    if (newValue && newValue.value !== "all regions") {
      setSelectedRegion(newValue.value);
    } else {
      setSelectedRegion("");
    }
  };

  return (
    <Select
      options={options}
      onChange={handleChange}
      placeholder="Filter by Region"
      isClearable
      isSearchable
      unstyled
      classNames={{
        control: (state) =>
          `w-[200px] bg-white dark:bg-gray-800 shadow-sm rounded-md px-6 py-4 cursor-pointer flex items-center justify-between transition-colors duration-300 ${
            state.isFocused ? "ring-2 ring-gray-200 dark:ring-gray-700" : ""
          }`,
        placeholder: () => "text-gray-900 dark:text-white text-sm",
        singleValue: () => "text-gray-900 dark:text-white text-sm font-medium",
        menu: () =>
          "mt-1.5 bg-white dark:bg-gray-800 shadow-md rounded-md overflow-hidden transition-colors duration-300 absolute w-full z-10",
        option: (state) =>
          `px-6 py-2 cursor-pointer text-sm font-medium transition-colors duration-300 ${
            state.isFocused
              ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
              : "text-gray-900 dark:text-white"
          }`,
        menuList: () => "py-2",

        indicatorSeparator: () => "hidden",

        dropdownIndicator: () => "text-gray-900 dark:text-white cursor-pointer",

        clearIndicator: () =>
          "text-gray-400 hover:text-red-500 dark:hover:text-red-400 cursor-pointer mr-2",
      }}
    />
  );
}

export default RegionMenu;
