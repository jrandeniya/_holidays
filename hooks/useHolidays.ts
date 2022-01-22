import axios from "axios";
import { useQuery } from "react-query";
import { ICalendarific, IEvent } from "../models";

interface Props {
  country: string;
  year: string;
}

export const useHolidays = ({ country, year }: Props) => {
  const URL = "https://calendarific.com/api/v2/holidays";
  const API_KEY = process.env.NEXT_PUBLIC_CALENDAR_API;

  const { isLoading, data } = useQuery([country, year], async () => {
    const response = await axios.get<ICalendarific>(URL, {
      params: { api_key: API_KEY, country, year },
    });

    if (response.data.meta.code === 200) {
      return response.data.response.holidays.map(
        (holiday): IEvent => ({
          name: holiday.name,
          locations: holiday.locations,
          description: holiday.description,
          date: holiday.date.iso,
          types: holiday.type,
        })
      );
    }

    throw new Error(`Error: ${response.data.meta.error_detail}`);
  });

  return { isFetchingHolidays: isLoading, holidays: data };
};
