import { createContext, useContext, useEffect, useState } from "react";
import comerciales from "../data/comerciales";

export const EsperancitaContext = createContext();

export const ContextProvider = ({ children }) => {
  const [mainComercial, setMainComercial] = useState(comerciales[0]);
  const listCategories = ["3D", "Simulación", "Compo", "All"];
  const [listItemState, setListItemState] = useState(listCategories[0]);

  const categoryActive =
  listItemState === "All"
    ? comerciales
    : comerciales.filter((item) => item.category.find((i) => i === listItemState) === listItemState);

useEffect(() => {

},[mainComercial])

  return (
    <EsperancitaContext.Provider
      value={{
        mainComercial,
        setMainComercial,
        listCategories,
        listItemState,
        setListItemState,
        categoryActive
      }}
    >
      {children}
    </EsperancitaContext.Provider>
  );
};

export const useEsperancitaContext = () => useContext(EsperancitaContext);
