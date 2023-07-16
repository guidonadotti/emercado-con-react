import { createContext, useEffect, useState } from "react";
import useAPI from "../hooks/useAPI";
import { CATEGORIES_URL } from "../utils/urls";

export const CategoriesContext = createContext();

export function CategoriesProvider({ children }) {
  const [categorias, setCategorias] = useState([]);
  const [filters, setFilters] = useState({
    min: 0,
    max: Infinity,
  });

  const { data } = useAPI({ apiURL: CATEGORIES_URL, initialState: [] });

  useEffect(() => {
    setCategorias(data);
  }, [data]);

  return (
    <CategoriesContext.Provider
      value={{ categorias, setCategorias, filters, setFilters }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}
