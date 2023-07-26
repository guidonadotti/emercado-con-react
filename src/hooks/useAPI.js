import { useEffect, useState } from "react";

/**
 * Esta función utiliza una API para obtener datos y devuelve los datos obtenidos.
 *
 * @param {Object} options - Opciones para la función.
 * @param {string} options.apiURL - La URL de la API a la que se realizará la solicitud.
 * @param {*} options.initialState - El estado inicial para los datos.
 * @returns {Object} - Un objeto que contiene los datos obtenidos de la API.
 */
function useAPI({ apiURL = "", initialState }) {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    apiURL &&
      fetch(apiURL)
        .then((response) => response.json())
        .then((APIdata) => {
          setData(APIdata);
        })
        .catch((e) => console.error(e));
  }, [apiURL]);

  return [data, setData];
}

export default useAPI;
