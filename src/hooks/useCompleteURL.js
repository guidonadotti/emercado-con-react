import { useEffect, useState } from "react";

/**
 * Esta función utiliza una URL base y una lista de parámetros adicionales para construir una URL completa.
 *
 * @param {Object} options - Opciones para la función.
 * @param {string[]} options.params - Lista de parámetros adicionales.
 * @returns {Object} - Un objeto que contiene la URL completa generada.
 */
export default function useCompleteURL({ params }) {
  const [completeURL, setCompleteURL] = useState("");
  useEffect(() => {
    const url = new URL(params[0]);
    for (let i = 1; i < params.length; i++) {
      const element = params[i];
      url.pathname += element;
    }
    setCompleteURL(url);
  }, [...params]);

  return [completeURL];
}
