import { XIcon } from "@heroicons/react/outline";
import format from "date-fns/format";
import { useCallback, useContext } from "react";
import { ModalContext } from "../../context";

export const DayModal = () => {
  const { setModalDay, modalDay } = useContext(ModalContext);
  const closeModal = useCallback(() => setModalDay(undefined), []);

  if (!modalDay) return null;

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center justify-center bg-opacity-80 bg-slate-900">
      <div className="fixed w-screen h-screen" onClick={closeModal} />
      <div className="z-40 w-screen p-12 m-12 bg-white rounded-lg md:w-2/3 lg:w-1/2 xl:w-1/4">
        <h1 className="flex items-center justify-between font-mono text-2xl font-bold">
          <span>{format(modalDay.date, "PPP")}</span>
          <XIcon
            onClick={closeModal}
            className="w-8 h-8 mx-2 transition ease-in-out cursor-pointer text-slate-400 hover:text-slate-600"
          />
        </h1>
        <ul>
          {modalDay.events.length === 0 && (
            <li className="py-2 my-3">
              <p className="flex flex-col sm:items-center sm:flex-row text-md">
                <span className="text-slate-400">
                  There are no holidays today.
                </span>
              </p>
            </li>
          )}
          {modalDay.events.map((event, i) => (
            <li key={i} className="py-2 pl-3 my-3 border-l-4 border-green-300">
              <p className="flex flex-col sm:items-center sm:flex-row text-md">
                <span className="font-bold text-green-800">{event.name}</span>
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
