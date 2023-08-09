import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EXT_TYPE, PRODUCTS_URL } from "../utils/urls";
import useProducts from "../hooks/useProducts";
import useCompleteURL from "../hooks/useCompleteURL";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const { id } = useParams();
  const [productsURL] = useCompleteURL({
    params: [PRODUCTS_URL, id, EXT_TYPE],
  });

  const [filters, setFilters] = useState({
    busqueda: "",
    min: 0,
    max: Infinity,
  });
  const [order, setOrder] = useState("");
  const { productos, isLoading, productosArray } = useProducts({
    apiURL: productsURL,
  });

  return (
    <ProductsContext.Provider
      value={{
        productos,
        isLoading,
        productosArray,
        filters,
        setFilters,
        order,
        setOrder,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
