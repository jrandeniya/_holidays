import React, { createContext, useState } from "react";
import { IDay } from "../models";

interface IModalContext {
  modalDay?: IDay;
  setModalDay: React.Dispatch<React.SetStateAction<IDay | undefined>>;
}

export const ModalContext = createContext<IModalContext>({} as IModalContext);

export const ModalProvider: React.FC = ({ children }) => {
  const [modalDay, setModalDay] = useState<IDay | undefined>();

  return (
    <ModalContext.Provider
      value={{
        modalDay,
        setModalDay,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
