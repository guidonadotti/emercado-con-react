import { createContext, useContext, useEffect, useRef, useState } from "react";
import useInput from "../hooks/useInput";
import { CartContext } from "./CartContext";

export const PagoContext = createContext();

function useFechaVencimiento(initialValue) {
  const [vencimiento, setVencimiento] = useState(initialValue);

  const handleChange = (e) => {
    const inputText = e.target.value;
    const formattedText = inputText.replace(/[^0-9/]/g, ""); // Eliminar caracteres no numéricos ni /

    // Agregar la barra diagonal ("/") después del segundo carácter si aún no está presente
    if (formattedText.length > 2 && formattedText.charAt(2) !== "/") {
      setVencimiento(
        formattedText.substring(0, 2) + "/" + formattedText.substring(2)
      );
    } else {
      setVencimiento(formattedText);
    }
  };
  return { value: vencimiento, onChange: handleChange };
}
function useNumeroTarjeta(initialValue) {
  const [numeroTarjeta, setNumeroTarjeta] = useState(initialValue);
  function handleCardChange(e) {
    const inputText = e.target.value.replace(/\s/g, ""); // Elimina espacios en blanco
    const formattedText = inputText.replace(/(\d{4})/g, "$1 ").trim(); // Agrega espacios cada 4 dígitos

    setNumeroTarjeta(formattedText);
  }
  return {
    value: numeroTarjeta,
    onChange: handleCardChange,
  };
}

export function PagoModalBodyProvider({ children }) {
  const [formaDePagoCheck, setFormaDePagoCheck] = useState("");
  const { setModalValidity } = useContext(CartContext);

  /* Pago con tarjeta */
  const numeroTarjetaInput = { ...useNumeroTarjeta(""), ref: useRef() };
  const numeroSeguridadInput = { ...useInput(""), ref: useRef() };
  const vencimientoInput = { ...useFechaVencimiento(""), ref: useRef() };

  const hooksTarjeta = {
    numeroTarjetaInput,
    numeroSeguridadInput,
    vencimientoInput,
  };

  /* Pago con cuenta bancaria */
  const numeroCuentaBancariaInput = { ...useInput(""), ref: useRef() };
  const hooksBanco = { numeroCuentaBancariaInput };

  useEffect(() => {
    setModalValidity(() => {
      if (!formaDePagoCheck) return false;
      return [
        numeroTarjetaInput,
        numeroSeguridadInput,
        vencimientoInput,
        numeroCuentaBancariaInput,
      ].every((element) => element.ref.current?.validity.valid);
    });
  }, [
    formaDePagoCheck,
    numeroTarjetaInput.value,
    numeroSeguridadInput.value,
    vencimientoInput.value,
    numeroCuentaBancariaInput.value,
  ]);

  return (
    <PagoContext.Provider
      value={{
        formaDePagoCheck,
        setFormaDePagoCheck,

        hooksTarjeta,
        hooksBanco,
      }}
    >
      {children}
    </PagoContext.Provider>
  );
}
