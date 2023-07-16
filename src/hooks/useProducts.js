import { useEffect, useState } from "react";
import useAPI from "./useAPI";

function useProducts({ apiURL }) {
  const [productos, setProductos] = useState({});

  const { data } = useAPI({ apiURL: apiURL, initialState: {} });

  useEffect(() => {
    setProductos(data);
  }, [data]);

  const productosArray = productos?.products || [];
  const setProductosArray = ({ productosArray }) => {
    setProductos((prevState) => ({
      ...prevState,
      products: productosArray,
    }));
  };
  return {
    productos,
    productosArray,
    setProductosArray,
  };
}

export default useProducts;
