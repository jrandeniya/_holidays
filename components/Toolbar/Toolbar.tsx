import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";
import { addMonths, addYears, subMonths, subYears } from "date-fns";
import React, { useContext } from "react";
import { CalendarContext } from "../../context";
import { CountrySelector } from "../CountrySelector";
import { TypeSelector } from "../TypeSelector";

export const Toolbar = () => {
  const { currentMonth, currentYear, selectedDate, setSelectedDate } =
    useContext(CalendarContext);

  return (
    <div className="flex flex-col items-center justify-between space-y-4 md:space-y-0 md:space-x-2 sm:flex-row">
      <div className="flex space-x-2">
        <CountrySelector />
        <TypeSelector />
      </div>

      <div className="flex items-center font-mono text-xl text-slate-600 ">
        <ChevronDoubleLeftIcon
          onClick={() => setSelectedDate(subYears(selectedDate, 1))}
          className="w-3 h-3 ml-4 mr-2 text-blue-300 cursor-pointer hover:text-blue-400"
        />
        <ChevronLeftIcon
          onClick={() => setSelectedDate(subMonths(selectedDate, 1))}
          className="w-5 h-5 mr-4 text-blue-300 cursor-pointer hover:text-blue-400"
        />
        {currentMonth}, {currentYear}
        <ChevronRightIcon
          onClick={() => setSelectedDate(addMonths(selectedDate, 1))}
          className="w-5 h-5 ml-4 text-blue-300 cursor-pointer hover:text-blue-400"
        />
        <ChevronDoubleRightIcon
          onClick={() => setSelectedDate(addYears(selectedDate, 1))}
          className="w-3 h-3 ml-2 mr-4 text-blue-300 cursor-pointer hover:text-blue-400"
        />
      </div>
    </div>
  );
};
