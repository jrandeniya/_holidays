import { useContext } from "react";
import { CalendarContext, ModalContext } from "../../context";
import { IDay } from "../../models";

interface CalendarCellProps {
  day: IDay;
}

export const CalendarCell: React.FC<CalendarCellProps> = ({ day }) => {
  const { setSelectedDate } = useContext(CalendarContext);
  const { setModalDay } = useContext(ModalContext);

  const { date, display, events, isToday, isOutOfRange, isSelected } = day;
  const isTodayUnselected = isToday && !isSelected;

  return (
    <div
      onClick={() => {
        setSelectedDate(date);
        setModalDay(day);
      }}
      className={[
        "flex-grow relative w-8 m-1 rounded-lg flex-col flex h-24 p-2 text-xs transition-colors ease-in-out border border-collapse cursor-pointer hover:bg-blue-100 hover:text-blue-800 hover:shadow-lg hover:border-blue-300",
        isTodayUnselected
          ? "bg-green-100 border-green-400"
          : "border-slate-300",
        isOutOfRange ? "text-slate-400 border-slate-200" : "",
        isSelected ? "bg-blue-100 shadow-lg text-blue-800 border-blue-300" : "",
      ].join(" ")}
    >
      {!isOutOfRange && events.length > 0 && (
        <span className="absolute -top-1 -right-1">
          <span className="relative items-center justify-center hidden w-2 h-2 mx-1 md:flex">
            <span className="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping"></span>
            <span className="relative inline-flex w-2 h-2 bg-green-500 rounded-full"></span>
          </span>
        </span>
      )}

      <span className="flex mb-2">{display}</span>

      <div
        className={[
          "flex flex-col w-full h-full overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent",
          !isOutOfRange ? "text-green-800 font-semibold" : " ",
        ].join(" ")}
      >
        {events.map((event, i) => (
          <span key={i} className="flex items-center pr-3 mb-1">
            <span className="pl-1 text-xs border-l-4 border-green-300">
              {event.name}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};
