import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EXT_TYPE, PRODUCTS_URL } from "../utils/urls";
import useProducts from "../hooks/useProducts";
import useCompleteURL from "../hooks/useCompleteURL";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const { id } = useParams();

  const [filters, setFilters] = useState({
    busqueda: "",
    min: 0,
    max: Infinity,
  });

  const { completeURL: productsURL = "" } = useCompleteURL({
    params: [PRODUCTS_URL, id, EXT_TYPE],
  });

  const { productos, productosArray, setProductosArray } = useProducts({
    apiURL: productsURL,
  });

  return (
    <ProductsContext.Provider
      value={{
        productos,
        filters,
        setFilters,
        productosArray,
        setProductosArray,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
