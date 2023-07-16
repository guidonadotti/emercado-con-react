import { useEffect, useState } from "react";

/**
 * Esta función permite almacenar y obtener valores en el almacenamiento local del navegador, utilizando una clave específica.
 *
 * @param {Object} options - Opciones para la función.
 * @param {string} options.key - La clave utilizada para almacenar y obtener el valor en el almacenamiento local.
 * @param {*} options.initialValue - El valor inicial si no hay ningún valor almacenado con la clave especificada.
 * @returns {Array} - Un arreglo con dos elementos: el valor almacenado y una función para establecer un nuevo valor.
 */
export default function useLocalStorage({ key, initialValue }) {
  const [value, setValue] = useState(() => {
    try {
      return JSON.parse(window.localStorage.getItem(key)) || initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      if (typeof value == "function") {
        window.localStorage.setItem(key, JSON.stringify(value()));
      } else {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error(error);
    }
  }, [value]);
  return [value, setValue];
}
