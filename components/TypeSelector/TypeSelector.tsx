import { XIcon } from "@heroicons/react/outline";
import { useContext, useState } from "react";
import { CalendarContext } from "../../context";

export const TypeSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { holidayTypes, setSelectedHolidayType, selectedHolidayType } =
    useContext(CalendarContext);

  return (
    <div className="relative cursor-pointer">
      <button
        type="button"
        className="relative z-10 flex items-center justify-between h-10 text-sm text-left bg-white border rounded-md shadow-sm cursor-default border-slate-300 w-36 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <span
          className="block w-full py-2 pl-3 truncate"
          onClick={() => setIsOpen((state) => !state)}
        >
          {selectedHolidayType ?? "All"}
        </span>
        <XIcon
          className="w-6 h-3 pr-2 cursor-pointer hover:opacity-70"
          onClick={() => setSelectedHolidayType(undefined)}
        />
      </button>

      {isOpen && (
        <div>
          <div
            className="fixed top-0 bottom-0 left-0 right-0 z-10 bg-transparent"
            onClick={() => setIsOpen(false)}
          ></div>
          <ul className="absolute z-20 w-56 py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg scrollbar-thin scrollbar-track-blue-100 scrollbar-thumb-blue-300 max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            <li
              className="relative py-2 pl-3 text-gray-900 cursor-pointer select-none pr-9 hover:text-gray-400"
              onClick={() => {
                setSelectedHolidayType(undefined);
                setIsOpen(false);
              }}
            >
              <div className="flex items-center">
                <span
                  className={`block truncate ${
                    !selectedHolidayType ? "text-blue-700 font-bold" : ""
                  }`}
                >
                  All
                </span>
              </div>
            </li>
            {holidayTypes.map((type) => (
              <li
                className="relative py-2 pl-3 text-gray-900 cursor-pointer select-none pr-9 hover:text-gray-400"
                key={type}
                onClick={() => {
                  setSelectedHolidayType(type);
                  setIsOpen(false);
                }}
              >
                <div className="flex items-center">
                  <span
                    className={`block truncate ${
                      selectedHolidayType === type
                        ? "text-blue-700 font-bold"
                        : ""
                    }`}
                  >
                    {type}
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
