import React, { createContext, useEffect, useId, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cantidadCosto, setCantidadCosto] = useState({});
  const [cantidadCostoUSD, setCantidadCostoUSD] = useState({});
  const [tipoDeEnvio, setTipoDeEnvio] = useState(0);
  const [formaDePago, setFormaDePago] = useState("No ha seleccionado.");
  const formID = `form_carrito_enviar_${useId()}`;

  function multiplicarYSumar(obj) {
    let resultado = 0;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const array = obj[key];
        // Verificamos que el array tenga al menos 2 elementos antes de multiplicarlos y sumarlos
        if (array.length >= 2) {
          const producto = array.reduce(
            (acumulador, valor) => acumulador * valor
          );
          resultado += producto;
        }
      }
    }
    return resultado;
  }

  return (
    <CartContext.Provider
      value={{
        formID,
        cantidadCosto,
        setCantidadCosto,
        cantidadCostoUSD,
        setCantidadCostoUSD,
        tipoDeEnvio,
        setTipoDeEnvio,
        multiplicarYSumar,
        formaDePago,
        setFormaDePago,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
