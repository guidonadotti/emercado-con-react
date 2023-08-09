import { useEffect, useState } from "react";
import useAPI from "./useAPI";

function useProducts({ apiURL }) {
  const [productos, isLoading] = useAPI({
    apiURL: apiURL,
    initialState: {},
  });

  const productosArray = productos?.products || [];

  return {
    productos,
    isLoading,
    productosArray,
  };
}

export default useProducts;
