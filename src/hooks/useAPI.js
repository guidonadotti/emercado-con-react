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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);
    apiURL &&
      fetch(apiURL)
        .then((response) => {
          if (!response.ok) throw new Error(response.statusText);
          return response.json();
        })
        .then((APIdata) => {
          setData(APIdata);
        })
        .catch((e) => setError(e))
        .finally(() => {
          setIsLoading(false);
        });
  }, [apiURL]);

  return [data, isLoading, error];
}

export default useAPI;
