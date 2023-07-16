import { createContext } from "react";
import { useParams } from "react-router-dom";
import useCompleteURL from "../hooks/useCompleteURL";
import useAPI from "../hooks/useAPI";
import {
  EXT_TYPE,
  PRODUCT_INFO_COMMENTS_URL,
  PRODUCT_INFO_URL,
} from "../utils/urls";

export const ProductContext = createContext();

const useAPIwithCompleteURL = ({ urlParams, initialState }) => {
  const { completeURL = "" } = useCompleteURL({
    params: urlParams,
  });

  const { data = initialState } = useAPI({
    apiURL: completeURL,
    initialState: initialState,
  });
  return { data };
};

export function ProductProvider({ children }) {
  const { id } = useParams();

  const { data: producto = {} } = useAPIwithCompleteURL({
    urlParams: [PRODUCT_INFO_URL, id, EXT_TYPE],
    initialState: {},
  });
  const { data: comentarios = [] } = useAPIwithCompleteURL({
    urlParams: [PRODUCT_INFO_COMMENTS_URL, id, EXT_TYPE],
    initialState: [],
  });
  return (
    <ProductContext.Provider value={{ comentarios, producto }}>
      {children}
    </ProductContext.Provider>
  );
}
