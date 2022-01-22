import { format } from "date-fns";
import React, { createContext, useEffect, useState } from "react";
import { DEFAULT_COUNTRY } from "../components/CountrySelector/countries";
import { useHolidays } from "../hooks";
import { ICountry, IDay, IEvent } from "../models";
import { buildCalendar } from "./utils";

export interface ICalendarContext {
  currentMonth: string;
  currentYear: string;
  selectedDate: Date;
  holidayTypes: Array<string>;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  selectedHolidayType: string | undefined;
  setSelectedHolidayType: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
  selectedCountry: ICountry;
  setSelectedCountry: React.Dispatch<React.SetStateAction<ICountry>>;
  datesInMonth: Array<Array<IDay>>;
  isFetchingHolidays: boolean;
}

export const CalendarContext = createContext<ICalendarContext>(
  {} as ICalendarContext
);

export const CalendarProvider: React.FC = ({ children }) => {
  const [selectedHolidayType, setSelectedHolidayType] = useState<
    string | undefined
  >();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedCountry, setSelectedCountry] = useState(DEFAULT_COUNTRY);
  const [datesInMonth, setDatesInMonth] = useState<Array<Array<IDay>>>([]);
  const [holidayTypes, setHolidayTypes] = useState<Array<string>>([]);

  const currentMonth = format(selectedDate, "LLL");
  const currentYear = format(selectedDate, "yyyy");

  const { isFetchingHolidays, holidays } = useHolidays({
    year: currentYear,
    country: selectedCountry.code,
  });

  useEffect(() => {
    let events: Array<IEvent> = [];

    if (holidays) {
      events = selectedHolidayType
        ? holidays.filter((event) => event.types.includes(selectedHolidayType))
        : [...holidays];
    }

    const calendar = buildCalendar(selectedDate, events);
    setDatesInMonth(calendar);
  }, [selectedDate, holidays, selectedHolidayType]);

  useEffect(() => {
    const uniqueTypes = new Set<string>();

    holidays?.forEach(({ types }) =>
      types.forEach((type) => uniqueTypes.add(type))
    );

    setHolidayTypes([...uniqueTypes]);
    setSelectedHolidayType(undefined);
  }, [holidays]);

  return (
    <CalendarContext.Provider
      value={{
        currentMonth,
        currentYear,
        datesInMonth,
        holidayTypes,
        isFetchingHolidays,
        selectedCountry,
        selectedDate,
        selectedHolidayType,
        setSelectedCountry,
        setSelectedDate,
        setSelectedHolidayType,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};
