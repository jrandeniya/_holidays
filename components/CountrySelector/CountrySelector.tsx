import Image from "next/image";
import { useContext, useState } from "react";
import { CalendarContext } from "../../context";
import { COUNTRIES } from "./countries";
export const CountrySelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setSelectedCountry, selectedCountry } = useContext(CalendarContext);

  return (
    <div className="relative mt-1">
      <button
        type="button"
        className="relative z-10 py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default w-36 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        onClick={() => setIsOpen((state) => !state)}
      >
        <span className="flex items-center">
          <Image
            width={16}
            height={16}
            src={selectedCountry.imgSrc}
            alt={selectedCountry.name}
            className="flex-shrink-0 w-6 h-6 rounded-full"
          />
          <span className="block ml-3 truncate">{selectedCountry.name}</span>
        </span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 ml-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div>
          <div
            className="fixed top-0 bottom-0 left-0 right-0 z-10 bg-transparent"
            onClick={() => setIsOpen(false)}
          ></div>
          <ul
            className="absolute z-20 w-56 py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            tabIndex={-1}
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant="listbox-option-3"
          >
            {COUNTRIES.map((country) => (
              <li
                className="relative py-2 pl-3 text-gray-900 cursor-default select-none pr-9"
                key={country.code}
                onClick={() => {
                  setSelectedCountry(country);
                  setIsOpen(false);
                }}
              >
                <div className="flex items-center">
                  <Image
                    width={16}
                    height={16}
                    src={country.imgSrc}
                    alt={country.name}
                    className="flex-shrink-0 w-6 h-6 rounded-full"
                  />
                  <span
                    className={`block truncate ml-3 ${
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
