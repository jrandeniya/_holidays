import Image from "next/image";
import { useCallback, useContext, useEffect, useState } from "react";
import { CalendarContext } from "../../context";
import { ICountry } from "../../models";
import { LIST_COUNTRIES } from "./countries";

export const CountrySelector = () => {
  const [countries, setCountries] = useState<Array<ICountry>>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [countryName, setCountryName] = useState("");
  const { setSelectedCountry, selectedCountry } = useContext(CalendarContext);

  useEffect(() => {
    if (selectedCountry) setCountryName(selectedCountry.name);
  }, [selectedCountry]);

  useEffect(() => {
    const input = countryName.trim().toLowerCase();

    if (!input) return setCountries([]);

    const list = LIST_COUNTRIES.filter(({ name }) =>
      name.toLowerCase().includes(input)
    ).slice(0, 5);

    setCountries(list);
  }, [countryName]);

  const onFocus = useCallback(() => setIsOpen(true), []);

  return (
    <div className="relative">
      <div className="absolute flex items-center w-4 h-4 transform -translate-y-1/2 left-2 top-1/2">
        <Image
          height={"100%"}
          width={"100%"}
          src={selectedCountry.imgSrc}
          alt={selectedCountry.name}
        />
      </div>

      <input
        className="w-56 h-10 pl-7 mb-0.5 space-x-1 text-sm bg-white border rounded-md outline-none border-slate-300 focus:ring-2 ring-blue-300 ring-offset-1"
        onFocus={onFocus}
        onChange={(e) => setCountryName(e.target.value)}
        value={countryName}
      />

      {isOpen && countries.length > 0 && (
        <div>
          <div
            className="fixed top-0 bottom-0 left-0 right-0 z-10 bg-transparent"
            onClick={() => setIsOpen(false)}
          ></div>
          <ul
            className="absolute z-20 w-56 py-1 overflow-auto text-base bg-white rounded shadow-md scrollbar-thin scrollbar-track-blue-100 scrollbar-thumb-blue-300 max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            tabIndex={-1}
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant="listbox-option-3"
          >
            {countries.map((country) => (
              <li
                className="relative py-2 pl-2 text-gray-900 cursor-pointer hover:text-gray-400 pr-9"
                key={country.code}
                onClick={() => {
                  setSelectedCountry(country);
                  setIsOpen(false);
                }}
              >
                <div className="flex items-center">
                  <div className="flex items-center w-4 h-4">
                    <Image
                      height={"100%"}
                      width={"100%"}
                      src={country.imgSrc}
                      alt={country.name}
                    />
                  </div>
                  <span
                    className={`block truncate ml-2 text-xs ${
                      selectedCountry.name === country.name
                        ? "text-blue-700 font-bold"
                        : ""
                    }`}
                  >
                    {country.name}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
