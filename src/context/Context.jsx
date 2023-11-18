import { createContext, useContext, useEffect, useState, useRef } from "react";
import comerciales from "../data/comerciales";

export const EsperancitaContext = createContext();

export const ContextProvider = ({ children }) => {
  const [mainComercial, setMainComercial] = useState(comerciales[0]);
  const listCategories = ["3D", "Simulation", "Compo", "All"];
  const [listItemState, setListItemState] = useState(listCategories[0]);
  const [socialIncons, setSocialIcons] = useState(false);
  const [footerIsIntersecting, setFooterIsIntersecting] = useState(false);
  const [videoIsIntersecting, setVideoIsIntersecting] = useState(false);
  const [lenguage, setLenguage] = useState("EN");

  const workRef = useRef(document.getElementById('work'))

  const aboutVideo = comerciales.find((video) => video.name === "About")



  const categoryActive =
    listItemState === "All"
      ? comerciales.slice(1)
      : comerciales
          .slice(1)
          .filter(
            (item) =>
              item.category.find((i) => i === listItemState) === listItemState
          );

  useEffect(() => {}, [mainComercial, lenguage, aboutVideo]);

  return (
    <EsperancitaContext.Provider
      value={{
        mainComercial,
        setMainComercial,
        listCategories,
        listItemState,
        setListItemState,
        categoryActive,
        socialIncons,
        setSocialIcons,
        footerIsIntersecting,
        videoIsIntersecting,
        setFooterIsIntersecting,
        setVideoIsIntersecting,
        lenguage,
        setLenguage,
        aboutVideo,
        workRef
      }}
    >
      {children}
    </EsperancitaContext.Provider>
  );
};

export const useEsperancitaContext = () => useContext(EsperancitaContext);
