import React, { useContext } from "react";
import { CalendarContext } from "../../context";
import { CalendarCell } from "./CalendarCell";

export const DAYS_IN_WEEK = ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const Calendar = () => {
  const { datesInMonth } = useContext(CalendarContext);

  return (
    <div className="flex flex-col justify-start w-100">
      <div className="flex justify-between">
        {DAYS_IN_WEEK.map((day) => (
          <div className="flex items-start flex-grow h-8 m-1 text-sm" key={day}>
            {day}
          </div>
        ))}
      </div>
      {datesInMonth.map((week, weekIndex) => (
        <div className="flex justify-between flex-grow" key={weekIndex}>
          {week.map((day, dayIndex) => (
            <span className="flex flex-grow w-full" key={dayIndex}>
              <CalendarCell day={day} />
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};
