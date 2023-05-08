import React from "react";
import { Children, createContext, useState } from "react";

export const DataCardContext = createContext();
const DataCardProvider = ({ children }) => {
  const [dataCard, setDataCard] = useState();

  const updateValue = (newValue) => {
    setDataCard(newValue);
  };

  return (
    <>
      <DataCardContext.Provider
        value={
            {dataCard,updateValue,}
        }
      >
        {children}
      </DataCardContext.Provider>
    </>
  );
};
export default DataCardProvider;
