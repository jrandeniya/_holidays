import format from "date-fns/format";
import { useContext } from "react";
import { ModalContext } from "../../context";

export const DayModal = () => {
  const { setModalDay, modalDay } = useContext(ModalContext);

  if (!modalDay) return null;
  if (modalDay.events.length === 0) return null;

  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center justify-center bg-opacity-80 bg-slate-900"
      onClick={() => setModalDay(undefined)}
    >
      <div className="w-screen p-12 m-12 bg-white rounded-lg md:w-2/3 lg:w-1/2">
        <h1 className="font-mono text-2xl font-bold">
          {format(modalDay.date, "PPP")}
        </h1>
        <ul>
          {modalDay.events.map((event, i) => (
            <li key={i} className="py-2 my-3 border-b border-slate-300 ">
              <p className="flex flex-col sm:items-center sm:flex-row text-md">
                <span className="font-bold">{event.name}</span>
                {event.types.map((type) => (
                  <span
                    className="px-2 py-0.5 sm:ml-2 my-0.5 text-xs text-white bg-blue-400 rounded-lg"
                    key={type}
                  >
                    {type}
                  </span>
                ))}
              </p>
              {event.description && (
                <p className="text-sm">{event.description}</p>
              )}
              <span className="mr-2 text-xs text-slate-500">
                <span className="mr-1 font-bold">Locations:</span>
                {event.locations}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
