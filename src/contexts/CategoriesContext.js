import { createContext, useEffect, useState } from "react";
import useAPI from "../hooks/useAPI";
import { CATEGORIES_URL } from "../utils/urls";

export const CategoriesContext = createContext();

export function CategoriesProvider({ children }) {
  const [filters, setFilters] = useState({
    min: 0,
    max: Infinity,
  });
  const [order, setOrder] = useState("");

  const [categorias = [], isLoading] = useAPI({
    apiURL: CATEGORIES_URL,
    initialState: [],
  });

  return (
    <CategoriesContext.Provider
      value={{ categorias, isLoading, filters, setFilters, order, setOrder }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}
